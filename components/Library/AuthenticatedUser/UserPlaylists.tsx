import React from "react";
import LibraryItem from "../LibraryItem";
import { logoShapes } from "../LibraryItem";

export default function UserPlaylists() {
  return (
    <div>
      <LibraryItem
        name="My Playlist #1"
        type="Playlist"
        logoShape={logoShapes.SQAURE}
      />
      <LibraryItem
        name="My Playlist #2"
        type="Playlist"
        logoShape={logoShapes.SQAURE}
      />
    </div>
  );
}
