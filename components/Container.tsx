"use client";

import React, { useEffect } from "react";
import SideBar from "./SideSection/SideBar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Container = ({
  children,
  isLoggedIn,
}: {
  children?: React.ReactNode;
  isLoggedIn?: boolean;
}) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return <div className="flex h-full gap-x-2 p-2">{children}</div>;
};

export default Container;
