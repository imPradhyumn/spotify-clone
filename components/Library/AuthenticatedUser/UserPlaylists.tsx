"use client";

import { XHR_URL } from "@/constants";
import { setUserPlaylistState } from "@/redux/reducers/userplaylist";
import { RootState } from "@/redux/store";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LibraryItem from "../LibraryItem";
import { logoShapes } from "../LibraryItem";

export default function UserPlaylists() {
  const dispatch = useDispatch();
  const userAuthState = useSelector((state: RootState) => state.auth);

  const userPlaylists = useSelector(
    (state: RootState) => state.userPlaylist.userPlaylists
  );

  const fetchUserPlaylists = async () => {
    const res = await axios.get(
      `${XHR_URL}/user/get-playlist/${userAuthState.userUniqueId}`,
      {
        withCredentials: false,
      }
    );
    if (res.data) {
      dispatch(setUserPlaylistState(res.data));
    }
  };

  useEffect(() => {
    if (userAuthState.isAuthenticated) {
      fetchUserPlaylists();
    }
  }, []);

  return (
    <div>
      {userPlaylists.map((playlist: any) => {
        return (
          <LibraryItem
            key={playlist.id}
            name={playlist.name}
            type="Playlist"
            logoShape={logoShapes.SQAURE}
          />
        );
      })}
    </div>
  );
}
