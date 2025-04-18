/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { CheckCircle2 } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { RubixWire } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const Wire = () => {
  const { image } = RubixWire[0];
  return (
    <section className="py-16 pb-8">
      <div className="container mx-auto max-w-screen-2xl px-8">
        <h2 className="text-2xl mt-4 text-theme-blue font-bold md:text-5xl text-center">
          Rubix Wires
        </h2>

        <div className="w-full ">
          <video
            src={image}
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-3xl aspect-video object-cover rounded-lg mx-auto"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-theme-blue mt-10">
              No licencing. Free on your device
            </h3>
            <p className="font-light text-lg text-gray-400 mb-10">
              The Wires program comes free with your Nube iO device with no
              ongoing licencing costs or point restrictions.
            </p>

            <h3 className="text-xl mt-4 text-theme-blue font-bold md:text-2xl">
              Program your devices from anywhere
            </h3>
            <p className="text-muted-foreground font-light text-lg text-gray-400 leading-relaxed">
              Wires is an easy to use programming tool that allows users to
              remotely program BMS and IoT projects.
            </p>
          </div>

          <div className="w-full lg:w-1/2 lg:mt-4">
            <h3 className="text-xl text-theme-blue font-bold md:text-2xl">
              Take a tour
            </h3>
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
              Learn more about Rubix Wires features in the HVAC and IoT space.
            </p>

            <div className="flex gap-4 mt-6 mb-6">
              <Button
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-ce/"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
              >
                DOCUMENTATION
              </Button>
            </div>

            <ul className="flex flex-col gap-3 sm:gap-2">
              {[
                "Flow-based and real-time editor",
                "Drag-and-drop style",
                "Intuitive UI",
                "Similar to other well known BMS commissioning interfaces",
                "BACnet, Modbus, LoRaWAN® ready",
                "Pre-built nodes (blocks) for PAC, PID, RTU and FCU control",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-theme-teal sm:h-5 sm:w-5" />
                  <p className="text-lg sm:text-lg font-light text-gray-400">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wire;
