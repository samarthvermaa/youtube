import React from "react";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideMenu from "./SideMenu";

const Body = () => {
  return (
    <div className="p-2 flex">
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default Body;
