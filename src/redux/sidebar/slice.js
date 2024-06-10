import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "sidebar",
  initialState: {
    sideBarIsOpen: false,
  },
  reducers: {
    setSideBarOpen(state) {
      state.sideBarIsOpen = true;
    },
    setSideBarClose(state) {
      state.sideBarIsOpen = false;
    },
  },
});

export const { setSideBarOpen, setSideBarClose } = slice.actions;

export default slice.reducer;
