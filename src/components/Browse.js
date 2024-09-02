import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useDispatch, useSelector } from "react-redux";
import GptSearch from "./GptSearch";
import {clearMovies} from "../utils/gptSearchSlice"

const Browse = () => {
  useNowPlayingMovies();
  const gptSearchView = useSelector((store) => store.gpt?.gptSearchView);
  const dispatch = useDispatch(null);
  if(!gptSearchView) dispatch(clearMovies());
  return (
    <div>
      <Header />
      {gptSearchView ? (
        <GptSearch />
      ) : (
        <>
          
          <Maincontainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
