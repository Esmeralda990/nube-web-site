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
import { Pagination, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { Slides } from "../json/landingPageData";
import { Logos3 } from "./Logos3";

export default function PorfolioCarousel() {
  return (
    <>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        loop={false}
        autoplay={{
          delay: 5000,
        }}
        speed={0}
        className="w-full lg:mb-28"
        style={{ height: "auto" }}
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className="container mx-auto px-4 md:mt-12  mt-12">
              <div className="flex flex-col-reverse md:flex-row items-center ">
                <div className="w-full lg:w-1/2 sm:pr-2 mt-2 flex flex-col justify-center items-start lg:ml-32">
                  <h1 className="text-3xl lg:text-6xl text-theme-blue text-left font-bold leading-tight mb-5">
                    {slide.title}
                  </h1>
                  <p className="text-xl lg:text-4xl text-theme-blue text-left font-light mb-5">
                    {slide.Subtitles}
                  </p>
                  <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed mb-6 md:mb-12 max-w-xl">
                    {slide.description}
                  </p>
                </div>
                <div className="w-full justify-center lg:w-1/2 pt-6 px-6 scale-[1.2]">
                  <Fade triggerOnce>
                    <Lottie
                      animationData={slide.image}
                      loop
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
        <Logos3 heading="Customer Suceess" />
      </div>
    </>
  );
}
