import React, { useState } from 'react'
import './ArtistSearch.css'

interface ArtistSearchProps {
  setArtistSearch: (artist: string) => void;
 
}
const ArtistSearch = ({ setArtistSearch}:ArtistSearchProps) => {
    const [searchQuery, setSearchQuery] = useState('')
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)   => {
        setSearchQuery(e.target.value)
    }
    const onSubmitHandler= () => {
        setArtistSearch(searchQuery)
    }
  return (
    <div>
      <input type="text" onChange={onChangeHandler} />
      <button onClick={onSubmitHandler}>Search</button>
    </div>
  );
}

export default ArtistSearch
