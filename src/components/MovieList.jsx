import React from 'react'
import MovieCard from './MovieCard';
const MovieList = ({title,movies}) => {
     if (!movies || movies.length === 0) return null;

    return (
    <div>
        <h1 className='font-bold  text-white m-1 text-xl pl-4'>{title}</h1>
        <div className='flex overflow-x-scroll no-scrollbar scroll-smooth '>
            {movies.map(movie => (
                <MovieCard key={movie.id} posterpath={movie.poster_path} />
                ))
            }
        </div>
    </div>
  )
}

export default MovieList;