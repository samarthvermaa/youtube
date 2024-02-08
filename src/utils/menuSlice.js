import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { displaySideMenu: false },
  reducers: {
    showMenu: (state) => {
      state.displaySideMenu = true;
    },
    hideMenu: (state) => {
      state.displaySideMenu = false;
    },
    toggleMenu: (state) => {
      state.displaySideMenu = !state.displaySideMenu;
    },
  },
});

export default menuSlice.reducer;
export const { showMenu, hideMenu, toggleMenu } = menuSlice.actions;
