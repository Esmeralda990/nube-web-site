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
      <section className=" mt-12 container lg:max-w-screen-xl mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 sm:pr-2 xl:mt-24 text-left px-8">
          <h1 className="text-4xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5 lg:mt-12">
            Rubix-CE
          </h1>
          <p className="font-light text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
            Desktop, Licence-Free BMS Programming Software. Program the
            Rubix-Compute via the Nube-io cloud or with a direct connection to
            the device via Rubix-Compute. Manage all your buildings for every
            customer from one login.
          </p>
          <Fade direction="up" delay={500} triggerOnce>
            <Button
              href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-ce/"
              type="link"
              className="flex w-36 h-14 md:w-56 md:h-18 items-center 
             text-sm md:text-lg 
             px-4 py-3 md:px-7 md:py-5 
           bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
            >
              Documentation
            </Button>
          </Fade>
        </div>
        <div className="flex flex-grow-0 pt-5 w-full justify-end items-center lg:order-last lg:max-w-3xl pb-24">
          <Fade direction="" triggerOnce>
            <img
              className="max-w-full h-auto md:ml-0 object-contain"
              src={SoftwareGif}
              alt="SoftwareGif"
            />
          </Fade>
        </div>
      </section>
    </>
  );
}
