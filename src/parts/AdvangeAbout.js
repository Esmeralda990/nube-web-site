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
    <section className="py-32">
      <div className="container mx-auto max-w-screen-2xl px-8 ">
        <div className="mb-20 max-w-lg ">
          <h2 className="mb-4 text-3xl font-bold md:text-5xl text-theme-blue">
            Who We Are
          </h2>
          <p className="text-lg md:text-xl font-light text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            cupiditate commodi vitae nostrum facilis qui?
          </p>
        </div>

        <div className="mb-14 grid h-full grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
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
              } hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-300`}
            >
              <div className="mb-2 flex items-center gap-2 ">
                <span className="w-5 h-5 flex-shrink-0">
                  {typeof item.logo === "string" ? (
                    <img
                      src={item.logo}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    item.logo
                  )}
                </span>
                <h4 className="text-lg font-semibold text-theme-teal">
                  {item.title}
                </h4>
              </div>
              <p className="text-base font-light text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="rounded-t-[28px] p-1 pb-0 border border-gray-200">
          <img
            src={advantages[cardNumber].image}
            alt={advantages[cardNumber].title}
            className="max-h-[500px] w-full rounded-t-[28px] object-cover object-bottom transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default AdvAbout;
