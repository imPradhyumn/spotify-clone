import { RootState } from "@/redux/store";
import React, { useState } from "react";

import { HiPlus } from "react-icons/hi";
import { TbPlaylist } from "react-icons/tb";
import { useSelector } from "react-redux";
import AddPodcasts from "./AddPodcasts";
import UserLibrary from "./AuthenticatedUser/UserLibrary";
import CreatePlayList from "./CreatePlayList";

const createNewPlaylistDialog = () => {
  return (
    <div
      className="p-1 absolute w-fit bg-[rgb(40,40,40)]
    right-0 top-40
    left-72 z-[99]
    cursor-default
    text-sm"
    >
      <div className="hover:bg-[rgb(80,80,80)]">
        <h6 className="p-2">Create new playlist</h6>
      </div>
    </div>
  );
};

const Library = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleCreateNewPlaylistDialog = (e: any) => {
    e.stopPropagation();
    setIsDialogOpen((prev) => !prev);
  };

  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

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
          onClick={(e) => toggleCreateNewPlaylistDialog(e)}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
          size={20}
        />
      </div>

      {isDialogOpen ? createNewPlaylistDialog() : null}

      <div className="flex flex-col gap-y-4 px-3 mt-4">
        {isLoggedIn ? (
          <UserLibrary />
        ) : (
          <React.Fragment>
            <AddPodcasts />
            <CreatePlayList />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default Library;
