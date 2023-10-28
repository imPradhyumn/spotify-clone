import Dashboard from "@/components/Search/Dashboard";
import SearchBar from "@/components/Search/SearchBar";
import Header from "@/components/Header";
import React from "react";
import SideBar from "@/components/SideSection/SideBar";
import Container from "@/components/Container";

const page = () => {
  return (
    <Container>
      <SideBar />
      <div className="w-full">
        <Header>
          <SearchBar />
        </Header>
        <Dashboard />
      </div>
    </Container>
  );
};

export default page;
