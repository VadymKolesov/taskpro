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
      await axios.post(`/columns/${data.id}`, { name: data.name });
      const response = await axios.get(`/boards/${data.id}`);
      return response.data.columns;
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
      await axios.patch(`/columns/${data.columnId}`, { name: data.name });
      const response = await axios.get(`/boards/${data.id}`);
      return response.data.columns;
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
      await axios.delete(`/columns/${data.columnId}`);
      const response = await axios.get(`/boards/${data.id}`);
      return response.data.columns;
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
      await axios.post(`/cards/${data.columnId}`, data.card);
      const response = await axios.get(`/boards/${data.boardId}`);
      return response.data.columns;
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
      await axios.delete(`/cards/${data.cardId}`);
      const response = await axios.get(`/boards/${data.boardId}`);
      return response.data.columns;
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
      await axios.patch(`/cards/${data.cardId}`, data.card);
      const response = await axios.get(`/boards/${data.boardId}`);
      return response.data.columns;
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
      await axios.put(`/cards/${data.cardId}/column`, {
        columnId: data.columnId,
      });
      const response = await axios.get(`/boards/${data.boardId}`);
      return response.data.columns;
    } catch (error) {
      const errorMessage =
        error.response && error.response.data
          ? error.response.data.message
          : error.message;
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
