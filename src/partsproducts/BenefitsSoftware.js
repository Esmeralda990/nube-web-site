/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { IconsBenefits } from "../json/ProductsPageData";

const SoftwareBenefits = () => {
  return (
    <section className="relative mb-12 ">
      <div className="container mx-auto relative z-10 flex flex-col space-y-14 px-12">
        <h2 className="mt-12 text-2xl sm:text-3xl lg:text-5xl text-theme-blue text-center font-bold leading-tight mb-5">
          Just a few of the benefits
        </h2>
        <div className="relative mt-6 md:mt-10">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 z-50]" />
          <div className="grid divide-border md:grid-cols-4 sm:grid-cols-1 md:divide-x">
            {IconsBenefits.map((benefits) => (
              <div
                key={benefits.id}
                className="relative px-6 pb-20 md:pb-10 lg:px-10 items-center"
              >
                <div className="absolute top-0 -mx-[calc(24px+theme(container.padding))] h-px w-screen bg-border md:hidden" />
                <div
                  className="relative md:-mt-10 mb-10 flex w-12 h-12 items-center bg-white rounded-full justify-center 
                md:-mt-10 md:mb-10 md:w-32 md:h-32 
                sm:w-16 sm:h-16"
                >
                  <img
                    src={benefits.icon}
                    alt={benefits.title}
                    className="w-12 h-12 max-h-full md:w-12 md:h-12 z-10"
                  />
                </div>
                <div>
                  <h3 className="mb-3 max-w-[12rem] text-base font-bold text-theme-teal md:mb-4 md:text-xl lg:mb-6">
                    {benefits.title}
                  </h3>
                  <p className="text-muted-foreground font-light lg:text-lg">
                    {benefits.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 z-50" />
        </div>
      </div>
      <div className="container absolute inset-0 hidden h-full md:block">
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-border" />
          <div className="absolute inset-y-0 right-0 h-full w-px bg-border" />
        </div>
      </div>
    </section>
  );
};

export default SoftwareBenefits;
