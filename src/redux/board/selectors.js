import { createSelector } from "@reduxjs/toolkit";
import { selectFilterValue } from "../filter/selectors";

export const selectBoard = (state) => state.board.board;

export const selectColumns = (state) => state.board.columns;

export const selectIsBoardRefreshing = (state) => state.board.isBoardRefreshing;

export const selectColumnsWithFilteredCards = createSelector([selectColumns, selectFilterValue], (columns, filterValue) => {
  if (filterValue === null) {
    return columns;
  }
  return columns.map(column => { return { ...column, cards: column.cards.filter(card => card.priority === filterValue) } });
});