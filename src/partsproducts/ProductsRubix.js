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
import { RubixCompute } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const ProductRubix = () => {
  return (
    <section className="py-32 pb-12 md:ml-24 ml-0">
      <div className="container mx-auto">
        <p className="text-sm sm:text-sm lg:text-lg text-center font-bold text-teal-500 mb-2">
          Supervisory Controller.
        </p>
        <h1 className="text-3xl mt-4 text-theme-blue font-bold md:text-5xl text-center">
          Rubix Compute
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
              {RubixCompute.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide-products">
                  <img
                    src={item.image}
                    alt={`Rubix ${item.id}`}
                    className="w-full h-auto mb-8 mt-0 object-cover rounded-lg "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              One Device. Multiple Protocols
            </h1>
            <p className="font-light text-base text-gray-400 mb-10">
              The Rubix-Compute can be used in the modern web via a REST-API.
              But the device is also a native BACnet/IP device.
            </p>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              One Device. Multiple Configurations
            </h1>
            <p className="font-light text-base text-gray-400 mb-10 ">
              Rubix Compute is a one of a kind IoT gateway that aggregates all
              types of building data via multiple peripherals
            </p>
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
                    <td className="border px-4 py-2 ">Integration</td>
                    <td className="border px-4 py-2 font-light">BACnet/IP</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 ">Memory</td>
                    <td className="border px-4 py-2 font-light">1GB RAM</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 ">Storage</td>
                    <td className="border px-4 py-2 font-light">8GB</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Ethernet Ports</td>
                    <td className="border px-4 py-2 font-light">2xDual NIC</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">RS 485 Ports</td>
                    <td className="border px-4 py-2 font-light">2x</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Built-in LoRa®</td>
                    <td className="border px-4 py-2 font-light">
                      For Nube iO LoRa® sensors
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Add-on LoRaWAN®</td>
                    <td className="border px-4 py-2 font-light">
                      For 3rd party LoRaWAN® sensors
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">IO Expansion</td>
                    <td className="border px-4 py-2 font-light">
                      Side plugin Power & Comms to IO 16
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">RS 485 Expansion</td>
                    <td className="border px-4 py-2 font-light">
                      2x RJ12 for adding 4x RS-485
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
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
                className="px-6 py-3 bg-gray-300 text-black text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
                download="RC-06 - Datasheet.pdf"
              >
                DATASHEET
              </a>
              <Button
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-compute"
                type="link"
                className="px-6 py-3 bg-teal-600 text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-800"
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
                "MULTIPLE CONFIGURATIONS Use it as a master, slave, or gateway device",
                "SEAMLESS INTEGRATION Integrate in your existing BMS Via BACnet/IP",
                "WIRELESS COMMUNICATION Wireless enabled comms: LoRa® & LoRaWAN®",
                "WIRELESS RECEIVER LoRa® & LoRaWAN®",
                "HVAC CONTROLS Use it as a native stand-alone HVAC and lighting control",
                "RUN MULTIPLE SERVICES Run BACnet and LoRaWan®, MQTT at the same time",
                "SEND DATA ANYWHERE Be it a cloud, local server, or 3rd-party hardware",
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

export default ProductRubix;
