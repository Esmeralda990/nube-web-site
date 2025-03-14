// src/components/GifComponent.js
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import VideoGif from "../Video/SOLUTIONS_webm.webm";

const GifSectionSolution = () => {
  return (
    <div className="w-full flex justify-center lg:mt-16">
      <video
        src={VideoGif}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default GifSectionSolution;
