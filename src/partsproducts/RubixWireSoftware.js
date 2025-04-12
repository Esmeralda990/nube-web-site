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
import { RubixWire } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const Wire = () => {
  return (
    <section className="py-16 pb-8 md:ml-24 ml-0">
      <div className="container mx-auto max-w-screen-2xl px-8">
        <h2 className="text-2xl mt-4 text-theme-blue font-bold md:text-5xl text-center">
          Rubix Wires
        </h2>
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
                className="swiper-products mb-12 w-full h-auto object-contain h-auto rounded-lg"
              >
                {RubixWire.map((item) => (
                  <SwiperSlide key={item.id}>
                    <video
                      src={item.image}
                      alt={`Wire ${item.id}`}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="swiper-product-gif w-full h-auto mt-0 object-cover rounded-lg"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <h1 className="text-2xl font-bold mb-4 text-theme-blue ">
                No licencing. Free on your device
              </h1>
              <p className="font-light text-lg text-gray-400 mb-10">
                The Wires program comes free with your Nube iO device with no
                ongoing licencing costs or point restrictions.
              </p>
            </article>
          </div>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <h3 className="text-xl mt-4 text-theme-blue font-bold md:text-2xl">
              Program your devices from anywhere
            </h3>
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
              Wires is an easy to use programming tool that allows users to
              remotely program BMS and IoT projects.
            </p>
            <h3 className="text-xl mt-4 text-theme-blue font-bold md:text-2xl">
              Take a tour
            </h3>
            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
              Learn more about Rubix Wires features in the HVAC and IoT space.
            </p>
            <div className="flex gap-4 mt-6">
              <Button
                href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-ce/"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
              >
                DOCUMENTATION
              </Button>
            </div>
            <div className="my-6 w-full border-t border-gray-300" />
            <ul className="flex flex-col gap-3 sm:gap-2">
              {[
                "Flow-based and real-time editor",
                "Drag-and-drop style",
                "Intuitive UI",
                "Similar to other well known BMS commissioning interfaces",
                "BACnet, Modbus, LoRaWAN® ready",
                "Pre-built nodes (blocks) for PAC, PID, RTU and FCU control",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-theme-teal sm:h-5 sm:w-5" />
                  <p className="text-lg sm:text-lg font-light text-gray-400">
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

export default Wire;
