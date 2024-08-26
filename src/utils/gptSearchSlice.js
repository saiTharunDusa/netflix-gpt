import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gpt",
  initialState: {
    gptSearchView: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.gptSearchView = !state.gptSearchView;
    },
  },
});

export const { toggleGptSearchView } = gptSearchSlice.actions;

export default gptSearchSlice.reducer;
