// src/components/Logos3.js
/* eslint-disable react/prop-types */
import React from "react";
import { Logos } from "../json/landingPageData.js";

const Logos3 = ({ heading, description, logos = Logos }) => {
  return (
    <section className="py-12 mb-0">
      <div className="container flex flex-col items-center justify-center text-center text-theme-blue mb-14 px-4 lg:px-12 ml-14 ">
        <h1 className="text-5xl text-theme-blue text-justify-center font-bold leading-tight mb-5">
          {heading}
        </h1>
        <p className="font-light text-lg text-gray-400 text-center mb-10">
          {description}
        </p>
      </div>

      <div
        className="relative mx-auto overflow-hidden"
        style={{ paddingTop: "2 rem" }}
      >
        {" "}
        <div
          className="logos-carousel"
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll 20s linear infinite",
          }}
        >
          {[...logos, ...logos].map((logo) => (
            <div
              key={logo.id}
              className="flex justify-center items-center"
              style={{
                width: "auto",
                padding: "0 20px",
              }}
            >
              <img
                src={logo.image}
                alt={logo.description}
                className="logo-image w-20 h-auto object-contain sm:w-32 md:w-40 lg:w-40"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
