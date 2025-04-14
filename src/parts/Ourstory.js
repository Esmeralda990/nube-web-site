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
    <section className="py-32 pb-4 md:pl-18 px-6 md:pb-28">
      <div className="container mx-auto max-w-screen-2xl">
        <div className="mx-auto flex flex-col items-start gap-6 justify-between">
          <h2 className="text-balance text-2xl md:text-5xl font-bold text-theme-blue">
            Our Story
          </h2>
          <p className="text-muted-foreground max-w-screen-md text-lg text-gray-400 font-light">
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

        <div className="relative mt-20">
          {canScrollLeft && (
            <button
              type="button"
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          <div
            ref={scrollContainerRef}
            onScroll={updateScrollState}
            className="flex space-x-6 overflow-x-auto scroll-smooth no-scrollbar"
          >
            {items.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-80">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="aspect-[2/2] rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="flex flex-col ">
                  <h3 className="mb-5 text-xl font-bold text-theme-blue">
                    {item.title}
                  </h3>
                  <p className="mb-3 text-sm font-light md:text-base text-gray-400">
                    {item.description}
                  </p>
                  <div className="flex justify-between gap-6 text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground text-lg text-theme-teal">
                      {item.year}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {canScrollRight && (
            <button
              type="button"
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white border rounded-full shadow hover:bg-gray-100"
            >
              <ArrowRight size={20} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Ourstory;
