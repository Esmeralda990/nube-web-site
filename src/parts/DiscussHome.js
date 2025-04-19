/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import bgVideo from "../assets/Video/Homediss.webm";
import CardImag from "../assets/images/hero/Card.svg";

export default function Discuss() {
  return (
    <section className="w-full relative overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={bgVideo} type="video/webm" />
      </video>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 py-20 md:p-40 mt-8">
        <div className="w-full md:w-1/2 text-center md:text-left text-theme-blue">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-5 max-w-lg">
            Ready to Future-Proof Your Building
          </h2>
          <p className="font-light text-base md:text-xl text-gray-500 leading-relaxed mb-16  max-w-xl">
            Transform your building with Nube iO’s smart solutions. From
            seamless IoT integration to real-time automation and energy
            optimisation, we make buildings smarter, more efficient, and
            future-ready.
          </p>
          <div className="mt-8 flex  justify-center md:justify-start space-x-4 sm:space-y-0 sm:space-x-4 items-center">
            <Fade direction="up" triggerOnce>
              <Button
                href="/contact-us/"
                type="link"
                className="flex items-center justify-center max-w-fit px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
              >
                Contact
              </Button>
            </Fade>
            <Fade direction="up" triggerOnce delay={300}>
              <Button
                href="/get-demo/"
                type="link"
                className="flex items-center justify-center max-w-fit px-6 py-3 bg-white text-black text-base rounded-xl transition duration-300 ease-in-out border border-theme-teal hover:scale-105 hover:bg-theme-teal hover:text-white"
              >
                Get Demo
              </Button>
            </Fade>
          </div>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center mb-8 ">
          <img
            src={CardImag}
            alt="Card"
            className="w-full max-w-lg object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)] hidden sm:block"
          />
        </div>
      </div>
    </section>
  );
}
