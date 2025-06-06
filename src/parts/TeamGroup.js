/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from "react";
import Team from "../assets/images/IconsTeam/Team.svg";

const TeamGroup = () => {
  return (
    <section className="lg:py-24 px-8">
      <div className="overflow-hidden mt-12 ">
        <div className="container mx-auto">
          <div className="mx-auto flex max-w-5xl flex-col items-center">
            <div className="z-10 items-center text-center">
              <h2 className="text-3xl md:text-5xl text-theme-blue text-center font-bold leading-tight mb-10">
                Our Team, Our Strength At Nube iO.
              </h2>
              <p className="mb-8 max-w-5xl text-muted-foreground font-light text-gray-400 lg:text-xl">
                Our people drive our innovation and success. From engineers and
                sales specialists to customer support and marketing teams, every
                department plays a vital role. Together, we create technology
                that transforms industries.
              </p>
            </div>
          </div>
          <img
            className="max-w-1/2 h-auto object-contain overflow-hidden lg:-mt-60 scale-[0.8] lg:-mb-32"
            src={Team}
            alt="Team group"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamGroup;
