import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "controls",
  initialState: {
    isThemeDropDownOpen: false,
  },
  reducers: {
    setThemeDropDownOpen(state, action) {
      state.isThemeDropDownOpen = action.payload;
    },
  },
});

export const { setThemeDropDownOpen } = slice.actions;

export default slice.reducer;
