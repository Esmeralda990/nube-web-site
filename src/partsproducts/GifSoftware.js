/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from "react";
import { GifBenefits } from "../json/ProductsPageData.js";

const GifBene = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  });

  return (
    <section className="py-32 bg-gray-100">
      <div className="container mx-auto px-12 lg:max-w-screen-xl">
        <div className="flex flex-col space-y-10 md:space-y-16">
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 lg:mb-8">
                <video
                  src={GifBenefits[0].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[4/3] lg:scale-[1.3] w-auto rounded-md "
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 ">
              <div>
                <h2 className="mt-12 text-3xl lg:text-5xl text-theme-blue font-bold leading-tight mb-5">
                  Send your data anywhere
                </h2>
                <ul className="text-muted-foreground font-light lg:text-lg list-disc">
                  <li>
                    <span /> Integrate into an existing BMS Via BACnet/IP
                  </li>
                  <li>
                    <span /> Supports BACnet-Master and as a BACnet/IP Device
                  </li>
                  <li>
                    <span /> Device to 3rd-party cloud (REST-API, MQTT)
                  </li>
                  <li>
                    <span /> Cloud-to-cloud transfer
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-row-reverse lg:flex lg:gap-x-4 ">
            <div className="lg:w-1/2">
              <div className="mb-6 lg:mb-8">
                <video
                  src={GifBenefits[1].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[6/3] lg:scale-[1.3] w-full rounded-md"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 ">
              <div>
                <h3 className="mt-12 text-3xl lg:text-5xl text-theme-blue font-bold leading-tight ">
                  Merge BMS and IoT projects
                </h3>
                <ul className="text-muted-foreground font-light lg:text-lg list-inside">
                  <li>
                    <span className="text-theme-teal">&#10003;</span> Integrate
                    your IoT and BMS projects using one software platform
                  </li>
                  <li>
                    <span className="text-theme-teal">&#10003;</span> Supported
                    legacy protocols: BACnet, Modbus
                  </li>
                  <li>
                    <span className="text-theme-teal">&#10003;</span> Supported
                    wireless protocols: LoRaWAN, 3G/4G
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 lg:mb-8 lg:mt-24">
                <img
                  src={GifBenefits[2 + currentImageIndex].image}
                  alt={`Manage ${currentImageIndex + 1}`}
                  className="aspect-[4/3] w-full rounded-md border border-border object-cover"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mt-12 text-1xl lg:text-4xl text-theme-blue font-bold leading-tight mb-5">
                  Manage one or multiple Rubix-Computes
                </h3>
                <ul className="text-muted-foreground font-light lg:text-lg list-inside">
                  <li>
                    <span className="text-theme-teal">&#10003;</span> Runs
                    locally on any Rubix Compute, in the cloud and on premise
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GifBene;
