import React from "react";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div>
      <nav className="flex justify-center items-center pt-7">
        <img src={logo} alt="logo" className="w-20 " />
        <div className="hidden">
          <a href="#">All recipes</a>
          <a href="#">Vegan</a>
          <a href="#">Gluten-Free</a>
          <a href="#">Shop</a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
