import React from "react";
import "./ImageIcons.css";
import ImageIcon, { ImageIconProps } from "./ImageIcon";
import postMalone from "../../Assets/ArtistZone/PostMalone.jpeg";
import travisScott from "../../Assets/ArtistZone/TravisScott.jpeg";
import mariahCarey from "../../Assets/ArtistZone/MariahCarey.jpeg";


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
      src: "https://bestanimations.com/media/lights/1012117842paper-lantern-light-festival-gif.gif",
      alt: "hey",
    },
    text: "Shakira ",
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
      src: "https://66.media.tumblr.com/c4d067d4792b3f769dbcfca6bddbaa18/cea4598a476774ca-2c/s640x960/efffb85d381623cf802e7352c66024e95c409449.gif",
      alt: "",
    },
    text: "Excitment ",
  },

  {
    image: {
src: "https://i.gifer.com/XYR4.gif" ,     
alt: "hey",
    },
    text: "Vibrant ",
  },
  {
    image: {
      src: mariahCarey,
      alt: "Post Malone",
    },
    text: "Mariah Carey ",
  },

  
  {
    image: {
      src: "https://bestanimations.com/media/music/1902085999crazy-lightshow-rave-concert-animated-gif-3.gif",
      alt: "Animation Gif Crowd",
    },
      text: "Crowded"
  },
  {
    image: {
      src: "https://c4.wallpaperflare.com/wallpaper/802/445/66/music-wallpaper-preview.jpg",
      alt: "hey",
    },
    text: "Shakira ",
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
