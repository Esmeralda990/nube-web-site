/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button"; // Importa tu componente Button

export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-32 pb-32">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold leading-tight mb-5">
            Building Smarter, Thinking Forward
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-10">
            Explore our tech for sustainable solutions to current and future
            challenges.
          </p>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-4 px-10 gap-8 sm:gap-6 xl:gap-16">
          {data.map((item, index) => (
            <Fade
              direction={item.animation}
              delay={500 * index}
              triggerOnce
              key={item.id}
            >
              {" "}
              {/* key prop  */}
              <div className="group rounded-2xl shadow-xl border border-light-theme-blue transform transition duration-500 hover:scale-105">
                <Button
                  type="link"
                  href={`/service/${item.id}`}
                  className="block w-full"
                >
                  {" "}
                  {/*  Button */}
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full rounded-t-2xl p"
                  />
                  <div className="py-4">
                    {" "}
                    {/* títle y descrip */}
                    <h2 className="text-theme-blue-500 text-center text-xl py-2">
                      {item.title}
                    </h2>
                    <p className="font-light text-gray-400 text-center">
                      {item.description || item.type} {/* type */}
                    </p>
                  </div>
                </Button>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
