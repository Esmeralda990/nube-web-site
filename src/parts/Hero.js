/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import { ArrowRight, ArrowUpRight } from "lucide-react";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/Home_Header.gif";

export default function Hero() {
  return (
    <>
      <section className="container mx-auto flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/2 sm:pr-2 text-left pt-12 md:pt-32 sm:items-center lg:items-start sm:flex-row px-8 lg:ml-24">
          <h1 className="text-5xl lg:text-7xl text-theme-blue font-bold leading-tight mb-5">
            Automating the Future <br />
          </h1>
          <p className="font-light text-lg text-gray-400 leading-relaxed mb-16 max-w-xl">
            Transform your operations with cutting-edge technology designed for
            scalability, simplicity, and sustainability.
          </p>
          <div className="flex space-x-4">
            {" "}
            <Fade triggerOnce delay={400}>
              <Button
                href="/contact/"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
              >
                Contact
                <ArrowRight className="ml-2 w-4" />
              </Button>
            </Fade>
            <Fade delay={500} triggerOnce>
              <Button
                href="/get-demo/"
                type="link"
                className="flex items-center justify-center w-auto px-4 py-3 bg-white text-black border border-theme-teal text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
              >
                Get Demo
                <ArrowRight className="ml-2 w-4" />
              </Button>
            </Fade>
          </div>{" "}
          <a
            href="/solutions/"
            className="mb-3 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm mt-12"
          >
            ✨ Software and Hardware solutions
            <span className="flex size-7 items-center justify-center rounded-full bg-muted">
              <ArrowUpRight className="w-4" />
            </span>
          </a>
        </div>

        <div className="flex flex-col pt-5 w-full justify-end items-center lg:order-last overflow-hidden">
          <Fade triggerOnce>
            <img
              className="max-w-full  lg:max-w-[1100px] md:max-w-[1100px] h-auto object-contain lg:ml-8"
              src={BuildWebsite}
              alt="Build Website"
            />
          </Fade>
        </div>
      </section>
    </>
  );
}
