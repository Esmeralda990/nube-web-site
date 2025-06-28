/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import { ArrowRight } from "lucide-react";

import SoftwareGif from "../assets/images/hero/Software.png";

export default function HeroSoftware() {
  return (
    <>
      <section className="mt-12 container lg:max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:mt-24 ">
        <div className="w-full lg:w-1/2 sm:pr-2 xl:mt-24 text-left px-8">
          <h1 className="text-3xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5 lg:mt-12">
            Rubix CE: Powerful and Intuitive Control
          </h1>
          <p className="font-light text-xl text-gray-400 leading-relaxed mb-10 max-w-xl">
            Seamlessly manage your Nube iO devices and building systems from a
            single platform – designed to simplify complex control across any
            building portfolio.
          </p>
          <Fade direction="up" delay={500} triggerOnce>
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
          </Fade>
        </div>
        <div className="flex flex-grow-0 pt-5 w-full justify-end items-center lg:order-last lg:max-w-2xl pb-24">
          <Fade triggerOnce>
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
