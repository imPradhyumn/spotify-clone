import React from "react";
import PlayList from "./PlayList";

interface PlaylistProps {
  children?: React.ReactNode;
  className?: string;
}

const Playlists: React.FC<PlaylistProps> = ({ children }) => {
  return (
    <div className="px-6">
      <PlayList name={"Recently Played"} />
    </div>
  );
};

export default Playlists;
