import React from 'react';
import { Link, useMatch,useResolvedPath } from 'react-router-dom';
import './Footer.css';



 function Footer (){
    return (
    
    <footer className='footer'>
        <div>
        <h2>Quick Links</h2>
        <ul>
           <CustomLink to='/homepage'>Home</CustomLink>
           <CustomLink to='/learning'>Learning Zone</CustomLink>
           <CustomLink to='/inspired'>Be Inspired</CustomLink>
        </ul>
        </div>

        <div>
            <h2 className='footer-text'> Get in touch with us.</h2>
            <button>
            <CustomLink to='/enquries'>Enquries</CustomLink>
            </button>
        </div>
        <div>
        <h2 className='footer-text'> A cause worth fighting for.</h2>
            <button>
            <CustomLink to='/donations'>Donate Now</CustomLink>
            </button>
         </div>
    </footer>
    )
};
interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    [key: string]: any; 
  }
  
  const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...props }) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  };
  export default Footer;