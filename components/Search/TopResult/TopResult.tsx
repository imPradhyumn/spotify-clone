import React from "react";
import TopResultCard from "./TopResultCard";
import TopSongs from "./TopSongs";

const TopResult = () => {
  return (
    <div className="flex gap-x-9 mt-9 max-[1100px]:flex-col">
      <TopResultCard />
      <TopSongs />
    </div>
  );
};

export default TopResult;
