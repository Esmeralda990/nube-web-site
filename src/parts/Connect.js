/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Badges } from "../json/landingPageData.js";
import ConnectImg from "../assets/images/hero/Bring.webp";

const Connect = () => {
  return (
    <div className="mx-auto lg:pt-24 mb-24 grid max-w-screen-xl gap-4 border-1 border-gray-100 rounded-lg md:grid-cols-2 px-6 lg:pb-24">
      <div className="flex flex-col rounded-lg overflow-hidden border-2 border-gray-100">
        <img
          src={ConnectImg}
          alt="Connection Illustration"
          className="h-48 md:h-full w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="flex flex-col rounded-lg overflow-hidden border-2 border-gray-100 bg-accent p-4">
        <div className="flex h-full flex-col justify-between gap-4 rounded-lg bg-background p-4">
          <h2 className="text-3xl md:text-5xl text-theme-blue text-center font-bold leading-snug">
            Bring it all together
          </h2>
          <p className="font-light text-base md:text-lg text-gray-400 text-center mb-3">
            With our universal connectivity solution, you can quickly regain
            control of a building, whatever its size, condition.
          </p>
          <div className="relative mx-auto w-full max-w-full overflow-hidden  z-10">
            <div className="flex animate-scroll-left justify-start gap-4">
              {[...Badges.slice(0, 7), ...Badges.slice(0, 7)].map((item) => (
                <div
                  key={uuidv4()}
                  className="flex h-12 items-center justify-center rounded-full bg-gray-100 px-5  py-2 shadow-sm"
                >
                  <p className="text-sm md:text-lg font-semibold">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-full  px-6 overflow-hidden z-10">
            <div className="flex animate-scroll-right justify-start gap-4">
              {[...Badges.slice(8, 13), ...Badges.slice(8, 13)].map((item) => (
                <div
                  key={uuidv4()}
                  className="flex h-20 md:h-32 items-center justify-center px-4 py-2"
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="object-contain w-12 md:w-20 "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
