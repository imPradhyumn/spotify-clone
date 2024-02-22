"use client";

import React from "react";
import Button from "@/components/common/Button";
import PlayButton from "@/components/common/PlayButton";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { capitalize } from "@/utilities/captitalize";

const TopResultCard = () => {
  const artistsList =
    useSelector((state: RootState) => state.search.artistsList) ?? [];

  const topArtist = artistsList[0] ?? {
    name: "Unknown",
  };

  return (
    <div className="group relative w-full max-w-md flex-[50%] cursor-pointer">
      <h3 className="text-2xl font-bold mb-4">Top result</h3>

      <div className="w-full rounded-lg bg-search-card">
        <div className="p-6">
          <div className="w-[6rem] h-[6rem] rounded-full">
            <img
              src={"/images/lootera.jpg"}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-3xl tail tracking-wide font-bold mt-8">
            {capitalize(topArtist?.name)}
          </h3>
          <Button className="text-white bg-[rgba(19,19,19)] py-1 px-2 mt-4 text-sm hover:bg-opacity-90 hover:opacity-100">
            Artist
          </Button>
        </div>
      </div>

      <PlayButton className="top-[15rem]" />
    </div>
  );
};

export default TopResultCard;
