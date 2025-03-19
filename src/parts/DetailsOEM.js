/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Detailoem() {
  return (
    <div className="bg-white">
      <section className="hero sm:items-center lg:items-start sm:flex-row pt-12 md:pt-16">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-16">
          <Fade direction="up" triggerOnce>
            <h3 className="text-5xl text-theme-blue text-center font-bold leading-tight mb-10">
              OEM Solutions
            </h3>
          </Fade>
          <Fade direction="up" triggerOnce delay={400}>
            <p className="max-w-6xl mx-auto text-center font-light text-xl text-gray-400 leading-relaxed text-center ">
              Nube iO provides flexible OEM solutions like white labelling,
              custom hardware, and software development. We help businesses
              integrate advanced building automation technology, expanding their
              offerings with tailored, scalable solutions. Focusing on
              customisation, sustainability, and seamless IoT integration, our
              OEM services meet the unique.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
}
