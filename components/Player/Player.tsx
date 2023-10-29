"use client";

import React from "react";
import Controller from "./Controller";

const Player = () => {
  return (
    <div className="fixed bottom-0 w-full py-2 bg-black z-[99]">
      <Controller />
    </div>
  );
};

export default Player;
