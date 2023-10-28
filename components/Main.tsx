import React from "react";
import SideBar from "./SideSection/SideBar";

const Main = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <SideBar />
      {children}
    </React.Fragment>
  );
};

export default Main;
