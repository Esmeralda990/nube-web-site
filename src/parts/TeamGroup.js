/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
import React from "react";
import { floatingIcons } from "json/landingPageData";

const TeamGroup = () => {
  return (
    <section className="mt-8 mb-8 pt-4 pb-4 md:pt-32 mb:pb:32 sm:mt-4 relative min-h-[500]">
      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <div
          key={icon.src}
          className={`floating-icons absolute ${
            icon.position === "left" ? "left-0" : "right-0"
          } h-24 w-24 rounded-2xl bg-accent ring-inset ring-accent-foreground/10 md:block`}
          style={{
            top: icon.top,
            left: icon.position === "left" ? icon.offset : undefined,
            right: icon.position === "right" ? icon.offset : undefined,
            bottom: icon.position === "bottom" ? icon.offset : undefined,
            zIndex: 10 + index,
          }}
        >
          <img
            src={icon.src}
            alt="floating icon"
            className="h-full w-full rounded-md object-cover object-center p-3"
          />
        </div>
      ))}

      <div className="container mx-auto max-w-[50%] flex flex-col items-center text-center relative z-10">
        {/* Headline */}
        <h1 className="text-xl sm:text-xl lg:text-6xl text-theme-blue font-bold leading-tight mb-5">
          Who Makes Nube iO Possible? Our Team,Our Strength At Nube iO.
        </h1>
        <p className="text-sm sm:text-base lg:text-xl font-light text-gray-400 leading-relaxed">
          Our people drive our innovation and success.From engineers and sales
          specialists to customer support and marketing teams, every department
          plays a vital role. Together, we create technology that transforms
          industries.s
        </p>
      </div>
    </section>
  );
};

export default TeamGroup;
