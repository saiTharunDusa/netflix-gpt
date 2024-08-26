<<<<<<< HEAD
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default Maincontainer;
=======
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieID={id} />
    </div>
  );
};

export default Maincontainer;
>>>>>>> a4ac331 (implemented GPT search button)
