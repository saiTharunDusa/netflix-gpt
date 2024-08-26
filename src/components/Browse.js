<<<<<<< HEAD
import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Maincontainer />
      <SecondaryContainer />
      {/**
       * Maincontainer
       *  - VideoBackground
       *  - VideoTitle
       *
       * Secondary Container
       *  - MoviesList * n
       *    - Cards * n
       *
       */}
    </div>
  );
};

export default Browse;
=======
import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useNowPlayingMovies();
  const gptSearchView = useSelector((store) => store.gpt?.gptSearchView);
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
>>>>>>> a4ac331 (implemented GPT search button)
