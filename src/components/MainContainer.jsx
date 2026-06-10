import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
   const movies= useSelector(store => store.movies?.nowPlayingMovies);
  if (!movies) return
  const mainMovie= movies[0];
  const {original_title,overview,id} = mainMovie;
  return (
    <div  className="relative w-screen h-[56.25vw] md:h-screen overflow-hidden">
       <div className="absolute inset-0 z-10 bg-linear-to-t from-black  via-black/30 to-transparent"></div>
          <VideoBackground movieId={id}/>
          <div className="hidden md:block">
          <VideoTitle title={original_title} overview={overview}/>
          </div>
        </div>
  )
}

export default MainContainer;