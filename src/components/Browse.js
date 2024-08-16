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
