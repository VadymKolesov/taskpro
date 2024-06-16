import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";
import sideBarReducer from "./sidebar/slice";
import filterReducer from "./filter/slice";
import controlReducer from "./controls/slice";
import boardReducer from "./board/slice";
import columnReducer from "./column/slice";
import cardReducer from "./card/slice";
import helpReducer from "./needHelp/slice";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const authPersistReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: authPersistReducer,
    sidebar: sideBarReducer,
    filter: filterReducer,
    controls: controlReducer,
    board: boardReducer,
    column: columnReducer,
    card: cardReducer,
    help: helpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
