"use client";

import React from "react";

const Container = ({ children }: { children?: React.ReactNode }) => {
  return <div className="flex h-full gap-x-2 p-2">{children}</div>;
};

export default Container;
