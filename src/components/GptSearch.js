import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { BG_PHOTO_URL } from "../utils/constants";
import { useEffect } from "react";

const GptSearch = () => {
  useEffect(() => {
    const taDum = new Audio('/sounds/netflixSound.mp3');
    taDum.play();
  }, []);
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
