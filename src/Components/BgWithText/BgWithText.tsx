import React from 'react';
import './BgWithText.css';

interface BgWithTextProps {
  imageUrl: string;
  text: string;
  heading: string;
}

const BgWithText: React.FC<BgWithTextProps> = ({ imageUrl, text, heading }) => {
  const imageStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="bg-text" style={imageStyle}>
      <h1>{heading}</h1>
      <p>{text}</p>
    </div>
  );
};

export default BgWithText;
