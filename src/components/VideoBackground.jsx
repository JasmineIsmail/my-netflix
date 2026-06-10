import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailor from '../hooks/useMovieTrailor';


const VideoBackground = ({movieId}) => {
  useMovieTrailor(movieId);
  const trailor = useSelector(store => store.movies?.trailorVideo)
 
  return ( 
    <div className="absolute inset-0 overflow-hidden -z-10 w-full h-screen pointer-events-none select-none">
      <iframe className='w-screen aspect-video scale-150 pointer-events-none'
        src={`https://www.youtube.com/embed/${trailor?.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailor?.key}&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&disablekb=1` }
        title="YouTube video player"  allow="accelerometer; autoplay=1; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture;
         web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground;
