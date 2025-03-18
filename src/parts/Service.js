/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";

export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-32 pb-32 px-8 ">
        <h1 className="text-3xl md:text-5xl text-theme-blue text-center font-bold mb-5">
          Building Smarter, Thinking Forward
        </h1>
        <p className="font-light text-lg text-gray-400 text-center mb-10">
          Explore our tech for sustainable solutions to current and future
          challenges.
        </p>

        <div className="mt-20 grid gap-10 lg:grid-cols-4 xl:gap-15 mb-32">
          {data.map((item) => (
            <div className="flex flex-col lg:block" key={item.id}>
              <div className="h-full max-h-[500px] rounded-lg border bg-gray-200 p-3">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-1 font-semibold text-theme-blue">
                  {item.title}
                </div>
                <p className="text-gray-400 font-light">{item.type}</p>
                <Link
                  to={`/solutions#${item.id}`}
                  className="mt-4 flex items-center gap-2 font-medium text-theme-teal"
                >
                  Learn more
                  <ChevronRight className="w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
