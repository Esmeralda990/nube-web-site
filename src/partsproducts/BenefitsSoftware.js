/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { IconsBenefits } from "../json/ProductsPageData";

const SoftwareBenefits = () => {
  return (
    <section className="lg:py-24">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="lg:mb-24 flex flex-col items-center justify-center gap-6">
          <h2 className="w-full text-center text-3xl font-medium lg:text-5xl text-theme-blue">
            Just a few of the benefits
          </h2>
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-6">
          {IconsBenefits.map((benefit) => (
            <li
              key={benefit.title}
              className="p-6 rounded-xl border border-gray-200 flex flex-col items-start"
            >
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-12 mb-4"
              />
              <h4 className="mt-4 mb-4 text-base lg:text-xl font-bold text-theme-teal">
                {benefit.title}
              </h4>
              <p className=" text-base lg:text-lg text-gray-400 font-light text-muted-foreground">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SoftwareBenefits;
