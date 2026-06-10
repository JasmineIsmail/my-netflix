import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
   const movies= useSelector(store=> store.movies)
   
  return (
    <div className='w-screen relative z-20 -mt-39 md:-mt-48'>
      
        <div className=" pl-3 relative z-30  md:pb-2">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
      </div>
      <div className="bg-black pl-3 -mt-10 pt-10 md:-mt-14 md:pt-14">
      
      <MovieList title={"Popular Movies"} movies= {movies?.popularMovies} />
      <MovieList title={"Top Rated Movies"} movies={movies?.topRatedMovies} />
      <MovieList title={"Up Coming Movies"} movies={movies?.upComingMovies} />
      </div>
    </div>
    
  )
}

export default SecondaryContainer;