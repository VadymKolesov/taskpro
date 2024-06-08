import { createSlice } from "@reduxjs/toolkit";
import { register, login, logout, current } from "./operations";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      theme: null,
      avatarUrl: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.user = {
          name: null,
          email: null,
          theme: null,
          avatarUrl: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.user = {
          name: null,
          email: null,
          theme: null,
          avatarUrl: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
          theme: null,
          avatarUrl: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(current.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(current.rejected, (state, action) => {
        state.user = {
          name: null,
          email: null,
          theme: null,
          avatarUrl: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
