/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { ArrowRight } from "lucide-react";

import Button from "../elements/Button/index";

const Partners = () => {
  return (
    <section className="py-12">
      <div className=" container mx-auto pb-24">
        <a
          href="/"
          className="mx-auto mb-4 flex w-fit items-center rounded-full bg-muted px-4 py-2 text-sm border border-theme-teal"
        >
          <span className="mr-1 font-semibold">What&apos;s new</span>
          | Read more
          <ArrowRight className="ml-2 inline size-4" />
        </a>
        <h2 className=" mb-6 text-center text-2xl font-bold lg:text-5åxl xl:pl-4 text-theme-blue">
          Collaborating for Innovation
        </h2>
        <p className="mx-auto mb-10 max-w-3xl text-base text-center font-light text-gray-400 text-muted-foreground lg:text-xl">
          At Nube iO, we believe great solutions come from strong partnerships.
          We proudly collaborate with industry leaders, innovative technology
          providers, and trusted service companies to deliver unmatched value to
          our clients. Our partnerships ensure seamless integration,
          cutting-edge technology, and comprehensive support, empowering your
          business for sustainable success.
        </p>
        <div className="flex justify-center">
          <Button
            href="/partners/"
            type="link"
            className="flex items-center justify-center w-auto px-6 py-3  bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black "
          >
            Become a partner
            <ArrowRight className="ml-2 inline size-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
