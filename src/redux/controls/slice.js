import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "controls",
  initialState: {
    sideBarIsOpen: false,
    isBackdrop: false,
    isThemeDropDownOpen: false,
    isProfileModalOpen: false,
    isBoardModalOpen: false,
    isBoardEdit: false,
    isColumnEdit: false,
    isCardEdit: false,
    isFilterModalOpen: false,
    isAddColumnOpen: false,
    isAddCardOpen: false,
    isProgressOpen: false,
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
    setIsBoardEdit(state, action) {
      state.isBoardEdit = action.payload;
    },
    setIsColumnEdit(state, action) {
      state.isColumnEdit = action.payload;
    },
    setIsCardEdit(state, action) {
      state.isCardEdit = action.payload;
    },
    setIsFilterModalOpen(state, action) {
      state.isFilterModalOpen = action.payload;
      state.isBackdrop = action.payload;
    },
    setIsAddColumnOpen(state, action) {
      state.isAddColumnOpen = action.payload;
      state.isBackdrop = action.payload;
    },
    setIsAddCardOpen(state, action) {
      state.isAddCardOpen = action.payload;
      state.isBackdrop = action.payload;
    },
    setIsProgressOpen(state, action) {
      state.isProgressOpen = action.payload;
      state.isBackdrop = action.payload;
    },
  },
});

export const {
  setThemeDropDownOpen,
  setProfileModalOpen,
  setSideBarOpen,
  setBoardModalOpen,
  setIsBoardEdit,
  setIsColumnEdit,
  setIsCardEdit,
  setIsFilterModalOpen,
  setIsAddColumnOpen,
  setIsAddCardOpen,
  setIsProgressOpen,
} = slice.actions;

export default slice.reducer;
