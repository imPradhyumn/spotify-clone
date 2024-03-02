import { createSlice } from "@reduxjs/toolkit";

interface IUserPlaylistStae {
  userPlaylists: [];
}

const initialState: IUserPlaylistStae = {
  userPlaylists: [],
};

export const userPlaylistSlice = createSlice({
  name: "user-playlist",
  initialState,
  reducers: {
    setUserPlaylistState(state, action) {
      console.log("Fetched playlists : ", action.payload);
      state.userPlaylists = action.payload;
    },
  },
});

export const { setUserPlaylistState } = userPlaylistSlice.actions;
export const userPlaylistReducer = userPlaylistSlice.reducer;
