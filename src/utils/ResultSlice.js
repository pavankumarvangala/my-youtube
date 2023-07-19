import { createSlice } from "@reduxjs/toolkit";
const ResultSlice = createSlice({
  name: "result",
  initialState: {
    isSearched: false,
    searchQueryText: "",
  },
  reducers: {
    searchedFor: (state, action) => {
      state.isSearched = true;
      state.searchQueryText = action.payload;
    },
  },
});

export const { searchedFor } = ResultSlice.actions;
export default ResultSlice.reducer;
