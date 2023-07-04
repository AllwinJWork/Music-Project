/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import SpotifyWebApi from 'spotify-web-api-js';
import './ArtistZone.css';
import Artists from '../Assets/ArtistZone/Artists.jpeg'

function ArtistZone() {
  const CLIENT_ID = "23898b37e61445eb834e6bf74f986dbe";
  const REDIRECT_URI = "http://localhost:3000/artist-auth";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  const [token, setToken] = useState("");

  return (
    <div className="ArtistZone">
      <div className= "ArtistZone-opening">
        <h1>An intro...</h1>
        <p>
          Music artists possess immense power through their ability to evoke
          emotions, inspire individuals, shape cultures, build communities, and
          promote representation. Their compositions and performances have a
          profound impact, touching hearts and minds, influencing social and
          political discourse, and providing a platform for marginalized voices.
          With their artistry, they create connections, uplift spirits, and
          contribute to the collective human experience, making music artists a
          vital force in society.
        </p>
        <img className="Artists" src={Artists} alt="Artist" />



        <div className="FeaturedArtists">
          <p>
            Hi, this is a para{/* need to add the relevent spotify features */}
          </p>
          {/* need to add the relevent spotify features */}
        </div>
      </div>

      <header className="App-header">
        <h2>Spotify React</h2>
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      </header>
    </div>
  );
};

export default ArtistZone;
