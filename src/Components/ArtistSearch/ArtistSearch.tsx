import React, { useState } from 'react';
import './ArtistSearch.css';

interface ArtistSearchProps {
  setArtistSearch: (artist: string) => void;
}

const ArtistSearch = ({ setArtistSearch }: ArtistSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const onSubmitHandler = () => {
    setArtistSearch(searchQuery);
  };

  return (
    <div className="artist-search-container">
      <h1 className="title">Artist Inspiration</h1>
      <p className="description">We will help you find new artists.</p>
      <div className="search-bar">
        <input type="text" value={searchQuery} onChange={onChangeHandler} placeholder="Search for an artist" />
        <button onClick={onSubmitHandler}>Search</button>
      </div>
    </div>
  );
};

export default ArtistSearch;
