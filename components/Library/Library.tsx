import React from "react";

import { HiPlus } from "react-icons/hi";
import { TbPlaylist } from "react-icons/tb";
import AddPodcasts from "./AddPodcasts";
import CreatePlayList from "./CreatePlayList";

const Library = () => {
  const onClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-4">
          <TbPlaylist
            className="text-neutral-400"
            size={26}
          />
          <h3 className="text-neutral-400 font-medium text-md">Library</h3>
        </div>
        <HiPlus
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
        />
      </div>

      <div className="flex flex-col gap-y-4 px-3 mt-4">
        <AddPodcasts />
        <CreatePlayList />
      </div>
    </div>
  );
};

export default Library;
