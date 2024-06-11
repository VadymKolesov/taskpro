import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "controls",
  initialState: {
    sideBarIsOpen: false,
    isBackdrop: false,
    isThemeDropDownOpen: false,
    isProfileModalOpen: false,
    isBoardModalOpen: false,
  },
  reducers: {
    setSideBarOpen(state, action) {
      state.sideBarIsOpen = action.payload;
    },
    setThemeDropDownOpen(state, action) {
      state.isThemeDropDownOpen = action.payload;
    },
    setProfileModalOpen(state, action) {
      state.isProfileModalOpen = action.payload;
      state.isBackdrop = action.payload;
    },
    setBoardModalOpen(state, action) {
      state.isBoardModalOpen = action.payload;
      state.isBackdrop = action.payload;
    },
  },
});

export const {
  setThemeDropDownOpen,
  setProfileModalOpen,
  setSideBarOpen,
  setBoardModalOpen,
} = slice.actions;

export default slice.reducer;
