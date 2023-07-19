import React from "react";
import "./Banner.css";

export interface BannerProps {
  title: string;
  introText: string;
  caption: string;
  image: {
    src: string;
    alt: string;
  };
}

const Banner = ({ image, introText, title, caption }: BannerProps) => {
  return (
    <div className="artist-zone-banner">
      <div className="artist-zone-banner-container">
        <img className="artist-zone-image" src={image.src} alt={image.alt} />
        <div className="artist-zone-title-overlay">
          <h2>{title}</h2>
          <p>{introText}</p>
        </div>
        <div className="artist-zone-overlay">
          <h3>{caption}</h3>
        </div>
      </div>
    </div>
  );
};

export default Banner;
