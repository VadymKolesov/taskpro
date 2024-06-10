import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "controls",
  initialState: {
    isThemeDropDownOpen: false,
  },
  reducers: {
    setThemeDropDownOpen(state) {
      state.isThemeDropDownOpen = !state.isThemeDropDownOpen;
    },
  },
});

export const { setThemeDropDownOpen } = slice.actions;

export default slice.reducer;
