import React from "react";
import "./ImageIcons.css";
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
    text: "Post ",
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
      src: "https://66.media.tumblr.com/c4d067d4792b3f769dbcfca6bddbaa18/cea4598a476774ca-2c/s640x960/efffb85d381623cf802e7352c66024e95c409449.gif",
      alt: "",
    },
    text: "Excitment ",
  },

  {
    image: {
      src: "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGlnbGMxMXk0b3h3MjhlZ2YzOTVkeWd5MmRyY2ZjZ3A1NXgxbnFoeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1wq4LG6HO8rTsloIPq/giphy.gif",
      alt: "hey",
    },
    text: "Vibrant ",
  },

  {
    image: {
      src: "https://c4.wallpaperflare.com/wallpaper/802/445/66/music-wallpaper-preview.jpg",
      alt: "hey",
    },
    text: "Shakira ",
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
