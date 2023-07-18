import React from "react";
import "./ImageIcons.css"
import ImageIcon, { ImageIconProps } from "./ImageIcon";
import artistsMain from "../../Assets/ArtistZone/Artists.jpeg";
import postMalone from "../../Assets/ArtistZone/PostMalone.jpeg";
import travisScott from "../../Assets/ArtistZone/TravisScott.jpeg";
import mariahCarey from "../../Assets/ArtistZone/MariahCarey.jpeg";
import crowd from "../../Assets/ArtistZone/Crowd.gif";

const icons = [
  {
    image: {
      src: postMalone,
      alt: "Post Malone",
    },
    text: "Post Malone",
  },

  {
    image: {
      src: travisScott,
      alt: "Travis Scott",
    },
    text: "Travis Scott",
  },
  {
    image: {
      src: mariahCarey,
      alt: "Post Malone",
    },
    text: "Post Malone",
  },


] as ImageIconProps[];

const ImageIcons = () => {
  return (
    <div className="image-icons-container">

      {icons.map((icon, index) => (
        <ImageIcon image={icon.image} text={icon.text} />
      ))}
    </div>
  );
};

export default ImageIcons;
