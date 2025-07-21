/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React from "react";
import { Fade } from "react-awesome-reveal";
import bgImgLight from "../assets/images/ImgFooter/Fondo_Hom.svg";
import bgImgDark from "../assets/images/ImgFooter/Fondo_HomeD.svg";

export default function Hero() {
  return (
    <section className="relative text-center flex justify-center items-center pb-12 ">
      <div className="absolute inset-0 z-0 overflow-hidden max-w-[130rem] w-full mx-auto">
        <img
          src={bgImgLight}
          alt="Light Background"
          className="block dark:hidden w-full h-full object-cover opacity-70"
        />
        <img
          src={bgImgDark}
          alt="Dark Background"
          className="hidden dark:block w-full h-full object-cover opacity-70"
        />
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white dark:to-theme-dark z-10" />
      </div>

      <div className="relative z-10 container flex flex-col items-center justify-center text-center">
        <div className="w-full px-5 flex flex-col mb-5 sm:px-12 sm:mt-6 max-w-5xl lg:mt-6 xl:pl-12 xl:mt-20">
          <Fade direction="" triggerOnce>
            <h1 className="text-3xl lg:text-6xl text-theme-blue text-center font-bold leading-tight mb-5 lg:max-w-4xl mt-24 dark:text-white">
              Innovating the Future of Smart Buildings
            </h1>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p className="font-light text-gray-400 mx-auto text-muted-foreground lg:text-xl lg:mb-24">
              We help businesses connect and automate their buildings with
              scalable, data-driven technology. By bridging BMS and IoT, we
              simplify control, improve visibility, and unlock smarter, more
              sustainable operations.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
