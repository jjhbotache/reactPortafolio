import { configureStore } from "@reduxjs/toolkit";
import titleInfoToDisplaySlice from "./slices/titleInfoToDisplaySlice";
import menuOpenSlice from "./slices/menuOpenSlice";

const store = configureStore({
  reducer:{
    titleInfoToDisplay: titleInfoToDisplaySlice,
    menuOpen: menuOpenSlice
  }
})

export default store;
