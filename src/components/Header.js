import React from "react";
import Logo from "../img/y-logo-white.png";

const Header = () => {
  return (
    <div style={{ height: "8rem" }}>
      <img src={Logo} width={45} alt="logo" />
    </div>
  );
};

export default Header;
