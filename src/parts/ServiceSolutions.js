/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from "react";

export default function ServiceSolutions({ data }) {
  return (
    <div className="bg-white lg:py-24 pt-12 mb-6  ">
      <div className="container mx-auto px-12 lg:max-w-screen-xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={item.id || `${item.title}-${index}`}
              className="w-88 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300 flex flex-col"
            >
              <div className="group rounded-xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="max-w rounded overflow-hidden shadow-lg w-full h-56 object-cover "
                />
                <div className="py-2">
                  {" "}
                  <h4 className="text-theme-blue text-center  text-base lg:text-lg mb-4 mt-4">
                    {item.title}
                  </h4>
                  <p className="font-light text-gray-400 text-center mb-4">
                    {item.description || item.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
