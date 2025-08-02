/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import HeroHardware from "../assets/images/hero/HardwareH.svg";
import HeroHardwareDark from "../assets/images/hero/HardwareHdark.svg";

export default function HeroSolutions() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 lg:py-32 mb-8 lg:max-w-screen-2xl ">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 lg:text-left">
        <h1 className="text-3xl lg:text-6xl text-theme-blue text-left font-bold leading-tight mb-12 dark:text-white">
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
            className="max-w-full h-auto scale-[0.8] block dark:hidden "
            src={HeroHardware}
            alt="Hardware Nube IO"
          />
          <img
            className="max-w-full h-auto scale-[0.8] hidden dark:block"
            src={HeroHardwareDark}
            alt="Hardware Nube IO"
          />
        </Fade>
      </div>
    </section>
  );
}
