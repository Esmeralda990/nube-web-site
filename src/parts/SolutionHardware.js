/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Solutionsfeature } from "json/landingPageData";

const FeatureSwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex]);

  return (
    <section className="py-32 pt-12 pb-12">
      <div className="container mx-auto max-w-screen-2xl flex flex-col-reverse md:flex-row gap-8 relative px-8 h-full">
        <ul className="md:w-1/2 flex flex-col gap-4">
          {Solutionsfeature.map((feature, index) => (
            <li key={feature.id} className="p-4 rounded-lg transition-all">
              <button
                className={`cursor-pointer w-full text-left flex flex-col items-start gap-3 p-4 rounded-lg transition-all px-8  ${
                  activeIndex === index ? "bg-gray-50 text-black" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                {typeof feature.icon === "string" ? (
                  <img
                    src={feature.icon}
                    alt={feature.title}
                    className="size-10 h-full"
                  />
                ) : (
                  <feature.icon className="size-10" />
                )}
                <div>
                  <h4 className="text-xl md:text-base text-theme-blue font-bold mb-3">
                    {feature.title}
                  </h4>
                  <p className="text-base md:text-sm font-light text-gray-400 text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>

        <div className="md:w-1/2">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination]}
            navigation={false}
            pagination={false}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            className="rounded-lg border border-border w-full h-auto md:h-[900px] xl:h-[900px] "
            slideToClickedSlide
          >
            {Solutionsfeature.map((feature, index) => (
              <SwiperSlide
                key={feature.id}
                className="flex items-center justify-center p-4"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className={`w-full max-w-full h-auto object-contain items-center  xl:mt-20 lg:mt-20 md:mt-32 sm:mt-16 rounded-lg transition-opacity duration-300 ${
                    activeIndex === index ? "opacity-100" : "opacity-50"
                  }`}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeatureSwiper;
