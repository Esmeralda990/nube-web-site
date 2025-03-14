/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from "react";
import { Link } from "react-router-dom";

export default function Service({ data }) {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto pt-32 pb-32">
        <h1 className="text-5xl text-theme-blue text-center font-bold mb-5">
          Building Smarter, Thinking Forward
        </h1>
        <p className="font-light text-lg text-gray-400 text-center mb-10">
          Explore our tech for sustainable solutions to current and future
          challenges.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-4 px-10 gap-8 sm:gap-6 xl:gap-16">
          {data.map((item) => (
            <div
              className="group rounded-2xl shadow-xl border border-light-theme-blue transform transition duration-500 hover:scale-105"
              key={item.id}
            >
              <Link to={`/solutions#${item.id}`} className="block w-full">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full rounded-t-2xl"
                />
                <div className="py-4">
                  <h2 className="text-theme-blue text-center text-xl py-2">
                    {item.title}
                  </h2>
                  <p className="font-light text-gray-400 text-center">
                    {item.type}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
