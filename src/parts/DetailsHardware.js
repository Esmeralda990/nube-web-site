/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function DetailsHardware() {
  return (
    <div className="bg-white">
      <section className="hero sm:items-center lg:items-start sm:flex-row pt-12">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-16">
          <Fade direction="up" triggerOnce>
            <h3 className="text-5xl text-theme-blue text-center font-bold leading-tight mb-10">
              Hardware Solutions
            </h3>
          </Fade>
          <Fade direction="up" triggerOnce delay={400}>
            <p className="font-light text-xl text-gray-400 leading-relaxed ">
              Nube iO provides advanced hardware solutions to help businesses
              manage and optimise building environments. Our sensors, gateways,
              and controllers offer exceptional accuracy and reliability,
              seamlessly integrating into existing systems. These devices
              efficiently gather and process data, simplifying complex building
              operations. With a focus on innovation, our hardware equips
              businesses to achieve maximum efficiency and sustainability.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
}
