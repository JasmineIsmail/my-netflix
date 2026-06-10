import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute top-0 left-0 z-20 text-white pt-18 md:pt-42 pl-12'>
      
        <h1 className='font-bold text-sm md:text-3xl  md:w-1/2 leading-7'>{title}</h1>
        <p className='text-[10px] md:text-lg   pt-2 md:pt-5 md:w-1/3 line-clamp-2 md:line-clamp-none' >{overview}</p>
      
      <div  className='pt-5 '>
        <button className='mx-2 bg-gray-400 px-6 py-1.5 text-lg text-white font-bold rounded-lg'> ▶ Play</button>
        <button  className='mx-2 bg-gray-400 px-6 py-1.5 text-lg text-white rounded-lg font-bold'>ℹ More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle;