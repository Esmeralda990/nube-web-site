/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint react/prop-types: "off" */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { menuItemsData } from "../json/MenuItemData.js";
import { MenuItems } from "../elements/MenuitemDropdown.js";

const Navbar = () => {
  const depthLevel = 0;

  return (
    <nav className="main-nav">
      <ul className="menus">
        {menuItemsData.map((menu, index) => (
          <MenuItems items={menu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
