/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from "react";
import { Calendar, ChevronRight } from "lucide-react";
import { Blog4 } from "json//ProductsPageData";

const CaseBlog4 = () => {
  return (
    <section className=" mb-32 px-6 mt-12 ">
      <div className="container max-w-screen-2xl mx-auto">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-3xl lg:4xl font-bold text-theme-blue">
            Explore More Case Studies
          </h2>
          <p className="text-muted-foreground font-light text-xl text-gray-400">
            Learn how other companies are leveraging Nube iO solutions to
            transform their operations.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Blog4.map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <div className="w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-between flex-1 p-4">
                <h3 className="mb-4 text-xl font-bold text-theme-teal">
                  {item.title}
                </h3>
                <div className="flex justify-between items-center text-sm mt-auto">
                  <span className="flex items-center gap-1 text-muted-foreground font-light text-base">
                    <Calendar className="h-4 w-4" />
                    {item.date}
                  </span>
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

export default CaseBlog4;
