/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Detailsoftware() {
  return (
    <div className="bg-white">
      <section className="hero sm:items-center lg:items-start sm:flex-row pt-16">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-16">
          <Fade direction="up" triggerOnce>
            <h3 className="text-5xl text-theme-blue text-center font-bold leading-tight mb-10">
              Software Solutions
            </h3>
          </Fade>
          <Fade direction="up" triggerOnce delay={400}>
            <p className="font-light text-xl text-gray-400 leading-relaxed text-center ">
              Our world-class software suite is the cornerstone of Nube iOs
              comprehensive approach to building management. The intuitive
              platforms are meticulously designed to enhance user experience
              while providing powerful insights and control over building
              operations. Real-time monitoring, predictive maintenance, and
              analytics dashboards are just a few features that streamline
              operations and reduce costs. Empowering clients with actionable
              data and automated controls, Nube iO s software solutions convert
              raw data into strategic business advantages, delivering a
              future-proof building management system.
            </p>
          </Fade>
        </div>
      </section>
    </div>
  );
}
