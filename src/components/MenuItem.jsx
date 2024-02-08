import React from "react";

const MenuItem = ({ name, icon }) => {
  return (
    <div className="px-2 py-2">
      <span className="mr-2">{icon}</span>
      <span>{name}</span>
    </div>
  );
};

export default MenuItem;
