import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const SideMenu = () => {
  const menus = [
    { name: "Home", icon: "🏠", link: "/" },
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
        <Link key={item.name} to={item.link}>
          <MenuItem name={item.name} icon={item.icon} />
        </Link>
      ))}
    </div>
  ) : (
    <></>
  );
};

export default SideMenu;
