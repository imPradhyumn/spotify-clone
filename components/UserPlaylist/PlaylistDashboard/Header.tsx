import React from "react";
import HeadPhoneLogo from "@/assets/images/headphone-logo.png";
import { capitalize } from "@/utilities/captitalize";

export default function Header({ playlistName }: { playlistName: string }) {
  return (
    <div className="w-full">
      <div
        className="pt-20
        pb-4 pl-4 flex
        flex-row items-end
        gap-x-4 bg-gradient-to-b
        from-emerald-900 to-emerald-800"
      >
        <div className="h-[6rem] w-[6rem] md:h-[12rem] md:w-[12rem] border-2">
          <img
            className="bg-white"
            src={HeadPhoneLogo.src}
            alt="Playlist Image"
          />
        </div>
        <div>
          <p>Playlist</p>
          <p
            id="playlist-name"
            className="text-2xl md:text-8xl font-bold cursor-pointer"
          >
            {capitalize(playlistName)}
          </p>
          <p className="mt-3 cursor-pointer hover:underline">
            Pradhyumn Sharma
          </p>
        </div>
      </div>
    </div>
  );
}
