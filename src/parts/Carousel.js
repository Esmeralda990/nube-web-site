/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React from "react";
import Lottie from "lottie-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Fade } from "react-awesome-reveal";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Slides } from "../json/landingPageData";
import { Logos3 } from "./Logos3";

export default function Carousel() {
  return (
    <>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        loop={false}
        autoplay={{
          delay: 5000,
        }}
        speed={200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        className="w-full mb-20 lg:mb-40 mt-12"
        style={{ height: "auto" }}
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className="container mx-auto lg:px-4 px-4">
              <div className="flex flex-col md:flex-row items-center ">
                <div className="w-full lg:w-1/2 sm:pr-2 mt-2 flex flex-col justify-center items-start">
                  <h2 className="text-2xl lg:text-5xl text-theme-blue text-left font-light mb-5 max-w-xl lg:mt-20">
                    {slide.Subtitles}
                  </h2>
                  <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed mb-6 md:mb-12 max-w-xl">
                    {slide.description}
                  </p>
                </div>
                <div className="w-full justify-center lg:w-1/2 pt-6 lg:scale-[1.1] scale-[1.1]">
                  <Fade triggerOnce>
                    <Lottie
                      key={slide.id}
                      animationData={slide.image}
                      autoplay
                      className="w-full max-w-xs xl:max-w-5xl h-auto"
                    />
                  </Fade>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="w-full">
        <Logos3 heading="Customer success" />
      </div>
    </>
  );
}
