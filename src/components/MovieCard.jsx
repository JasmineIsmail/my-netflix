import React from 'react'
import { useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../utils/constants';

const MovieCard = ({posterpath}) => {
  if(!posterpath) return null
  return (
    <div  className='w-24 m-2 shrink-0 object-cover'>
     <img alt="movie card"
      src={IMG_CDN_URL+posterpath} 
     />
    </div>
  )
}

export default MovieCard;