/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from "react";

import { Calendar, ChevronRight } from "lucide-react";

const Case4 = () => {
  return (
    <section className="pb-0 mb-0 px-6 mt-20">
      <div className="container max-w-screen-2xl mx-auto">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6 text-center">
          <h2 className="text-balance text-4xl font-bold text-theme-blue">
            Explore More Case Studies
          </h2>
          <p className="text-muted-foreground font-light text-xl text-gray-400">
            Learn how other companies are leveraging Nube iO solutions to
            transform their operations..
          </p>
        </div>
        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col p-4">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080"
                alt="placeholder"
                className="aspect-[3/4] w-full rounded-lg object-cover"
              />
              <span className="absolute right-4 top-4 bg-background/70 px-3 py-1 text-sm backdrop-blur-sm text-white">
                Hospital Thermal
              </span>
            </div>
            <div className="flex h-full flex-col  p-4">
              <h3 className="mb-4 text-xl font-bold text-theme-teal">
                Galvin Engineering
              </h3>
              <div className="flex justify-between gap-6 text-sm">
                <span className="flex items-center gap-1 text-muted-foreground font-light text-base">
                  <Calendar className="h-4 w-4" />
                  September, 23, 2024
                </span>
                <a
                  href="/case-study2/"
                  className="flex items-center gap-1 font-light text-base hover:text-theme-teal transition-colors duration-300"
                >
                  Read more
                  <ChevronRight className="h-full w-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-[3/4] w-full rounded-lg object-cover"
              />
              <span className="absolute right-4 top-4 bg-background/70 px-3 py-1 text-sm backdrop-blur-sm text-white">
                Automation
              </span>
            </div>
            <div className="flex h-full flex-col p-4">
              <h3 className="mb-5 text-xl font-bold text-theme-teal">
                Enviro Building Services
              </h3>
              <div className="flex justify-between gap-6 text-sm">
                <span className="flex items-center gap-1 text-muted-foreground font-light text-base">
                  <Calendar className="h-4 w-4" />
                  April, 07, 2024
                </span>
                <a
                  href="/case-study3/"
                  className="flex items-center gap-1 font-light text-base hover:text-theme-teal transition-colors duration-300"
                >
                  Read more
                  <ChevronRight className="h-full w-3" />
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1563952532949-3d1a874ad614?q=80&w=1951&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="placeholder"
                className="aspect-[3/4] w-full rounded-lg object-cover"
              />
              <span className="absolute right-4 top-4 bg-background/70 px-3 py-1 text-sm backdrop-blur-sm text-white">
                Schools
              </span>
            </div>
            <div className="flex h-full flex-col  p-4">
              <h3 className="mb-5 text-xl font-bold text-theme-teal ">
                Victorian Schools
              </h3>
              <div className="flex justify-between gap-6 text-sm">
                <span className="flex items-center gap-1 text-muted-foreground font-light text-base">
                  <Calendar className="h-4 w-4" />
                  August, 31, 2024
                </span>
                <a
                  href="/case-study4/"
                  className="flex items-center gap-1 font-light text-base hover:text-theme-teal transition-colors duration-300"
                >
                  Read more
                  <ChevronRight className="h-full w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Case4;
