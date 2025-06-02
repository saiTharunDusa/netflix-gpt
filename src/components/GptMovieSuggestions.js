import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store)=> store.gpt);
  const {gptMovies, gptMoviesName} = gpt;
  if(!gptMoviesName) return null;
  return <div className="p-4 m-4 bg-black text-white bg-opacity-90">
  <div>
    {gptMoviesName.map((movieName, index) => (
      <MoviesList
        key={index}
        title={movieName}
        categoryMovies={gptMovies[index]}
      />
    ))}
  </div>
</div>
};

export default GptMovieSuggestions;
