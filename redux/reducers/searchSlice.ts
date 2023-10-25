"use client";

import { createSlice } from "@reduxjs/toolkit";
import { ISong } from "@/db/models/SongModel";
import { IAlbum } from "@/db/models/AlbumModel";
import { IArtist } from "@/db/models/ArtistModel";

export interface ISearchedDataState {
  songsList: ISong[];
  albumsList: IAlbum[];
  artistsList: IArtist[];
}

const initialState: ISearchedDataState = {
  songsList: [],
  albumsList: [],
  artistsList: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSongsState(state, action) {
      console.log("Slice Songs : ", action.payload);
      state.songsList = action.payload;
    },
    setAlbumsState(state, action) {
      state.albumsList = action.payload;
    },
    setArtistsState(state, action) {
      state.artistsList = action.payload;
    },
  },
});

export const { setSongsState, setAlbumsState, setArtistsState } =
  searchSlice.actions;
export const searchReducer = searchSlice.reducer;
