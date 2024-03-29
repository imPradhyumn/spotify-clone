"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PlayButton from "../common/PlayButton";
import { capitalize } from "@/utilities/captitalize";
import { IArtist } from "@/db/models/ArtistModel";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "@/redux/reducers/playerSlice";
import { RootState } from "@/redux/store";
import { POSTER_BASE_URL } from "@/constants";

interface PlayListItemProps {
  title: string;
  image: string;
  url: string;
  artists: IArtist[];
}

const renderArtistsNames = (artists: any) => {
  let names: string[] = [];
  artists.map((artist: IArtist) => {
    names.push(capitalize(artist.name));
  });
  return names.join(", ");
};

const PlayListCard: React.FC<PlayListItemProps> = ({
  image,
  title = "Unknown",
  url,
  artists,
}) => {
  const router = useRouter();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const playSong = () => {
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }
    dispatch(playerActions.setSongSrc(url));
  };

  return (
    <div
      className="
      group
      relative
      flex
      item-center
      justify-center
      w-[55%]
      md:w-[85%]
      max-w-[15rem]
      min-w-[10rem]
      h-auto
      rounded-lg
      bg-card
      cursor-pointer
      shadow-md
      hover:bg-cardHover
      transition
      "
      onClick={playSong}
    >
      <PlayButton />

      <div className="flex flex-col gap-y-3 w-full p-4 rounded-lg">
        <img
          src={POSTER_BASE_URL + image}
          alt="album-img"
          className="w-full h-[11rem] rounded-lg object-cover"
          loading="lazy"
        />
        <div>
          <h3 className="text-lg font-bold truncate">{capitalize(title)}</h3>
          <p className="text-sm mt-1 tracking-wider line-clamp-2 max-[1200px]:line-clamp-1">
            {renderArtistsNames(artists)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayListCard;
