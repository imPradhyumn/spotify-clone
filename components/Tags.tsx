import React from "react";
import Button from "./Button";

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
    <div className="flex gap-x-4">
      {tags.map((tag) => {
        return (
          <Button
            className="bg-search-bg px-3
            py-2 font-medium
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
