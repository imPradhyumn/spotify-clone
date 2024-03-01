import { capitalize } from "@/utilities/captitalize";
import React from "react";

interface SearchCardProps {
  title: string;
  bgColor: string;
}

const SearchCard: React.FC<SearchCardProps> = ({ title, bgColor }) => {
  return (
    <div
      className={
        "w-[12rem] h-[12rem]  rounded-lg justify-center cursor-pointer" +
        ` bg-${bgColor}-500`
      }
    >
      <h1 className="p-3 font-bold text-lg">{capitalize(title)}</h1>
    </div>
  );
};

export default SearchCard;
