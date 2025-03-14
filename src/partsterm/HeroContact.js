/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Fade } from "react-awesome-reveal";
import heroContact from "assets/images/hero/portfolioHero.png";

export default function HeroContact() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full px-5 flex flex-col mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:w-1/2 lg:mt-6 xl:pl-12 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-theme-blue font-bold leading-tight mb-5">
            Elevate Your Building Management Solutions with Nube iO
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            Welcome to a new era of intelligent building management, where
            efficiency meets innovation. At Nube iO, we strive to empower you
            with the tools and insights necessary to transform your building
            operations. Our solutions are tailored to meet the diverse needs of
            industry professionals, guiding you toward smarter, data-driven
            decision-making that enhances both performance and sustainability.
          </p>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce />
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12 mt-12 lg:ml-32">
        <Fade direction="up" triggerOnce>
          <img src={heroContact} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
