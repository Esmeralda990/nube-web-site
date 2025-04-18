/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

export default function AdvantageSolutions({ data }) {
  const allCards = data.flat();

  return (
    <div className="bg-white lg:py-24 mb-12 lg:mb-16 pt-12 lg:pt-32">
      <div className="container mx-auto max-w-screen-2xl px-12">
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
                <h3 className="font-bold text-xl mb-2 text-theme-blue text-center">
                  {item.title}
                </h3>
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
