/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import Gif from "../assets/images/GifSection/Ultima_Home.gif";

export default function Portfolio({ data }) {
  return (
    <>
      <section className="container mx-auto flex flex-col items-center">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Real-World Solutions, Powered by Nube iO
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Discover how Nube iO transforms building management across
            industries
          </p>
        </Fade>

        <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-2 xl:gap-8 justify-items-center">
          {data.map((item, index) => (
            <Fade
              direction=""
              triggerOnce
              bottom
              delay={500 * index}
              key={index}
            >
              <Button type="link" href={`/project/${item.id}`}>
                <div className="group rounded-2xl shadow-xl w-auto m-3 transform transition duration-500 hover:scale-110 portofolio-card">
                  <div className="relative">
                    <img
                      src={item.imageUrl}
                      alt="Portfolio"
                      className="rounded-t-2xl z-0"
                    />
                    <div className="absolute flex w-full h-full top-0 opacity-0 bg-black justify-center rounded-t-2xl rounded-b img-hover">
                      <button className="focus:outline-none">
                        <svg
                          className="w-20 h-20 text-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="py-4">
                    <h2 className="text-theme-blue text-center text-xl">
                      {item.title}
                    </h2>
                    <p className="font-light text-gray-400 text-center">
                      {item.type}
                    </p>
                  </div>
                </div>
              </Button>
            </Fade>
          ))}
        </div>
      </section>

      {/* Contenedor para el GIF fuera del Portfolio */}
      <div className="w-full flex justify-center lg:mt-16">
        <img
          src={Gif}
          alt="Gif"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </>
  );
}
