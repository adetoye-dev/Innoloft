import { useState } from "react";
import "./MobileMenu.css";
import NavItem from "./NavItem";
import ProfileImage from "src/assets/profile-image.svg";

const MobileMenu = () => {
  const [dataAttributes, setDataAttributes] = useState(false);

  const toggleNav = () => {
    setDataAttributes((prevAttr) => !prevAttr);
  };

  return (
    <nav className="nav md:hidden">
      <div
        className="primary-navigation bg-white"
        data-visible={dataAttributes}
        id="primary-navigation"
      >
        <span onClick={toggleNav} className="nav-icon cancel-btn text-4xl">
          <i className="fas fa-times"></i>
        </span>
        <div className="user-data flex gap-5 items-center">
          <div className="user-image w-20 h-20 rounded-full overflow-hidden">
            <img src={ProfileImage} alt="profile-img" />
          </div>
          <div className="personal-info">
            <h3 className="user-name font-bold text-xl">Sven Pietsch</h3>
            <p className="company">Innoloft GmbH</p>
          </div>
        </div>
        <NavItem
          route="/"
          icon={"home-icon.svg"}
          text={"home"}
          clickAction={toggleNav}
        />
        <NavItem
          route="/product/6781"
          icon={"product-icon.svg"}
          text={"product"}
          clickAction={toggleNav}
        />
      </div>
      <span
        aria-controls="primary-navigation"
        onClick={toggleNav}
        className="nav-icon menu-btn text-white text-2xl flex items-center gap-2"
      >
        <div className="user-image w-10 h-10 rounded-full overflow-hidden">
          <img src={ProfileImage} alt="profile-img" />
        </div>
        <i className="fas fa-angle-down" />
      </span>
    </nav>
  );
};

export default MobileMenu;
