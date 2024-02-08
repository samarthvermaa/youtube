import React from "react";
import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  const menus = [
    { name: "Home", icon: "🏠" },
    { name: "Shorts", icon: "🩳" },
    { name: "Subscriptions", icon: "␚" },
    { name: "History", icon: "⟲" },
    { name: "Watch Later", icon: "⟳" },
    { name: "Liked Videos", icon: "👍🏻" },
  ];
  const menuSubscriber = useSelector((state) => state.menu);
  return menuSubscriber.displaySideMenu ? (
    <div>
      {menus.map((item) => (
        <MenuItem key={item.name} name={item.name} icon={item.icon} />
      ))}
    </div>
  ) : (
    <></>
  );
};

export default SideMenu;
