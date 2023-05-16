import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ clickAction, route, icon, text }) => {
  const linkStyles = "nav-item flex gap-5 items-center hover:font-bold";
  return (
    <NavLink
      onClick={clickAction ? clickAction : ""}
      to={route}
      className={({ isActive }) =>
        isActive ? linkStyles + " font-bold" : linkStyles
      }
    >
      <span className="nav-icon">
        <img src={`/icons/${icon}`} alt={text + "-icon"} />
      </span>
      <span className="nav-text capitalize text-2xl">{text}</span>
    </NavLink>
  );
};

export default NavItem;
