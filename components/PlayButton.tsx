import React from "react";
import { IoMdPlay } from "react-icons/io";
import { twMerge } from "tailwind-merge";

const PlayButton = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "hidden right-6 top-[8.5rem] absolute\
        items-center justify-center w-[2.8rem]\
        h-[2.8rem] pl-0.5 bg-spotifyGreen rounded-full\
        group-hover:flex group-hover:animate-animate-playBtn\
        hover:w-[3rem] hover:h-[3rem] transition",
        className
      )}
    >
      <IoMdPlay
        className="text-black"
        size={23}
      />
    </div>
  );
};

export default PlayButton;
