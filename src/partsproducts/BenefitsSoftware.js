/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable operator-linebreak */
import React from "react";
import { IconsBenefits } from "../json/ProductsPageData";

export default function SoftwareBenefits() {
  return (
    <div className="bg-white mb-6">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="container mx-auto lg:max-w-screen-xl px-8 mb-28 mt-20 lg:py-32">
          <h2 className="text-2xl lg:text-5xl text-theme-blue text-center font-bold mb-6">
            Why Rubix CE
          </h2>
          <p className="font-light text-lg text-gray-400 text-center mb-20 max-w-4xl mx-auto">
            Rubix CE gives you the freedom to deploy powerful, licence-free
            control logic with real-time responsiveness and protocol-ready
            flexibility.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {IconsBenefits.map((item, index) => (
              <div
                key={item.id || `${item.title}-${index}`}
                className="w-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300 flex flex-col"
              >
                <img
                  className=" object-contain w-7 h-12 ml-7 pt-4"
                  src={item.icon}
                  alt={item.title}
                />
                <div className="px-6 py-3 flex-1 flex flex-col">
                  <h4 className="font-bold text-base lg:text-xl mb-6 text-theme-blue text-left">
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
    </div>
  );
}
