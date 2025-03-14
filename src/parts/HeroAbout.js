/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";
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
              className="text-sm sm:text-sm lg:text-xl flex w-72 h-16 justify-center px-18 py-4 text-white  bg-theme-teal rounded-lg shadow-xl hover:bg-teal-700 transition duration-200"
            >
              Explore our solutions
              <svg
                className="ml-2 w-7 h-7 text-white animate-bounce-x"
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
          </div>
        </Fade>
      </div>
      <div className="w-full sm:w-1/2 sm:pr-12 mt-12 lg:ml-32">
        <Fade direction="up" triggerOnce>
          <img src={heroAbout} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
