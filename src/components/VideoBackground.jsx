import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constans'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store)=>store.movies?.trailerVideo);
  const dispatch = useDispatch();

  const getMovieById = async ()=>{
    const response = await fetch('https://api.themoviedb.org/3/movie/1306368/videos?language=en-US',{
      ...API_OPTIONS,
    });
    const jsonData = await response.json();
    const filterData = jsonData.results.filter((item)=>item.type==="Trailer");
    const trailer = filterData.length ? filterData[0] : jsonData.results[0];
    console.log("trailer",trailer.key)
    dispatch(addTrailerVideo({ trailer }));
   
  }
  useEffect(()=>{
    getMovieById();
  },[]);
  return (
    <div>
      <iframe 
      width="560" 
      height="315" 
      src={`https://www.youtube.com/embed/yeR5bcbRPak?si=${trailerVideo?.key}`} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  )
}

export default VideoBackground