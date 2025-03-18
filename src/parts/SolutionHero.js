/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { ChevronRight } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const PortfolioHome = ({ data }) => {
  return (
    <section className="container mx-auto flex flex-col items-cente mb-12">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold px-6">
          Real-World Solutions, Powered by Nube iO
        </h1>
      </Fade>
      <Fade direction="left" triggerOnce>
        <p className="font-light text-lg text-gray-400 text-center mb-12">
          Discover how Nube iO transforms building management across industries
        </p>
      </Fade>

      <div className="mt-20 grid gap-6 md:grid-cols-3 lg:gap-10 px-6">
        {data.map((item, index) => (
          <Fade
            direction={index % 2 === 0 ? "left" : "right"}
            triggerOnce
            key={index}
          >
            <div className="flex flex-col rounded-lg border shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="aspect-video size-full rounded-t-lg object-cover"
              />
              <div className="p-6">
                <h3 className="mb-2.5 font-bold md:text-xl">{item.title}</h3>
                <p className="font-ligth text-gray-400">{item.description}</p>
                <a
                  href={item.link}
                  className="flex items-center gap-1 text-sm text-theme-teal mt-4"
                >
                  Learn more
                  <ChevronRight className="h-auto w-4" />
                </a>
              </div>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default PortfolioHome;
