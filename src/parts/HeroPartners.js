/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import { ArrowRight } from "lucide-react";

import Button from "../elements/Button";

import partners from "../assets/images/hero/Partners.png";

export default function Heropartners() {
  return (
    <>
      <section className="container mx-auto lg:max-w-screen-xl flex flex-col lg:flex-row px-8 lg:mb-24">
        <div className="w-full lg:w-1/2 sm:pr-2 text-left pt-12 md:pt-60 sm:items-center xl:items-start sm:flex-row">
          <h1 className="text-3xl lg:text-6xl max-w-xl text-theme-blue font-bold leading-tight mb-5 dark:text-white">
            Trusted Partners <br />
          </h1>
          <p className="font-light text-xl text-gray-400 leading-relaxed mb-12">
            Together we are reshaping smart building technology — delivering
            powerful solutions that drive performance, scalability, and
            innovation.
          </p>

          <div className="flex space-x-4">
            {" "}
            <Fade triggerOnce delay={400}>
              <Button
                href="/contact/"
                type="link"
                className="mb-4 flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
              >
                Become a Partner
                <ArrowRight className="ml-2 w-4" />
              </Button>
            </Fade>
          </div>
        </div>

        <div className="flex pt-5 w-full justify-end items-center lg:order-last lg:w-1/2 lg:pb-24 overflow-hidden lg:mt-24">
          <Fade direction="" triggerOnce>
            <img
              className="max-w-1/2 h-auto lg:ml-16 object-contain overflow-hidden scale-[1.2]"
              src={partners}
              alt="Partners"
            />
          </Fade>
        </div>
      </section>
    </>
  );
}
