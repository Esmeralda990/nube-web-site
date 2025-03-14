/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React from "react";
import { ArrowRight } from "lucide-react";

import Button from "../elements/Button/index";

const HeroDemo = () => {
  return (
    <section className="py-32 pl-32">
      <div className="container text-center ">
        <a
          href="/solutions/"
          className="mb-3 inline-flex items-center gap-3 rounded-full border bg-teal-100 px-2 py-1 text-sm"
        >
          <span>NEW</span>
          Software and Hardware
          <span className="flex size-7 items-center justify-center rounded-full bg-muted">
            <ArrowRight className="w-4" />
          </span>
        </a>
        <div className="text-center">
          <h1 className="mx-auto mb-3 mt-4 max-w-3xl text-balance text-theme-blue text-4xl font-bold lg:mb-7 lg:text-6xl">
            Experience Nube iO’s Smart Solutions Firsthand
          </h1>
          <p className="m mx-auto max-w-3xl text-muted-foreground font-light lg:text-xl">
            Request a live demo and see how we can transform your building
            operations.
          </p>
          <div className=" flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              href="/discuss-project"
              type="link"
              className="flex bg-teal-500 text-white text-base lg:text-base xl:text-base tracking-wider items-center justify-center w-32 lg:w-10 lg:h-12 xl:w-32 h-15 p-3 border-1 border-gray-300 shadow-l rounded-xl transform transition duration-600 hover:scale-105 mt-6"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDemo;
