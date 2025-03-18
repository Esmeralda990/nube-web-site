/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint react/prop-types: "off" */
/* eslint-disable react/no-array-index-key */
import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({ submenus, dropdown, gridCols = 2 }) => {
  return (
    <ul
      className={`dropdown ${
        dropdown ? "show" : ""
      } grid grid-cols-${gridCols} gap-4 p-4`}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className="mb-4">
          <h3 className="font-bold text-xl mb-2">{submenu.title}</h3>
          <div className="dropdown-content grid grid-cols-2 gap-4">
            <div className="left-section">
              {submenu.image && <img src={submenu.image} alt={submenu.title} />}
              <p>{submenu.description}</p>
            </div>
            <div className="right-section space-y-2">
              {submenu.links ? (
                submenu.links.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    {group.title && (
                      <h4 className="font-bold">{group.title}</h4>
                    )}
                    {group.items ? (
                      group.items.map((link, linkIndex) => (
                        <a
                          key={linkIndex}
                          href={link.link}
                          className="block text-blue-500 hover:text-blue-700"
                        >
                          {link.name}
                        </a>
                      ))
                    ) : (
                      <a href={group.link}>{group.name}</a>
                    )}
                  </div>
                ))
              ) : (
                <a
                  href={submenu.link}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {submenu.linkText || "Manuals And Support Articles"}
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.subMenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className="text-lg font-bold"
          >
            {items.name}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </button>
          <Dropdown
            submenus={items.subMenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <a href={items.link || "#"} className="font-bold p-2">
          {items.name}
        </a>
      )}
    </li>
  );
};

export { MenuItems, Dropdown };
