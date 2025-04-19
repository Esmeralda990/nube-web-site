/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable comma-dangle */
import React, { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { OurStoryD } from "../json/landingPageData.js";

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
    scrollContainerRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  const items = OurStoryD.flat();

  return (
    <section className="mt-12 pb-4 px-6 md:pb-24">
      <div className="max-w-screen-xl mx-auto">
        <div className="mx-auto flex flex-col items-center gap-6 justify-center">
          <h2 className="text-balance text-2xl md:text-5xl font-bold text-theme-blue">
            Our Story
          </h2>
          <p className="text-muted-foreground max-w-screen-md text-lg text-gray-400 font-light text-center">
            At Nube iO, we’re revolutionising automation, remote monitoring, and
            intelligent infrastructure. With over 14 years of experience, our
            team leads the way in developing advanced software and hardware to
            meet the challenges of a rapidly changing world.
          </p>
          <a
            href="/get-demo/"
            className="flex items-center gap-1 text-lg text-theme-teal"
          >
            Get Demo
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="relative mt-20 w-full">
        {canScrollLeft && (
          <button
            type="button"
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
          >
            <ArrowLeft size={20} />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          onScroll={updateScrollState}
          className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar lg:px-56 px-12"
        >
          {items.map((item, idx) => (
            <div
              key={item.id}
              className={`flex-shrink-0 w-80 ${
                idx === items.length - 1 ? "pr-6" : ""
              }`}
            >
              <div className="w-full h-70 md:h-72 lg:h-80 overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="aspect-[2/2] rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="mb-5 text-xl font-bold text-theme-blue">
                  {item.title}
                </h3>
                <p className="mb-3 text-sm font-light md:text-base text-gray-400">
                  {item.description}
                </p>
                <span className="flex items-center gap-1 text-muted-foreground text-lg text-theme-teal">
                  {item.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {canScrollRight && (
          <button
            type="button"
            onClick={scrollRight}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
          >
            <ArrowRight size={20} />
          </button>
        )}
      </div>
    </section>
  );
};

export default Ourstory;
