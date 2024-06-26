import { configureStore } from "@reduxjs/toolkit";
import titleInfoToDisplaySlice from "./slices/titleInfoToDisplaySlice";

const store = configureStore({
  reducer:{
    titleInfoToDisplay: titleInfoToDisplaySlice,
  }
})

export default store;
