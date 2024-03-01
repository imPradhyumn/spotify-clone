import React from "react";
import Button from "./common/Button";

const Tags = () => {
  const tags: string[] = [
    "All",
    "Artists",
    "Songs",
    "Playlists",
    "Albums",
    "Podcasts & Shows",
  ];

  return (
    <div className="flex gap-x-4 flex-wrap gap-y-2">
      {tags.map((tag) => {
        return (
          <Button
            className="bg-search-bg py-1 px-3
            md:py-2 font-medium
            text-sm text-white
            focus:bg-white
            focus:text-black
            hover:opacity-100
            hover:bg-opacity-80"
            key={tag}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};

export default Tags;
