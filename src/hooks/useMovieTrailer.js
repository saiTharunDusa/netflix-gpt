
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addVideoTrailer } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredTrailerVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const filteredTrailer = filteredTrailerVideos.length
      ? filteredTrailerVideos[0]
      : json.results[0];
    dispatch(addVideoTrailer(filteredTrailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
