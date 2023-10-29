"use client";

import React from "react";
import { useRouter } from "next/navigation";
import PlayButton from "../common/PlayButton";
import { capitalize } from "@/utilities/captitalize";
import { IArtist } from "@/db/models/ArtistModel";
import Skeleton from "react-loading-skeleton";

interface PlayListItemProps {
  title: string;
  image: string;
  url: string;
  artists: IArtist[];
}

const PlayListCard: React.FC<PlayListItemProps> = ({
  image,
  title = "Unknown",
  url,
  artists,
}) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
  };

  const renderArtistsNames = () => {
    let names: string[] = [];
    let fullName: string = "";
    artists.map((artist: IArtist) => {
      const fullName: string = artist.firstName + " " + artist.lastName;
      names.push(capitalize(fullName));
    });
    return names.join(", ");
  };

  return (
    <div
      className="
      group
      relative
      flex
      item-center
      justify-center
      w-[85%]
      max-w-[15rem]
      min-w-[12rem]
      h-auto
      rounded-lg
      bg-card
      cursor-pointer
      shadow-md
      hover:bg-cardHover
      transition
      "
    >
      <PlayButton />

      <div className="flex flex-col gap-y-3 w-full p-4 rounded-lg">
        <img
          src="/images/lootera.jpg"
          alt="album-img"
          className="w-full h-[11rem] rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg font-bold truncate">{capitalize(title)}</h3>
          <p className="text-sm mt-1 tracking-wider line-clamp-2 max-[1200px]:line-clamp-1">
            {renderArtistsNames()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayListCard;
