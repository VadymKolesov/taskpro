export const selectUser = (state) => state.auth.user;

export const selectTheme = (state) => state.auth.user.theme;

export const selectIsAuth = (state) => state.auth.isAuth;

export const selectIsLoading = (state) => state.auth.isLoading;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectError = (state) => state.auth.error;

export const selectRequestedPath = (state) => state.auth.requestedPath;
