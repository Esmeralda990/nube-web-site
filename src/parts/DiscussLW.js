/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import bgImg from "../assets/images/ImgFooter/Fondo_Hom.svg";
import ProdImag6 from "../assets/images/ImgFooter/Rubix_Connect.svg";

export default function DiscussCI() {
  return (
    <section className="relative w-full flex justify-center py-24 px-4 ">
      <div className="relative lg:max-w-[104rem] w-full rounded-3xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.20)]">
        <img
          src={bgImg}
          alt="Background"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-70"
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-50 z-10" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 p-20 md:p-40">
          <div className="w-fulllg:w-1/2 text-center md:text-left text-theme-blue lg:ml-8">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight mb-5 max-w-lg">
              Ready to Future-Proof Your Building
            </h2>
            <p className="font-light text-base lg:text-xl text-gray-500 leading-relaxed mb-16 lg:max-w-xl">
              Transform your building with Nube iO’s smart solutions. From
              seamless IoT integration to real-time automation and energy
              optimisation, we make buildings smarter, more efficient, and
              future-ready.
            </p>
            <div className="mt-8 flex  justify-center md:justify-start space-x-4 sm:space-y-0 sm:space-x-4 items-center">
              <Fade direction="up" triggerOnce>
                <Button
                  href="/contact/"
                  type="link"
                  className="flex items-center justify-center max-w-fit px-6 py-3 bg-theme-teal text-white text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
                >
                  Contact
                </Button>
              </Fade>
            </div>
          </div>

          <div className="w-full lg:md:w-1/2 flex justify-center overflow-hidden ">
            <img
              src={ProdImag6}
              alt="Rubix Connect LW"
              className="max-w-sm scale-[1.3] object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)] hidden sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
