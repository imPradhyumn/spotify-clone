import React from "react";
import PlayList from "./PlayList";

interface PlaylistProps {
  children?: React.ReactNode;
  className?: string;
}

const PlayLists = () => {
  return (
    <React.Fragment>
      <PlayList name={"Recently Played"} />
      <PlayList name={"Spotify Playlist"} />
    </React.Fragment>
  );
};

export default PlayLists;
