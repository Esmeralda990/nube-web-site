/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import { ArrowRight } from "lucide-react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

export default function DiscussCtaPart() {
  return (
    <Fade direction="" triggerOnce>
      <div className=" w-full py-12 pt-0">
        <section className="flex container mx-auto justify-center">
          <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-gray-100 p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-26">
            <div className="flex-1">
              <h3 className="mb-3 text-2xl text-theme-blue font-bold md:mb-4 md:text-4xl lg:mb-6">
                Interested in Partnering?
              </h3>
              <Fade delay={300} triggerOnce>
                <p className="font-light text-gray-500 p-5 sm:p-0 text-lg sm:text-xl lg:text-2xl xl:text-xl max-w-3xl">
                  Join our growing network of industry leaders and innovators
                  committed to delivering impactful solutions.
                </p>
              </Fade>
            </div>
            <div className="flex gap-4 xl:mt-6 sm:ml-4 lg:ml-0 xl:ml-12">
              <Fade direction="up" triggerOnce delay={500}>
                <Button
                  href="/contact-us/"
                  type="link"
                  className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
                >
                  Become a Partner
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
