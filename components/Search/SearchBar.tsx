"use client";

import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import {
  setSongsState,
  setAlbumsState,
  setArtistsState,
} from "@/redux/reducers/searchSlice";
import axios from "axios";
import { URL_PREFIX } from "@/constants";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const dispatch = useDispatch();

  const fetchAndStoreData = async () => {
    const res = await axios.get(
      `https://spotify-clone-backend-cut9.onrender.com/song/get/${searchQuery}`
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

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  function onEnterPress(e: React.KeyboardEvent) {
    if (e.key == "Enter") fetchAndStoreData();
  }

  return (
    <div className="focus-within:outline outline-white outline-2 flex items-center gap-x-2 w-5/6 bg-search-bg p-3 ml-2 rounded-full">
      <BiSearch size={22} />
      <input
        className="w-full border-none outline-none bg-transparent text-sm font-medium text-white placeholder-shown:text-search-text"
        type="text"
        id="search-inp"
        name="search"
        value={searchQuery}
        onKeyUp={onEnterPress}
        placeholder="What do you want to listen to?"
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default SearchBar;
