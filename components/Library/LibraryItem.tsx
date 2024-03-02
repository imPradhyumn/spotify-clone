"use client";

import React from "react";
import HeadPhoneLogo from "@/assets/images/headphone-logo.png";
import { useRouter } from "next/navigation";
import { capitalize } from "@/utilities/captitalize";

export enum logoShapes {
  "SQAURE",
  "ROUNDED",
}

interface SideBarProps {
  name: string;
  owner?: string;
  type: string;
  logo?: string;
  logoShape: logoShapes;
}

const LibraryItem: React.FC<SideBarProps> = ({
  name,
  owner = "Pradhyumn Sharma",
  type = "Playlist",
  logo,
  logoShape,
}) => {
  const router = useRouter();

  return (
    <div
      className="p-2 w-full flex flex-row items-center gap-x-3
    cursor-pointer rounded-md
    hover:bg-[rgb(40,40,40)]"
      onClick={() => router.replace(`/playlist/${name}`)}
    >
      <img
        className="border-2 w-12 h-12 rounded-md bg-white"
        src={HeadPhoneLogo.src}
        alt="Logo"
      />

      <div className="flex flex-col">
        <p className="font-bold">{capitalize(name)}</p>
        <p className="text-sm">
          {type}&nbsp;&#x2022;&nbsp;{owner}
        </p>
      </div>
    </div>
  );
};

export default LibraryItem;
