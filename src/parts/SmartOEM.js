/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from "react";
import Custom from "../assets/images/AdvantageSolutionOEM/Customise.svg";
import Customdark from "../assets/images/AdvantageSolutionOEM/Customisedark.svg";

const SmartOem = () => {
  return (
    <section className="lg:py-20 px-8 mb-12 mt-12">
      <div className="container mx-auto overflow-hidden max-w-6xl ">
        <div className="text-center mb-8 mx-auto">
          <h2 className="text-3xl lg:text-5xl text-theme-blue font-bold leading-tight mb-6 dark:text-white ">
            OEM Integrations: Smarter, Faster, Better
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <p className="text-muted-foreground font-light text-gray-400 lg:text-xl max-w-md">
              Nube iO helps OEMs deliver branded IoT solutions without investing
              in costly product development cycles. By eliminating the need to
              build software, hardware or cloud infrastructure from the ground
              up, Nube iO can help your business bring connected solutions to
              market more swiftly – delivering powerful connected products with
              long-term scalability and end- user satisfaction.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-12 border border-gray-200 rounded-xl dark:border-theme-border">
            <img
              className="w-full max-w-xl h-auto object-contain rounded-xl block dark:hidden "
              src={Custom}
              alt="IOT"
            />
            <img
              className="w-full max-w-xl h-auto object-contain rounded-xl hidden dark:block"
              src={Customdark}
              alt="IOT"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartOem;
