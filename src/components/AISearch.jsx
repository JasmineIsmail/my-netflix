import React from 'react'
import SearchBar from './SearchBar';
import MovieSuggestions from './MovieSuggestions';
import { NETFLIX_BANNER } from '../utils/constants';
import Header from './Header';
const AISearch = () => {
  return (
    <div>
       <Header/>
       <div className='relative w-full min-h-screen'>
      <img
          className='fixed inset-0 -z-10 w-full h-full object-cover' 
            src={NETFLIX_BANNER}
            alt="main-image"
      />
      <SearchBar/>
      <MovieSuggestions/>
    </div>
     </div>
  )
}

export default AISearch;