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
		const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " +
		GPTSearchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

		// make an api call to GPT APIS and get movie results.
		const GPTResults = await openai.chat.completions.create({
			messages: [{ role: 'user', content: gptQuery }],
			model: 'gpt-3.5-turbo',
		});
		  
		const gptMovies = GPTResults.choices?.[0]?.message?.content.split(",");

		// gptMovies contains array of movies. So for each movie in the array, searching in the TMBD Search API.
		const data = gptMovies.map((movie) => searchMovieTMBD(movie));

		// Here, searchMovieTMDB returns a promise. Since it is an async function, it takes some time to resolve the promise.
		// data contains an array of promises. Hence we should resolve all the promises as follows.

		const tmdbSearchMovieResults = await Promise.all(data);
		

		dispatch(addGptMovies({gptMoviesName: gptMovies, gptMovies: tmdbSearchMovieResults}));
	}
	
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
