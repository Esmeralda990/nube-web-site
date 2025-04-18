/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function ServiceSolutions({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto max-w-screen-2xl pt-12 lg:pt-32 pb-32 px-8">
        <Fade direction="" triggerOnce>
          <h3 className="text-xl md:text-3xl text-theme-blue text-center font-bold mb-5">
            Building Smarter, Thinking Forward
          </h3>
        </Fade>
        <Fade direction="" triggerOnce>
          <p className="font-light text-xl text-gray-400 text-center mb-10">
            Explore our tech for sustainable solutions to current and future
            challenges.
          </p>
        </Fade>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-8 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <Fade
              direction={item}
              delay={300 * index}
              triggerOnce
              key={item.id}
            >
              {" "}
              <div className="group rounded-2xl shadow-sm border border-gray-300">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full rounded-t-2xl "
                />
                <div className="py-2">
                  {" "}
                  <h4 className="text-theme-blue text-center text-xl py-2">
                    {item.title}
                  </h4>
                  <p className="font-light text-gray-400 text-center">
                    {item.description || item.type}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
