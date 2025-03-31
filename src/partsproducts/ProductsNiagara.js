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
import { Edge } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const NiagaraEdge = () => {
  return (
    <section className="py-32 pb-12 md:ml-24 px-8">
      <div className="container mx-auto">
        <h1 className="text-3xl mt-4 text-theme-blue font-bold md:text-5xl text-center">
          Deliver the Reliability of Niagara ® to the Edge
        </h1>
        <div className="relative mt-12 grid gap-16 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 sm:grid-cols-1">
          <article className="prose order-2 mx-auto md:order-1">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={400}
              className="swiper-products mb-12 w-full object-contain h-auto rounded-lg"
            >
              {Edge.map((item) => (
                <SwiperSlide key={item.id}>
                  <img
                    src={item.image}
                    alt={`Edge ${item.id}`}
                    className="w-full h-auto mb-4 mt-0 object-contain rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </article>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <p className="font-light text-lg text-gray-400 leading-relaxed sm:text-sm sm:break-words md:text-lg w-full max-w-full min-w-full sm:max-w-xs overflow-hidden">
              CI-EdgeX1 is a powerful Niagara Framework controller, boasting the
              full capability of the Niagara framework in a small foot print.
              The CI-EdgeX1 is an ideal edge IoT gateway for aggregating all
              types of building data or undertaking building control and
              automation. The CI-EdgeX1 is developed by Australian company
              Conserve It.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="/Docs/ConserveIt_CI-EdgeX1 (May 2023).pdf"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-2 bg-white text-black border border-theme-teal text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
                download
              >
                DATASHEET
              </a>
              <Button
                href="https://www.conserveitiot.com/"
                type="link"
                className="pflex items-center justify-center w-auto px-6 py-2 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
                download
              >
                CONSERVE IT WEBSITE
              </Button>
            </div>
            <div className="my-6 w-full border-t border-gray-300" />
            <p className="mb-4 text-lg sm:text-xl font-bold text-theme-blue w-full mx-auto">
              Just a few of the benefits
            </p>
            <ul className="flex flex-col gap-3 sm:gap-2">
              {[
                "MULTIPLE CONFIGURATIONS 2 x Ethernet And 2x485",
                "SEAMLESS INTEGRATION 8Gb to 32Gb Of storage",
                "COMMUNICATION EXPANSION Options to add on four extra RS-485 ports",
                "MULTI PROTOCOL Build on top of the power Niagara Framework",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-theme-teal sm:h-5 sm:w-5" />
                  <p className="text-sm sm:text-base font-light text-gray-400">
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

export default NiagaraEdge;
