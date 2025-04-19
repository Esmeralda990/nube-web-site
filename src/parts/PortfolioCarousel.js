/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { ArrowRight } from "lucide-react";
import { Slides } from "../json/landingPageData";
import { Logos3 } from "./Logos3";
import Button from "../elements/Button";

export default function PorfolioCarousel() {
  return (
    <>
      <div className="w-full">
        <Logos3
          heading="Customer Suceess Stories"
          description="All of our 500+ Clients are happy"
        />
      </div>

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
        className="w-full mb-20 md:mb-40"
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className="container mx-auto px-4 max-w-screen-xl">
              <div className="flex flex-col-reverse md:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2 xl:pl-0 sm:pr-2 mt-2 flex flex-col justify-center items-start px-4">
                  <h2 className="text-3xl lg:text-5xl text-theme-blue text-left font-bold leading-tight mb-5">
                    {slide.title}
                  </h2>
                  <p className="font-light text-base lg:text-lg text-gray-400 leading-relaxed mb-6 md:mb-12">
                    {slide.description}
                  </p>
                  <Fade delay={200} triggerOnce>
                    <Button
                      href="/get-demo/"
                      type="link"
                      className="flex w-full md:w-48 h-12 md:h-18 items-center px-8 py-5 bg-white text-black border border-theme-teal text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white "
                    >
                      Get a demo
                      <ArrowRight className="ml-2 w-4" />
                    </Button>
                  </Fade>
                </div>
                <div className="w-full justify-center pt-5 lg:w-1/2">
                  <Fade triggerOnce>
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full max-w-lg sm:max-w-lg md:max-w-2xl lg:max-w-2xl xl:max-w-3xl h-auto object-contain transition-all  duration-300 xl:ml-48  lg:ml-28  md:ml-20 "
                      style={{ maxHeight: "100%", objectFit: "contain" }}
                    />
                  </Fade>
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
