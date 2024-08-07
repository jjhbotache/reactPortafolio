import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../themes";
import getOsTheme from "../../helpers/getOsTheme";


  
  const currentTheme = getOsTheme();
  console.log(`El tema actual del sistema operativo es: ${currentTheme}`);
  

const themeSlice = createSlice({
    name: "themeSlice",
    initialState: getOsTheme() === "light" ? lightTheme : darkTheme,
    reducers: {
        toggleTheme: (state) => {
            return state.colors.background === "#222" ? lightTheme : darkTheme;
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer