import { useDispatch } from "react-redux";
import { API_OPTIONS, MOVIE_URL } from "../utils/constans";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const response = await fetch(MOVIE_URL, {
      ...API_OPTIONS,
    });

    // console.log("RESPONSE 👉", response);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    // console.log("MOVIES ✅", data.results);
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    console.log("api call");
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
