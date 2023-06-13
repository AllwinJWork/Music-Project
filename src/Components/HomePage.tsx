import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import '../Components/HomePage.css';
import homeBg from '../Components/Assets/crowd-1056764_1920.jpg'



const MyComponent: React.FC = () => {
  return (
    <div>
      <h1>Hello</h1>
      <img className='HomePage' src={homeBg} alt="My Image" />
      <div className="textOverlay">
          <h2>Be inspired</h2>
          <p>There is power in music.</p>
        </div>
      </div>
    
  );
}

export default MyComponent;