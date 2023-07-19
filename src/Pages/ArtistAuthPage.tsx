import React, { useState } from "react";
import ArtistSearch from "../Components/ArtistSearch/ArtistSearch";
import useArtistSearch from "../hooks/useArtistSearch/useArtistSearch";
import useRelatedArtists from "../hooks/useRelatedArtists/useRelatedArtists";
import useGetAccessToken from "../hooks/useGetAccessToken/useGetAccessToken";
import ArtistSearchResults from "../Components/ArtistSearch/ArtistSearchResults";

const ArtistAuth = () => {
  const [artistSearch, setArtistSearch] = useState("");
  const [selectedArtistId, setSelecetedArtistId] = useState("");
  const accessToken = useGetAccessToken();
  const searchResults = useArtistSearch(accessToken, artistSearch);
  const artists = useRelatedArtists(accessToken, selectedArtistId);

  const handleSelectArtist = (artistId: string) => {
    setSelecetedArtistId(artistId);
  };

  return (
    <div>
      <ArtistSearch setArtistSearch={setArtistSearch} />

      {searchResults?.artists && (
        <ArtistSearchResults
          artists={searchResults?.artists}
          handleSelectArtist={handleSelectArtist}
        />
      )}
      {artists?.artists.map((artist) => (
        <div>{artist.name}</div>
      ))}
    </div>
  );
};

export default ArtistAuth;
