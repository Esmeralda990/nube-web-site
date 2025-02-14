/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";

export default function Discuss() {
  return (
    <section className="w-full">
      <div className="w-full">
        <div className="flex items-center justify-center rounded-2xl border bg-[url('https://shadcnblocks.com/images/block/circles.svg')] bg-cover bg-center px-4 py-20 text-center text-theme-blue md:p-20">
          <div className="mx-auto max-w-screen-md">
            <h1 className="text-3xl sm:text-4xl text-theme-blue font-bold leading-tight mb-5">
              Start building your websites faster
            </h1>
            <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
              Try our tools and services to build your website faster. Start
              with a 14-day free trial. No credit card required. No setup fees.
              Cancel anytime.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              {" "}
              <Fade direction="up" triggerOnce>
                {" "}
                <Button
                  href="/discuss-project"
                  type="link"
                  className="flex items-center justify-center w-auto px-6 py-3 bg-gray-300 text-black text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100" // Adjusted styles
                >
                  Learn More
                </Button>
              </Fade>
              <Fade direction="up" triggerOnce delay={300}>
                {" "}
                <Button
                  href="/contact"
                  type="link"
                  className="flex items-center justify-center w-auto px-6 py-3 bg-teal-600 text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-800" // Adjusted styles
                >
                  Get Started
                </Button>
              </Fade>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
