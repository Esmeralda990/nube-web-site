/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React from "react";
import { ArrowRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import heroDemo from "assets/images/hero/Get Demo.png";
import Button from "../elements/Button/index";

const HeroDemo = () => {
  return (
    <section className="py-32 px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:text-left">
        <div className="lg:w-1/2 lg:text-left">
          <Fade triggerOnce delay={200}>
            <a
              href="/solutions/"
              className="mb-3 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm"
            >
              ✨ Software and Hardware solutions
              <span className="flex size-7 items-center rounded-full bg-muted">
                <ArrowRight className="w-4" />
              </span>
            </a>
          </Fade>

          <Fade triggerOnce delay={400}>
            <h1 className="mx-auto mb-3 mt-4 text-balance text-theme-blue text-4xl font-bold lg:mb-7 lg:text-6xl leading-tight">
              Experience Nube iO’s Smart Solutions
            </h1>
          </Fade>

          <Fade triggerOnce delay={600}>
            <p className=" text-left font-light text-gray-400 lg:text-xl max-w-lg ">
              Request a live demo and see how we can transform your building
              operations.
            </p>
          </Fade>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Fade direction="up" triggerOnce delay={800}>
              <Button
                href="/solutions/"
                type="link"
                className="flex items-center w-auto px-8 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black mt-8"
              >
                Our Solutions
                <ArrowRight className="ml-2 w-4" />
              </Button>
            </Fade>
          </div>
        </div>

        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <Fade triggerOnce delay={1000}>
            <img
              src={heroDemo}
              alt="heroDemo"
              className="max-w-full h-auto rounded-lg ml-12 "
            />
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default HeroDemo;
