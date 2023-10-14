"use client";

import React from "react";
import { useRouter } from "next/navigation";

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

  return <div>PlaylistItem</div>;
};

export default PlayListItem;
