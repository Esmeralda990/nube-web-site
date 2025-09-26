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
import { Droplet } from "../json/ProductsPageData.js";

const handleDownload = () => {
  trackEvent({
    action: "pdf_download",
    category: "Datasheet",
    label: "Droplet-Datasheet.pdf",
  });
};

const handleUsermanual = () => {
  trackEvent({
    action: "manual_click",
    category: "Documentation",
    label: "Droplet - User Manual",
  });
};

const LoraDroplet = () => {
  return (
    <section className="lg:mt-28 mt-12 pb-12 md:ml-24 px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-6xl mt-4 text-theme-blue font-bold text-center dark:text-white">
          Droplet <br />
          LoRa® Sensor for Smarter Monitoring
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
                className="swiper-products mb-12  aspect-[5/4] w-full h-auto rounded-lg"
              >
                {Droplet.map((item) => (
                  <SwiperSlide key={item.id}>
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
                <table className="w-full table-auto ">
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
                      <td className="border px-4 py-2 dark:text-white">
                        Supported Frequencies
                      </td>
                      <td className="border px-4 py-2 font-light dark:text-white">
                        868/915Mhz
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 ">Spreading Factor</td>
                      <td className="border px-4 py-2 font-light">6-12</td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 ">Bandwidth</td>
                      <td className="border px-4 py-2 font-light">
                        7.8 – 500 kHz
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2">Effective Bitrate</td>
                      <td className="border px-4 py-2 font-light">
                        .018 – 37.5 kbps
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2">
                        Estimated Sensitivity
                      </td>
                      <td className="border px-4 py-2 font-light">
                        111 to -148 dBm
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-xl lg:text-2xl font-bold mt-8 mb-4 text-theme-blue dark:text-theme-teal">
                Sensor Specifications
              </h3>
              <div>
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 bg-gray-200 font-bolt ">
                        SENSOR
                      </th>
                      <th className="border px-4 py-2 bg-gray-300 font-bolt ">
                        SPECIFICATION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 dark:text-white">
                        Temperature Sensor
                      </td>
                      <td className="border px-4 py-2 font-light dark:text-white">
                        @25°C ± 0.5°C, from 0…65°C ±1°C
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 ">Humidity Sensor</td>
                      <td className="border px-4 py-2 font-light">
                        -40°C - 85°C, Resolution .008 %RH
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted dark:text-white">
                      <td className="border px-4 py-2 ">Light Sensor</td>
                      <td className="border px-4 py-2 font-light">
                        Range of 1 – 65535lx
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
              The Droplet is a LoRa® IoT sensor. It captures multiple points of
              data–temperature, humidity, lux, and motion monitoring with
              minimal time required for installation and wiring.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/Docs/Droplet-Datasheet.pdf"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-3 bg-white text-black border border-theme-teal text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
                download="Droplet-Datasheet.pdf"
                onClick={handleDownload}
              >
                DATASHEET
              </a>
              <a
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/droplets-v1/"
                type="link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
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
                "UP TO 10-YEAR BATTERY LIFE: Simply install it and start collecting data",
                "MULTIPLE DATA CAPTURE POINTS: Temp, humidity, lux and motion monitoring ",
                "UP TO 200M TRANSMISSION (INDOORS): A small device with powerful capabilities",
                "LORA® WIRELESS COMMUNICATION: Built based on LoRa® wireless protocol ",
                "EASY TO INSTAL: Attach to any surface. No wiring required ",
                "100 PLUS DEVICES PER GATEWAY: Easily scale up or down ",
                "LOW POWER CONSUMPTION: Drastically better than 4G, Wifi, or Bluetooth-based devices",
              ].map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <div className="my-6 w-full border-t border-gray-300" />
            <h3 className="mb-4 text-xl lg:text-2xl font-bold text-theme-blue w-full mx-auto dark:text-theme-teal">
              More about the Droplet
            </h3>
            <h4 className=" text-base lg:text-xl font-bold text-theme-teal mb-2 dark:text-white">
              Why LoRa®
            </h4>
            <p className="font-light  text-base lg:text-lg  text-gray-400 leading-relaxed sm:break-words w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
              LoRa® is a low-power, long-range wireless technology designed for
              the Internet of Things. It is less affected by buildings and other
              obstructions than regular WiFi, with one gateway generally being
              able to provide coverage for a 70x70m 3-story building. <br />
              LoRa® is expected to hold 75% of the IoT device market share soon.
              The LoRa® community is expanding rapidly, with many new
              contributions and developments occurring every day.
              <br />
              • Significantly longer range than for Bluetooth and WiFi <br />
              • Drastically lower power consumption than for Bluetooth, WiFi, or
              4G <br />
              • AES128 encryption <br />
              • Excellent penetration through obstacles <br />• Highly versatile
              application, which translates into easier integration
            </p>
            <div className="flex items-center justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoraDroplet;
