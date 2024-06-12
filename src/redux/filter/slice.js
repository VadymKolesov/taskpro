import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    filterValue: null,
  },
  reducers: {
    changeFilter(state, action) {
      state.filterValue = action.payload;
    },
  },
});

export const { changeFilter } = slice.actions;

export default slice.reducer;
