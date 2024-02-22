"use client";

import Button from "@/components/common/Button";
import {
  setAlbumsState,
  setArtistsState,
  setSongsState,
} from "@/redux/reducers/searchSlice";
import { RootState } from "@/redux/store";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const renderSearchedSongs = (song: any) => {
  console.log(song);
  return (
    <div
      className="flex flex-row w-full
  justify-between items-center mt-2 pl-2 pr-10
  h-12 cursor-default hover:bg-[rgb(43,43,43)]"
    >
      <div className="flex flex-row gap-x-4 h-full">
        <img
          src="#"
          className="h-full w-12 border-2"
          alt="song-logo"
        />
        <div>
          <p>Tera hone laga hoon</p>
          <p>Arijit Singh</p>
        </div>
      </div>
      <p className="w-1/4 overflow-ellipsis overflow-hidden whitespace-nowrap">
        Azab prem ki gazab kahani
      </p>
      <Button
        className="bg-transparent px-3 ml-3
          py-1 font-medium border-white border-2
          text-sm text-white
          focus:bg-white
          focus:text-black
          hover:opacity-100
          hover:bg-opacity-80
          hover:scale-110"
      >
        Add
      </Button>
    </div>
  );
};

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  function onEnterPress(e: React.KeyboardEvent) {
    if (e.key == "Enter") fetchSongs();
  }

  const songs = useSelector((state: RootState) => state.search.songsList) ?? [];

  const fetchSongs = async () => {
    const res = await axios.get(
      `http://localhost:8888/song/get/${searchQuery}`
    );

    const songsList = res.data;
    const albumsList: any = [];
    const artistsList: any = [];

    songsList.forEach((song: any) => {
      albumsList.push(song.album);
      artistsList.push(song.artists[0]);
    });

    console.log("hello", artistsList);

    dispatch(setSongsState(songsList));
    dispatch(setAlbumsState(albumsList));
    dispatch(setArtistsState(artistsList));
  };

  return (
    <div
      className="w-full
      px-5 pt-5 h-full
      bg-gradient-to-b
      from-[rgb(32,32,32)] to-[rgb(10,10,10)]"
    >
      <p className="font-bold text-xl">
        Let's find something for your playlist
      </p>
      <input
        className="w-72
        h-10 p-3 mt-4
        mb-3
        outline-none
        border-none
        rounded-md
        "
        type="text"
        name="search-input"
        value={searchQuery}
        onKeyUp={onEnterPress}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for songs or episodes"
      />
      {songs.map((song) => renderSearchedSongs(song))}
    </div>
  );
}
