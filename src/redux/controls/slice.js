import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "controls",
  initialState: {
    sideBarIsOpen: false,
    isBackdrop: false,
    isThemeDropDownOpen: false,
    isProfileModalOpen: false,
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
  },
});

export const {
  setThemeDropDownOpen,
  setProfileModalOpen,
  setSideBarOpen,
  setSideBarClose,
} = slice.actions;

export default slice.reducer;
