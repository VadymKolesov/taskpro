import { createSlice } from "@reduxjs/toolkit";
import { help } from "./operations";

const slice = createSlice({
  name: "help",
  initialState: {
    isSent: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setIsSent(state, action) {
      state.isSent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(help.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(help.fulfilled, (state) => {
        state.isSent = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(help.rejected, (state, action) => {
        state.isSent = false;
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setIsSent } = slice.actions;

export default slice.reducer;
