/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import Herosolutions from "../assets/images/hero/portfolioHero.png";

export default function HeroSolutions() {
  return (
    <section className="hero flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-20">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-6">
          Empowering Comprehensive Automation Solutions.
        </h1>
        <p className="text-2xl sm:text-2xl text-gray-300 font-light mb-8">
          Tailored services and advanced technology to meet your space
          management needs.
        </p>
        <div className="flex justify-start lg:justify-start">
          <Fade direction="up" delay={500} triggerOnce>
            <Button
              href="/project"
              type="link"
              className="flex w-30 h-20 items-center justify-center px-6 py-3 text-white text-xl bg-teal-600 rounded-lg shadow-2xl hover:bg-black transition duration-200"
            >
              Get your tailored solution today—contact us now!
              <svg
                className="ml-2 w-6 h-6 text-white animate-bounce-x"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Button>
          </Fade>
        </div>
      </div>

      {/* Imagen */}
      <div className="flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
        <Fade direction="up" triggerOnce>
          <img
            className="max-w-full h-auto"
            src={Herosolutions}
            alt="Hero solutions"
          />
        </Fade>
      </div>
    </section>
  );
}
