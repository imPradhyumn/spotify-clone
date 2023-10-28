import Container from "@/components/Container";
import Header from "@/components/Header";
import PlayLists from "@/components/PlayLists/PlayLists";
import SideBar from "@/components/SideSection/SideBar";
import React from "react";

export default function HomeDashboard() {
  return (
    <Container>
      <SideBar />
      <div className="h-full w-full bg-neutral-900 rounded-lg overflow-hidden overflow-y-auto">
        <Header />
        <PlayLists />
      </div>
    </Container>
  );
}
