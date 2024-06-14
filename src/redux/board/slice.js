import { createSlice } from "@reduxjs/toolkit";
import {
  boards,
  create,
  remove,
  update,
  current,
  addColumn,
  deleteColumn,
  updateColumn,
  addCard,
  removeCard,
  updateCard,
  moveCard,
} from "./operations";

const slice = createSlice({
  name: "board",
  initialState: {
    boards: [],
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
      .addCase(boards.pending, (state) => {
        state.error = null;
      })
      .addCase(boards.fulfilled, (state, action) => {
        state.boards = action.payload;
        state.error = null;
      })
      .addCase(boards.rejected, (state, action) => {
        state.boards = [];
        state.error = action.payload;
      })
      .addCase(create.pending, (state) => {
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.boards.push(action.payload);
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
      .addCase(remove.fulfilled, (state, action) => {
        state.boards = state.boards.filter(
          (el) => el._id !== action.payload._id
        );
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
        const boardIndex = state.boards.findIndex(
          (el) => el._id === action.payload._id
        );
        state.boards[boardIndex] = {
          ...state.boards[boardIndex],
          ...action.payload,
        };
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
      });
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
    },
  },
});

export const { clearBoard } = slice.actions;

export default slice.reducer;
