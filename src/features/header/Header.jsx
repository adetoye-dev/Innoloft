import React from "react";
import Logo from "src/assets/logo.svg";

const Header = ({ mainColor }) => {
  return (
    <header className="w-full py-6" style={{ backgroundColor: mainColor }}>
      <div className="layout-container flex justify-between md:justify-normal">
        <div className="md:w-1/5 lg:w-1/4">
          <div className="logo w-40 sm:w-48">
            <img src={Logo} alt="innoloft-logo w-100" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
