/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React from "react";
import { Fade } from "react-awesome-reveal";
import { ArrowRight, Blocks, MessagesSquare, Users } from "lucide-react";
import Button from "../elements/Button";

export default function HeroAbout() {
  return (
    <section className="text-center flex justify-center items-center mt-12 lg:mt-24 ">
      <div className="container flex flex-col items-center justify-center text-center">
        <div className="w-full px-5 flex flex-col mb-5 sm:px-12 sm:mt-6 max-w-4xl lg:mt-6 xl:pl-12 xl:mt-20">
          <a
            href="/solutions"
            className="mx-auto mb-2 inline-flex items-center gap-3 rounded-full border px-2 py-1 text-sm"
          >
            ✨ Software and Hardware Solutions
            <span className="flex size-7 items-center justify-center rounded-full bg-muted">
              <ArrowRight className="w-4" />
            </span>
          </a>
          <Fade direction="" triggerOnce>
            <h1 className="text-4xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5 ">
              Innovating the Future of Smart Automation
            </h1>
          </Fade>
          <Fade direction="u" triggerOnce delay={400}>
            <p className="font-light text-gray-400 mx-auto max-w-3xl text-muted-foreground lg:text-xl ">
              We create cutting-edge technology that revolutionizes the way
              businesses
              <span className="mx-2 inline-flex font-medium text-primary text-theme-teal">
                <Users className="mr-1 w-4 md:w-5" />
                Connect
              </span>
              to
              <span className="mx-2 inline-flex font-medium text-primary text-theme-teal ">
                <Blocks className="mr-1 w-5" />
                Automate,
              </span>
              <span className="mx-2 inline-flex font-medium text-primary text-theme-teal">
                <MessagesSquare className="mr-1 w-5" />
                Optimise,
              </span>
              their environments. By combining IoT-powered automation with
              real-time data insights, were pushing the boundaries of what smart
              infrastructure can achieve.
            </p>
          </Fade>
          <Fade delay={500} triggerOnce>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              {" "}
              <Button
                href="/contact-us/"
                type="link"
                className="flex items-center justify-center w-auto px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black  "
              >
                Contact
                <ArrowRight className="ml-2 w-4" />
              </Button>
              <Button
                href="/get-demo/"
                type="link"
                className="flex items-center justify-center px-6 py-3 bg-white text-black text-base rounded-xl border border-theme-teal transition duration-300 ease-in-out hover:scale-105 hover:bg-theme-teal hover:text-white"
              >
                Get Demo
                <ArrowRight className="ml-2 w-4" />
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
