import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import '../Components/HomePage.css';
import homeBg from '../Components/Assets/crowd-1056764_1920.jpg';
import { Link } from 'react-router-dom';


const MyComponent: React.FC = () => {
  return (
    <div className="container">
    <h1>The Author.</h1>
      <div>
        <img className='homePage' src={homeBg} alt="My Image" />
        <div className="textOverlay">
          <h2>Be inspired</h2>
          <p>There is power in music.</p>
          <h3>Music is the universal language of mankind</h3>
        </div>
      </div>
      <div className="textUnderImage">
        <p>Your musical journey starts here today. Click below to get started right now!</p>
      </div>
    </div>
    
  );
}


export default MyComponent;
