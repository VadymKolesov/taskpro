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
        state.isBoardRefreshing = true;
        state.error = null;
      })
      .addCase(boards.fulfilled, (state, action) => {
        state.boards = action.payload;
        state.isBoardRefreshing = false;
        state.error = null;
      })
      .addCase(boards.rejected, (state, action) => {
        state.boards = [];
        state.isBoardRefreshing = false;
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
        state.boards = state.boards
          .map(board => board._id === action.payload._id ?
            action.payload : board
          );
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
        state.columns.push({...action.payload, cards: []});
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
        state.columns = state.columns
          .filter(column => column._id !== action.payload._id);
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
        state.columns = state.columns
          .map(column => {
            if (column._id === action.payload._id) {
              return({
                ...column,
                name: action.payload.name
              })
            }
            return column;
          });
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
        state.columns
          .find(column => column._id === action.payload.columnId)
          .cards.push(action.payload);
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
        state.columns = state.columns
          .map(column => ({
            ...column,
            cards: column.cards
              .filter(card => card._id !== action.payload._id)
          }));
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
        state.columns = state.columns
          .map(column => {
            if (column._id === action.payload.columnId) {
              return (
                { ...column,
                  cards: column.cards
                    .map(card => card._id === action.payload._id ?
                      action.payload : card)
                })
            }
            return column;
          });
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
        state.columns = state.columns
          .map(column => {
            if (column._id === action.payload.columnId) {
              column.cards.push(action.payload);
              return column;
            } else {
              return (
              { ...column,
                cards: column.cards.filter(card => card._id !== action.payload._id)
              })
            }});
        state.isBoardRefreshing = false;
      })
      .addCase(moveCard.rejected, (state, action) => {
        state.isBoardRefreshing = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
