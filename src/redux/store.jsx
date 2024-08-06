import { configureStore } from "@reduxjs/toolkit";
import titleInfoToDisplaySlice from "./slices/titleInfoToDisplaySlice";
import menuOpenSlice from "./slices/menuOpenSlice";
import themeSlice from "./slices/themeSlice";

const store = configureStore({
  reducer:{
    titleInfoToDisplay: titleInfoToDisplaySlice,
    menuOpen: menuOpenSlice,
    theme: themeSlice
  }
})

export default store;
