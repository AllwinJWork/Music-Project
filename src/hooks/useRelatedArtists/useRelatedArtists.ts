import { useEffect, useState } from "react";
import { Artists } from "./Artists.types";

const useRelatedArtists = (accessToken: string, artistId: string) => {
  const [artists, setArtists] = useState<Artists>();
  useEffect(() => {
    if (!accessToken || !artistId) return;
    fetch(`https://api.spotify.com/v1/artists/${artistId}/related-artists`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, [accessToken, artistId]);
  return artists;
};

export default useRelatedArtists;
