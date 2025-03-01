/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Droplet } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const RubixLW = () => {
  return (
    <section className="py-32 pb-12 md:ml-24 ml-0">
      <div className="container mx-auto">
        <p className="text-sm sm:text-sm lg:text-lg text-center font-bold text-teal-500 mb-2">
          Rubix Connect LW
        </p>
        <h1 className="text-3xl mt-4 text-theme-blue font-bold md:text-5xl text-center">
          Droplet
        </h1>
        <div className="relative mt-12 grid gap-16 md:grid-cols-2">
          <article className="prose order-2 mx-auto md:order-1">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={400}
              className="swiper-products mb-12 aspect-video w-full h-auto rounded-lg"
            >
              {Droplet.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide-products">
                  <img
                    src={item.image}
                    alt={`Droplet ${item.id}`}
                    className="w-full h-auto mb-8 mt-0 object-cover rounded-lg "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              More about the Droplet
            </h1>
            <p className="text-sm sm:text-sm lg:text-lg font-bold text-teal-500 mb-2">
              Why Lora®
            </p>
            <p className="font-light text-base text-gray-400 mb-10">
              The Rubix Connect LW features a high-performance LoRaWAN®
              concentrator card seamlessly integrated into a specialised module
              for use with the Rubix Compute and other IOT systems. A powerful,
              efficient platform for deploying LoRaWAN® networks. Designed for
              low power consumption and multi-channel support, it streamlines
              network setup and scales easily to accommodate various
              applications such as smart cities, agricultural monitoring,
              environmental sensing, industrial automation, and smart metering.
              The RC-LW-CON-1 is an add-on module to the Nube iO Rubix-Compute.
              Once plugged into the Rubix Compute this enables the Rubix Compute
              to run as a LoRaWAN® server.
            </p>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              Capabilities
            </h1>
            <div>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 bg-gray-200 font-bolt ">
                      FEATURE
                    </th>
                    <th className="border px-4 py-2 bg-gray-300 font-bolt ">
                      SPECIFICATION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 ">Supported Frequencies</td>
                    <td className="border px-4 py-2 font-light">868/915Mhz</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 ">Spreading Factor</td>
                    <td className="border px-4 py-2 font-light">6-12</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 ">Bandwidth</td>
                    <td className="border px-4 py-2 font-light">
                      7.8 – 500 kHz
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Effective Bitrate</td>
                    <td className="border px-4 py-2 font-light">
                      .018 – 37.5 kbps
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Estimated Sensitivity</td>
                    <td className="border px-4 py-2 font-light">
                      111 to -148 dBm
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
              The Droplet is a LoRa® IoT sensor. It captures multiple points of
              data – temperature, humidity, lux, and motion monitoring – with
              minimal time required for installation and wiring.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/Docs/Droplet-Datasheet.pdf"
                type="link"
                className="px-6 py-3 bg-gray-300 text-black text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
                download
              >
                DATASHEET
              </a>
              <Button
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-connect-lw/"
                type="link"
                className="px-6 py-3 bg-teal-600 text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-800"
                download
              >
                USER MANUAL
              </Button>
            </div>
            <div className="my-6 w-full border-t border-gray-300" />
            <p className="mb-4 text-lg sm:text-xl font-bold text-theme-blue w-full mx-auto">
              Just a few of the benefits
            </p>
            <ul className="flex flex-col gap-3 sm:gap-2">
              {[
                "UP TO 10-YEAR BATTERY LIFE Simply install it and start collecting data",
                "MULTIPLE DATA CAPTURE POINTS Temp, humidity, lux and motion monitoring ",
                "UP TO 200M TRANSMISSION (INDOORS) A small device with powerful capabilities",
                "LORA® WIRELESS COMMUNICATION Built based on LoRa® wireless protocol ",
                "EASY TO INSTAL Attach to any surface. No wiring required ",
                "100 PLUS DEVICES PER GATEWAY Easily scale up or down ",
                "LOW POWER CONSUMPTION Drastically better than 4G, Wifi, or Bluetooth-based devices",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-teal-500 sm:h-5 sm:w-5" />
                  <p className="text-sm sm:text-base font-light text-gray-600">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
            <div className="my-6 w-full border-t border-gray-300" />
            <div className="flex items-center justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RubixLW;
