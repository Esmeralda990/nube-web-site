/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import { Linkedin } from "lucide-react";
import React from "react";
import { Managers } from "json/landingPageData";

export default function TeamSection() {
  return (
    <section className="mt-12 md:mb-40 lg:pl-32">
      <div className=" container flex flex-col items-center text-center mb-10">
        <h2 className="text-5xl sm:text-5xl text-theme-blue font-bold leading-tight mb-10">
          Meet our team
        </h2>
        <p className="mb-8 max-w-4xl text-muted-foreground font-light text-gray-400 lg:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
          doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur.
          Explicabo.
        </p>
      </div>
      <div className="container mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 lg:px-32 ">
        {Managers.map((person) => (
          <div
            key={person.id}
            className="flex flex-col items-center bg-accent p-8 rounded-xl "
          >
            <img
              src={person.imageUrl}
              alt={person.name}
              className="mb-4 w-32 h-30 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-24 lg:h-24 rounded-full object-cover"
            />
            <p className="text-center font-bold">{person.name}</p>
            <p className="text-center text-muted-foreground">{person.role}</p>
            <p className="py-3 text-center font-light text-gray-500 text-base text-muted-foreground">
              {person.description}
            </p>
            <div className="mt-2 flex gap-4">
              <a
                href={person.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-5 text-muted-foreground" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
