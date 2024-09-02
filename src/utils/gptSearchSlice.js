import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
    gptMovies: null,
    gptMoviesName: null
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
    addGptMovies: (state, action) => {
      const {gptMoviesName, gptMovies} = action.payload;
      state.gptMovies = gptMovies;
      state.gptMoviesName = gptMoviesName;
    },
    clearMovies : (state, action) => {
      state.gptMovies = null;
      state.gptMoviesName = null;
    }
  },
});

export const { toggleGptSearchView, addGptMovies, clearMovies } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
