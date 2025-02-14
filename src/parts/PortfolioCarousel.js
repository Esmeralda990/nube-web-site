/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { Slides } from "../json/landingPageData";
import { Logos3 } from "./Logos3";
import Button from "../elements/Button";

export default function PorfolioCarousel() {
  return (
    <>
      <div className="w-full mb-0">
        <Logos3 />
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
        className="w-full mb-40"
      >
        {Slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <section className="hero flex flex-col lg:flex-row items-center mt-0 h-[700px]">
              <div className="w-full  lg:w-1/2 xl:pl-0 sm:pr-2 mt-2">
                <h1 className="text-5xl sm:text-5xl text-theme-blue font-bold leading-tight mb-5">
                  {slide.title}
                </h1>
                <p className="font-light text-lg text-gray-400 leading-relaxed mb-16">
                  {slide.description}
                </p>
                <Fade direction="up" delay={200} triggerOnce>
                  <Button
                    href="/project"
                    type="link"
                    className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
                  >
                    Get a demo
                    <svg
                      className="ml-2 w-7 h-7 text-white animate-bounce-x"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </Fade>
              </div>
              <div className="flex pt-5 md:w-fit w-full justify-end items-center order-first md:order-first lg:order-last lg:w-1/2">
                <Fade direction="up" triggerOnce>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="max-w-full h-full object-fill ml-40"
                  />
                </Fade>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
