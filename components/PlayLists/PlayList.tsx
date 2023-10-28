import React from "react";
import PlayListCard from "./PlayListCard";

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
        className="grid grid-rows-2
        grid-cols-2 gap-y-6
        md:grid-cols-4
        md:grid-rows-1
        max-[1200px]:!grid-cols-3
        max-[1200px]:!grid-rows-2
        mt-4"
      >
        <PlayListCard
          name="Album"
          image="img"
          url="href"
        />
        <PlayListCard
          name="Album"
          image="img"
          url="href"
        />
        <PlayListCard
          name="Album"
          image="img"
          url="href"
        />
        <PlayListCard
          name="Album"
          image="img"
          url="href"
        />
      </div>
    </div>
  );
};

export default PlayList;
