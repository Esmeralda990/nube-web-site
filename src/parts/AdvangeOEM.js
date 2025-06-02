/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

export default function AdvantageOem({ data }) {
  const allCards = data.flat();

  return (
    <div className="bg-white lg:py-24 pt-12 mb-6  ">
      <div className="container mx-auto lg:max-w-screen-xl px-12">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allCards.map((item, index) => (
            <div
              key={item.id || `${item.title}-${index}`}
              className="w-88 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300 flex flex-col"
            >
              <img
                className="max-w rounded overflow-hidden shadow-lg w-full h-56 object-cover "
                src={item.imageUrl}
                alt={item.title}
              />
              <div className="px-6 py-5 flex-1 flex flex-col">
                <h4 className="font-bold text-base lg:text-xl mb-5 text-theme-blue text-center">
                  {item.title}
                </h4>
                <p className="text-base font-light text-gray-500">
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
