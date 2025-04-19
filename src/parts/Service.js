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
    <div className="container mx-auto max-w-screen-xl px-8 mb-28">
      <h2 className="text-3xl lg:text-5xl text-theme-blue text-center font-bold mb-6">
        Building Smarter, Thinking Forward
      </h2>
      <p className="font-light text-lg text-gray-400 text-center mb-20">
        Explore our tech for sustainable solutions to current and future
        challenges.
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 xl:gap-15 mb-32">
        {data.map((item) => (
          <div className="flex flex-col lg:block" key={item.id}>
            <div className="h-full max-h-[400px] rounded-lg border bg-gray-100 p-3">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="mb-1 font-semibold text-theme-blue text-base lg:text-xl">
                {item.title}
              </div>
              <p className="text-gray-400 font-light text-base">{item.type}</p>
              <Link
                to={
                  item.id === "Software"
                    ? `/software-rubix-platform/`
                    : `/solutions#${item.id}`
                }
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
  );
}
