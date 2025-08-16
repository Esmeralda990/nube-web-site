/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from "react";
import Team from "../assets/images/IconsTeam/Teams.svg";
import Teamdark from "../assets/images/IconsTeam/Teamsdark.svg";

const TeamGroup = () => {
  return (
    <section className="lg:py-16 px-8 mb-12">
      <div className="container mx-auto mt-24 overflow-hidden max-w-7xl ">
        <div className="text-center mb-12  mx-auto">
          <h2 className="text-2xl lg:text-5xl text-theme-blue font-bold leading-tight mb-6 dark:text-white">
            Our Team, Our Strength.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2">
            <p className="text-muted-foreground font-light text-gray-400 lg:text-xl max-w-md">
              Our people drive our innovation and success. From engineers and
              sales specialists to customer support and marketing teams, every
              department plays a vital role. Together, we create technology that
              transforms industries.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center mt-12">
            <img
              className="w-full max-w-xl h-auto object-contain  block dark:hidden"
              src={Team}
              alt="Team group"
            />
            <img
              className="w-full max-w-xl h-auto object-contain hidden dark:block"
              src={Teamdark}
              alt="Team group"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGroup;
