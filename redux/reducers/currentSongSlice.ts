"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ICurrentSongState {
  title: string;
  url: string;
}

const initialState: ICurrentSongState = {
  title: "/songs/main-rang-sharbaton-ka.mp3",
  url: "",
};

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    setCurrentSongState(state, action) {
      state.title = action.payload.title;
      state.url = action.payload.url;
    },
  },
});

export const { setCurrentSongState } = currentSongSlice.actions;
export const currentSongReducer = currentSongSlice.reducer;
