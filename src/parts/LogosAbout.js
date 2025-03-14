/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Logos3 } from "./Logos3";

export default function LogosAbout() {
  const headingElement = (
    <h2 className="text-3xl mt-4 text-theme-blue font-bold md:text-5xl text-center mx-auto">
      Powering top building portfolios with Nube iO
    </h2>
  );

  return (
    <div className="w-full mt-4 px-4 sm:px-5 lg:px-16">
      <div className="max-w-full overflow-hidden ">
        <Logos3 heading={headingElement} description="" />
      </div>
    </div>
  );
}
