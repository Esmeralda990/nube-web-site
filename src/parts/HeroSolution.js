/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";
import { ArrowRight } from "lucide-react";
import Button from "../elements/Button";

import Herosolutions from "../assets/images/hero/SolutionsHero.png";

export default function HeroSolutions() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-20">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 lg:text-left">
        <h1 className="text-5xl md:text-7xl text-theme-blue font-bold leading-tight mb-5">
          Empowering Smart Automation
        </h1>
        <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed">
          Tailored services and advanced technology to meet your space
          management needs.
        </p>
        <div className="flex justify-start lg:justify-start space-x-4 mt-8">
          <Fade direction="up" delay={500} triggerOnce>
            <Button
              href="/contact-us/"
              type="link"
              className="text-sm sm:text-sm md:text-base lg:text-lg flex w-68 h-12 justify-center px-8 py-2 text-black border border-theme-teal bg-white rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal  hover:text-white"
            >
              Contact us
              <ArrowRight className="ml-2 w-4" />
            </Button>
          </Fade>
        </div>
      </div>

      <div className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
        <Fade direction="up" triggerOnce>
          <img
            className="max-w-full lg:max-w-[800px] md:max-w-[700px] h-auto "
            src={Herosolutions}
            alt="Solutions Nube IO"
          />
        </Fade>
      </div>
    </section>
  );
}
