/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { ArrowRight } from "lucide-react";
import Button from "../elements/Button";

export default function CtaSoftware() {
  return (
    <section className="mb-24">
      <div className="container mx-auto">
        <div>
          <p className="text-center  text-base lg:text-lg text-gray-400 font-light">
            See Rubix CE in action
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300" />
            <Button
              href="/software/"
              type="link"
              className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
            >
              Learn more
              <ArrowRight className="ml-2 w-4" />
            </Button>
            <div className="flex-1 h-px bg-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
