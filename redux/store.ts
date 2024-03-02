"use client";

import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { playerReducer } from "./reducers/playerSlice";
import { searchReducer } from "./reducers/searchSlice";
import { userPlaylistReducer } from "./reducers/userplaylist";

const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    player: playerReducer,
    userPlaylist: userPlaylistReducer,
  },
  preloadedState: {
    auth: {
      isAuthenticated: false,
    },
    userPlaylist: {
      userPlaylists: [],
    },
  },
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
