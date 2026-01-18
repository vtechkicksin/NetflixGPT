import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constans";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId)=>{
    const dispatch = useDispatch();

    const getMovieById = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,{
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
}

export default useMovieTrailer;