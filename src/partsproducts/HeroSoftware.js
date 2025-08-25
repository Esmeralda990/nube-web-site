/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import { ArrowRight } from "lucide-react";

import Software from "../assets/images/hero/SoftwareH.svg";
import Softwaredark from "../assets/images/hero/SoftwareHdark.svg";

export default function HeroSoftware() {
  return (
    <>
      <section className="container lg:max-w-screen-xl mx-auto flex flex-col lg:flex-row mt-12 pb-6">
        <div className="w-full lg:w-1/2 sm:pr-2 xl:mt-24 text-left px-8">
          <h1 className="text-4xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5 dark:text-white max-w-xl">
            Rubix CE: Powerful and Intuitive Control
          </h1>
          <p className="font-light text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
            Seamlessly manage your Nube iO devices and building systems from a
            single platform – designed to simplify complex control across any
            building portfolio.
          </p>
          <a
            href="/Contact/"
            type="link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-32 h-14 w-48 md:h-12 items-center text-sm md:text-base
             px-4 py-3 md:px-8 md:py-5 
           bg-theme-teal text-white rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
          >
            Get a Demo
            <ArrowRight className="ml-2 w-4" />
          </a>
        </div>
        <div className="flex flex-grow-0 pt-5 w-full justify-end items-center lg:order-last lg:max-w-xl lg:pb-24 ">
          <Fade triggerOnce>
            <img
              className="max-w-full h-auto object-contain scale-[0.9] block dark:hidden"
              src={Software}
              alt="Rubix CE"
            />
            <img
              className="max-w-full h-auto object-contain scale-[0.9] hidden dark:block"
              src={Softwaredark}
              alt="Rubix CE"
            />
          </Fade>
        </div>
      </section>
    </>
  );
}
