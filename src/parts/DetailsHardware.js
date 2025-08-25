/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

export default function DetailsHardware() {
  return (
    <div className="container mx-auto lg:max-w-screen-xl">
      <section className="sm:items-center lg:items-start sm:flex-row pt-6">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-8">
          <h2 className="text-2xl lg:text-5xl text-theme-blue text-center items-center font-bold leading-tight lg:mb-16 max-w-3xl mx-auto dark:text-white mb-6">
            Hardware that Connects, Controls and Scales
          </h2>
          <p className="font-light text-xl text-gray-400 leading-relaxed text-center max-w-4xl mx-auto">
            Explore Nube iO’s hardware suite—from powerful controllers to
            wireless sensors—designed to seamlessly integrate with your building
            systems.
          </p>
        </div>
      </section>
    </div>
  );
}
