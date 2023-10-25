import React from "react";
import Tags from "../Tags";
import TopResult from "./TopResult/TopResult";

const Dashboard = () => {
  return (
    <div className="bg-search-dashboard px-6 pt-2">
      <Tags />

      <TopResult />
    </div>
  );
};

export default Dashboard;
