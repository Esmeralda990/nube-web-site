/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { WhyData } from "../json/landingPageData";

const Why = () => {
  return (
    <section className="py-12 mb-12 px-8 ">
      <div className="container mx-auto max-w-screen-lg">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6">
          <h2 className="mb-2 text-center text-2xl  md:text-3xl lg:text-5xl font-bold text-theme-blue">
            Why Partner With Us
          </h2>
          <p className="text-center font-light lg:text-lg text-gray-400">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
            itaque modi quos hic placeat laudantium inventore reiciendis
            cupiditate, facilis aliquam.
          </p>
        </div>
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {WhyData[0].map((item, index) => (
            <div
              key={index}
              className={`${index === 2 ? "md:col-span-2" : ""}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`rounded-lg border transition-transform duration-300 hover:scale-105 ${
                  index === 2
                    ? "aspect-video max-h-[480px] w-full bg-muted object-cover transition-transform duration-300 hover:scale-105"
                    : ""
                }`}
              />
              <div className="px-4 pt-10">
                <h3 className="font-bold text-theme-teal">{item.title}</h3>
                <p className="text-base font-light text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
