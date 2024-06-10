import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://taskpro-api-laom.onrender.com/api";

function setAuthHeader(token) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + token;
}

function clearAuthHeader() {
  axios.defaults.headers.common["Authorization"] = "";
}

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const response = await axios.post("/auth/register", data);
      setAuthHeader(response.data.token);
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

export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
  try {
    const response = await axios.post("/auth/login", data);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : error.message;
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : error.message;
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const current = createAsyncThunk(
  "auth/current",
  async (_, thunkApi) => {
    const {
      auth: { token },
    } = thunkApi.getState();

    setAuthHeader(token);
    const response = await axios.get("/auth/current");

    return response.data;
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      return token !== null;
    },
  }
);

export const changeTheme = createAsyncThunk(
  "auth/change",
  async (data, thunkApi) => {
    try {
      const response = await axios.put("/users/theme", data);
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
