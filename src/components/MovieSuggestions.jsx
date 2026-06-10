import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';

const MovieSuggestions = () => {
  const {searchResult} =  useSelector(store => store.AISearch);
      if(!searchResult) return null;
  return (
    <div className='m-4 p-2  text-white bg-black opacity-80 '>
      <h2 className="text-xl font-bold mb-4"> Recommended Movies </h2>
      <div className='m-2 flex flex-wrap justify-start'>
       {searchResult.map( (movie) =>(
        <div key={movie.id} className='m-2 flex flex-col items-center' >
          <MovieCard  posterpath={movie.poster_path} />
          <h3 className="mt-2 text-sm text-center font-medium line-clamp-2"> {movie.title}</h3>
        </div>
       ))}
      </div>
    </div>
  )
}

export default MovieSuggestions;
