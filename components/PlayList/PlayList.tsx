import React from "react";
import PlayListItem from "./PlayListItem";

interface PlayListProps {
  children?: React.ReactNode;
  className?: string;
  name: string;
}

const PlayList: React.FC<PlayListProps> = ({ children, className, name }) => {
  return (
    <div className="px-6 mb-10">
      <h2 className="text-white font-semibold text-2xl">{name}</h2>
      <div
        className="grid grid-rows-2 gap-y-6 grid-cols-3
        md:grid-cols-4
        md:grid-rows-1
        max-[1200px]:!grid-cols-3
        max-[1200px]:!grid-rows-2
        mt-4"
      >
        <PlayListItem
          name="Album"
          image="img"
          url="href"
        />
        <PlayListItem
          name="Album"
          image="img"
          url="href"
        />
        <PlayListItem
          name="Album"
          image="img"
          url="href"
        />
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
