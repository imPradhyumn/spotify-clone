import React from "react";
import Tags from "../Tags";
import TopResult from "./TopResult/TopResult";

const SearchResult = () => {
  return (
    <div className="px-6 py-5 bg-search-dashboard">
      <Tags />
      <TopResult />
    </div>
  );
};

export default SearchResult;
