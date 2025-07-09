/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { WhyData } from "../json/landingPageData";

export default function Partner() {
  return (
    <div className="container mx-auto max-w-screen-2xl mb-6">
      <div className="container mx-auto lg:max-w-screen-xl px-8 mb-28 mt-12 lg:mt-40">
        <h2 className="text-2xl lg:text-5xl text-theme-blue text-center font-bold mb-6 lg:mb-20 dark:text-white">
          Why Partner With Us
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WhyData[0].map((item, index) => (
            <div
              key={item.id || `${item.title}-${index}`}
              className="w-70 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300 flex flex-col dark:bg-gray-800 "
            >
              <img
                className="max-w rounded overflow-hidden shadow-lg w-full h-30 object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="px-6 py-3 flex-1 flex flex-col">
                <h4 className="font-bold text-base lg:text-xl mb-6 text-theme-blue text-left dark:text-white">
                  {item.title}
                </h4>
                <p className="font-light text-lg text-gray-400 text-left ">
                  {item.description}
                </p>
              </div>

              <div className="px-6 pb-5">
                {item.tags?.map((tag) => (
                  <span
                    key={`${item.title}-${tag}`}
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
