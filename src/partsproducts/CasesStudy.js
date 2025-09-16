/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
import React from "react";
import GlowCard from "elements/GlowCard";

export default function Casestudys({ data }) {
  return (
    <div className="lg:py-16 mt-12 mb-12">
      <div className="container mx-auto px-8 lg:max-w-screen-xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 lg:grid-cols-3 lg:gap-12 gap-12 ">
          {data.map((item, index) => (
            <GlowCard
              key={item.id || `${item.title}-${index}`}
              className="w-88 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 flex flex-col dark:bg-theme-tarjet/60 dark:border-theme-border"
            >
              <div className="group rounded-xl">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="max-w rounded overflow-hidden shadow-md w-full h-56 object-responsive"
                />
                <div className="py-2 px-4 lg:min-h-[160px] flex flex-col items-center text-center">
                  {" "}
                  <h4 className="text-theme-blue text-center  text-base lg:text-lg mb-4 mt-4 dark:text-theme-teal">
                    {item.title}
                  </h4>
                  <p className="font-light text-gray-400 text-center mb-4">
                    {item.description || item.type}
                  </p>
                </div>
                <div className=" px-6 py-4">
                  <a
                    href={item.link || "#"}
                    className="block text-center text-sm font-bold text-white bg-theme-teal hover:bg-white hover:text-black  border border-theme-teal  py-2 px-4 rounded-xl mb-6"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
