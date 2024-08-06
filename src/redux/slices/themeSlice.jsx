import { createSlice } from "@reduxjs/toolkit";
import { darkTheme, lightTheme } from "../../themes";



const themeSlice = createSlice({
    name: "themeSlice",
    initialState: darkTheme,
    reducers: {
        toggleTheme: (state) => {
            return state.colors.background === "#222" ? lightTheme : darkTheme;
        }
    }
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer