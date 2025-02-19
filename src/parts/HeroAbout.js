/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";
import heroAbout from "assets/images/hero/portfolioHero.png";
import Button from "../elements/Button";

export default function HeroAbout() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full sm:w-1/2 flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-20">
        <Fade direction="up" triggerOnce>
          <h1 className="text-6xl text-theme-blue font-bold leading-tight mb-5">
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
              href="/project"
              type="link"
              className="flex w-72 h-16 justify-center px-18 py-4 text-white text-xl bg-teal-600 rounded-lg shadow-xl hover:bg-teal-700 transition duration-200"
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
            <Button
              href="/contact"
              type="link"
              className="flex w-60 h-16 justify-center px-18 py-4 text-black text-xl bg-gray-300 rounded-lg shadow-xl hover:bg-gray-200 transition duration-200"
            >
              Our team
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
      <div className="w-full sm:w-1/2 sm:pr-12 mt-12 ml-32">
        <Fade direction="up" triggerOnce>
          <img src={heroAbout} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
