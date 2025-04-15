// src/components/Logos3.js
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { Logos } from "../json/landingPageData.js";

const Logos3 = ({ heading, description, logos = Logos }) => {
  return (
    <section className="lg:py-12 ">
      <div className="ccontainer mx-auto text-center text-theme-blue mb-14 px-4 lg:px-8">
        <h2 className="text-4xl md:text-5xl lg:text-5xl  text-theme-blue font-bold leading-tight mb-5 lg:text-center ">
          {heading}
        </h2>
        <p className="font-light text-lg text-gray-400 text-center mb-10 lg:text-center">
          {description}
        </p>
      </div>

      <div
        className="relative mx-auto overflow-hidden"
        style={{ paddingTop: "2 rem", maxWidth: "80%" }}
      >
        {" "}
        <div
          className="logos-carousel "
          style={{
            display: "flex",
            width: "max-content",
            animation: "scroll 80s linear infinite",
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.id}-${index}`}
              className="flex justify-center items-center"
              style={{
                width: "auto",
                padding: "0 20px",
              }}
            >
              <img
                src={logo.image}
                alt={logo.description}
                className="logo-image w-20 h-auto object-contain sm:w-30 md:w-40 lg:w-40 "
                style={{ maxWidth: "70%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
