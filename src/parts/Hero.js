/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React from "react";
import { Fade } from "react-awesome-reveal";
import bgImg from "../assets/images/ImgFooter/Fondo_Hom.svg";

export default function HeroAbout() {
  return (
    <section className="relative text-center flex justify-center items-center mt-">
      <div className="absolute inset-0 z-0 overflow-hidden rounded-3xl max-w-[130rem] w-full mx-auto">
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-white bg-opacity-50" />
      </div>

      <div className="relative z-10 container flex flex-col items-center justify-center text-center">
        <div className="w-full px-5 flex flex-col mb-5 sm:px-12 sm:mt-6 max-w-5xl lg:mt-6 xl:pl-12 xl:mt-20">
          <Fade direction="" triggerOnce>
            <h1 className="text-3xl lg:text-6xl text-theme-blue text-center font-bold leading-tight mb-5 lg:max-w-4xl mt-24">
              Innovating the Future of Smart Building
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
