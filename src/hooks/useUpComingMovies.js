import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpComingMovies } from '../utils/moviesSlice';
import { useEffect } from 'react';
 
 const useUpComingMovies = ()=>{
    const dispatch= useDispatch();
    const upcomingMovies= useSelector(store => store.movies.upcomingMovies);
    const getupComingMovies = async()=>{
    const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json= await data.json();
    dispatch(addUpComingMovies(json.results));
  }

  useEffect(()=>{
   !upcomingMovies && getupComingMovies();
  },[])
 }
 
 export default useUpComingMovies;