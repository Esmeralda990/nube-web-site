/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import { Managers } from "json/landingPageData";

export default function TeamSection() {
  return (
    <section className="lg:mt-48 md:pb-48 px-8 mt-16">
      <div className=" container mx-auto flex flex-col items-center text-center mb-10 ">
        <h2 className="text-2xl md:text-5xl text-theme-blue text-center font-bold leading-tight mb-10 ">
          Meet our team
        </h2>
        <p className="mb-8 max-w-4xl text-muted-foreground font-light text-gray-400 lg:text-xl">
          Behind every solution is a passionate team of innovators, engineers,
          and leaders driving Nube iO’s vision forward—one smart space at a
          time.
        </p>
      </div>
      <div className="container mx-auto mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5 grid-cols-auto-fit overflow-hidden text-center">
        {Managers.map((person) => (
          <div
            key={person.id}
            className="flex flex-col bg-accent rounded-xl items-center"
          >
            <img
              src={person.imageUrl}
              alt={person.name}
              className="mb-4 w-32 h-30 sm:w-30 sm:h-40 md:w-40 md:h-40 lg:w-30 lg:h-25 rounded-full object-cover "
            />
            <p className="font-bold">{person.name}</p>
            <p className="text-muted-foreground">{person.role}</p>
            <p className="py-3 font-light text-gray-500 text-base text-muted-foreground overflow-hidden text-ellipsis max-w-sm">
              {person.description}
            </p>
            <div className="mt-2 flex gap-4">
              <a
                href={person.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="size-5 text-muted-foreground text-theme-blue" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
