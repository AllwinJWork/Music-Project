import React from 'react';
import { Link, useMatch,useResolvedPath } from 'react-router-dom';
import './Navbar.css';


 function NavBar (){
    return (
    
    <nav className='nav'>
        <Link to='/about' className='about'>The Author</Link>
        <ul>
           <CustomLink to='/homepage'>Home</CustomLink>
           <CustomLink to='/learning'>Learning Zone</CustomLink>
           <CustomLink to='/inspired'>Be Inspired</CustomLink>
           <CustomLink to='/artist'>Artist Zone</CustomLink>
           <CustomLink to='/donations'>Donations</CustomLink>
           <CustomLink to='/enquries'>Enquries</CustomLink>

        </ul>
    </nav>
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

  export default NavBar;