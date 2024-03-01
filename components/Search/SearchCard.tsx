import { capitalize } from "@/utilities/captitalize";
import React from "react";

interface SearchCardProps {
  title: string;
  bgColor: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ title, bgColor }) => {
  return (
    <div
      className="w-[6rem] h-[6rem] md:w-[12rem] md:h-[12rem]
      rounded-lg cursor-pointer bg-green-500"
    >
      <h1 className="p-3 font-bold md:text-lg">{capitalize(title)}</h1>
    </div>
  );
};

export default SearchCard;
