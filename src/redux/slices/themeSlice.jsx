import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../themes";
import getOsTheme from "../../helpers/getOsTheme";
import { darkColor } from "../../constants/styleConstants";


  
  

const themeSlice = createSlice({
    name: "themeSlice",
    initialState: getOsTheme() === "light" ? lightTheme : darkTheme,
    reducers: {
        toggleTheme: (state) => {
            return state.colors.background === darkColor ? lightTheme : darkTheme;
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer