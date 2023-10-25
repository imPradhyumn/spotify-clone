"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Header from "../Header";
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
    const res = await axios.get(URL_PREFIX + `/search/${searchQuery}`);
    const { songsList, artistsList, albumsList } = res.data.data;

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
    <React.Fragment>
      <Header>
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
      </Header>
    </React.Fragment>
  );
};

export default SearchBar;
