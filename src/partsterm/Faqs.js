/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint react/prop-types: "off" */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { DataAccordion } from "../json/FaqData.js";
import bgImgLight from "../assets/images/ImgFooter/Fondo_Hom.svg";
import bgImgDark from "../assets/images/ImgFooter/Fondo_HomeD.svg";

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="pb-32 px-4">
      <div className="relative lg:max-w-[130rem] mx-auto w-full rounded-3xl overflow-hidden  mb-16">
        <div className="absolute inset-0 z-0 overflow-hidden max-w-[130rem] w-full mx-auto">
          <img
            src={bgImgLight}
            alt="Light Background"
            className="block dark:hidden w-full h-full object-cover opacity-70"
          />
          <img
            src={bgImgDark}
            alt="Dark Background"
            className="hidden dark:block w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white dark:to-theme-dark z-10" />
        </div>

        <div className="relative z-10 px-8 py-20 flex flex-col items-start text-left lg:items-center lg:text-center">
          <h1 className="mb-3 max-w-3xl text-4xl lg:text-6xl font-bold md:mb-4 lg:mb-6 text-theme-blue dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="max-w-3xl font-light text-gray-400 text-base lg:text-lg">
            Welcome to our FAQ page. Find quick answers to common questions
            about Nube iO products, solutions, and support.
          </p>
        </div>
      </div>

      <div className="max-w-[80rem] mx-auto w-full space-y-4">
        {DataAccordion.map((item) => (
          <div
            key={item.id}
            className="border-c border-gray-100 dark:bg-theme-tarjet dark:border-theme-border"
          >
            <button
              className="w-full text-left py-4 px-6 bg-gray-50 hover:bg-gray-200 focus:outline-none flex items-center justify-between dark:bg-gray-800"
              onClick={() => handleToggle(item.id)}
            >
              <div className="flex items-center">
                <img
                  src={item.icons}
                  alt={item.question}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <h3 className="text-lg font-bold dark:text-white">
                  {item.question}
                </h3>
              </div>
              <div className="text-xl text-theme-teal">
                {openId === item.id ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </button>
            {openId === item.id && (
              <div className="px-6 py-4 bg-white dark:bg-gray-800">
                <p className="text-gray-400 font-light text-base lg:text-lg">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
