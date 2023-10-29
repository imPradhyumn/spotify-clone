import React from "react";
import PlayList from "./PlayList";
import axios from "axios";
import { URL_PREFIX } from "@/constants";

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
