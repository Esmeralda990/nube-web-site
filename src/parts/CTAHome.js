/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../elements/Button/index.js";

export default function CtaHome() {
  return (
    <section className="lg:py-32 px-8 pb-16">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-8 text-center md:rounded-xl lg:p-16 ">
          <h3 className="mb-3 max-w-3xl text-lg lg:text-3xl font-bold md:mb-4 lg:mb-6 text-theme-blue">
            Smarter Buildings. Forward Thinking.
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground text-base lg:text-lg font-light text-gray-500">
            Are you ready to get smart? Contact Nube iO for a demo.
          </p>
          <div className="flex w-full justify-center">
            <Button
              href="/contact/"
              type="link"
              className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
            >
              Contact
              <ArrowRight className="ml-2 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
