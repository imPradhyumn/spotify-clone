import Header from "@/components/Header";
import Player from "@/components/Player/Player";
import PlayLists from "@/components/PlayList/PlayLists";
import React from "react";

export default function Home() {
  return (
    <div className="h-full w-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto">
      <Header />
      <PlayLists />
    </div>
  );
}
