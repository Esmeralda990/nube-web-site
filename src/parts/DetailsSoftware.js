/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Detailsoftware() {
  return (
    <div className="bg-white container mx-auto lg:max-w-screen-xl">
      <section className="sm:items-center lg:items-start sm:flex-row pt-12">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-12">
          <Fade triggerOnce>
            <h2 className="text-3xl lg:text-5xl text-theme-blue text-center font-bold leading-tight mb-10">
              Intuitive Software for Smart, Connected Spaces
            </h2>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p className="font-light text-xl text-gray-400 leading-relaxed text-center md:pb-32 ">
              Nube iO’s advanced software solutions transform complex building
              management into simple, actionable insights. Our intelligent,
              cloud-based platforms deliver real-time data, proactive alerts,
              and smart analytics—giving you complete visibility, total control,
              and unmatched efficiency across your operations.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
}
