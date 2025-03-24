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
import { ArrowRight } from "lucide-react";
import { Slides } from "../json/landingPageData";
import { Logos3 } from "./Logos3";
import Button from "../elements/Button";

export default function PorfolioCarousel() {
  return (
    <>
      <div className="w-full mb-20 md:mt-24">
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
            <section className="hero flex flex-col lg:flex-row items-center mt-0 pb-12 md:pb-0  overflow-hidden">
              <div className="w-full lg:w-1/2 xl:pl-0 sm:pr-2 mt-2 flex flex-col justify-center items-start px-4">
                <h1 className="text-3xl md:text-6xl text-theme-blue text-left font-bold leading-tight mb-5">
                  {slide.title}
                </h1>
                <p className="font-light text-lg text-gray-400 leading-relaxed mb-8 md:mb-16">
                  {slide.description}
                </p>
                <Fade direction="up" delay={200} triggerOnce>
                  <Button
                    href="/get-demo/"
                    type="link"
                    className="flex w-72 md:w-48 h-12 md:h-18 items-center px-8 py-5 bg-white text-black border border-theme-teal text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white "
                  >
                    Get a demo
                    <ArrowRight className="ml-2 w-4" />
                  </Button>
                </Fade>
              </div>
              <div className="flex w-full justify-center items-center pt-5 md:w-1/2 lg:w-1/2 w-full g:order-last">
                <Fade direction="up" triggerOnce>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="ml-0 max-w-full h-full  object-contain md:object-fill sm:ml-0 md:ml-32  overflow-hidden"
                    style={{ maxHeight: "100%", objectFit: "contain" }}
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
