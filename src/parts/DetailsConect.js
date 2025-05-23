/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function DetailConnectivity() {
  return (
    <section className="sm:items-center lg:items-start sm:flex-row pt-12 lg:pt-24">
      <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 ">
        <Fade triggerOnce>
          <h2 className="text-3xl md:text-5xl text-theme-blue text-center font-bold leading-tight mb-6">
            Connect, Control, and Scale—Effortlessly
          </h2>
        </Fade>
        <Fade triggerOnce delay={400}>
          <p className="max-w-6xl mx-auto text-center font-light text-base lg:text-lg text-gray-400 leading-relaxed text-center mt-6 ">
            Nube iO’s connectivity ecosystem brings your building data to life.
            From secure VPNs and protocol bridges to cloud services and local
            automation, we give you full visibility and control across every
            asset, in every location.
          </p>
        </Fade>
      </div>
    </section>
  );
}
