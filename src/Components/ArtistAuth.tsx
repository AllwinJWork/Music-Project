import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Artists } from "./Artists/Artists.types";

const ArtistAuth = () => {
  const [accessToken, setToken] = useState("");
  const [artists, setArtists] = useState<Artists>();

  const [searchQuery, setSearchQuery] = useState('')
  const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)   => {
      setSearchQuery(e.target.value)
  }
  useEffect(() => {
    const hashParams = window.location.hash.substr(1);
    const token = new URLSearchParams(hashParams).get("access_token");
    if (!token) return;
    setToken(token);
  }, []);
  useEffect(() => {
    if (!accessToken) return;
    console.log(accessToken);
    fetch(
      "https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg/related-artists",
      { headers: { Authorization: `Bearer ${accessToken}` } }
      
    ).then((res) => res.json()).then((data) => setArtists(data));

  }, [accessToken]);

  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
        <button>Search</button>
      {artists?.artists.map((artist) => (
        <div>{artist.name}</div>
      ))}
    </div>
  );
};

export default ArtistAuth;
