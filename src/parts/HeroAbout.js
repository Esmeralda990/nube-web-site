/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";
import { ArrowRight } from "lucide-react";
import heroAbout from "assets/images/hero/AboutHero.png";
import Button from "../elements/Button";

export default function HeroAbout() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full px-5 flex flex-col mb-5 sm:px-12 sm:mt-6 lg:w-1/2 lg:mt-6 xl:pl-12 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5 mt-12">
            Innovating the Future of Smart Automation
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400 leading-relaxed">
            At Nube iO, we create cutting-edge technology that revolutionises
            the way businesses connect, automate, and optimise their
            environments.
          </p>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <div className="flex space-x-4 mt-8">
            {" "}
            <Button
              href="/solutions/"
              type="link"
              className="text-sm sm:text-sm md:text-base lg:text-lg flex w-68 h-16 justify-center px-8 py-4 text-white  bg-theme-teal rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
            >
              Our solutions
              <ArrowRight className="ml-2 w-4" />
            </Button>
          </div>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12 mt-12 lg:ml-38">
        <Fade direction="up" triggerOnce>
          <img src={heroAbout} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
