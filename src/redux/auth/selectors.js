export const selectUser = (state) => state.auth.user;

export const selectTheme = (state) => state.auth.user.theme;

export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectisRefreshing = (state) => state.auth.isRefreshing;

export const selectError = (state) => state.auth.error;
