/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from "react";
import { ChevronRight } from "lucide-react";
import { Blog3 } from "json//ProductsPageData";
import { Link } from "react-router-dom";

const CaseBlog3 = () => {
  return (
    <section className="lg:mb-32 mb-12 px-6 lg:mt-12 pb-12 ">
      <div className="container mx-auto max-w-fit">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-2xl lg:text-5xl font-bold text-theme-blue dark:text-white">
            Product Category
          </h2>
        </div>

        <div className="mt-20 grid grid-cols-1 justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Blog3.map((item, index) => (
            <div
              key={index}
              className=" flex flex-col bg-white rounded-lg shadow-md overflow-hidden min-h-[16rem] dark:bg-theme-tarjet dark:border-theme-border"
            >
              <div className="w-full">
                <Link to={item.link}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-center transition-transform duration-300 hover:scale-[0.8] scale-[0.7] object-contain"
                  />
                </Link>
              </div>

              <div className="flex flex-col justify-between flex-1 p-4">
                <h3 className="mb-4 text-xl font-bold text-theme-teal">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center text-sm mt-auto">
                  <a
                    href={item.link}
                    className="flex items-center gap-1 font-light text-base hover:text-theme-teal transition-colors duration-300 dark:text-white"
                  >
                    Read more
                    <ChevronRight className="h-full w-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseBlog3;
