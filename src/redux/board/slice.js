import { createSlice } from "@reduxjs/toolkit";
import { create, remove, update, current, addColumn, deleteColumn, updateColumn, addCard, removeCard, updateCard, moveCard } from "./operations";

const slice = createSlice({
  name: "board",
  initialState: {
    board: {
      _id: null,
      name: null,
      iconName: null,
      backgroundName: null,
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
        state.board._id = action.payload._id;
        state.board.name = action.payload.name;
        state.board.iconName = action.payload.iconName;
        state.board.backgroundName = action.payload.backgroundName;
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
      .addCase(updateColumn.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(updateColumn.fulfilled, (state, action) => {
        state.columns = action.payload;
        state.isBoardRefreshing = false;
      })
      .addCase(updateColumn.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(addCard.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(addCard.fulfilled, (state, action) => {
        state.columns = action.payload;
        state.isBoardRefreshing = false;
      })
      .addCase(addCard.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(removeCard.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(removeCard.fulfilled, (state, action) => {
        state.columns = action.payload;
        state.isBoardRefreshing = false;
      })
      .addCase(removeCard.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(updateCard.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.columns = action.payload;
        state.isBoardRefreshing = false;
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
      .addCase(moveCard.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(moveCard.fulfilled, (state, action) => {
        state.columns = action.payload;
        state.isBoardRefreshing = false;
      })
      .addCase(moveCard.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      })
  },
  reducers: {
    clearBoard(state) {
      console.log("clear");
      state.board._id = null;
      state.board.name = null;
      state.board.iconName = null;
      state.board.backgroundUrl = null;
      state.columns = [];
      state.isBoardRefreshing = false;
      state.error = null;
    }
  }
})

export const { clearBoard } = slice.actions;

export default slice.reducer;