import "../Components/ArtistZone.css";
import React, { useState } from "react";
import artistsMain from "../Assets/ArtistZone/Artists.jpeg";
import postMalone from "../Assets/ArtistZone/PostMalone.jpeg";

function ArtistZone() {
  const CLIENT_ID = "23898b37e61445eb834e6bf74f986dbe";
  const REDIRECT_URI = "http://localhost:3000/artist-auth";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [showCaption, setShowCaption] = useState(false);

  return (
    <div className="ArtistZone">
      <h1>Explore new ideas...</h1>
      <div className="ArtistZone-opening">
        <img className="Artists" src={artistsMain} alt="Artist" />
        <div className="textOverlay">
          <h2>Artist Zone</h2>
          <p>There is power in music.</p>
          <h3>Without music our lives would be very boring!</h3>
        </div>

        <h2>Featured Artist:</h2>
        {/*<p>
          Music artists possess immense power through their ability to evoke
          emotions, inspire individuals, shape cultures, build communities, and
          promote representation. Their compositions and performances have a
          profound impact, touching hearts and minds, influencing social and
          political discourse, and providing a platform for marginalized voices.
          With their artistry, they create connections, uplift spirits, and
          contribute to the collective human experience, making music artists a
          vital force in society.
        </p>*/}
        <div className="FeaturedArtists">
          <div>
            <img
              className="PostMalone"
              src={postMalone}
              alt="PostMalone"
              onMouseEnter={() => setShowCaption(true)}
              onMouseLeave={() => setShowCaption(false)}
            />
            {showCaption && <div className="caption">Post Malone</div>}
          </div>
        </div>
      </div>

      <div>
        <header className="App-header">
          <h2>Spotify React</h2>
          <a
            href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
          >
            Login to Spotify
          </a>
        </header>
      </div>
    </div>
  );
}

export default ArtistZone;
