/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import GifSoftware from "../assets/images/SoftwareProducts/rubix-ce-overview.gif";

const VidSoftware = () => {
  return (
    <section className="relative lg:mb-32 mb-12">
      <div className="container mx-auto lg:max-w-screen-xl px-8 ">
        <h2 className="text-2xl lg:text-5xl text-theme-blue text-center font-bold mb-6">
          Rubix CE in Action
        </h2>
        <p className="font-light text-lg text-gray-400 text-center mb-5">
          See how Rubix CE simplifies control logic and brings real-time data to
          your fingertips.
        </p>

        <div className="mx-auto  overflow-hidden px-12">
          <div className="mx-auto aspect-[14/9] max-w-5xl rounded-xl p-6 lg:scale-[0.8]">
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
