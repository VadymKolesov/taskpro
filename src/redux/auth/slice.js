import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  register,
  login,
  logout,
  current,
  changeTheme,
  updateUser,
  updateAvatar,
  resendEmail,
} from "./operations";

const slice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
      theme: "dark",
      avatarUrl: null,
    },
    token: null,
    isAuth: false,
    isRefreshing: false,
    isLoading: false,
    isSendLoading: false,
    error: null,
    resend: false,
  },
  reducers: {
    setTokenByGoogleAuth(state, action) {
      state.resend = false;
      state.token = action.payload;
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + action.payload;
    },
    setResend(state, action) {
      state.resend = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isRefreshing = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.resend = Date.now();
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
        state.resend = false;
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
        state.resend = false;
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
        state.resend = false;
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
      })
      .addCase(resendEmail.pending, (state) => {
        state.isSendLoading = true;
        state.error = null;
      })
      .addCase(resendEmail.fulfilled, (state) => {
        state.isSendLoading = false;
        state.error = null;
      })
      .addCase(resendEmail.rejected, (state, action) => {
        state.isSendLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  addBoard,
  removeBoard,
  updateBoard,
  setTokenByGoogleAuth,
  setResend,
} = slice.actions;

export default slice.reducer;
