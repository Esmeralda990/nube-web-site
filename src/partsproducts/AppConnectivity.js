/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from "react";
import VideoApp from "../assets/Video/Grabacion_webmp.webm";

const AppNub = () => {
  return (
    <section className="relative py-32 bg-white overflow-visible">
      <div className="container mx-auto flex justify-center ">
        <div className="relative w-[70%] h-[300px] lg:h-[500px] overflow-hidden max-w-5xl">
          <div className="absolute bottom-0 left-0 w-full h-[200px] lg:h-[400px] bg-gray-50 z-0 rounded-xl" />
          <div className="absolute -top-0 left-1/2 z-20 w-[12.5rem] -translate-x-1/2 transform lg:w-[18.75rem]">
            <video
              src={VideoApp}
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-[5%] left-[11.5%] w-[77%] h-[81%] object-cover rounded-[40px] z-10"
            />
            <img
              src="https://shadcnblocks.com/images/block/hero108/iphone.png"
              alt="Phone"
              className="relative z-20 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppNub;
