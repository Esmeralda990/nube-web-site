/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from "react";
import IOT from "../assets/images/IconsHardware/IoT.svg";
import IOTDark from "../assets/images/IconsHardware/IoTdark.svg";

const SmartHardw = () => {
  return (
    <section className="lg:py-12 px-8 md:py-12">
      <div className="container mx-auto overflow-hidden max-w-6xl ">
        <div className="text-center mb-8 mx-auto">
          <h2 className="text-2xl lg:text-5xl text-theme-blue font-bold leading-tight mb-6 dark:text-white">
            Smart Devices for Better Buildings
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <p className="text-muted-foreground font-light text-gray-400 lg:text-xl max-w-md">
              Many facilities have siloed systems with no real-time visibility,
              driving up costs and reducing operational control. Using wireless
              sensors, Rubix Compute gateways and the Rubix Platform, Nube iO
              can deliver a unified data stream with real-time dashboards and
              cloud insights.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-12 border border-gray-200 rounded-xl dark:border-theme-border">
            <img
              className="w-full max-w-xl h-auto object-contain rounded-xl block dark:hidden"
              src={IOT}
              alt="IOT"
            />
            <img
              className="w-full max-w-xl h-auto object-contain rounded-xl hidden dark:block"
              src={IOTDark}
              alt="IOT"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartHardw;
