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
import { RubixIO16 } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const ProductRubix16 = () => {
  return (
    <section className="py-32 pb-12 md:ml-24 ml-0">
      <div className="container mx-auto">
        <p className="text-sm sm:text-sm lg:text-lg text-center font-bold text-teal-500 mb-2">
          Building Controller.
        </p>
        <h1 className="text-3xl mt-4 text-theme-blue font-bold md:text-5xl text-center">
          Rubix iO 16
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
              {RubixIO16.map((item) => (
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
              iO Specs
            </h1>
            <h2 className="text-xl font-bold mt-4 mb-4 text-theme-blue">
              Inputs
            </h2>
            <p className="font-light text-base text-gray-400 mb-10">
              ✔︎0-10dc <br />
              ✔︎Digital <br />
              ✔︎4-20ma <br />
              ✔︎10k type 2 thermistor
            </p>
            <h1 className="text-xl font-bold mt-4 mb-4 text-theme-blue">
              Outputs
            </h1>
            <p className="font-light text-base text-gray-400 mb-10 ">
              ✔︎0-10dc <br />
              ✔︎Digital (Switch a 12vdc Relay)
            </p>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              Physical Specs
            </h1>
            <div>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="border px-4 py-2 bg-gray-200 font-bolt ">
                      SPECIFICATION
                    </th>
                    <th className="border px-4 py-2 bg-gray-300 font-bolt ">
                      VALUE
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2 ">Mounting</td>
                    <td className="border px-4 py-2 font-light">
                      Din Rail Enclosure
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 ">Size</td>
                    <td className="border px-4 py-2 font-light">
                      1126556mm H/W/D
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2 ">Protection Level</td>
                    <td className="border px-4 py-2 font-light">IP40</td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Power Supply</td>
                    <td className="border px-4 py-2 font-light">
                      24VAC or 24VDC
                    </td>
                  </tr>
                  <tr className="m-0 border-t p-0 even:bg-muted">
                    <td className="border px-4 py-2">Material</td>
                    <td className="border px-4 py-2 font-light">ABS Plastic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
              Rubix iO 16 is a series of low-cost iO modules that can
              communicate wirelessly or over wired Ethernet & RS-485. This means
              no more frustrations of cabling in legacy automation solutions.
              Monitor and control your HVAC, power, and water usage. 8 universal
              outputs, 8 universal inputs capable of 0-10dc, 4-20ma, Digital &
              10K Temperatu
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/Docs/Rubix-IO-16-Datasheet.pdf"
                type="link"
                className="px-6 py-3 bg-gray-300 text-black text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
                download
              >
                DATASHEET
              </a>
              <Button
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-io-16/"
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
                "INTEGRATE INTO ANY BMS Easily add to your existing building management system via BACnet, modbus or LoRaWAN®",
                "HVAC CONTROLS AND REMOTE METERING Use it as a native stand-alone HVAC and lighting control ",
                "LORA WIRELESS COMMUNICATION LoRaWAN® enabled IO-Device",
                "EASY TO INSTALL Fast install at a low cost ",
                "PLUG AND PLAY Add extra modules to the Rubix Compute",
                "SEND DATA ANYWHERE Add to any BMS system as a low cost Modbus-RTU Device",
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

export default ProductRubix16;
