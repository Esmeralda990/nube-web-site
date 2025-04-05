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
        <li
          key={index}
          className={`bg-white rounded-md p-6 flex-col ${
            submenu.type === "featured"
              ? "featured col-span-2 grid grid-cols-3 "
              : "flex-col"
          }`}
        >
          {submenu.type === "featured" ? (
            <>
              <div className="left-section">
                <img
                  src={submenu.image}
                  alt={submenu.image}
                  className="featured-img"
                />
              </div>
              <div className="w-3/4 w- h-48 flex flex-col justify-start content">
                <h4 className="text-3xl font-bold text-left text-theme-blue mb-2">
                  {submenu.title}
                </h4>
                <p className="text-gray-400 font-light text-lg mb-4">
                  {submenu.description}
                </p>
                <a
                  href={submenu.link}
                  className="submenu-link mt-auto font-bold underline"
                >
                  Learn more
                </a>
              </div>
            </>
          ) : (
            <>
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
                                <h5 className="font-bold text-theme-blue text-lg whitespace-nowrap">
                                  {category.title}
                                </h5>
                              )}
                              {category.items &&
                                category.items.map((item) => {
                                  const content = (
                                    <div className="flex items-start">
                                      <span className="flex items-center" />
                                      {item.icon && (
                                        <img
                                          src={item.icon}
                                          alt="icons"
                                          className="mr-4 w-10 h-10 object-contain"
                                        />
                                      )}
                                      <div className="flex flex-col">
                                        <span className="font-bold">
                                          {item.name}
                                        </span>
                                        {item.description && (
                                          <span className="mt-1 text-sm text-gray-500">
                                            {item.description}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  );

                                  if (item.id) {
                                    return (
                                      <Link
                                        key={item.id || item.name}
                                        to={`/solutions#${item.id}`}
                                        className="block  whitespace-nowrap"
                                      >
                                        {content}
                                      </Link>
                                    );
                                  }
                                  if (item.link) {
                                    return (
                                      <a
                                        key={item.id || item.name}
                                        href={item.link}
                                        className="block  whitespace-nowrap"
                                      >
                                        {content}
                                      </a>
                                    );
                                  }
                                  return (
                                    <span
                                      key={item.id || item.name}
                                      className="block"
                                    >
                                      {content}
                                    </span>
                                  );
                                })}
                            </div>
                          ))}
                      </div>
                    ))}
                </div>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  const timerRef = useRef(null);

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
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    if (!isTouchDevice()) setDropdown(true);
  };

  const onMouseLeave = () => {
    if (!isTouchDevice()) {
      timerRef.current = setTimeout(() => {
        setDropdown(false);
      }, 500);
    }
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
