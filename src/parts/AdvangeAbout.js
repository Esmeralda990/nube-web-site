/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useState } from "react";
import { AdvantageAbout } from "json/landingPageData";

const AdvAbout = () => {
  const advantages = AdvantageAbout.flat();
  const [cardNumber, setCardNumber] = useState(0);

  return (
    <section className="pt-20 mb-1 px-8 ">
      <div className="container mx-auto lg:max-w-screen-xl ">
        <div className="mb-20 max-w-md ">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl text-theme-blue">
            Who We Are
          </h2>
          <p className="text-base lg:text-lg  font-light text-gray-400">
            We’re a technology company redefining how buildings are connected,
            automated, and optimised—intuitive, scalable, and ready for the
            future.
          </p>
        </div>
        <div className="mb-14 grid h-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4 ">
          {advantages.map((item, index) => (
            <div
              key={index}
              role="button"
              tabIndex={0}
              onClick={() => setCardNumber(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCardNumber(index);
                }
              }}
              className={`cursor-pointer rounded-lg p-4 transition-opacity duration-300 ${
                cardNumber === index ? "opacity-100" : "opacity-50"
              } hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-theme-teal border `}
            >
              <div className="flex flex-col items-start gap-2 text-left">
                <div className="w-6 h-6 mb-1">
                  {typeof item.logo === "string" ? (
                    <img
                      src={item.logo}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    item.logo
                  )}
                </div>
                <h4 className="text-base lg:text-lg font-semibold text-theme-teal">
                  {item.title}
                </h4>
                <p className="text-base font-light text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-t-[28px] overflow-hidden border border-gray-200">
          <img
            src={advantages[cardNumber].image}
            alt={advantages[cardNumber].title}
            className="w-full h-[500px] object-cover object-center transition-all duration-500 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvAbout;
