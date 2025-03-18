/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function OurStory() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-16">
        <Fade direction="up" triggerOnce>
          <h3 className="text-5xl text-theme-blue text-center font-bold leading-tight mb-5">
            Our Story
          </h3>
        </Fade>
        <Fade direction="up" triggerOnce delay={400}>
          <p className="max-w-6xl mx-auto text-center font-light text-xl text-gray-400 leading-relaxed">
            At Nube iO, we’re revolutionising automation, remote monitoring, and
            intelligent infrastructure. With over 14 years of experience, our
            team leads the way in developing advanced software and hardware to
            meet the challenges of a rapidly changing world.
          </p>
          <p className="max-w-6xl mx-auto text-center font-light text-xl text-gray-400 leading-relaxed mt-6 ">
            Founded in Australia by system integrators, Nube iO was created out
            of frustration with rigid, outdated BMS hardware and software. We
            set out to build scalable, adaptable solutions ready for the future.
          </p>
          <p className="max-w-6xl mx-auto text-center font-light text-xl text-gray-400 leading-relaxed mt-6">
            Our focus is on seamless data access. Whether integrating with
            legacy systems or using advanced hardware and sensors, we provide
            real-time insights quickly and affordably.
          </p>
          <p className="max-w-6xl mx-auto text-center font-light text-xl text-gray-400 leading-relaxed mt-6">
            OToday, Nube iO empowers system integrators, facility managers, and
            OEM partners with IoT connectivity and actionable data. Flexible and
            scalable, our solutions help clients improve performance,
            efficiency, and innovation.
          </p>
        </Fade>
      </div>
    </section>
  );
}
