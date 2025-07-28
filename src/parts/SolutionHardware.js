/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";
import GlowCard from "elements/GlowCard";

export default function Solutionsfeature({ data }) {
  const allCards = data.flat();

  return (
    <div className="lg:pb-28 pt-12 mb-6  ">
      <div className="container mx-auto  px-12 max-w-screen-xl">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allCards.map((item, index) => (
            <GlowCard
              key={item.id || `${item.title}-${index}`}
              className="w-88 bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300 flex flex-col dark:bg-theme-tarjet/70 dark:border-theme-border"
            >
              <Link to={item.link}>
                <img
                  className="max-w rounded overflow-hidden shadow-lg w-full h-56 object-cover "
                  src={item.image}
                  alt={item.title}
                />
              </Link>
              <div className="px-6 py-5 flex-1 flex flex-col">
                <h4 className="font-bold text-base lg:text-xl mb-6 text-theme-blue text-center dark:text-theme-teal">
                  {item.title}
                </h4>
                <p className="font-light text-lg text-gray-400 text-left mb-6">
                  {item.description}
                </p>
                <Link
                  to={item.link}
                  className="mt-4 flex items-center gap-2 font-medium text-theme-teal dark:text-white"
                >
                  Learn more
                  <ChevronRight className="w-4" />
                </Link>
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
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
