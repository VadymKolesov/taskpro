import { createSlice } from "@reduxjs/toolkit";
import {
  register,
  login,
  logout,
  current,
  changeTheme,
  updateUser,
  updateAvatar,
} from "./operations";

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
    isAuth: false,
    isRefreshing: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    setTokenByGoogleAuth(state, action) {
      state.token = action.payload;
    },
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
        state.isAuth = false;
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
        state.isAuth = true;
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
        state.isAuth = false;
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
        state.isAuth = false;
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
        state.isAuth = true;
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
        state.isAuth = false;
        state.isRefreshing = false;
        state.error = action.payload;
      })
      .addCase(changeTheme.pending, (state) => {
        state.error = null;
      })
      .addCase(changeTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
        state.user.avatarUrl = action.payload.avatarUrl;
        state.error = null;
      })
      .addCase(changeTheme.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAvatar.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.user.avatarUrl = action.payload.avatarUrl;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(updateAvatar.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addBoard, removeBoard, updateBoard, setTokenByGoogleAuth } =
  slice.actions;

export default slice.reducer;
