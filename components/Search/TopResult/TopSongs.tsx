"use client";

import React from "react";
import { useSelector } from "react-redux";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { RootState } from "@/redux/store";
import { ISong } from "@/db/models/SongModel";
import { capitalize } from "@/utilities/captitalize";
import { IArtist } from "@/db/models/ArtistModel";
import { useDispatch } from "react-redux";
import { setCurrentSongState } from "@/redux/reducers/currentSongSlice";
import { Dispatch } from "@reduxjs/toolkit";

const renderSongItem = (item: ISong, dispatch: any) => {
  return (
    <div
      key={item.title}
      className="group flex items-center justify-between mb-3 px-2 py-7 h-[3rem] rounded-md hover:bg-search-bg"
    >
      <div
        className="flex gap-x-3"
        onClick={() => {
          dispatch(setCurrentSongState({ title: item.title, url: item.url }));
        }}
      >
        <img
          src="/images/lootera.jpg"
          className="w-[3rem] h-[3rem] object-cover py-1"
          alt="song-logo.jpg"
        />

        <div className="flex flex-col justify-between w-[70%] cursor-pointer max-[1100px]:w-full">
          <h3 className="font-bold line-clamp-1 hover:underline">
            {capitalize(item.title)}
          </h3>

          <p className="text-sm mt-1 line-clamp-1">
            {item?.artists?.map((artist: IArtist) => {
              return (
                <span
                  key={artist.firstName}
                  className="hover:underline"
                >
                  {capitalize(artist.firstName) +
                    " " +
                    capitalize(artist.lastName) +
                    ", "}
                </span>
              );
            })}
          </p>
        </div>
      </div>

      <div className="flex gap-x-3 items-center">
        <span className="text-sm">{item.duration}</span>
        <BiDotsHorizontalRounded
          className="opacity-0 cursor-pointer group-hover:opacity-100"
          size={20}
        />
      </div>
    </div>
  );
};

const TopSongs = () => {
  const songs = useSelector((state: RootState) => state.search.songsList) ?? [];

  const dispatch = useDispatch<Dispatch<typeof setCurrentSongState>>();

  return (
    <div className="max-[1100px]:mt-10 flex-[50%]">
      <h3 className="text-2xl font-bold mb-4">Songs</h3>

      <div className="w-full">
        {songs.map((item: ISong) => {
          return renderSongItem(item, dispatch);
        })}
      </div>
    </div>
  );
};

export default TopSongs;
