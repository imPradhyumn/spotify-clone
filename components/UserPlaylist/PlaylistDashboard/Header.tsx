import React from "react";

export default function Header() {
  return (
    <div className="w-full">
      <div
        className="pt-20
        pb-4 pl-4 flex
        flex-row items-end
        gap-x-4 bg-gradient-to-b
        from-[rgb(80,80,80)] to-[rgb(40,40,40)]"
      >
        <div className="h-[12rem] w-[12rem] border-2">
          <img
            src=""
            alt="Playlist Image"
          />
        </div>
        <div>
          <p>Playlist</p>
          <p
            id="playlist-name"
            className="text-8xl font-bold cursor-pointer"
          >
            My Playlist #1
          </p>
          <p className="mt-3 cursor-pointer hover:underline">
            Pradhyumn Sharma
          </p>
        </div>
      </div>
    </div>
  );
}
