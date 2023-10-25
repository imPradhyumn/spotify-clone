"use client";

import Dashboard from "@/components/Search/Dashboard";
import SearchBar from "@/components/Search/SearchBar";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <Dashboard />
    </React.Fragment>
  );
};

export default page;
