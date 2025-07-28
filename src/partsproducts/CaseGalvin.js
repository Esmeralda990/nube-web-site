/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React from "react";

import bgImgLight from "../assets/images/ImgFooter/Fondo_Hom.svg";
import bgImgDark from "../assets/images/ImgFooter/Fondo_HomeD.svg";
import Galvin from "../assets/images/CaseStudy/Galvin_Blanco.png";

const CaseGalvin1 = () => {
  return (
    <section className="pb-32 px-4">
      <div className="relative lg:max-w-[130rem] w-full rounded-3xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.4]">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImgLight}
            alt="Light Background"
            className="block dark:hidden w-full h-full object-cover opacity-70"
          />
          <img
            src={bgImgDark}
            alt="Dark Background"
            className="hidden dark:block w-full h-full object-cover opacity-70"
          />
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white dark:to-theme-dark z-10" />
        </div>

        <div className="relative z-10 container mx-auto flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="flex w-full max-w-[46rem] flex-col items-center justify-center gap-8">
              <div className="flex w-full flex-col gap-5 text-center">
                <h1 className="text-3xl lg:text-6xl leading-[1.2] font-semibold text-theme-blue dark:text-white">
                  Hospital Thermal Valve Monitoring
                </h1>
                <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400 lg:pb-12">
                  Galvin Engineering is a trusted manufacturer and supplier of
                  specialised water solutions for the health, education, and
                  commercial sectors. Their hospital-grade thermal mixing valves
                  are critical for maintaining water safety and ensuring
                  regulatory compliance in healthcare environments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mx-auto w-full max-w-5xl lg:flex lg:gap-20 ">
          <div className="flex w-full max-w-[40rem] mx-auto flex-col gap-10">
            <div className="prose">
              <h2 className="text-2xl lg:text-4xl font-bold text-theme-blue mb-12 pt-4 text-center mt-12 dark:text-white">
                Galvin Engineering
              </h2>
              <img
                src={Galvin}
                alt="Galvin Engineering"
                className="w-full object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4 dark:text-theme-teal">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Galvin Engineering partnered with Nube iO to improve water
                safety compliance in hospitals.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                To ensure the highest standards of safety and efficiency across
                its healthcare installations, Galvin Engineering needed a robust
                monitoring system for its thermal mixing valves. The solution
                required real-time temperature tracking to mitigate risks like
                scalding and bacterial growth, strict compliance with health and
                safety regulations, and a wireless, low-maintenance architecture
                capable of scaling across multiple hospital sites.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO partnered with Galvin Engineering to deliver a tailored
                IoT monitoring solution designed specifically for thermal mixing
                valve compliance in healthcare environments. The system featured
                LoRa gateways for long-range, low-power wireless communication,
                seamlessly connecting distributed assets. Integrated hardware
                and software enabled precise, real-time temperature monitoring
                with cloud-based visibility. A custom dashboard provided
                actionable insights, automated alerts, and proactive maintenance
                tools to ensure regulatory compliance and system reliability at
                scale.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Galvin Engineering achieved substantial operational improvements
                through the implementation of Nube iO’s IoT monitoring solution.
                Real-time temperature tracking enhanced water safety by
                maintaining optimal conditions and reducing risks such as
                scalding or bacterial growth. The system’s continuous data
                logging supported full regulatory compliance with health and
                safety standards. Additionally, early detection of anomalies
                enabled cost-efficient maintenance, reducing downtime and
                preventing potential system failures across multiple hospital
                sites.
              </p>
            </div>
            <div className="flex items-end gap-4 mt-12">
              <a
                href="/cases/"
                className="text-base font-light text-gray-400 border-b border-gray-900 hover:text-theme-teal hover:border-theme-teal transition-all flex items-center gap-1"
              >
                View All
                <span className="text-theme-teal transition-transform group-hover:translate-x-1">
                  ←
                </span>
                <h4 className="text-2xl font-bold text-theme-blue dark:text-white">
                  Case Studies
                </h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseGalvin1;
