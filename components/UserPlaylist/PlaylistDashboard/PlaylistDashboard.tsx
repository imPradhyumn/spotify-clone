"use client";

import React, { useEffect } from "react";
import Header from "./Header";
import SearchSection from "./SearchSection";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function PlaylistDashboard({
  playlistName,
}: {
  playlistName: string;
}) {
  const router = useRouter();

  const isUserAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  // useEffect(() => {
  //   if (!isUserAuthenticated) {
  //     router.replace("/login");
  //   }
  // }, []);

  // if (!isUserAuthenticated) return <React.Fragment></React.Fragment>;

  return (
    <div className="w-full flex flex-col h-full">
      <Header playlistName={playlistName} />
      <SearchSection />
    </div>
  );
}
