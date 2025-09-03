/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from "react";
import { Star } from "lucide-react";
import { Testimonial2 } from "json/landingPageData";

const Testimonials2 = () => {
  const { image1, imageDark } = Testimonial2;
  return (
    <section className="lg:py-12">
      <div className="container mx-auto px-4 flex flex-col items-center text-center mb-12 ">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src={image1}
            alt="ESR"
            className="w-32 h-auto object-cover dark:hidden"
          />
          <img
            src={imageDark}
            alt="ESR"
            className="w-32 h-auto object-cover hidden dark:block"
          />
        </div>
        <p className="mb-8 max-w-6xl font-light md:px-8 lg:text-lg text-gray-400 dark:text-gray-400">
          &ldquo;{Testimonial2.text}&rdquo;
        </p>
        <p className="mb-1 text-sm font-medium lg:text-lg text-theme-blue dark:text-white">
          {Testimonial2.name}
        </p>
        <p className="mb-2 text-sm text-gray-500 lg:text-md dark:text-white">
          {Testimonial2.role}
        </p>
        <div className="mt-2 flex items-center gap-1 mb-2">
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

export default Testimonials2;
