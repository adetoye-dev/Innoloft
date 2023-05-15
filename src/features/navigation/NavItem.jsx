import React from "react";

const NavItem = ({ icon, text }) => {
  return (
    <div className="nav-item flex gap-5 items-center">
      <span className="nav-icon">
        <img src={`/icons/${icon}`} alt={text + "-icon"} />
      </span>
      <span className="nav-text capitalize text-2xl">{text}</span>
    </div>
  );
};

export default NavItem;
