// import "../Components/ArtistZone.css";
import "../Assets/styles/ArtistZonePage.css";
import { useRef, useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import artistsMain from "../Assets/ArtistZone/Artists.jpeg";
import postMalone from "../Assets/ArtistZone/PostMalone.jpeg";
import travisScott from "../Assets/ArtistZone/TravisScott.jpeg";
import mariahCarey from "../Assets/ArtistZone/MariahCarey.jpeg";
import crowd from "../Assets/ArtistZone/Crowd.gif";
import Banner from "../Components/Banner/Banner";
import ImageIcon from "../Components/ImageIcons/ImageIcon";
import ImageIcons from "../Components/ImageIcons/ImageIcons";

const paragraphStyles: React.CSSProperties = {
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  display: " -webkit-box",
};

function ArtistZone() {
  const CLIENT_ID = "23898b37e61445eb834e6bf74f986dbe";
  const REDIRECT_URI = "http://localhost:3000/artist-auth";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="artist-zone-container">
      <Banner
        image={{ alt: "Artist", src: artistsMain }}
        title="Artist Zone"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />
      <div>
        <h2>Featured Artist:</h2>

        {/* <div className="grid">
        <div className="img-wrapper right">
          <img className="blur" src={postMalone} alt="" />
          <div className="content fade">Post Malone</div>
        </div>
        <div className="img-wrapper">
          <img className="zoom blur" src={crowd} alt="" />
          <div className="content fade">Excitement</div>
        </div>
        <div className="img-wrapper">
          <img className="blur" src={travisScott} alt="" />
          <div className="content slide-left">Travis Scott </div>
        </div>
        <div className="img-wrapper">
          <img
            className="blur"
            src="https://bestanimations.com/media/music/1902085999crazy-lightshow-rave-concert-animated-gif-3.gif"
            alt=""
          />
          <div className="content slide-right">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div className="img-wrapper">
          <img
            className="blur"
            src="https://66.media.tumblr.com/c4d067d4792b3f769dbcfca6bddbaa18/cea4598a476774ca-2c/s640x960/efffb85d381623cf802e7352c66024e95c409449.gif"
            alt=""
          />
          <div className="content slide-up">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div className="img-wrapper">
          <img className="blur" src={mariahCarey} alt="MariahCarey" />
          <div className="content slide-down">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div className="img-wrapper">
          <img
            className="gray"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGlnbGMxMXk0b3h3MjhlZ2YzOTVkeWd5MmRyY2ZjZ3A1NXgxbnFoeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1wq4LG6HO8rTsloIPq/giphy.gif"
            alt="PinkGif"
          />
          <div className="content slide-down">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse
            maiores aspernatur explicabo maxime doloremque rem porro ad in
            eveniet error!
          </div>
        </div>
        <div className="img-wrapper">
          <img
            className="gray"
            src="https://c4.wallpaperflare.com/wallpaper/802/445/66/music-wallpaper-preview.jpg"
            alt="Shakira"
          />
          <div className="content slide-down">Shakira </div>
        </div>
      </div> */}
        <ImageIcons />
      </div>
      <div className="artist-zone-info">
        <p style={isOpen ? undefined : paragraphStyles}>
          Music is something we all love and most definitely cannot live
          without. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum is
          a pseudo-Latin text used in web design, typography, layout, and
          printing in place of English to emphasize design elements over
          content. It's also called placeholder or filler text. It's a
          convenient tool for mock-ups. It helps to outline the visual elements
          of a document or presentation, e.g., typography, font, or layout.
          Lorem ipsum is mostly a part of a Latin text by the classical author
          and philosopher Cicero. Its words and letters have been changed by
          addition or removal, so to deliberately render its content
          nonsensical; it's not genuine, correct, or comprehensible Latin
          anymore. While lorem ipsum's still resembles classical Latin, it
          actually has no meaning whatsoever. As Cicero's text doesn't contain
          the letters K, W, or Z, alien to Latin, these, and others are often
          inserted randomly to mimic the typographic appearance of European
          languages, as are digraphs not to be found in the original. In a
          professional context, it often happens that private or corporate
          clients order a publication to be made and presented with the actual
          content still not being ready. Think of a news blog that's filled with
          content hourly on the day of going live. However, reviewers tend to be
          distracted by comprehensible content, say, a random text copied from a
          newspaper or the internet. They are likely to focus on the text,
          disregarding the layout and its elements. Besides, random text risks
          being unintentionally humorous or offensive, an unacceptable risk in
          corporate environments. Lorem ipsum and its many variants have been
          employed since the early 1960s, and quite likely since the sixteenth
          century.
        </p>
        <button onClick={() => setIsOpen(!isOpen)} className="ArtistInfoButton">
          {isOpen ? "read less..." : "read more..."}
        </button>
      </div>
      <div className="artist-zone-info">
        <p style={isOpen ? undefined : paragraphStyles}>
          Music is something we all love and most definitely cannot live
          without. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum is
          a pseudo-Latin text used in web design, typography, layout, and
          printing in place of English to emphasize design elements over
          content. It's also called placeholder or filler text. It's a
          convenient tool for mock-ups. It helps to outline the visual elements
          of a document or presentation, e.g., typography, font, or layout.
          Lorem ipsum is mostly a part of a Latin text by the classical author
          and philosopher Cicero. Its words and letters have been changed by
          addition or removal, so to deliberately render its content
          nonsensical; it's not genuine, correct, or comprehensible Latin
          anymore. While lorem ipsum's still resembles classical Latin, it
          actually has no meaning whatsoever. As Cicero's text doesn't contain
          the letters K, W, or Z, alien to Latin, these, and others are often
          inserted randomly to mimic the typographic appearance of European
          languages, as are digraphs not to be found in the original. In a
          professional context, it often happens that private or corporate
          clients order a publication to be made and presented with the actual
          content still not being ready. Think of a news blog that's filled with
          content hourly on the day of going live. However, reviewers tend to be
          distracted by comprehensible content, say, a random text copied from a
          newspaper or the internet. They are likely to focus on the text,
          disregarding the layout and its elements. Besides, random text risks
          being unintentionally humorous or offensive, an unacceptable risk in
          corporate environments. Lorem ipsum and its many variants have been
          employed since the early 1960s, and quite likely since the sixteenth
          century.
        </p>
        <button>Learn More</button>
      </div>
      <div className="artist-zone-auth-link">
        <h2>Spotify React</h2>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      </div>
    </div>
  );
}

export default ArtistZone;
