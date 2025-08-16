/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from "react";
import Building from "../assets/images/ServiceSolutions/Building.svg";
import Buildingdark from "../assets/images/ServiceSolutions/Buildingdark.svg";

const SmartPS = () => {
  return (
    <section className="lg:py-16 px-8 mb-8 mt-8 md:py-12">
      <div className="container mx-auto overflow-hidden max-w-6xl ">
        <div className="text-center mb-8 mx-auto">
          <h2 className="text-2xl lg:text-5xl text-theme-blue font-bold leading-tight mb-6 dark:text-white">
            Smarter Facility Management at Scale
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <p className="text-muted-foreground font-light text-gray-400 lg:text-xl max-w-md">
              Managing multiple buildings with disconnected systems is complex
              and inefficient. Nube iO brings everything together—uniting data
              from all sites into one scalable platform for live monitoring,
              faster fault response, and portfolio-wide performance
              optimisation.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-12 border border-gray-200 rounded-xl dark:border-theme-border mb-8">
            <img
              className="w-full max-w-xl h-auto object-contain rounded-xl block dark:hidden"
              src={Building}
              alt="Building"
            />
            <img
              className="w-full max-w-xl h-auto object-contain rounded-xl hidden dark:block"
              src={Buildingdark}
              alt="Building"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartPS;
