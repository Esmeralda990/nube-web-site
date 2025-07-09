/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint react/prop-types: "off" */
/* eslint-disable max-len */
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar.js";
import BrandIcon from "./BrandIcon.js";
import Button from "../elements/Button/index.js";
import Toggle from "../elements/DarkModeToggle.js";

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [ResourceSubmenuOpen, setResourceSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleResourceSubmenu = () => {
    setResourceSubmenuOpen(!ResourceSubmenuOpen);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-[1000] dark:bg-gray-800 dark:text-white ">
      <div className="nav-area flex justify-between items-center px-6 py-4">
        <div className="logo flex-shrink-0">
          <BrandIcon />
        </div>
        <div className="mr-12">
          <Toggle />
        </div>
        <div className="nav-wrapper flex-1 hidden lg:block">
          <Navbar />
        </div>
        <div className="hidden lg:flex space-x-4 ml-auto">
          <Button
            href="/contact/"
            type="link"
            className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
          >
            Contact
            <ArrowRight className="ml-2 w-4" />
          </Button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="text-theme-blue focus:outline-none dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-8 h-8"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="transition-opacity duration-400 ease-in-out opacity-100">
            <ul className="z-50 flex flex-col text-theme-blue  tracking-widest my-3 absolute bg-white w-full border-b-2 border-gray-300 dark:bg-gray-800 ">
              <li className="relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold text-lg dark:text-white"
                  onClick={toggleSubmenu}
                >
                  Solutions
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      submenuOpen ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {submenuOpen && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <a
                        href="/software/"
                        className="text-gray-400 block px-6 py-2 "
                      >
                        Software
                      </a>
                    </li>
                    <li>
                      <a
                        href="/hardware/"
                        className="text-gray-400 block px-6 py-2"
                      >
                        Hardware
                      </a>
                    </li>
                    <li>
                      <a href="/oem/" className="text-gray-400 block px-6 py-2">
                        OEM
                      </a>
                    </li>
                    <li>
                      <a
                        href="/professional/"
                        className="text-gray-400 block px-6 py-2"
                      >
                        Professional Services
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="/partners/"
                  className="block px-4 py-3 text-theme-blue font-bold text-lg dark:text-white"
                >
                  Partners
                </a>
              </li>
              <li className="relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold text-lg dark:text-white"
                  onClick={toggleResourceSubmenu}
                >
                  Resources
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      ResourceSubmenuOpen ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {ResourceSubmenuOpen && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li>
                      <a
                        href="/cases/"
                        className="text-gray-400 block px-6 py-2"
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://nubeio.github.io/rubix-ce-docs/docs/category/tutorials"
                        className="text-gray-400 block px-6 py-2"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Technical Resources
                      </a>
                    </li>
                    <li>
                      <a
                        href="/faqs/"
                        className="text-gray-400 block px-6 py-2"
                      >
                        FAQs
                      </a>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="/our-story/"
                  className="block px-4 py-3 text-theme-blue font-bold text-lg dark:text-white"
                >
                  Our Story
                </a>
              </li>{" "}
              <div className="flex flex-col space-y-4 p-4">
                <Button
                  href="/contact/"
                  type="link"
                  className="w-full px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-800"
                >
                  Contact
                </Button>
              </div>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header1;
