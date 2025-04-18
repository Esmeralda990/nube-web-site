/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function DetailsPS() {
  return (
    <div className="bg-gray-50">
      <section className="hero sm:items-center lg:items-start sm:flex-row md:pt-16 ">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-8 lg:mt-6 xl:mt-16">
          <Fade direction="up" triggerOnce>
            <h2 className="text-3xl md:text-5xl text-theme-blue text-center mt-12 font-bold leading-tight mb-10">
              Professional Services
            </h2>
          </Fade>
          <Fade direction="up" triggerOnce delay={400}>
            <p className="max-w-6xl mx-auto text-center font-light text-xl px-5 text-gray-400 leading-relaxed ">
              Our services deliver tailored solutions using Nube iO s product
              and engineering expertise. We focus on sustainability compliance
              through innovative technologies, comprehensive asset management,
              and 24 support. With advanced data analytics, energy management,
              and IoT integration, we aim for excellence and long term client
              success.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
}
