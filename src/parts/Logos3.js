// src/components/Logos3.js
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Logos } from "../json/landingPageData.js";

const Logos3 = ({ heading, logos = Logos }) => {
  return (
    <section className="mb-24">
      <div className="container mx-auto text-center text-theme-blue mb-14 px-4 lg:px-8">
        <h2 className="text-2xl lg:text-5xl  text-theme-blue font-bold leading-tight lg:text-center ">
          {heading}
        </h2>
        <a
          href="/cases/"
          className="mb-3 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm mt-12 font-bold"
        >
          ✨ Explore our customers success stories
          <span className="flex size-7 items-center justify-center rounded-full bg-muted">
            <ArrowUpRight className="w-4" />
          </span>
        </a>
      </div>

      <div
        className="relative mx-auto overflow-hidden fade-mask"
        style={{ paddingTop: "2 rem", maxWidth: "70%" }}
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
