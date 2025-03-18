/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Badges } from "../json/landingPageData.js";

const Connect = () => {
  return (
    <section className="relative py-32 pt-8 before:absolute before:inset-0 before:bg-primary/10">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background" />
      <div className="w-full px-4">
        <div className="relative z-[3] flex flex-col items-center gap-8">
          <h1 className="text-5xl text-theme-blue text-center font-bold leading-tight">
            Bring it all together
          </h1>
          <p className="font-light text-lg text-gray-400 text-center mb-5">
            Our expanding library lets you connect with any equipment
          </p>
        </div>

        {/* Fila 1: Íconos 0-6 como badges */}
        <div className="relative mx-auto mt-20 w-full overflow-hidden max-w-full">
          <div className="flex animate-scroll-left w-full">
            {[
              ...Badges.slice(0, 7),
              ...Badges.slice(0, 7),
              ...Badges.slice(0, 7),
            ].map((item) => (
              <div
                key={uuidv4()}
                className="flex h-12 items-center justify-center rounded-full bg-gray-100 px-5 py-4 shadow-sm"
              >
                <p className="text-lg font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fila 2: Íconos 7-13 solo como imágenes */}
        <div className="relative mx-auto mt-20 w-full overflow-hidden max-w-full">
          <div className="flex animate-scroll-right w-full">
            {[
              ...Badges.slice(7, 13),
              ...Badges.slice(7, 13),
              ...Badges.slice(7, 13),
            ].map((item) => (
              <div
                key={uuidv4()}
                className="flex h-32 items-center justify-center px-12 py-2"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className={`object-contain ${item.className}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
