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
import { RubixIO16 } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const ProductRubix16 = () => {
  return (
    <section className="lg:mt-28 mt-12 pb-32 md:ml-24 px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl lg:text-6xl mt-4 text-theme-blue font-bold text-center">
          Rubix iO 16
          <br />
          Scalable I/O Control <br />
          for Smart Buildings
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
                className="swiper-products aspect-[5/4] mb-12 w-full object-contain h-auto rounded-lg"
              >
                {RubixIO16.map((item) => (
                  <SwiperSlide key={item.id}>
                    <img
                      src={item.image}
                      alt={`Rubix ${item.id}`}
                      className="w-full h-auto mb-4 mt-0 object-contain rounded-lg "
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div>
                <table className="w-full table-auto mt-5">
                  <thead>
                    <tr>
                      <th className="border px-4 py-2 bg-gray-200 font-bolt text-sm ">
                        SPECIFICATION
                      </th>
                      <th className="border px-4 py-2 bg-gray-300 font-bolt text-sm">
                        VALUE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-4 py-2 text-lg sm:text-sm ">
                        Mounting
                      </td>
                      <td className="border px-4 py-2 font-light text-lg sm:text-sm">
                        Din Rail Enclosure
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-lg sm:text-sm">
                        Size
                      </td>
                      <td className="border px-4 py-2 font-light text-lg sm:text-sm">
                        1126556mm H/W/D
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-lg sm:text-sm ">
                        Protection Level
                      </td>
                      <td className="border px-4 py-2 font-light text-lg sm:text-sm">
                        IP40
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-lg sm:text-sm">
                        Power Supply
                      </td>
                      <td className="border px-4 py-2 font-light text-lg sm:text-sm">
                        24VAC or 24VDC
                      </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                      <td className="border px-4 py-2 text-lg sm:text-sm">
                        Material
                      </td>
                      <td className="border px-4 py-2 font-light text-lg sm:text-sm">
                        ABS Plastic
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>
          </div>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="font-light text-lg text-gray-400 leading-relaxed sm:text-sm sm:break-words md:text-lg w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
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
                className="flex items-center justify-center w-auto px-6 py-3 bg-white text-black border border-theme-teal text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
                download
              >
                DATASHEET
              </a>
              <Button
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-io-16/"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
                download
              >
                USER MANUAL
              </Button>
            </div>
            <div className="my-6 w-full border-t border-gray-300" />
            <h3 className="mb-4 text-xl lg:text-2xl font-bold text-theme-blue w-full mx-auto">
              Just a few of the benefits
            </h3>
            <ul className="list-disc pl-5 space-y-3 sm:space-y-2 text-lg sm:text-base font-light text-gray-400">
              {[
                "INTEGRATE INTO ANY BMS Easily add to your existing",
                "HVAC CONTROLS AND REMOTE METERING  ",
                "LORA WIRELESS COMMUNICATION LoRaWAN® enabled IO-Device",
                "EASY TO INSTALL Fast install at a low cost ",
                "PLUG AND PLAY Add extra modules to the Rubix Compute",
                "SEND DATA ANYWHERE Add to any BMS system ",
              ].map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <div className="my-6 w-full border-t border-gray-300" />
            <h3 className="mb-4 text-xl md:text-2xl font-bold text-theme-blue w-full mx-auto">
              iO Specs
            </h3>
            <h4 className="text-base lg:text-lg font-bold mt-4 mb-4 text-theme-teal">
              Inputs
            </h4>
            <p className="font-light text-lg text-gray-400 leading-relaxed sm:text-sm sm:break-words md:text-lg w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
              • 0-10dc <br />
              • Digital <br />
              • 4-20ma <br />• 10k type 2 thermistor
            </p>
            <h4 className="text-base lg:text-lg font-bold mt-4 mb-4 text-theme-teal">
              Outputs
            </h4>
            <p className="font-light text-base md:text-lg text-gray-400 leading-relaxed sm:text-sm sm:break-words w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
              • 0-10dc <br />• Digital (Switch a 12vdc Relay)
            </p>
            <div className="flex items-center justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRubix16;
