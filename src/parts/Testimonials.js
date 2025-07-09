/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from "react";
import { Star } from "lucide-react";
import { Testimonial } from "json/landingPageData";

const Testimonials = () => {
  return (
    <section className="lg:py-24">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <p className="mb-8 max-w-6xl font-light md:px-8 lg:text-lg text-gray-400 dark:text-gray-400">
          &ldquo;{Testimonial.text}&rdquo;
        </p>
        <p className="mb-1 text-sm font-medium lg:text-lg text-theme-blue dark:text-white">
          {Testimonial.name}
        </p>
        <p className="mb-2 text-sm text-gray-500 lg:text-md dark:text-white">
          {Testimonial.role}
        </p>
        <div className="mt-2 flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="w-5 h-5 text-theme-teal fill-theme-teal"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
