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
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [secondLevelSubmenuOpen, setSecondLevelSubmenuOpen] = useState(false);
  const [otherSubmenuOpen, setOtherSubmenuOpen] = useState(false);
  const [thirdLevelSubmenuOpen, setThirdLevelSubmenuOpen] = useState(false);
  const [LoraSubmenuOpen, setLoraSubmenuOpen] = useState(false);
  const [SoftSubmenuOpen, setSoftSubmenuOpen] = useState(false);
  const [ExpanSubmenuOpen, setExpanSubmenuOpen] = useState(false);
  const [ResourceSubmenuOpen, setResourceSubmenuOpen] = useState(false);
  const [SecondResoSubmenuOpen, setSecondResoSubmenuOpen] = useState(false);
  const [ManualSubmenuOpen, setManualSubmenuOpen] = useState(false);
  const [FAQSubmenuOpen, setFAQSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setSubmenuOpen(!submenuOpen);
  };

  const toggleSecondLevelSubmenu = () => {
    setSecondLevelSubmenuOpen((prev) => !prev);
  };

  const toggleOtherSubmenu = () => {
    setOtherSubmenuOpen(!otherSubmenuOpen);
  };

  const toggleThirdLevelSubmenu = () => {
    setThirdLevelSubmenuOpen(!thirdLevelSubmenuOpen);
  };

  const toggleLoraSubmenu = () => {
    setLoraSubmenuOpen(!LoraSubmenuOpen);
  };

  const toggleSoftSubmenu = () => {
    setSoftSubmenuOpen(!SoftSubmenuOpen);
  };

  const toggleExpanSubmenu = () => {
    setExpanSubmenuOpen(!ExpanSubmenuOpen);
  };

  const toggleResourceSubmenu = () => {
    setResourceSubmenuOpen(!ResourceSubmenuOpen);
  };

  const toggleSecondResoSubmenu = () => {
    setSecondResoSubmenuOpen((prev) => !prev);
  };

  const toggleManualSubmenu = () => {
    setManualSubmenuOpen((prev) => !prev);
  };

  const toggleFAQSubmenu = () => {
    setFAQSubmenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-[1000]">
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
              <li className="relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold text-lg"
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
                    <li className="relative">
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold"
                        onClick={toggleSecondLevelSubmenu}
                      >
                        Our Services
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            secondLevelSubmenuOpen ? "transform rotate-180" : ""
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

                      {secondLevelSubmenuOpen && (
                        <ul className="pl-6 mt-2 space-y-2">
                          <li>
                            <a
                              href="/solutions/#Professional"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Professional Services
                            </a>
                          </li>
                          <li>
                            <a
                              href="/solutions/#OEM"
                              className="text-gray-400 block px-6 py-2"
                            >
                              OEM
                            </a>
                          </li>
                          <li>
                            <a
                              href="/solutions/#Hardware"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Hardware
                            </a>
                          </li>
                          <li>
                            <a
                              href="/solutions/#Software"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Software
                            </a>
                          </li>
                          <li>
                            <a
                              href="/connectivity/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Connectivity
                            </a>
                          </li>
                          <li>
                            <a
                              href="/case-study/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              By Case Scenario
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>

              <li className="relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold text-lg"
                  onClick={toggleOtherSubmenu}
                >
                  Products
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      otherSubmenuOpen ? "transform rotate-180" : ""
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

                {otherSubmenuOpen && (
                  <ul className="pl-6 mt-2 space-y-2">
                    <li className="relative">
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold"
                        onClick={toggleThirdLevelSubmenu}
                      >
                        Controllers
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            thirdLevelSubmenuOpen ? "transform rotate-180" : ""
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

                      {thirdLevelSubmenuOpen && (
                        <ul className="pl-6 mt-2 space-y-2">
                          <li>
                            <a
                              href="/rubix-compute/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Rubix Compute
                            </a>
                          </li>
                          <li>
                            <a
                              href="/rubix-io/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Rubix iO 16
                            </a>
                          </li>
                          <li>
                            <a
                              href="/edge/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              CI-EdgeX2
                            </a>
                          </li>
                        </ul>
                      )}
                      <li className="relative">
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold"
                          onClick={toggleLoraSubmenu}
                        >
                          LoRa
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              LoraSubmenuOpen ? "transform rotate-180" : ""
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

                        {LoraSubmenuOpen && (
                          <ul className="pl-6 mt-2 space-y-2">
                            <li>
                              <a
                                href="/lora-environmental-sensor/"
                                className="text-gray-400 block px-6 py-2"
                              >
                                Droplet Indoor Sensor
                              </a>
                            </li>
                            <li>
                              <a
                                href="/lora-asset-monitoring-sensor/"
                                className="text-gray-400 block px-6 py-2"
                              >
                                MicroEdge Asset
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li className="relative">
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold"
                          onClick={toggleSoftSubmenu}
                        >
                          Software
                          <svg
                            className={`w-4 h-4 transition-transform ${
                              SoftSubmenuOpen ? "transform rotate-180" : ""
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

                        {SoftSubmenuOpen && (
                          <ul className="pl-6 mt-2 space-y-2">
                            <li>
                              <a
                                href="/software-rubix-platform/"
                                className="text-gray-400 block px-6 py-2"
                              >
                                Rubix CE
                              </a>
                            </li>
                            <li>
                              <a
                                href="/connectivity/"
                                className="text-gray-400 block px-6 py-2"
                              >
                                Nube iO Cloud
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                    </li>

                    <li className="relative">
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold"
                        onClick={toggleExpanSubmenu}
                      >
                        Expansion Modules
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            ExpanSubmenuOpen ? "transform rotate-180" : ""
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

                      {ExpanSubmenuOpen && (
                        <ul className="pl-6 mt-2 space-y-2">
                          <li>
                            <a
                              href="/rubix-connect-lw/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Rubix Connect
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <a
                  href="/partners/"
                  className="block px-4 py-3 text-theme-blue font-bold text-lg"
                >
                  Partners
                </a>
              </li>
              <li className="relative">
                <button
                  className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold text-lg"
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
                    <li className="relative">
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold"
                        onClick={toggleSecondResoSubmenu}
                      >
                        Case Studies
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            SecondResoSubmenuOpen ? "transform rotate-180" : ""
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

                      {SecondResoSubmenuOpen && (
                        <ul className="pl-6 mt-2 space-y-2">
                          <li>
                            <a
                              href="/case-study1/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Case Studies 1
                            </a>
                          </li>
                          <li>
                            <a
                              href="/case-study2/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Case Studies 2
                            </a>
                          </li>
                          <li>
                            <a
                              href="/case-study3/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Case Studies 3
                            </a>
                          </li>
                          <li>
                            <a
                              href="/case-study4/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Case Studies 5
                            </a>
                          </li>
                          <li>
                            <a
                              href="/case-study5/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Case Studies 5
                            </a>
                          </li>
                          <li>
                            <a
                              href="/case-study6/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              Case Studies 6
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold"
                        onClick={toggleManualSubmenu}
                      >
                        Manuals & Support Articles
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            ManualSubmenuOpen ? "transform rotate-180" : ""
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

                      {ManualSubmenuOpen && (
                        <ul className="pl-6 mt-2 space-y-2">
                          <li>
                            <a
                              href="https://nubeio.github.io/rubix-ce-docs/docs/category/tutorials"
                              className="text-gray-400 block px-6 py-2"
                            >
                              TM&Support
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="relative">
                      <button
                        className="flex items-center justify-between w-full px-4 py-3 text-theme-blue font-bold"
                        onClick={toggleFAQSubmenu}
                      >
                        FAQs
                        <svg
                          className={`w-4 h-4 transition-transform ${
                            FAQSubmenuOpen ? "transform rotate-180" : ""
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

                      {FAQSubmenuOpen && (
                        <ul className="pl-6 mt-2 space-y-2">
                          <li>
                            <a
                              href="/FAQs/"
                              className="text-gray-400 block px-6 py-2"
                            >
                              FAQs
                            </a>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                )}
              </li>
              <div className="flex flex-col space-y-4 p-4">
                <Button
                  href="/get-demo/"
                  type="link"
                  className="w-full px-6 py-3 bg-white text-black border border-theme-teal text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
                >
                  Get a Demo
                </Button>

                <Button
                  href="/contact-us/"
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
