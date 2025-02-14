/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import Fade from "react-awesome-reveal";

export default function Advantage({ data }) {
  const allCards = data.flat();

  return (
    <div className="bg-gray-50 py-28 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <div className="text-center mb-12">
            <h1 className="text-5xl text-theme-blue font-bold mb-5">
              Why Nube iO?
            </h1>
            <p className="font-light text-lg text-gray-400 text-center mb-5">
              Innovative, Scalable, and Sustainable Solutions for Smarter
              Building Management
            </p>
          </div>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {allCards.map((item, index) => (
            <Fade key={index} bottom triggerOnce delay={200 * index}>
              <div className="w-88 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-[470px] flex flex-col">
                <img
                  className="max-w-sm rounded overflow-hidden shadow-lg w-full h-56 object-cover"
                  src={item.imageUrl}
                  alt={item.title}
                />
                <div className="px-6 py-5 flex-1 flex flex-col">
                  <div className="font-bold text-xl mb-2 text-theme-gray">
                    {item.title}
                  </div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>

                <div className="px-6 pb-5">
                  {item.tags?.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
