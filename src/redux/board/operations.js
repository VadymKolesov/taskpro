import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const boards = createAsyncThunk("auth/boards", async (_, thunkApi) => {
  try {
    const response = await axios.get("/boards");
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : error.message;
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const create = createAsyncThunk(
  "board/create",
  async (data, thunkApi) => {
    try {
      const response = await axios.post("/boards", data);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const remove = createAsyncThunk("board/remove", async (id, thunkApi) => {
  try {
    const response = await axios.delete(`/boards/${id}`);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : error.message;
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const update = createAsyncThunk(
  "board/update",
  async (data, thunkApi) => {
    try {
      const response = await axios.patch(`/boards/${data.id}`, data.board);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const current = createAsyncThunk(
  "board/current",
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/boards/${id}`);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const addColumn = createAsyncThunk(
  "board/addColumn",
  async (data, thunkApi) => {
    try {
      const response = await axios.post(`/columns/${data.boardId}`, {
        name: data.name,
      });
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const updateColumn = createAsyncThunk(
  "board/updateColumn",
  async (data, thunkApi) => {
    try {
      const response = await axios.patch(`/columns/${data.columnId}`, {
        name: data.name,
      });
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const updateColumnCards = createAsyncThunk(
  "board/updateColumnCards",
  async (data, thunkApi) => {
    try {
      const response = await axios.put(`/columns/${data.columnId}`, {
        cards: data.cards,
      });
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const deleteColumn = createAsyncThunk(
  "board/deleteColumn",
  async (data, thunkApi) => {
    try {
      const response = await axios.delete(`/columns/${data.columnId}`);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const addCard = createAsyncThunk(
  "board/addCard",
  async (data, thunkApi) => {
    try {
      const response = await axios.post(`/cards/${data.columnId}`, data.card);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const removeCard = createAsyncThunk(
  "board/removeCard",
  async (data, thunkApi) => {
    try {
      const response = await axios.delete(`/cards/${data.cardId}`);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const updateCard = createAsyncThunk(
  "board/updateCard",
  async (data, thunkApi) => {
    try {
      const response = await axios.patch(`/cards/${data.cardId}`, data.card);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const moveCard = createAsyncThunk(
  "board/moveCard",
  async (data, thunkApi) => {
    try {
      const response = await axios.put(`/cards/${data.cardId}/column`, {
        columnId: data.columnId,
      });
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
