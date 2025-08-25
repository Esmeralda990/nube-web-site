/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable operator-linebreak */
import React from "react";
import GlowCard from "elements/GlowCard";
import { IconsBenefits } from "../json/ProductsPageData";

function renderTitle(title) {
  if (title === "Scalable Across Sites") {
    return (
      <>
        <span>Scalable Across</span>
        <br className="hidden lg:block" />
        <span> Sites</span>
      </>
    );
  }

  if (title === "Built for Integration") {
    return (
      <>
        <span>Built for</span>
        <br className="hidden lg:block" />
        <span> Integration</span>
      </>
    );
  }

  if (title === "Scalable Across Sites, Built for Integration") {
    return (
      <>
        <span>Scalable Across</span>
        <br className="hidden lg:block" />
        <span> Sites, Built for</span>
        <br className="hidden lg:block" />
        <span> Integration</span>
      </>
    );
  }
  return title;
}

export default function SoftwareBenefits() {
  return (
    <div className="container mx-auto max-w-screen-2xl">
      <div className="container mx-auto lg:max-w-screen-xl px-8 lg:mb-28 mt-16 mb-16">
        <h2 className="text-2xl lg:text-5xl text-theme-blue text-center font-bold mb-6 dark:text-white ">
          Why Rubix CE
        </h2>
        <p className="font-light text-lg text-gray-400 text-center mb-12 max-w-4xl mx-auto">
          Rubix CE gives you the freedom to deploy powerful, licence-free
          control logic with real-time responsiveness and protocol-ready
          flexibility.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {IconsBenefits.map((item, index) => (
            <GlowCard
              key={item.id || `${item.title}-${index}`}
              className="w-full bg-white rounded-xl overflow-hidden shadow-lg border border-gray-300 flex flex-col dark:bg-theme-tarjet/70 dark:border-theme-border shadow-md transition duration-300 "
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-7 h-12 object-contain block dark:hidden ml-6 pt-4"
              />
              <img
                src={item.iconDark}
                alt={item.title}
                className="w-7 h-12 object-contain hidden dark:block ml-6 pt-4"
              />
              <div className="px-6 py-3 flex-1 flex flex-col">
                <h4 className="font-bold text-base lg:text-xl mb-6 text-theme-blue text-left dark:text-theme-teal leading-snug">
                  {renderTitle(item.title)}
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
            </GlowCard>
          ))}
        </div>
      </div>
    </div>
  );
}
