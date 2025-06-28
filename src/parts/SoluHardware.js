/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable comma-dangle */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Fade } from "react-awesome-reveal";
import { Badges } from "../json/landingPageData.js";

export default function SoluHardware() {
  return (
    <div className="bg-white container mx-auto lg:max-w-screen-xl mb-12">
      <section className="sm:items-center lg:items-start sm:flex-row pt-12 relative">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-8">
          <Fade triggerOnce>
            <h2 className="text-2xl md:text-5xl text-theme-blue text-center font-bold leading-tight mb-16 max-w-3xl mx-auto">
              Industry-Leading Solutions and Expertise
            </h2>
          </Fade>
          <Fade triggerOnce>
            <p className="font-light text-xl text-gray-400 leading-relaxed text-center max-w-4xl mx-auto mb-12">
              We’re not just smart building experts, we’re technology experts.
              So, when it comes to optimising the BMS experience across your
              portfolio, Nube iO will ensure we deliver best-practice, every
              time.
            </p>
          </Fade>

          <div className="relative mx-auto w-full max-w-[70%] overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-20 z-20 pointer-events-none bg-gradient-to-r from-white to-transparent" />
            <div className="absolute right-0 top-0 h-full w-20 z-20 pointer-events-none bg-gradient-to-l from-white to-transparent" />

            <div className="flex animate-scroll-left justify-start gap-4 z-10 relative">
              {[...Badges.slice(0, 5), ...Badges.slice(0, 5)].map((item) => (
                <div
                  key={uuidv4()}
                  className="flex h-12 items-center justify-center rounded-full bg-gray-100 px-5 py-2 shadow-sm"
                >
                  <p className="text-sm md:text-lg font-semibold">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex animate-scroll-right justify-start gap-4 mt-4 z-10 relative mb-12">
              {[...Badges.slice(6, 11), ...Badges.slice(6, 11)].map((item) => (
                <div
                  key={uuidv4()}
                  className="flex h-12 items-center justify-center rounded-full bg-theme-teal px-5 py-2 shadow-sm text-white"
                >
                  <p className="text-sm md:text-lg font-semibold">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
