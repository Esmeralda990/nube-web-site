/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import { ArrowRight } from "lucide-react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

export default function CtaSoftware() {
  return (
    <Fade direction="" triggerOnce>
      <div className=" w-full py-12 pt-0">
        <section className="flex container mx-auto justify-center">
          <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-gray-100 p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-26">
            <div className="flex-1">
              <h3 className="mb-3 text-lg lg:text-3xl text-theme-blue font-bold md:mb-4 lg:mb-6">
                Learn more about our software
              </h3>
              <Fade delay={300} triggerOnce>
                <p className="font-light text-gray-500 p-5 sm:p-0 text-base lg:text-lg max-w-3xl">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.
                </p>
              </Fade>
            </div>
            <div className="flex gap-4 xl:mt-6 sm:ml-4 lg:ml-0 xl:ml-12">
              <Fade direction="up" triggerOnce delay={500}>
                <Button
                  href="/software/"
                  type="link"
                  className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
                >
                  learn more
                  <ArrowRight className="ml-2 w-4" />
                </Button>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
}
