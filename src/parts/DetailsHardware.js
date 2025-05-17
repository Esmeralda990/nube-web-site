/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function DetailsHardware() {
  return (
    <div className="bg-white container mx-auto lg:max-w-screen-xl">
      <section className="sm:items-center lg:items-start sm:flex-row pt-12">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-8">
          <Fade triggerOnce>
            <h2 className="text-3xl md:text-5xl text-theme-blue text-center font-bold leading-tight mb-10">
              Powerful Hardware for Smarter Automation
            </h2>
          </Fade>
          <Fade triggerOnce delay={400}>
            <p className="font-light text-xl text-gray-400 leading-relaxed text-center ">
              Nube iO’s hardware solutions provide the solid foundation your
              automation and management systems need to excel. Designed with
              innovation, simplicity, and scalability in mind, our hardware
              suite ensures seamless connectivity, precise control, and advanced
              data collection. With Nube iO, you can optimise operations,
              improve sustainability, and stay ahead in your industry.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
}
