import React, { useState } from "react";
import ArtistSearch from "../Components/ArtistSearch/ArtistSearch";
import useArtistSearch from "../hooks/useArtistSearch/useArtistSearch";
import useRelatedArtists from "../hooks/useRelatedArtists/useRelatedArtists";
import useGetAccessToken from "../hooks/useGetAccessToken/useGetAccessToken";
import ArtistSearchResults from "../Components/ArtistSearch/ArtistSearchResults";
import Banner from "../Components/Banner/Banner";
import {ExpandableTextArea} from "../Components/ExpandableTextArea/ExpandableTextArea";

const ArtistAuth = () => {
  const [artistSearch, setArtistSearch] = useState("");
  const [selectedArtistId, setSelectedArtistId] = useState("");
  const accessToken = useGetAccessToken();
  const searchResults = useArtistSearch(accessToken, artistSearch);
  const artists = useRelatedArtists(accessToken, selectedArtistId);

  const handleSelectArtist = (artistId: string) => {
    setSelectedArtistId(artistId);
  };
  const beInspiredImage="https://images.unsplash.com/photo-1643208589889-4f02359645c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwb3RpZnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60"

  return (
    <div>
      <Banner
        image={{
          alt: "Be Inspired",
          src: beInspiredImage,
        }}
        title="Be Inspired"
        introText="There is power in music"
        caption="Without music, our lives would be very boring!"
      />
     <h1>Give it a try!</h1>
      <div className="artist-zone-info-container">
        <ExpandableTextArea
          content={
            <p>
              Music is something we all love and most definitely cannot live
              without. Music artists have an undeniable influence on society
              that transcends time and borders... Through their artistry, they
              possess the power to ignite emotions, inspire change, and shape
              cultural trends. Music artists often serve as the voice of a
              generation, addressing relevant social and political issues,
              fostering unity, and encouraging empathy among diverse
              communities. Their music can instill hope, challenge the status
              quo, and promote a sense of belonging. Moreover, artists have the
              ability to create iconic personas and aesthetics that permeate
              popular culture, influencing fashion, lifestyle, and even
              language. As a result, their impact on society extends far beyond
              the stage, leaving a lasting impression on the hearts and minds of
              people worldwide.
            </p>
          }
          excert={
            "Use our search engine to find new artists."
          }
          expandable={true}
        />
      </div>

      <div>
        <ArtistSearch setArtistSearch={setArtistSearch} />

        {searchResults?.artists && (
          <ArtistSearchResults
            artists={searchResults?.artists}
            handleSelectArtist={handleSelectArtist}
          />
        )}
        {artists?.artists.map((artist) => (
          <div key={artist.id}>{artist.name}</div>
        ))}
      </div>
    </div>
  );
};

export default ArtistAuth;
