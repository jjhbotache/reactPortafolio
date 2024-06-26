import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "titleInfoToDisplay",
  initialState: null,
  reducers: {
    setTitleInfoToDisplay: (state, action) => {
      // set the title info to display
      return action.payload;
    },
  },
});

export const { setTitleInfoToDisplay } = slice.actions;

export default slice.reducer;