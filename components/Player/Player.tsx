"use client";

import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Controller from "./Controller";

const Player = () => {
  const isLoggedIn = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <div className="fixed bottom-0 w-full py-2 bg-black z-[99]">
      <Controller />
    </div>
  );
};

export default Player;
