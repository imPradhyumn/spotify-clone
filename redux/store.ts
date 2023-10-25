"use client";

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { currentSongReducer } from "./reducers/currentSongSlice";
import { searchReducer } from "./reducers/searchSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    currentSong: currentSongReducer,
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
