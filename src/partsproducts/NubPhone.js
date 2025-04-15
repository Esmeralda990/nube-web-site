/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
/* eslint react/prop-types: "off" */
import PropTypes from "prop-types";
import React from "react";
import Screen from "../assets/images/Connectivity/Phone.png";

const PhoneNube = ({
  heading = "App",
  subheading = " Remotely Monitor Your Entire Asset Portfolio",
  image = {
    src: Screen,
    alt: "Screen",
  },
}) => {
  return (
    <section className="bg-background mt-0 ">
      <div className="container mx-auto flex flex-col items-center lg:mt-5 gap-10 lg:my-0 lg:flex-row px-12">
        <div className="flex flex-col gap-3 lg:w-2/3">
          <h2 className="text-4xl font-bold text-theme-blue text-foreground md:text-4xl lg:text-5xl">
            <span>{heading}</span>
          </h2>
          <h2 className="text-3xl font-bold text-theme-teal   text-foreground md:text-5xl lg:text-3xl">
            <span className="text-muted-foreground">{subheading}</span>
          </h2>
          <ul className="text-base text-muted-foreground font-light text-gray-500 md:text-lg lg:text-xl list-inside max-w-xl">
            <li>
              <span className="text-theme-teal">&#10003;</span> Log into
              multiple buildings across a large geographical area from one
              remote login
            </li>
            <li>
              <span className="text-theme-teal">&#10003;</span> Access your data
              on your phone, laptop or tablet with no software to install
            </li>
            <li>
              <span className="text-theme-teal">&#10003;</span> Fully
              customisable with multiple skin designs
            </li>
            <li>
              <span className="text-theme-teal">&#10003;</span> Analyse data
              using a highly visual dashboard
            </li>
            <li>
              <span className="text-theme-teal">&#10003;</span> Stay on top of
              the BMS performance with daily updates and alerts
            </li>
            <li>
              <span className="text-theme-teal">&#10003;</span> Scheduling &
              trending
            </li>
            <li>
              <span className="text-theme-teal">&#10003;</span> Manage setpoints
              and thresholds
            </li>
          </ul>
        </div>
        <div className="relative z-10 lg:w-1/3">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

PhoneNube.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    alt: PropTypes.string,
  }),
};

export default PhoneNube;
