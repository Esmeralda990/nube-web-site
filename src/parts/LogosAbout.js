/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Logos3 } from "./Logos3";

export default function LogosAbout() {
  const headingElement = (
    <h2 className="text-4xl md:text-5xl text-theme-blue text-center font-bold leading-tight mb-5 mr-24 lg:mr-0">
      Powering top building portfolios with Nube iO
    </h2>
  );

  return (
    <div className="w-full mt-4 sm:px-5 lg:px-16">
      <div className="max-w-full overflow-hidden ">
        <Logos3 heading={headingElement} description="" />
      </div>
    </div>
  );
}
