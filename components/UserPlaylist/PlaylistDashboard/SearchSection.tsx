"use client";

import Button from "@/components/common/Button";
import { POSTER_BASE_URL } from "@/constants";
import {
  setAlbumsState,
  setArtistsState,
  setSongsState,
} from "@/redux/reducers/searchSlice";
import { RootState } from "@/redux/store";
import { capitalize } from "@/utilities/captitalize";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const renderSearchedSongs = (song: any) => {
  // console.log(song);
  return (
    <div
      className="flex justify-between
      md:grid md:grid-cols-3 w-full
      items-center mt-2 pl-2 pr-10
      h-12 cursor-default hover:bg-[rgb(43,43,43)]"
    >
      <div className="flex flex-row gap-x-4 h-full items-center">
        <img
          src={POSTER_BASE_URL + song.posterPath}
          className="w-10 h-10 md:w-12 md:h-full border-2"
          alt="song-logo"
        />

        <p>{capitalize(song.title)}</p>
        {song.artists.map((artist: any) => {
          <p>{capitalize(artist.name)}</p>;
        })}
      </div>
      <p className="w-1/2 overflow-ellipsis overflow-hidden whitespace-nowrap hidden md:block">
        {capitalize(song.album.name)}
      </p>
      <Button
        className="bg-transparent px-3 ml-3 w-fit
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
      `https://spotify-clone-backend-cut9.onrender.com/song/get/${searchQuery}`,
      {
        withCredentials: false,
      }
    );

    const songsList = res.data;
    const albumsList: any = [];
    const artistsList: any = [];

    songsList.forEach((song: any) => {
      albumsList.push(song.album);
      artistsList.push(song.artists[0]);
    });

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
        {"Let's find something for your playlist"}
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
