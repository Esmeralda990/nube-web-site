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
    <section className="mt-12 sm:mt-32 py-32 relative min-h-[500]">
      {/* Floating Icons */}
      {floatingIcons.map((icon, index) => (
        <div
          key={icon.src}
          className={`absolute ${
            icon.position === "left" ? "left-0" : "right-0"
          } h-24 w-24 rounded-2xl bg-accent ring-1 ring-inset ring-accent-foreground/10 md:block`}
          style={{
            top: icon.top, // Establece el valor top específico
            left: icon.position === "left" ? icon.offset : undefined,
            right: icon.position === "right" ? icon.offset : undefined,
            bottom: icon.position === "bottom" ? icon.offset : undefined, // Puedes agregar un ajuste de bottom
            zIndex: 10 + index, // Se puede variar para evitar solapamiento con más énfasis en los íconos de mayor zIndex
          }}
        >
          <img
            src={icon.src}
            alt="floating icon"
            className="h-full w-full rounded-md border-bg-gray-600 object-cover object-center p-3"
          />
        </div>
      ))}

      {/* Center Content */}
      <div className="container mx-auto flex flex-col items-center text-center relative z-10">
        {/* Headline */}
        <h1 className="text-4xl font-bold text-theme-blue text-primary sm:text-5xl md:text-6xl">
          Welcome to Our Team
        </h1>
        {/* Subheading */}
        <p className="mt-4 max-w-2xl text-lg font-light text-gray-400 text-muted-foreground sm:text-xl">
          Meet our amazing team, dedicated to bringing you the best experience.
        </p>
      </div>
    </section>
  );
};

export default TeamGroup;
