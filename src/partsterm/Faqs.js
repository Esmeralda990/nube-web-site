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

const FAQs = () => {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-32">
      <div className="container mx-auto space-y-16 px-6">
        <div className="flex flex-col items-start text-left lg:items-center lg:text-center">
          <h2 className="mb-3 max-w-3xl text-2xl font-bold md:mb-4 md:text-4xl lg:mb-6 text-theme-blue">
            Frequently Asked Questions
          </h2>
          <p className="max-w-3xl font-light text-gray-400 foreground lg:text-lg">
            Welcome to our FAQ page. Find quick answers to common questions
            about Nube iO products, solutions, and support.
          </p>
        </div>
        <div className="space-y-4">
          {DataAccordion.map((item) => (
            <div key={item.id} className="border-b">
              <button
                className="w-full text-left py-4 px-6 bg-gray-50 hover:bg-gray-200 focus:outline-none flex items-center justify-between"
                onClick={() => handleToggle(item.id)}
              >
                <div className="flex items-center">
                  <img
                    src={item.icons}
                    alt={item.question}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <h3 className="text-lg font-bold ">{item.question}</h3>
                </div>
                <div className="text-xl text-theme-teal">
                  {openId === item.id ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </button>
              {openId === item.id && (
                <div className="px-6 py-4">
                  <p className="text-gray-700 font-light ">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
