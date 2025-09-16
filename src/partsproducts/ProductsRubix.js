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
import { RubixCompute } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const ProductRubix = () => {
  return (
    <section className="lg:mt-28 mt-12 pb-32 md:ml-24 px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-6xl mt-4 text-theme-blue font-bold text-center dark:text-white">
          Rubix Compute <br />
          Multi-protocol Smart Gateway
        </h1>
        <div className="relative mt-12 grid gap-16 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1">
          <div className="mx-auto w-full max-w-[800px]">
            <article className="prose order-2 mx-auto md:order-1 ">
              <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                speed={400}
                className="swiper-products aspect-[5/4] mb-12 object-contain w-full max-w-4xl mx-auto rounded-lg"
              >
                {RubixCompute.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img
                      src={item.image}
                      alt={`Rubix ${item.id}`}
                      className="w-full h-full object-contain mx-auto"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h3 className="text-xl lg:text-2xl font-bold mt-8 mb-4 text-theme-blue dark:text-theme-teal">
                One Device. Multiple Protocols
              </h3>
              <p className="font-light text-base md:text-lg text-gray-400 leading-relaxed sm:break-words overflow-hidden max-w-xl">
                The Rubix-Compute can be used in the modern web via a REST-API.
                But the device is also a native BACnet/IP device.
              </p>
              <h3 className="text-xl lg:text-2xl font-bold mt-8 mb-4 text-theme-blue dark:text-theme-teal">
                One Device. Multiple Configurations
              </h3>
              <p className="font-light text-base md:text-lg text-gray-400 leading-relaxed  sm:break-words overflow-clip max-w-xl mb-8">
                Rubix Compute is a one of a kind IoT gateway that aggregates all
                types of building data via multiple peripherals.
              </p>
              <div className="overflow-x-auto ">
                <table className="min-w-m sm:min-w-xs table-auto justify-start">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 bg-gray-200 font-bold text-sm ">
                        FEATURE
                      </th>
                      <th className="border px-4 py-2 bg-gray-300 font-bold text-sm">
                        SPECIFICATION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-sm dark:text-white ">
                        Integration
                      </td>
                      <td className="border px-4 py-2 font-light text-sm dark:text-white ">
                        BACnet/IP
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm ">Memory</td>
                      <td className="border px-4 py-2 font-light text-sm ">
                        1GB RAM
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm ">Storage</td>
                      <td className="border px-4 py-2 font-light text-sm ">
                        8GB
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white ">
                      <td className="border px-4 py-2 text-sm ">
                        Ethernet Ports
                      </td>
                      <td className="border px-4 py-2 font-light text-sm ">
                        2xDual NIC
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-sm">RS 485 Ports</td>
                      <td className="border px-4 py-2 font-light text-sm">
                        2x
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-xs sm:text-sm">
                        Built-in LoRa®
                      </td>
                      <td className="border px-4 py-2 font-light text-xs sm:text-sm">
                        For Nube iO LoRa® sensors
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-xs sm:text-sm">
                        Add-on LoRaWAN®
                      </td>
                      <td className="border px-4 py-2 font-light text-xs sm:text-sm">
                        For 3rd party LoRaWAN® sensors
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-xs sm:text-sm">
                        I/O Expansion
                      </td>
                      <td className="border px-4 py-2 font-light text-xs sm:text-sm">
                        Side plugin Power & Comms to iO 16
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 text-xs sm:text-sm">
                        RS 485 Expansion
                      </td>
                      <td className="border px-4 py-2 font-light text-xs sm:text-sm">
                        2x RJ12 for adding 4x RS-485
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row lg:mt-0">
            <p className="font-light text-base text-gray-400 leading-relaxed md:text-lg sm:break-words overflow-clip max-w-sm md:max-w-full ">
              The Rubix Compute is the Nube iO gateway. It is a small wireless &
              wired gateway capable of monitoring and controlling various
              applications. For example, it can be used in building to control
              and monitor the heating, cooling and ventilation systems. This BMS
              multi-gateway will collect data from both wired and wireless
              devices. It will enable you to aggregate data from multiple
              sensors and send it anywhere – your cloud, a local server, or
              3rd-party hardware via BACnet
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/Docs/RC-06 - Datasheet.pdf"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-2 bg-white text-black border border-theme-teal text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
                download="RC-06 - Datasheet.pdf"
              >
                DATASHEET
              </a>
              <Button
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-compute"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-2 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
              >
                USER MANUAL
              </Button>
            </div>
            <div className="my-6 w-full border-t border-gray-300" />
            <h3 className="mb-4 text-xl md:text-2xl font-bold mt-8 text-theme-blue dark:text-theme-teal">
              Just a few of the benefits
            </h3>
            <ul className="list-disc pl-5 space-y-3 sm:space-y-2 text-lg sm:text-base font-light text-gray-400">
              {[
                "MULTIPLE CONFIGURATIONS: Use it as a master, slave, or gateway device",
                "SEAMLESS INTEGRATION: Integrate in your existing BMS Via BACnet/IP",
                "WIRELESS COMMUNICATION: Wireless enabled comms: LoRa® & LoRaWAN®",
                "WIRELESS RECEIVER: LoRa® & LoRaWAN®",
                "HVAC CONTROLS: Use it as a native stand-alone HVAC and lighting control",
                "RUN MULTIPLE SERVICES: Run BACnet and LoRaWan®, MQTT at the same time",
                "SEND DATA ANYWHERE: Be it a cloud, local server, or 3rd-party hardware",
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

export default ProductRubix;
