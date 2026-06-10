import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {API_OPTIONS} from "../utils/constants"
import { addTrailorVideo } from '../utils/moviesSlice';


const useMovieTrailor =(movieId)=>{
     // fetch trailor video update the store
  const dispatch = useDispatch();
  const trailor= useSelector(store => store.movies.trailorVideo)

 const getTrailorVideo= async ()=>{
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
  const json= await data.json();
  const filterVideos= json.results.filter((video)=> video.type==="Trailer")
  const trailorVideo = filterVideos.length ? filterVideos[0] : json.results[0];
  
  dispatch(addTrailorVideo(trailorVideo));
 }
 useEffect(()=>{
   !trailor && getTrailorVideo();
 },[])
}

export default useMovieTrailor;