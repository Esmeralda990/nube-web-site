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

const Header1 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header style={{ position: "relative", zIndex: 1000 }}>
      <div className="nav-area flex justify-between items-center px-6 py-4">
        <div className="logo flex-shrink-0">
          <BrandIcon />
        </div>
        <div className="nav-wrapper flex-1 hidden lg:block">
          <Navbar />
        </div>
        <div className="hidden lg:flex space-x-4 ml-auto">
          <Button
            href="/contact-us/"
            type="link"
            className="flex items-center justify-center px-6 py-3 text-black text-base font-bold rounded-xl transition duration-300 ease-in-out hover:text-theme-teal "
          >
            Contact
          </Button>

          <Button
            href="/get-demo/"
            type="link"
            className="flex items-center justify-center px-6 py-3 bg-white text-black text-base rounded-xl border border-theme-teal text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
          >
            Get Demo
            <ArrowRight className="ml-2 w-4" />
          </Button>
        </div>
        <div className="lg:hidden flex items-center">
          <button
            className="text-theme-blue focus:outline-none"
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
            <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300">
              <Navbar />
              <div className="flex flex-col space-y-4 p-4">
                <Button
                  href="/get-demo/"
                  type="link"
                  className="w-full px-6 py-3 bg-gray-300 text-black text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
                >
                  Get a Demo
                </Button>

                <Button
                  href="/contact-us/"
                  type="link"
                  className="w-full px-6 py-3 bg-teal-600 text-white text-base text-black font-bold rounded-xl transition duration-300 ease-in-out hover:text-theme-teal"
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
