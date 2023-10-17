"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { IoMdPlay } from "react-icons/io";

interface PlayListItemProps {
  name: string;
  image: string;
  url: string;
}

const PlayListItem: React.FC<PlayListItemProps> = ({ image, name, url }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(url);
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
      h-auto
      p-4
      rounded-lg
      bg-card
      cursor-pointer
      shadow-md
      hover:bg-cardHover
      transition
      "
    >
      <div
        className="
        hidden
        right-6
        top-[8.5rem]
        absolute
        items-center
        justify-center
        w-[2.8rem]
        h-[2.8rem]
        pl-0.5
        bg-spotifyGreen
        rounded-full
        group-hover:flex
        hover:w-[3rem]
        hover:h-[3rem]
        transition"
      >
        <IoMdPlay
          className="text-black"
          size={23}
        />
      </div>
      <div className="flex flex-col gap-y-3 w-[12rem] rounded-lg">
        <img
          src="/images/lootera.jpg"
          alt="album-img"
          className="w-full h-[11rem] rounded-lg object-cover"
        />
        <div>
          <h3 className="text-lg font-bold truncate">Monta Re</h3>
          <p className="text-sm mt-1 tracking-wider line-clamp-2 max-[1200px]:line-clamp-1">
            Arijit Singh, Amitabh Bhattacharya
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayListItem;
