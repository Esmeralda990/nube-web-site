/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Badges, IconElem } from "../json/landingPageData.js";

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

        {/* Fila 3: IconElem */}
        <div className="iconos-circulares relative mx-auto flex justify-around max-w-full flex-col gap-12 overflow-hidden pb-0 pt-64">
          <div className="grid grid-cols-auto md:grid-cols-3 gap-4 justify-items-center">
            {IconElem.map((item, index) => (
              <div key={index} className="icono flex flex-col items-center">
                <div className="flex justify-center items-center bg-white rounded-lg p-6 shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <p className="mt-4 text-sm font-medium text-center bg-gray-200 rounded-lg gap-2">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          {/* Círculos decorativos */}
          {[...Array(10)].map((_, index) => (
            <div
              key={index}
              className="absolute -bottom-4 left-1/2 z-[-2] aspect-square rounded-full border border-indigo-200"
              style={{
                width: `${120 + 100 * index}px`,
                opacity: 0.5,
                filter: "saturate(20%)",
                transform: "translateX(-50%) translateY(50%)",
              }}
            />
          ))}
          <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-background via-transparent to-transparent" />
          <div className="absolute inset-0 z-[-1] bg-gradient-to-l from-background via-transparent to-transparent" />
          <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-background via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 z-[-2] h-[1px] w-full bg-indigo-200 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Connect;
