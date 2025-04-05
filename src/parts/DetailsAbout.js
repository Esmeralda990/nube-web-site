/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import heroAbout from "../assets/images/Services/Software.webp";

export default function DetailsAbout() {
  return (
    <section className="py-32 mt-16 px-12">
      <div className=" flex justify-center">
        <div className="lg:flex justify-center items-center">
          <div className="lg:w-1/2  flex flex-col justify-center">
            <div className="mb-6 md:mb-8 lg:mb-0 ">
              <img
                src={heroAbout}
                alt="heroAbout"
                className="aspect-video w-full rounded-md border border-border object-cover"
              />
            </div>
          </div>
          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-16 2xl:pl-32 max-w-2xl">
            <div>
              <h2 className="mb-3 text-xl font-bold text-theme-blue md:mb-4 md:text-5xl lg:mb-6">
                What We Do
              </h2>
              <p className="text-muted-foreground lg:text-lg font-light text-gray-400">
                At Nube iO, we create intelligent technology that transforms the
                way spaces are managed. Our cutting-edge software, IoT
                solutions, and data-driven automation empower businesses to
                optimise energy, streamline operations, and future-proof their
                infrastructure. From HVAC and energy management to smart
                diagnostics and predictivemaintenance, we deliver scalable,
                seamless solutions that bridge the gap between legacy systems
                and the future of automation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
