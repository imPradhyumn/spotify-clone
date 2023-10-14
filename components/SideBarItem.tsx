import Link from "next/link";
import React from "react";

import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SideBarItemProps {
  label: string;
  icon: IconType;
  url: string;
  isActive: boolean;
}

const SideBarItem: React.FC<SideBarItemProps> = ({
  label,
  icon: Icon,
  url,
  isActive,
}) => {
  return (
    <Link
      href={url}
      className={twMerge(
        `flex
        h-auto
        items-center
        w-full gap-x-4
        text-md font-medium
        text-neutral-400
        cursor-pointer
        hover:text-white
        transition`,
        isActive && "text-white"
      )}
    >
      <Icon size={26} />
      <h6 className="w-100">{label}</h6>
    </Link>
  );
};

export default SideBarItem;
