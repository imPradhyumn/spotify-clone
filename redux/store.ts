"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { currentSongReducer } from "./reducers/currentSongSlice";
import { playerReducer } from "./reducers/playerSlice";
import { searchReducer } from "./reducers/searchSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    player: playerReducer,
  },
  preloadedState: {
    auth: {
      isAuthenticated: false,
    },
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
