/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { GifBenefits } from "../json/ProductsPageData.js";

const GifBene = () => {
  return (
    <div className="container mx-auto px-12 lg:max-w-screen-xl lg:pt-16">
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
                className="aspect-[4/3] lg:scale-[1.3] w-auto rounded-md block dark:hidden"
              />
              <video
                src={GifBenefits[0].imageDark}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] lg:scale-[1.3] w-auto rounded-md hidden dark:block"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 ">
            <div>
              <h3 className=" text-lg lg:text-3xl text-theme-blue font-bold leading-tight mb-5 dark:text-white ">
                Send your data anywhere
              </h3>
              <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed mb-3 max-w-xl">
                Whether you&apos;re modernising an old system or deploying new
                infrastructure, Rubix CE bridges the gap. Connects seamlessly to
                existing BMS solutions, third-party platforms or cloud
                environments – without complicated integrations.
              </p>
              <ul className="text-muted-foreground font-light text-base lg:text-lg  list-disc text-gray-400 pl-5">
                <li>
                  <span /> Works with BACnet/IP, MQTT, and RESTful APIs.
                </li>
                <li>
                  <span /> Supports cloud-to-cloud and on-premise data flows.
                </li>
                <li>
                  <span /> Functions as both BACnet-Master and BACnet-Slave
                  device.
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
                className="aspect-[6/3] lg:scale-[1.3] w-full rounded-md  block dark:hidden"
              />
              <video
                src={GifBenefits[1].imageDark}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[6/3] lg:scale-[1.3] w-full rounded-md hidden dark:block"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 ">
            <div>
              <h3 className=" text-lg lg:text-3xl text-theme-blue font-bold leading-tight max-w-full mb-5 dark:text-white ">
                Merge BMS and IoT projects
              </h3>
              <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed mb-3 max-w-xl">
                Rubix CE makes integration easy. Manage IoT and traditional BMS
                devices from one unified platform. Forget siloed systems – this
                is full-stack control from edge to cloud.
              </p>
              <ul className="text-muted-foreground font-light text-base lg:text-lg text-gray-400 list-disc pl-5">
                <li>
                  <span /> Unified interface for legacy (BACnet, Modbus) and
                  wireless devices (LoRaWAN, 3G/4G)
                </li>
                <li>
                  <span /> Supported Protocols: BACnet, Modbus, LoRaWAN, LoRa
                  and REST API
                </li>
                <li>
                  <span /> Simplifies complex projects across multi-vendor
                  environments.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:gap-x-4">
          <div className="lg:w-1/2">
            <div className="mb-6 lg:mb-8 lg:mt-24">
              <video
                src={GifBenefits[2].image}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] lg:scale-[1.3] w-auto rounded-md block dark:hidden "
              />
              <video
                src={GifBenefits[2].imageDark}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] lg:scale-[1.3] w-auto rounded-md hidden dark:block"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 ">
            <div>
              <h3 className=" text-lg lg:text-3xl text-theme-blue font-bold leading-tight  mb-5 dark:text-white ">
                Manage one or multiple Rubix-Compute gateways
              </h3>
              <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed mb-3 max-w-xl">
                Whether you’re running a single controller or hundreds of sites,
                you can deploy, monitor and manage your set-up – locally or in
                the cloud.
              </p>
              <ul className="text-muted-foreground font-light lg:text-lg list-disc text-gray-400 pl-5">
                <li>
                  <span /> Compatible with any Rubix Compute.
                </li>
                <li>
                  <span /> Scales easily across multiple sites.
                </li>
                <li>
                  <span /> Real-time control with flexible deployment options.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-row-reverse lg:flex lg:gap-x-4 ">
          <div className="lg:w-1/2">
            <div className="mb-6 lg:mb-8">
              <video
                src={GifBenefits[3].image}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] lg:scale-[1.3] w-auto rounded-md block dark:hidden"
              />
              <video
                src={GifBenefits[3].imageDark}
                autoPlay
                loop
                muted
                playsInline
                className="aspect-[4/3] lg:scale-[1.3] w-auto rounded-md hidden dark:block"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 ">
            <div>
              <h3 className=" text-lg lg:text-3xl text-theme-blue font-bold leading-tight max-w-full mb-5 dark:text-white ">
                Engineering Tools: Rubix Wires
              </h3>
              <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed mb-3 max-w-xl">
                Rubix Wires gives engineers a low-code platform to program
                control logic, monitor live data, and adapt to evolving building
                needs—without steep learning curves.
              </p>
              <ul className="text-muted-foreground font-light text-base lg:text-lg text-gray-400 list-disc pb-12 pl-5 ">
                <li>
                  <span /> Drag-and-drop editor for custom logic.
                </li>
                <li>
                  <span />
                  Built-in support for BACnet, Modbus, LoRaWAN®.
                </li>
                <li>
                  <span /> Real-time visualisation of system behaviour.
                </li>
                <li>
                  <span /> Works across HVAC and smart building projects.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifBene;
