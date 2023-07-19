import React from 'react'
import { Artists } from '../../hooks/useArtistSearch/Search.types';


export interface ArtistSearchResultsProps { 
    artists: Artists;
    handleSelectArtist: (artistId: string) => void;
}
const ArtistSearchResults = ({artists,handleSelectArtist}:ArtistSearchResultsProps) => {
  return (
    <div className='results-container'>
      {artists.items.map((artist) => (
        <button className='artist-button' onClick={() => handleSelectArtist(artist.id)} key={artist.id}>
          {artist.name}
        </button>
      ))}
    </div>
  )
}

export default ArtistSearchResults
