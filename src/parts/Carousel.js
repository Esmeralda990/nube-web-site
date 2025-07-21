/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import { Slides } from "../json/landingPageData";
import { Logos3 } from "./Logos3";

export default function Carousel() {
  const videoRefs = useRef([]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    const currentVideo = videoRefs.current[currentIndex];

    if (currentVideo) {
      currentVideo.currentTime = 0;
      currentVideo.play().catch(() => {});
    }
  };
  return (
    <>
      <Swiper
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{ clickable: true }}
        loop={false}
        autoplay={{
          delay: 4000,
        }}
        speed={200}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        preload="auto"
        playsInline
        onSlideChange={handleSlideChange}
        className="w-full mb-20 lg:mb-40 mt-12"
        style={{ height: "auto" }}
      >
        {Slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <section className="container mx-auto lg:px-4 px-4">
              <div className="flex flex-col md:flex-row items-center ">
                <div className="w-full lg:w-1/2 sm:pr-2 mt-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                  <h2 className="text-2xl lg:text-5xl text-theme-blue dark:text-white text-center lg:text-left font-light mb-5 max-w-xl lg:mt-20 ">
                    {slide.Subtitles}
                  </h2>
                  <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed mb-6 md:mb-12 max-w-xl">
                    {slide.description}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 pt-6 flex justify-center lg:justify-end">
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={slide.image}
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                    className="w-full max-w-xs lg:max-w-4xl h-auto  block dark:hidden"
                  />
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    src={slide.imageDark}
                    autoPlay
                    muted
                    loop
                    preload="auto"
                    playsInline
                    className="w-full max-w-xs lg:max-w-4xl h-auto hidden dark:block"
                  />
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
