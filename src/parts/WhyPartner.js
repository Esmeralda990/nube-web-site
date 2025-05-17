/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "../elements/Button";
import { WhyData } from "../json/landingPageData";

const Partnerswhy = () => {
  const PHASES = WhyData[0];
  const [activeTab, setActiveTab] = useState(0);
  const current = PHASES[activeTab];

  return (
    <section className="bg-white">
      <div className="container mx-auto lg:max-w-screen-xl px-4 py-24 flex flex-col items-center justify-center">
        <h2 className="mb-12 text-3xl lg:text-5xl font-bold tracking-tighter lg:mb-24 text-center text-theme-blue">
          Why Partner With Us
        </h2>

        <div className="grid w-full grid-cols-4 lg:grid-cols-4 gap-2 border-b">
          {PHASES.map((phase, index) => (
            <Button
              key={phase.id}
              onClick={() => setActiveTab(index)}
              className={`text-xs lg:text-base md:text-base py-4 border-b-2 transition-all duration-200 ${
                activeTab === index
                  ? "border-theme-teal text-gray-500 font-bold text-base"
                  : "border-transparent text-gray-400 font-light"
              }`}
            >
              {phase.heading}
            </Button>
          ))}
        </div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2 w-full">
          <div className="col-span-1 flex flex-col gap-4 max-w-xl lg:mt-24">
            <h3 className="text-lg lg:text-3xl font-medium tracking-tighter text-theme-teal md:text-5xl">
              {current.title}
            </h3>
            <p className="text-lg text-gray-400 font-light max-w-md">
              {current.description}
            </p>
          </div>

          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0, 0.71, 0.2, 1.01], duration: 0.8 }}
            className="col-span-1"
          >
            <div className="rounded-3xl border bg-gray-50 p-2 shadow-none">
              <div className="rounded-2xl border-2 border-white bg-muted overflow-hidden">
                <img
                  src={current.image}
                  alt={current.title}
                  className="lg:max-w-[700px] lg:max-h-[400px] object-contain mx-auto transition-all duration-300 ease-in-out hover:scale-95 scale[1.5]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Partnerswhy;
