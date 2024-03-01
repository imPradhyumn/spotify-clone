import React from "react";
import Tags from "../Tags";
import SearchCard from "./SearchCard";
import TopResult from "./TopResult/TopResult";

const Dashboard = () => {
  const searchCardsTitle: string[] = [
    "podcasts",
    "punjbai",
    "hindi",
    "ghazals",
    "new releases",
    "made for you",
    "english",
    "pop",
  ];

  const backgroundColors: string[] = ["red", "orange", "green"];

  function getRandomColor() {
    return backgroundColors[
      Math.floor(Math.random() * backgroundColors.length)
    ];
  }

  return (
    <div className="bg-search-dashboard px-6 py-5">
      <h1 className="text-xl font-bold mb-5">Browse all</h1>
      <div className="flex gap-4 md:gap-8 flex-wrap">
        {searchCardsTitle.map((title: string, index: number) => {
          return (
            <SearchCard
              key={title}
              bgColor={backgroundColors[index % backgroundColors.length]}
              title={title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
