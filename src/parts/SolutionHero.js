/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { ChevronRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { WorldSolutions } from "../json/landingPageData";

const WorldSolution = () => {
  return (
    <section className="container mx-auto lg:max-w-screen-xl flex flex-col items-center lg:mb-40 px-6">
      <Fade direction="" triggerOnce>
        <h2 className="text-3xl md:text-5xl text-theme-blue text-center font-bold px-6 mb-6">
          Real-World Solutions, Powered by Nube iO
        </h2>
      </Fade>
      <Fade direction="" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-20">
          Discover how Nube iO transforms building management across industries
        </p>
      </Fade>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 lg:gap-10">
        {WorldSolutions.map((item, index) => (
          <Fade direction="" triggerOnce key={index}>
            <div className="flex flex-col rounded-lg border border-bg-gray-500 overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full object-cover rounded-t-lg h-64 md:h-80 lg:h-96  transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-2.5 font-bold md:text-xl">{item.title}</h3>
                <p className="font-light text-gray-400">{item.description}</p>
                <a
                  href={item.link}
                  className="flex items-center gap-1 text-base text-theme-teal mt-4"
                >
                  Learn more
                  <ChevronRight className="h-auto w-4" />
                </a>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default WorldSolution;
