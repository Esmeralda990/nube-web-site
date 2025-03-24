/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function OurStory() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row md:mb-40">
      <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-16">
        <Fade direction="up" triggerOnce>
          <h3 className="text-3xl md:text-5x text-theme-blue text-center font-bold leading-tight mb-5">
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
        </Fade>
      </div>
    </section>
  );
}
