import React from "react";
import MainContainer from "./MainContainer";
import SideMenu from "./SideMenu";

const Body = () => {
  return (
    <div className="p-2 flex">
      <SideMenu />
      <MainContainer />
    </div>
  );
};

export default Body;
