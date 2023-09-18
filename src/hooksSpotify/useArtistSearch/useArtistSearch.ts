import React, { useEffect, useState } from "react";
import { Search } from "./Search.types";

const useArtistSearch = (accessToken: string, artistSearch: string) => {
  const [searchResults, setSearchResults] = useState<Search>();
  useEffect(() => {
    if (!accessToken || !artistSearch) return;
    fetch(`https://api.spotify.com/v1/search?q=${artistSearch}&type=artist`, {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => res.json())
      .then((data) => setSearchResults(data));
  }, [accessToken, artistSearch]);
  return searchResults;
};

export default useArtistSearch;
