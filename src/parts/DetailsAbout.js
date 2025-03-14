/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function DetailsAbout() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-16 pb-32">
        <Fade direction="up" triggerOnce>
          <h3 className="text-5xl text-theme-blue font-bold leading-tight mb-10 text-center  ">
            What We Do
          </h3>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="font-light text-xl text-gray-400  text-center leading-relaxed">
            At Nube iO, we create intelligent technology that transforms the way
            spaces are managed. Our cutting-edge software, IoT solutions, and
            data-driven automation empower businesses to optimise energy,
            streamline operations, and future-proof their infrastructure. From
            HVAC and energy management to smart diagnostics and
            predictivemaintenance, we deliver scalable, seamless solutions that
            bridge the gap between legacy systems and the future of automation.
          </p>
          <p className="font-light text-xl text-gray-400 text-center leading-relaxed mt-6">
            With cloud-based connectivity, real-time insights, and AI-driven
            control, we provide the tools to predict, adapt, and prevent—giving
            organisations complete visibility and command over their operations.
          </p>
        </Fade>
      </div>
    </section>
  );
}
