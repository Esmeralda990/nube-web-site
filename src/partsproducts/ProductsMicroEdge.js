/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Microedge } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const MicroEdge = () => {
  return (
    <section className="lg:mt-28 mt-12 pb-32 md:ml-24 px-8">
      <div className="container mx-auto">
        <h1 className="text-4xl lg:text-6xl mt-4 text-theme-blue font-bold text-center dark:text-white">
          MicroEdge <br />
          Small Form, Powerful Edge Control
        </h1>
        <div className="relative mt-12 grid gap-16  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
          <div className="mx-auto w-full max-w-[800px]">
            <article className="prose order-2 mx-auto md:order-1">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={400}
                className="swiper-products aspect-[5/4] mb-12 w-full object-contain h-auto rounded-lg"
              >
                {Microedge.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img
                      src={item.image}
                      alt={`Droplet ${item.id}`}
                      className="w-full h-auto mb-4 mt-0 object-contain rounded-lg "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h3 className="text-xl lg:text-2xl font-bold mt-8 mb-4 text-theme-blue dark:text-white">
                Capabilities
              </h3>
              <div>
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 bg-gray-200 font-bold text-sm ">
                        FEATURE/SPECIFICATION
                      </th>
                      <th className="border px-4 py-2 bg-gray-300 font-bold text-sm">
                        DETAILS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-sm dark:text-white">
                        MicorEdge® capabilities
                      </td>
                      <td className="border px-4 py-2 font-light text-sm dark:text-white">
                        The MicroEdge supports 3x UI (universal inputs) and 1x
                        pulse input (normally used for a gas or water meter
                        reading)
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm  ">
                        Pulse Specifications 1x off{" "}
                      </td>
                      <td className="border px-4 py-2 font-light text-sm">
                        Dry Contact
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm ">
                        UI Specifications (3x off)
                      </td>
                      <td className="border px-4 py-2 font-light text-sm">
                        10K temp sensors, 0-10dc input, On/Off input
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
              MicroEdge is a LoRa® technology-based IoT sensor. It seamlessly
              captures data from your equipment and other assets, enabling you
              to make smart, data-driven decisions.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/Docs/MicroEdge-Datasheet.pdf"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-3 bg-white text-black border border-theme-teal text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
                download
              >
                DATASHEET
              </a>
              <Button
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/microedge-v2/"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
                download
              >
                USER MANUAL
              </Button>
            </div>
            <div className="my-6 w-full border-t border-gray-300" />
            <h3 className="mb-4 text-xl lg:text-2xl font-bold text-theme-blue w-full mx-auto dark:text-theme-teal">
              Just a few of the benefits
            </h3>
            <ul className="list-disc pl-5 space-y-3 sm:space-y-2 text-lg sm:text-base font-light text-gray-400">
              {[
                "3 UNIVERSAL INPUTS Use it for CT or sensor monitoring ",
                "ONE PULSE INPUT Monitor the pulse count for a water or electrical meter",
                "UP TO 2KM TRANSMISSION A small device with powerful capabilities",
                "LORA® WIRELESS COMMUNICATION Built based on LoRa® wireless protocol ",
                "EASY TO INSTALL Instal this battery-powered sensor anywhere ",
                "100 PLUS DEVICES PER GATEWAY Easily scale up or down",
                "WATERPROOF Suitable for outdoors or hard-to-access meters",
              ].map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <div className="my-6 w-full border-t border-gray-300" />
            <h3 className="mb-4 text-xl lg:text-2xl font-bold text-theme-blue w-full mx-auto dark:text-theme-teal">
              More about More MicroEdge
            </h3>
            <h4 className="text-base lg:text-xl font-bold text-theme-teal mb-2 dark:text-white">
              Why Lora®
            </h4>
            <p className="font-light text-lg text-gray-400 leading-relaxed sm:text-sm sm:break-words md:text-lg w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
              LoRa® is a low-power, long-range wireless technology designed for
              the Internet of Things. It is less affected by buildings and other
              obstructions than regular WiFi, with one gateway generally being
              LoRa® is expected to hold 75% of the IoT device market share soon.
              The LoRa® community is expanding rapidly, with many new
              contributions and developments occurring every day.
              <br />
              •Significantly longer range than for Bluetooth and WiFi <br />
              •Drastically lower power consumption than for Bluetooth, WiFi, or
              4G <br />
              •AES128 encryption <br />
              •Excellent penetration through obstacles <br />
              •Highly versatile application, which translates into easier
              integration
            </p>
            <div className="flex items-center justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MicroEdge;
