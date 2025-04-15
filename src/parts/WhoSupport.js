/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";
import { WhoSupport } from "../json/landingPageData";

const Partner = () => {
  return (
    <section className="container mx-auto max-w-screen-2xl flex flex-col items-center mb-40 px-6">
      <Fade direction="" triggerOnce>
        <h1 className="text-3xl md:text-5xl text-theme-blue text-center font-bold px-6 mb-8">
          How We Support Our Partners
        </h1>
      </Fade>
      <Fade direction="" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center max-w-5xl">
          We foster strong partner relationships through dedicated support,
          expert technical access, collaborative marketing, and continuous
          training. This ensures seamless project implementation, maximized
          efficiency, and mutual growth, empowering our partners for lasting
          success
        </p>
      </Fade>

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1lg:gap-10">
        {WhoSupport.map((item, index) => (
          <Fade direction="" triggerOnce key={index}>
            <div className="flex flex-col rounded-lg border border-bg-gray-500 overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full object-cover rounded-t-lg h-64 md:h-30 lg:h-30 transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-2.5 font-bold md:text-xl">{item.title}</h3>
                <p className="font-light text-gray-400">{item.description}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Partner;
