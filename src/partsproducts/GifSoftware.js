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
      <div className="container mx-auto px-12">
        <div className="flex flex-col space-y-10 md:space-y-16">
          <div className="lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <video
                  src={GifBenefits[0].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[4/3] w-auto rounded-md "
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mt-12 text-1xl sm:text-2xl lg:text-4xl text-theme-blue font-bold leading-tight mb-5">
                  Send your data anywhere
                </h3>
                <ul className="text-muted-foreground font-light lg:text-lg list-inside">
                  <li>
                    <span className="text-theme-teal">&#10003;</span> Integrate
                    into an existing BMS Via BACnet/IP
                  </li>
                  <li>
                    <span className="text-theme-teal">&#10003;</span> Supports
                    BACnet-Master and as a BACnet/IP Device
                  </li>
                  <li>
                    <span className="text-theme-teal">&#10003;</span> Device to
                    3rd-party cloud (REST-API, MQTT)
                  </li>
                  <li>
                    <span className="text-theme-teal">&#10003;</span>{" "}
                    Cloud-to-cloud transfer
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-row-reverse lg:flex lg:gap-x-4">
            <div className="lg:w-1/2">
              <div className="mb-6 md:mb-8 lg:mb-0">
                <video
                  src={GifBenefits[1].image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[6/3] w-full rounded-md"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
              <div>
                <h3 className="mt-12 text-1xl sm:text-2xl lg:text-4xl text-theme-blue font-bold leading-tight mb-5">
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
              <div className="mb-6 md:mb-8 lg:mb-0">
                <img
                  src={GifBenefits[2 + currentImageIndex].image}
                  alt={`Manage ${currentImageIndex + 1}`}
                  className="aspect-[4/3] w-full rounded-md border border-border object-cover"
                />
              </div>
            </div>
            <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
              <div>
                <h3 className="mt-12 text-1xl sm:text-2xl lg:text-4xl text-theme-blue font-bold leading-tight mb-5">
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
