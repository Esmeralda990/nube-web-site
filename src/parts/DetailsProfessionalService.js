/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function DetailsPS() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row md:pt-16 ">
      <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-8 lg:mt-6 xl:mt-16">
        <Fade triggerOnce>
          <h2 className="text-2xl md:text-5xl text-theme-blue text-center font-bold leading-tight lg:mb-16 mb-8 mx-auto max-w-4xl">
            Professional Services for Smart Building Success
          </h2>
        </Fade>
        <Fade triggerOnce delay={400}>
          <p className="max-w-6xl mx-auto text-center font-light text-lg px-5 text-gray-400 leading-relaxed">
            From energy analytics and system integration to compliance,
            training, and sales enablement — our tailored services help partners
            and clients deliver sustainable, future-ready outcomes.
          </p>
        </Fade>
      </div>
    </section>
  );
}
