/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import Video from "../Video/Hero-video.mp4";

import BuildWebsite from "../assets/images/hero/Home_principal.gif";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-24 text-left ">
          <h1 className="text-5xl sm:text-4xl text-theme-blue font-bold leading-tight mb-5">
            Nube iO <br />
          </h1>
          <h2 className="text-3xl sm:text-4xl text-theme-blue font-bold leading-tight mb-5">
            Automating the Future
          </h2>
          <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
            Transform your operations with cutting-edge technology designed for
            scalability, simplicity, and sustainability.
          </p>
          <Fade direction="up" delay={500} triggerOnce>
            <Button
              href=""
              type="link"
              className="flex w-71 h-18 items-center font-bold text-lg px-14 py-5 text-white text-xl bg-theme-teal rounded-lg shadow-2xl hover:bg-dark-theme-blue transition duration-200 "
            >
              Get a Demo
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
          </Fade>
        </div>

        <div className="flex pt-5 w-full justify-end items-center order-first lg:order-last lg:w-3/4 pb-24 ">
          <Fade direction="" triggerOnce>
            <img
              className="max-w-full h-auto lg:ml-32"
              src={BuildWebsite}
              alt="Build Website"
            />
          </Fade>
        </div>
      </section>

      <div className="w-full flex flex-col items-center space-y-6 mb-24">
        {/* Título */}
        <h1 className="mx-auto max-w-screen-lg text-balance text-center text-theme-blue text-2xl font-bold md:text-5xl leading-tight mb-5">
          Harness the Potential
        </h1>
        {/* Video */}
        <video
          className=" max-auto h-full max-h max-h-[524px] w-full max-w-screen-lg rounded-2xl object-cover"
          controls
        >
          <source src={Video} type="video/mp4" />
          <track kind="captions" label="No captions available" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}
