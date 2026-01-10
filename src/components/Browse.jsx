import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS, MOVIE_URL } from '../utils/constans';
// import { useDispatch } from 'react-redux';
// import { addNowPlayingMovies } from '../utils/movieSlice';

const Browse = () => {
  // const dispatch = useDispatch()
  // const getNowPlayingMovies = async()=>{
  //   try {
  //   const response = await fetch(MOVIE_URL, API_OPTIONS);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! Status: ${response.status}`);
  //   }
  //   const jsonData = await response.json();
  //   console.log("Movies data 👉", jsonData.results);

  // } catch (error) {
  //   console.error("TMDB API Error ❌", error.message);
  // }
  // }
  const getNowPlayingMovies = async () => {
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(MOVIE_URL, {
      ...API_OPTIONS,
      signal: controller.signal,
    });

    console.log("RESPONSE 👉", response);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("MOVIES ✅", data.results);

  } catch (error) {
    console.error("FETCH ERROR ❌", error.name, error.message);
  }
};

  useEffect(()=>{
    console.log("api call")
    getNowPlayingMovies();
  },[])
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse