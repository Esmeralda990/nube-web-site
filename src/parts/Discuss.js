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
        <div className="flex items-center justify-center rounded-2xl border bg-[url('https://shadcnblocks.com/images/block/circles.svg')] bg-cover bg-center px-4 py-20 text-center text-theme-blue md:p-40">
          <div className="mx-auto max-w-screen-md">
            <h1 className="text-3xl sm:text-4xl text-theme-blue font-bold leading-tight mb-5">
              Ready to Future-Proof Your Building
            </h1>
            <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
              Transform your building with Nube iO’s smart solutions. From
              seamless IoT integration to real-time automation and energy
              optimisation, we make buildings smarter, more efficient, and
              future-ready.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              {" "}
              <Fade direction="up" triggerOnce>
                {" "}
                <Button
                  href="/contact-us/"
                  type="link"
                  className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
                >
                  Contact
                </Button>
              </Fade>
              <Fade direction="up" triggerOnce delay={300}>
                {" "}
                <Button
                  href="/get-demo/"
                  type="link"
                  className="flex items-center justify-center w-auto px-6 py-3 bg-white text-black text-base rounded-xl transition duration-300 ease-in-out border border-theme-teal  hover:scale-105 hover:bg-theme-teal hover:text-white"
                >
                  Get Demo
                </Button>
              </Fade>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
