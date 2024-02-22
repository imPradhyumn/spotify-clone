import Button from "@/components/common/Button";
import React from "react";
import LibraryItem from "../LibraryItem";
import UserPlaylists from "./UserPlaylists";
import { logoShapes } from "../LibraryItem";

export default function UserLibrary() {
  return (
    <div>
      <Button
        className="bg-search-bg px-3
            py-1 font-medium
            text-sm text-white
            focus:bg-white
            focus:text-black
            hover:opacity-100
            hover:bg-opacity-80"
      >
        Playlists
      </Button>
      <Button
        className="bg-search-bg px-3 ml-3
            mb-3 py-1 font-medium
            text-sm text-white
            focus:bg-white
            focus:text-black
            hover:opacity-100
            hover:bg-opacity-80"
      >
        Artists
      </Button>
      <LibraryItem
        name="Liked Songs"
        type="Playlist"
        logoShape={logoShapes.SQAURE}
      />
      <UserPlaylists />
    </div>
  );
}
