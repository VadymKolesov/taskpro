import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "column",
  initialState: {
    currentColumn: {
      _id: null,
      name: null,
    },
  },
  reducers: {
    setCurrentColumn(state, action) {
      state.currentColumn._id = action.payload._id;
      state.currentColumn.name = action.payload.name;
    },
    resetCurrentColumn(state) {
      state.currentColumn._id = null;
      state.currentColumn.name = null;
    }
  }
});

export const { setCurrentColumn, resetCurrentColumn} = slice.actions;

export default slice.reducer;