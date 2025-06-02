import { useState } from "react";
import MovieCard from "./MovieCard";
import { API_OPTIONS } from "../utils/constants";

const MoviesList = ({ categoryMovies, title }) => {
  const [activeTrailerId, setActiveTrailerId] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const handleTrailerClick = async (movieId) => {
    if (activeTrailerId === movieId) {
      setActiveTrailerId(null); 
      return;
    }

    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredTrailerVideos = json.results.filter(
      (video) => video.type === "Trailer"
    );

    const filteredTrailer = filteredTrailerVideos.length
      ? filteredTrailerVideos[0]
      : json.results[0];

    setTrailer(filteredTrailer);
    setActiveTrailerId(movieId);
  };

  if (!categoryMovies) return null;

  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex">
          {categoryMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              posterPath={movie.poster_path}
              activeTrailerId={activeTrailerId}
              trailer={trailer}
              handleTrailerClick={handleTrailerClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
