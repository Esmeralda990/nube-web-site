/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Herosolutions from "../assets/images/hero/SolutionsHero.png";

export default function HeroSolutions() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 lg:py-32 mb-8 lg:max-w-screen-2xl mt-12">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 lg:text-left">
        <h1 className="text-3xl lg:text-6xl text-theme-blue text-left font-bold leading-tight mb-12 max-w-lg">
          Powering Smart Building Innovation
        </h1>
        <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed">
          We help businesses connect and automate their buildings with scalable,
          data-driven technology. By bridging BMS and IoT, we simplify control,
          improve visibility, and unlock smarter, more sustainable operations.
        </p>
      </div>

      <div className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
        <Fade triggerOnce>
          <img
            className="max-w-full h-auto lg:scale-[1.2]"
            src={Herosolutions}
            alt="Solutions Nube IO"
          />
        </Fade>
      </div>
    </section>
  );
}
