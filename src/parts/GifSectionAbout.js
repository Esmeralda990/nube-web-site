// src/components/GifComponent.js
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import Gif from "../assets/images/GifSection/Ultima_Home.gif";

const GifSectionAbout = () => {
  return (
    <div className="w-full flex justify-center lg:mt-16">
      <img
        src={Gif}
        alt="Gif"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  );
};

export default GifSectionAbout;
