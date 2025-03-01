/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Logos3 } from "./Logos3";

export default function LogosAbout() {
  const headingElement = (
    <h2 className="text-2xl sm:text-xl lg:text-5xl font-bold text-theme-blue text-center sm:text-left">
      Powering top building portfolios with Nube iO
    </h2>
  );

  return (
    <>
      <div className="w-full mt-4">
        <Logos3 heading={headingElement} description="" />
      </div>
    </>
  );
}
