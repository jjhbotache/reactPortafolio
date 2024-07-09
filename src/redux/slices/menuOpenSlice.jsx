import { createSlice } from "@reduxjs/toolkit";


const menuOpenSlice = createSlice({
    name: "menuOpen",
    initialState: false,
    reducers: {
        toggleMenu: (state) => {
            return !state
        }
    }
})

export const { toggleMenu } = menuOpenSlice.actions
export default menuOpenSlice.reducer