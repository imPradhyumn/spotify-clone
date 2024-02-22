"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface ICurrentSong {
  title: string;
  songSrc: string;
  imgPath: string;
  artists: string[];
}

export interface PlayerState extends ICurrentSong {
  isPlaying: boolean;
  isLoopOn: boolean;
  isShufflenOn: boolean;
}

const initialState: PlayerState = {
  isPlaying: false,
  songSrc: "",
  imgPath: "",
  artists: ["Atif Aslam"],
  isShufflenOn: false,
  isLoopOn: false,
  title: "Main Rang Sharbaton Ka",
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    togglePlayer(state, action) {
      state.isPlaying = action.payload;
    },
    setSongSrc(state, action) {
      state.songSrc = action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
    setImgPath(state, action) {
      state.imgPath = action.payload;
    },
    setArtists(state, action) {
      state.artists = action.payload;
    },
    toggleShuffle(state, action) {
      state.isShufflenOn = action.payload;
    },
    toggleLoop(state, action) {
      state.isLoopOn = action.payload;
    },
  },
});

export const playerActions = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
