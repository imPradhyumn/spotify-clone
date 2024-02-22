import React from "react";
import Header from "./Header";
import SearchSection from "./SearchSection";

export default function PlaylistDashboard() {
  return (
    <div className="w-full flex flex-col h-full">
      <Header />
      <SearchSection />
    </div>
  );
}
