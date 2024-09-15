
import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Maincontainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div > {/* Adjust these values based on your header height */}
      <div className="relative w-full aspect-video">
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieID={id} />
      </div>
    </div>
  );
};

export default Maincontainer;
