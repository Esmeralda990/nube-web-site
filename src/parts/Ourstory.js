/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable comma-dangle */
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { OurStoryD } from "json/landingPageData";

const Ourstory = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 600, behavior: "smooth" });
  };

  const progressWidth = `${(OurStoryD[0].length - 1) * 6}%`;

  return (
    <section className="bg-white w-full lg:py-32 lg:mb-24 mt-16 mb-12">
      <div className="container mx-auto space-y-10 px-8 ">
        <div className="justify-between mx-auto">
          <h2 className="text-2xl  font-bold text-gray-900 lg:text-5xl text-theme-blue mb-4">
            Our Story
          </h2>
          <p className=" text-gray-400 font-light text-base lg:text-lg max-w-xl mb-12">
            From our roots in system integration to becoming a global tech
            innovator, Nube iO’s journey is driven by purpose, progress, and
            possibilities.
          </p>
        </div>

        <div className="relative">
          <div className="absolute top-10 left-0 right-0 h-px bg-gray-300 z-0" />
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: progressWidth }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-10 left-0 h-[2px] bg-theme-teal z-10"
          />

          <div className="w-full overflow-x-auto no-scrollbar pb-10 items-start">
            <div
              ref={scrollContainerRef}
              className="relative z-20 grid grid-flow-col auto-cols-[minmax(240px,_1fr)] gap-24"
            >
              {OurStoryD[0].map((phase) => {
                return (
                  <div
                    key={phase.id}
                    className="flex flex-col items-center text-start pt-10 relative"
                  >
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white rounded-full ">
                      <img
                        src={phase.icon}
                        alt={phase.title}
                        className="w-32 h-28"
                      />
                    </div>
                    <div className="pt-16">
                      <p className="text-lg text-gray-500 whitespace-nowrap text-theme-teal">
                        {phase.date}
                      </p>
                      <h3 className="text-lg font-bold text-gray-900 mt-1 text-theme-blue">
                        {phase.title}
                      </h3>
                      <p className="text-base text-gray-400 font-light mt-1 ">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>{" "}
      <div className=" flex justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={scrollLeft}
          className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
        >
          <ArrowLeft size={20} className="text-theme-teal" />
        </button>
        <button
          type="button"
          onClick={scrollRight}
          className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
        >
          <ArrowRight size={20} className="text-theme-teal" />
        </button>
      </div>
    </section>
  );
};

export default Ourstory;
