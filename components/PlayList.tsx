import React from "react";
import PlayListItem from "./PlayListItem";

interface PlayListProps {
  children?: React.ReactNode;
  className?: string;
  name: string;
}

const PlayList: React.FC<PlayListProps> = ({ children, className, name }) => {
  return (
    <div>
      <h2 className="text-white font-semibold text-2xl">{name}</h2>

      <div>
        <PlayListItem
          name="Album"
          image="img"
          url="href"
        />
      </div>
    </div>
  );
};

export default PlayList;
