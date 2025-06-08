/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from "react";
import { ChevronRight } from "lucide-react";
import { Blog1 } from "json//ProductsPageData";
import { Link } from "react-router-dom";

const CaseBlog1 = () => {
  return (
    <section className="lg:mb-32 mb-12 px-6 mt-12 pb-12">
      <div className="container max-w-screen-2xl mx-auto">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl lg:text-4xl font-bold text-theme-blue">
            Explore More Products
          </h2>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Blog1.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <div className="w-full">
                <Link to={item.link}>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-72 object-cover object-center transition-transform duration-300 hover:scale-[1] scale-[0.8] object-responsive"
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
                    className="flex items-center gap-1 font-light text-base hover:text-theme-teal transition-colors duration-300"
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

export default CaseBlog1;
