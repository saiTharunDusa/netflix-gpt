<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
  },
});

export default appStore;
=======
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSearchSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
  },
});

export default appStore;
>>>>>>> a4ac331 (implemented GPT search button)
