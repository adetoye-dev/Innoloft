import React from "react";
import Logo from "src/assets/logo.svg";
import MobileMenu from "../navigation/MobileMenu";

const Header = ({ mainColor }) => {
  return (
    <header className="w-full py-6" style={{ backgroundColor: mainColor }}>
      <div className="layout-container flex justify-between items-center md:justify-normal">
        <div className="md:w-1/5 lg:w-1/4">
          <div className="logo w-40 sm:w-48">
            <img src={Logo} alt="innoloft-logo w-100" />
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
