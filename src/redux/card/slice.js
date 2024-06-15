import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "card",
  initialState: {
    currentCard: {
      _id: null,
      title: null,
      description: null,
      deadline: null,
      priority: null,
    },
  },
  reducers: {
    setCurrentCard(state, action) {
      state.currentCard._id = action.payload._id;
      state.currentCard.title = action.payload.title;
      state.currentCard.description = action.payload.description;
      state.currentCard.deadline = action.payload.deadline;
      state.currentCard.priority = action.payload.priority;
    },
    resetCurrentCard(state) {
      state.currentCard._id = null;
      state.currentCard.title = null;
      state.currentCard.description = null;
      state.currentCard.deadline = null;
      state.currentCard.priority = null;
    }
  }
});

export const { setCurrentCard, resetCurrentCard} = slice.actions;

export default slice.reducer;