import { createSlice } from "@reduxjs/toolkit";
import { create, remove, update, current, addColumn, deleteColumn } from "./operations";

const slice = createSlice({
  name: "board",
  initialState: {
    board: {
      _id: null,
      name: null,
      iconName: null,
      backgroundUrl: null,
    },
    columns: [],
    isBoardRefreshing: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.board = action.payload;
        state.columns = [];
        state.isBoardRefreshing = false;
      })
      .addCase(create.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(remove.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(remove.fulfilled, (state) => {
        state.board._id = null;
        state.board.name = null;
        state.board.icon = null;
        state.board.backgroundUrl = null;
        state.columns = [];
        state.isBoardRefreshing = false;
      })
      .addCase(remove.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(update.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(update.fulfilled, (state, action) => {
        state.board = action.payload;
        state.isBoardRefreshing = false;
      })
      .addCase(update.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(current.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.board = action.payload.board;
        state.columns = action.payload.columns;
        state.isBoardRefreshing = false;
      })
      .addCase(current.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(addColumn.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(addColumn.fulfilled, (state, action) => {
        state.columns = action.payload;
        state.isBoardRefreshing = false;
      })
      .addCase(addColumn.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(deleteColumn.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(deleteColumn.fulfilled, (state, action) => {
        state.columns = action.payload;
        state.isBoardRefreshing = false;
      })
      .addCase(deleteColumn.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
  }
})

export default slice.reducer;