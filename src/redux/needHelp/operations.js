import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const help = createAsyncThunk("help/post", async (data, thunkApi) => {
  try {
    const response = await axios.post("/help", data);
    return response.data;
  } catch (error) {
    const errorMessage =
      error.response && error.response.data
        ? error.response.data.message
        : error.message;
    return thunkApi.rejectWithValue(errorMessage);
  }
});
