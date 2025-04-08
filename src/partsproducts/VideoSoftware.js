/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import GifSoftware from "../assets/images/SoftwareProducts/rubix-ce-overview.gif";

const VidSoftware = () => {
  return (
    <section className="relative pb-20 mt-20 ">
      <div className="mx-auto mb:-mb-48 overflow-hidden px-12">
        <div className="mx-auto aspect-[16/12] max-w-5xl rounded-xl border border-300 bg-gray-200 p-6">
          <img
            src={GifSoftware}
            alt="GifSoftware"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default VidSoftware;
