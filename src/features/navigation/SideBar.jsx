import React from "react";
import ProfileImage from "src/assets/profile-image.svg";
import NavItem from "./NavItem";

const SideBar = () => {
  return (
    <div className="h-full md:w-1/5 lg:w-1/4 hidden md:block">
      <div className="user-data flex gap-5 items-center">
        <div className="user-image w-20 h-20 rounded-full overflow-hidden">
          <img src={ProfileImage} alt="profile-img" />
        </div>
        <div className="personal-info">
          <h3 className="user-name font-bold text-xl">Sven Pietsch</h3>
          <p className="company">Innoloft GmbH</p>
        </div>
      </div>
      <nav className="flex flex-col gap-10 mt-10">
        <NavItem route="/" icon={"home-icon.svg"} text={"home"} />
        <NavItem
          route="/product/6781"
          icon={"product-icon.svg"}
          text={"product"}
        />
      </nav>
    </div>
  );
};

export default SideBar;
