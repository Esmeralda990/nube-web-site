/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../elements/Button/index.js";

export default function CtaHardware() {
  return (
    <section className="relative px-8 lg:py-16 pb-16">
      <div className="container mx-auto lg:max-w-screen-lg">
        <div className="absolute inset-0 z-0 flex justify-center items-center">
          <div
            className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[45%] h-[180px] sm:h-[120px] md:h-[120px] lg:h-[220px] rounded-full 
    bg-gradient-to-r from-white/80 via-white/80 to-white/80
    blur-[60px] opacity-30 dark:opacity-50 transition-all duration-500"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center rounded-xl bg-gray-100 p-8 text-center lg:p-16 dark:bg-theme-tarjet/70 dark:border dark:border-theme-border shadow-xl">
          <h3 className="mb-3 max-w-3xl text-lg lg:text-3xl font-bold md:mb-4 lg:mb-6 text-theme-blue dark:text-white ">
            Smarter Buildings. Forward Thinking
          </h3>
          <p className="mb-8 max-w-3xl text-muted-foreground text-base lg:text-lg font-light text-gray-500">
            Want to learn how you can unlock smarter, more sustainable building
            operations?
          </p>
          <div className="flex w-full justify-center">
            <Button
              href="/contact/"
              type="link"
              className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
            >
              Get a Demo
              <ArrowRight className="ml-2 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
