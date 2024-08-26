<<<<<<< HEAD
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movies);
  if (
    !movies.nowPlayingMovies ||
    !movies.topRatedMovies ||
    !movies.popularMovies ||
    !movies.upcomingMovies
  )
    return;
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MoviesList
          title={"Now Playing"}
          categoryMovies={movies.nowPlayingMovies}
        />
        <MoviesList title={"Popular"} categoryMovies={movies.popularMovies} />
        <MoviesList
          title={"Top Rated"}
          categoryMovies={movies.topRatedMovies}
        />
        <MoviesList title={"Upcoming"} categoryMovies={movies.upcomingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
=======
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const SecondaryContainer = () => {
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const movies = useSelector((store) => store.movies);
  if (
    !movies.nowPlayingMovies ||
    !movies.topRatedMovies ||
    !movies.popularMovies ||
    !movies.upcomingMovies
  )
    return;
  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MoviesList
          title={"Now Playing"}
          categoryMovies={movies.nowPlayingMovies}
        />
        <MoviesList title={"Popular"} categoryMovies={movies.popularMovies} />
        <MoviesList
          title={"Top Rated"}
          categoryMovies={movies.topRatedMovies}
        />
        <MoviesList title={"Upcoming"} categoryMovies={movies.upcomingMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
>>>>>>> a4ac331 (implemented GPT search button)
