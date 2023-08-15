import React from "react";
import "./PageDividers.css"

export interface PageDividerProps {
  image: {
    alt: string;
    src: string;
  };
}

const PageDivider = ({ image }: PageDividerProps) => {
  return (
    <div className="page-divider-container">
        
      <img className="page-divider" src={image.src} alt={image.src} />
   
    </div>
  );
};

export default PageDivider;