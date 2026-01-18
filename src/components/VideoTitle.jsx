import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[25%] px-20 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='p-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
          <button className='bg-white/100 hover:bg-white/80 text-black p-2 px-10 text-xl rounded-lg'>▶︎ Play</button>
          <button className='mx-2 bg-gray-500 text-black p-2 px-10 text-xl text-white rounded-lg '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle