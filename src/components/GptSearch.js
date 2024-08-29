import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_PHOTO_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={BG_PHOTO_URL} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
