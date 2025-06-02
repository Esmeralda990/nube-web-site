/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React from "react";
import { Fade } from "react-awesome-reveal";

export default function HeroAbout() {
  return (
    <section className="text-center flex justify-center items-center mt-16">
      <div className="container flex flex-col items-center justify-center text-center">
        <div className="w-full px-5 flex flex-col mb-5 sm:px-12 sm:mt-6 max-w-4xl lg:mt-6 xl:pl-12 xl:mt-20">
          <Fade direction="" triggerOnce>
            <h1 className="text-3xl lg:text-6xl text-theme-blue text-center font-bold leading-tight mb-5">
              Innovating the Future of Smart Building Automation
            </h1>
          </Fade>
          <Fade direction="u" triggerOnce delay={400}>
            <p className="font-light text-gray-400 mx-auto text-muted-foreground lg:text-xl ">
              We help businesses connect and automate their buildings with
              scalable, data-driven technology. By bridging BMS and IoT, we
              simplify control, improve visibility, and unlock smarter, more
              sustainable operations.
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
