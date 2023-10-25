"use client";

import Dashboard from "@/components/Search/Dashboard";
import SearchBar from "@/components/Search/SearchBar";
import { URL_PREFIX } from "@/constants";
import axios from "axios";
import React, { useEffect } from "react";

const page = () => {
  // Connect to DB as soon as land on search page
  useEffect(() => {
    axios
      .get(URL_PREFIX + "/search")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <React.Fragment>
      <SearchBar />
      <Dashboard />
    </React.Fragment>
  );
};

export default page;
