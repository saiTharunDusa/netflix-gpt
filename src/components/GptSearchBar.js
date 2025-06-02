import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovies } from "../utils/gptSearchSlice";
const GptSearchBar = () => {	
	const dispatch = useDispatch();
	const selectedLanguage = useSelector((store) => store.config.lang);

	const GPTSearchText = useRef(null);
	
	const searchMovieTMBD = async (movie) => {
		const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie +'&include_adult=false&language=en-US&page=1', API_OPTIONS);

		const json = await data.json();

		return json.results;
	}


	const handleGptSearchClick = async () => {
		const gptQuery = `You are a movie recommendation engine. Based on the following user query: "${GPTSearchText.current.value}", return all the movie titles that are highly relevant to the query.
	  
	  Requirements:
	  - Only recommend actual movie names (no shows or genres).
	  - If the query includes a person like "SS Rajamouli", return only movies they directed.
	  - Do not include any explanation or numbering.
	  - Format the output as: Movie1, Movie2, Movie3, Movie4, Movie5.....`;
	  
		try {
		  // Call OpenAI API
		  const GPTResults = await openai.chat.completions.create({
			messages: [{ role: 'user', content: gptQuery }],
			model: 'gpt-4.1',
		  });
	  
		  const gptResponse = GPTResults.choices?.[0]?.message?.content;
		  const gptMovies = gptResponse?.split(',').map((movie) => movie.trim()).filter(Boolean);
	  
		  if (!gptMovies || gptMovies.length === 0) {
			console.error("GPT returned no movie names.");
			return;
		  }
	  
		  // TMDB search API for each movie
		  const data = gptMovies.map((movie) => searchMovieTMBD(movie));
		  const tmdbSearchMovieResults = await Promise.all(data);
	  
		  // Dispatch to Redux store
		  dispatch(addGptMovies({ gptMoviesName: gptMovies, gptMovies: tmdbSearchMovieResults }));
		} catch (error) {
		  console.error("Error during GPT search:", error);
		}
	  };
	  
	
  return(
  <div className="pt-[10%] flex justify-center">
		<form className="w-full md:w-1/2 bg-black grid grid-cols-12" onSubmit={(e) => e.preventDefault()}>
			<input type="text" className="p-4 m-4 col-span-8 rounded-lg" placeholder={lang[selectedLanguage].gptSearchPlaceholder}
			ref = {GPTSearchText}/>
			<button className="col-span-4 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearchClick}>{lang[selectedLanguage].search}</button>

		</form>
  </div>);
};

export default GptSearchBar;
