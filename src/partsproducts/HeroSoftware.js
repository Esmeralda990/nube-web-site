/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import SoftwareGif from "../assets/images/hero/Software.png";

export default function HeroSoftware() {
  return (
    <>
      <section className="hero">
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-24 text-left px-12 ">
          <h1 className="text-6xl sm:text-5xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5">
            Rubix-CE
          </h1>
          <p className="font-light text-xl text-gray-400 leading-relaxed mb-10">
            Desktop, Licence-Free BMS Programming Software. Program the
            Rubix-Compute via the Nube-io cloud or with a direct connection to
            the device via Rubix-Compute. Manage all your buildings for every
            customer from one login.
          </p>
          <Fade direction="up" delay={500} triggerOnce>
            <Button
              href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-ce/"
              type="link"
              className="flex w-38 h-14 md:w-80 md:h-18 items-center 
             font-bold text-sm md:text-lg 
             px-6 py-3 md:px-14 md:py-5 
             text-white bg-theme-teal 
             rounded-lg shadow-2xl 
             hover:bg-dark-theme-blue 
             transition duration-200 "
            >
              Documentation
              <svg
                className="ml-2 w-7 h-7 text-white animate-bounce-x"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Fade>
        </div>
        <div className="flex pt-5 w-full justify-end items-center order-first lg:order-last lg:w-3/4 pb-24 ">
          <Fade direction="" triggerOnce>
            <img
              className="max-w-full h-auto lg:ml-32"
              src={SoftwareGif}
              alt="SoftwareGif"
            />
          </Fade>
        </div>
      </section>
    </>
  );
}
