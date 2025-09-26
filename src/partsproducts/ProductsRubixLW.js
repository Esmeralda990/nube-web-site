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
import { trackEvent } from "utils/Analytics";
import { RubixConnectLW } from "../json/ProductsPageData.js";

const handleDownload = () => {
  trackEvent({
    action: "pdf_download",
    category: "Datasheet",
    label: "Rubix-Connect-LW-Datasheet.pdf",
  });
};

const handleUsermanual = () => {
  trackEvent({
    action: "manual_click",
    category: "Documentation",
    label: "Rubix-Connect-LW - User Manual",
  });
};

const RubixLW = () => {
  return (
    <section className="lg:mt-28 lg:mt-12 pb-32 mt-4">
      <div className="container mx-auto px-12">
        <h1 className="text-3xl lg:text-6xl mt-4 text-theme-blue font-bold text-center dark:text-white">
          Rubix Connect LW <br />
          Smart LoRaWAN® Expansion Card
        </h1>
        <div className="relative mt-12 grid gap-16 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
          <div className="mx-auto w-full max-w-[800px]">
            <article className="prose order-2 mx-auto md:order-1">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={400}
                className="swiper-products aspect-[5/4] mb-12 object-contain w-full max-w-4xl mx-auto rounded-lg"
              >
                {RubixConnectLW.map((item) => (
                  <SwiperSlide key={item.id} className="swiper-slide-products">
                    <img
                      src={item.image}
                      alt={`Droplet ${item.id}`}
                      className="w-full h-auto mb-8 mt-0 object-cover rounded-lg "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h3 className="text-xl lg:text-2xl font-bold mt-8 mb-4 text-theme-blue dark:text-theme-teal">
                Capabilities
              </h3>
              <div>
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 bg-gray-200 font-bolt text-sm ">
                        FEATURE
                      </th>
                      <th className="border px-4 py-2 bg-gray-300 font-bolt text-sm ">
                        SPECIFICATION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-sm dark:text-white">
                        Supported Frequencies
                      </td>
                      <td className="border px-4 py-2 font-light text-sm dark:text-white">
                        AU915-928
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm">
                        Spreading Factor
                      </td>
                      <td className="border px-4 py-2 font-light text-sm">
                        6-12
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm ">Bandwidth</td>
                      <td className="border px-4 py-2 font-light text-sm">
                        7.8 – 500 kHz
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm">
                        Effective Bitrate
                      </td>
                      <td className="border px-4 py-2 font-light text-sm">
                        .018 – 37.5 kbps
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm">
                        Estimated Sensitivity
                      </td>
                      <td className="border px-4 py-2 font-light text-sm">
                        111 to -148 dBm
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
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
            <div className="flex gap-4 mt-6">
              <a
                href="/Docs/Rubix-Connect-LW-Datasheet.pdf"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-2 bg-white text-black border border-theme-teal text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
                download="Rubix-Connect-LW-Datasheet.pdf"
                onClick={handleDownload}
              >
                DATASHEET
              </a>
              <a
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-connect-lw/"
                type="link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-auto px-6 py-2 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
                onClick={handleUsermanual}
              >
                USER MANUAL
              </a>
            </div>
            <div className="my-6 w-full border-t border-gray-300" />
            <h3 className="mb-4 text-xl lg:text-2xl font-bold text-theme-blue w-full mx-auto dark:text-theme-teal">
              Just a few of the benefits
            </h3>
            <ul className="list-disc pl-5 space-y-3 sm:space-y-2 text-lg sm:text-base font-light text-gray-400">
              {[
                "EASY TO INSTALL: Attach to any surface. No wiring required",
                "PLUG AND PLAY: Add extra modules to the Rubix-Compute",
                "LORA® WIRELESS COMMUNICATION: Built based on LoRa® wireless protocol",
                "EASILY SCALE UP OR DOWN: 100 Plus devices per gateway",
                "INTEGRATE INTO ANY BMS: Easily add to your existing building management system via BACnet, Modbus or LoRaWAN®",
              ].map((benefit, index) => (
                <li key={index}>{benefit}</li>
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
