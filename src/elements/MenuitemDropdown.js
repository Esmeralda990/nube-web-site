/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint react/prop-types: "off" */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ submenus, dropdown, gridCols = 4 }) => {
  return (
    <ul
      className={`dropdown ${
        dropdown ? "show" : ""
      } grid grid-cols-${gridCols} gap-4 p-4  hidden lg:block `}
    >
      {submenus.map((submenu, index) => (
        <li key={index} className="mb-4">
          <h3 className="font-bold text-xl mb-2">{submenu.title}</h3>
          <div className="dropdown-content grid grid-cols-1 md:grid-cols-3 gap-4">
            {submenu.image && (
              <div className="left-section">
                <img src={submenu.image} alt={submenu.title} />
                <p>{submenu.description}</p>
              </div>
            )}
            <div
              className={`right-section ${
                submenu.image ? "md:col-span-2" : "md:col-span-3"
              }`}
            >
              {submenu.links &&
                submenu.links.map((group, groupIndex) => (
                  <div key={groupIndex}>
                    {group.title && (
                      <h4 className="font-bold">{group.title}</h4>
                    )}
                    {group.items &&
                      group.items.map((category, categoryIndex) => (
                        <div
                          key={categoryIndex}
                          className={`${
                            category.title === "Our Products"
                              ? "grid grid-cols-2 gap-4"
                              : "grid grid-cols-1"
                          }`}
                        >
                          {category.title && (
                            <h5 className="font-semibold text-theme-blue text-lg">
                              {category.title}
                            </h5>
                          )}
                          {category.items &&
                            category.items.map((item, itemIndex) => {
                              const isService = group.title === "Our Services";

                              if (isService && item.id) {
                                return (
                                  <Link
                                    key={itemIndex}
                                    to={`/solutions#${item.id}`}
                                    className="block"
                                  >
                                    {item.name}
                                  </Link>
                                );
                              }
                              if (item.link) {
                                return (
                                  <a
                                    key={itemIndex}
                                    href={item.link}
                                    className="block"
                                  >
                                    {item.name}
                                  </a>
                                );
                              }
                              return (
                                <span key={itemIndex} className="block">
                                  {item.name}
                                </span>
                              );
                            })}
                        </div>
                      ))}
                  </div>
                ))}
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

  const isTouchDevice = () => {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  };

  const onMouseEnter = () => {
    if (!isTouchDevice()) setDropdown(true);
  };

  const onMouseLeave = () => {
    if (!isTouchDevice()) setDropdown(false);
  };

  const handleClick = () => setDropdown((prev) => !prev);

  return (
    <li
      className={`menu-items ${items.subMenu ? "hidden lg:block" : ""}`}
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
            onClick={handleClick}
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
