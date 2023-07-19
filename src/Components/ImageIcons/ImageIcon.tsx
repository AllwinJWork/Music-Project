import React from "react";
import "./ImageIcons.css"

export interface ImageIconProps {
  text: string;
  image: {
    alt: string;
    src: string;
  };
}

const ImageIcon = ({ image, text }: ImageIconProps) => {
  return (
    <div className="image-icon-container">
      <img className="blur" src={image.src} alt={image.src} />
      <div className="image-icon-content">{text}</div>
    </div>
  );
};

export default ImageIcon;
