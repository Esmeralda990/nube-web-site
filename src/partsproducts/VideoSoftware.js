/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import GifSoftware from "../assets/images/SoftwareProducts/rubix-ce-overview.gif";

const VidSoftware = () => {
  return (
    <section className="relative lg:mb-16 mb-12">
      <div className="container mx-auto lg:max-w-screen-xl px-8">
        <h2 className="text-2xl lg:text-5xl text-theme-blue text-center font-bold mb-6 dark:text-white ">
          Rubix CE in Action
        </h2>
        <p className="font-light text-lg text-gray-400 text-center mb-3">
          See how Rubix CE simplifies control logic and brings real-time data to
          your fingertips.
        </p>

        <div className="mx-auto overflow-hidden px-12">
          <div className="relative mx-auto aspect-[14/9] max-w-5xl p-6 lg:scale-[0.8] rounded-xl">
            <div className="absolute inset-0 -z-10 hidden dark:block">
              <div className="absolute inset-0 mx-auto h-[600px] w-[100%] bg-gradient-to-r from-theme-teal/80 via-theme-teal/80 to-white/80 blur-[60px] opacity-30 dark:opacity-50 transition-all duration-500 rounded-3xl" />
            </div>
            <img
              src={GifSoftware}
              alt="GifSoftware"
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VidSoftware;
