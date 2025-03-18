/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { ArrowRight } from "lucide-react";
import Fade from "react-awesome-reveal";

export default function Advantage({ data }) {
  const allCards = data.flat();

  return (
    <div className="py-28 mb-24 sm:mb-18 xl:mb-16 md:pl-24 ">
      <div className="container flex flex-col gap-16 lg:px-16">
        <Fade bottom triggerOnce>
          <div className="lg:max-w-sm">
            <h2 className="text-4xl md:text-5xl text-theme-blue font-bold mb-5  px-6">
              Why Nube iO?
            </h2>
            <p className="font-light text-lg text-muted-foreground text-gray-400 mb-3 md:mb-4 md:text-xl lg:mb-6 px-6 ">
              Innovative, Scalable, and Sustainable Solutions for Smarter
              Building Management
            </p>
            <a
              href="/about/"
              className="group flex items-center text-xs font-ligth text-theme-teal md:text-base lg:text-lg px-6"
            >
              About us
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 bg-white px-6">
          {allCards.map((item, index) => (
            <Fade key={index} bottom triggerOnce delay={200 * index}>
              <div className="flex flex-col overflow-clip rounded-xl border border-gray-200 ">
                <div className="relative h-56 w-full">
                  <img
                    className="aspect-[16/9] h-full w-full object-cover object-center"
                    src={item.imageUrl}
                    alt={item.title}
                  />
                </div>

                <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12 flex-1 flex flex-col">
                  <h3 className="mb-3 text-lg font-bold md:mb-4 md:text-2xl lg:mb-6 text-theme-blue">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground lg:text-base text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="px-6 pb-5">
                  {item.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
