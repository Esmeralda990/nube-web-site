/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable comma-dangle */
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  RocketIcon,
  Cpu,
  LocateFixed,
  FlagIcon,
} from "lucide-react";

const timelinePhases = [
  {
    id: 0,
    date: "January 15, 2024",
    title: "Phase I",
    description: "Project initialization and strategic planning begins.",
    icon: RocketIcon,
  },
  {
    id: 1,
    date: "March 10, 2024",
    title: "Phase II",
    description: "Detailed research and preliminary development stage.",
    icon: Cpu,
  },
  {
    id: 2,
    date: "June 5, 2024",
    title: "Phase III",
    description: "Core implementation and major milestones achieved.",
    icon: LocateFixed,
  },
  {
    id: 3,
    date: "September 20, 2024",
    title: "Phase IV",
    description: "Final refinements and project completion.",
    icon: FlagIcon,
  },
  {
    id: 4,
    date: "January 15, 2024",
    title: "Phase I",
    description: "Project initialization and strategic planning begins.",
    icon: RocketIcon,
  },
  {
    id: 5,
    date: "March 10, 2024",
    title: "Phase II",
    description: "Detailed research and preliminary development stage.",
    icon: Cpu,
  },
  {
    id: 6,
    date: "June 5, 2024",
    title: "Phase III",
    description: "Core implementation and major milestones achieved.",
    icon: LocateFixed,
  },
  {
    id: 7,
    date: "September 20, 2024",
    title: "Phase IV",
    description: "Final refinements and project completion.",
    icon: FlagIcon,
  },
];

const Ourstory = () => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    updateScrollState();
  }, []);

  const scrollLeft = () => {
    scrollContainerRef.current?.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 100, behavior: "smooth" });
  };

  const progressWidth = `${
    (timelinePhases.length - 1) * (10 / (timelinePhases.length - 1))
  }%`;

  return (
    <section className="bg-white w-full relative lg:mb-32">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
        <h2 className="mb-16 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl text-theme-blue">
          Our Story
        </h2>

        <div className="relative w-full">
          <div className="relative overflow-hidden">
            <div className="absolute top-10 left-0 right-0 h-px bg-gray-300 z-0" />
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: progressWidth }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-10 left-0 h-[2px] bg-gray-800 z-10"
            />

            <div className="w-full overflow-x-auto no-scrollbar pb-10 items-start">
              <div
                ref={scrollContainerRef}
                onScroll={updateScrollState}
                className="relative z-20 grid grid-flow-col auto-cols-[minmax(160px,_1fr)] gap-6 px-4 min-w-max"
              >
                {timelinePhases.map((phase) => {
                  const Icon = phase.icon;
                  return (
                    <div
                      key={phase.id}
                      className="flex flex-col items-center text-center pt-10 relative"
                    >
                      <div className="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 bg-white p-4 rounded-full  ">
                        <Icon className="text-gray-700" size={24} />
                      </div>
                      <div className="pt-16">
                        <p className="text-xs text-gray-500 whitespace-nowrap">
                          {phase.date}
                        </p>
                        <h3 className="text-xs font-bold text-gray-900 mt-1">
                          {phase.title}
                        </h3>
                        <p className="text-[10px] text-gray-500 mt-1">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end items-center gap-2 px-4 mt-4 z-50 absolute top-0 right-0">
            {canScrollLeft && (
              <button
                type="button"
                onClick={scrollLeft}
                className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
              >
                <ArrowLeft size={20} />
              </button>
            )}

            {canScrollRight && (
              <button
                type="button"
                onClick={scrollRight}
                className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
              >
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
