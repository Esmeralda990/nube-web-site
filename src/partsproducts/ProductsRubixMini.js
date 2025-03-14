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
import { RubixMini } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const ProductRubixmini = () => {
  return (
    <section className="py-32 pb-12 md:ml-24 ml-0">
      <div className="container mx-auto">
        <h1 className="text-3xl mt-4 text-theme-blue font-bold md:text-5xl text-center">
          Rubix Compute Mini
        </h1>
        <p className="text-sm sm:text-sm lg:text-lg text-center font-bold text-theme-teal mb-2">
          Same as Rubix Compute But more compact.
        </p>
        <div className="relative mt-12 grid gap-16 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1">
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
              {RubixMini.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide-products">
                  <img
                    src={item.image}
                    alt={`RubixMini ${item.id}`}
                    className="w-full h-auto mb-8 mt-0 object-cover rounded-lg "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            s
            <div>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 bg-gray-200 font-bolt ">
                      FEATURE/SPECIFICATION
                    </th>
                    <th className="border px-4 py-2 bg-gray-300 font-bolt ">
                      DETAILS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 ">BMS Integration</td>
                    <td className="border px-4 py-2 font-light">
                      Integrate into any BMS via BACnet/IP
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 ">Power Supply</td>
                    <td className="border px-4 py-2 font-light">
                      24VAC and 24VDC
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 ">Memory</td>
                    <td className="border px-4 py-2 font-light">
                      1GB of RAM & 8GB of storage
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Ethernet Ports</td>
                    <td className="border px-4 py-2 font-light">
                      2x Ethernet Ports (Dual NIC)
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Serial Communication</td>
                    <td className="border px-4 py-2 font-light">
                      1x RS-485 & 1x RS-485 via side-plugin
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">LoRa Connectivity</td>
                    <td className="border px-4 py-2 font-light">
                      1x Inbuilt LoRa® for Nube-IO LoRa sensors
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">LoRaWAN Connectivity</td>
                    <td className="border px-4 py-2 font-light">
                      1x Addon LoRaWAN® for 3rd party LoRaWAN® sensors
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">IO Expansion</td>
                    <td className="border px-4 py-2 font-light">
                      1x Side plugin for IO expansion (Power & Comms to the
                      IO-16)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="font-light text-lg text-gray-400 leading-relaxed sm:text-sm sm:break-words md:text-lg w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
              The Rubix Compute is the Nube iO gateway. It is a small wireless &
              wired gateway capable of monitoring and controlling various
              applications. For example, it can be used in building to control
              and monitor the heating, cooling and ventilation systems. This BMS
              multi-gateway will collect data from both wired and wireless
              devices. It will enable you to aggregate data from multiple
              sensors and send it anywhere – your cloud, a local server, or
              3rd-party hardware via BACnet.
            </p>
            <div className="flex gap-4 mt-6">
              <Button
                href="/contact"
                type="link"
                className="px-6 py-3 bg-teal-600 text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-800"
                download
              >
                LEARN MORE
              </Button>
            </div>
            <div className="my-6 w-full border-t border-gray-300" />
            <h2 className="mb-4 text-lg sm:text-xl font-bold text-theme-blue w-full mx-auto">
              Just a few of the benefits
            </h2>
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
                  <CheckCircle2 className="h-6 w-6 text-theme-teal sm:h-5 sm:w-5" />
                  <p className="text-lg sm:text-base font-light text-gray-400">
                    {benefit}
                  </p>
                </li>
              ))}
            </ul>
            <div className="my-6 w-full border-t border-gray-300" />
            <h2 className="mb-4 text-lg sm:text-xl font-bold text-theme-blue w-full mx-auto">
              Programmable Via Rubix-CE
            </h2>
            <p className="font-light mb-4 text-lg text-gray-400 leading-relaxed sm:text-sm sm:break-words md:text-lg w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
              ✔︎Powerful Flow-Based Programming <br />
              ✔︎100s of pre-made nodes
              <br />
              ✔︎Download Via Rs-485 or Ethernet
            </p>
            <h2 className="mb-4  text-lg sm:text-xl font-bold text-theme-blue w-full mx-auto">
              One Device. Multiple Configurations
            </h2>
            <p className="font-light text-lg text-gray-400 leading-relaxed sm:text-sm sm:break-words md:text-lg w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
              Rubix Compute Mini is a one of a kind IoT gateway that aggregates
              all types of building data via multiple peripherals
            </p>
            <div className="flex items-center justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRubixmini;
