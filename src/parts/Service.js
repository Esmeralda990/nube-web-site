/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable operator-linebreak */
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";

export default function Service({ data }) {
  return (
    <div className="container mx-auto lg:max-w-screen-xl px-8 mb-28 mt-20 lg:py-32">
      <h2 className="text-2xl lg:text-5xl text-theme-blue text-center font-bold mb-6">
        Define Your Smart Building Solution
      </h2>
      <p className="font-light text-lg text-gray-400 text-center mb-20">
        Explore our technology built to optimise performance, sustainability,
        and control
      </p>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:grid-cols-1 xl:gap-15 mb-32">
        {data.map((item) => {
          const path =
            item.id === "Software" ? "/software/" : `/solutions#${item.id}`;

          return (
            <div className="flex flex-col lg:block" key={item.id}>
              <Link to={path}>
                <div className="h-full max-h-[400px] rounded-lg border bg-gray-100 p-3 hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-6">
                <h4 className="mb-1 font-semibold text-theme-blue text-base lg:text-xl">
                  {item.title}
                </h4>
                <p className="text-gray-400 font-light text-base">
                  {item.type}
                </p>
                <Link
                  to={path}
                  className="mt-4 flex items-center gap-2 font-medium text-theme-teal"
                >
                  Learn more
                  <ChevronRight className="w-4" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
