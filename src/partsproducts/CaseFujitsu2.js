/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React from "react";

import bgImgLight from "../assets/images/ImgFooter/Fondo_Hom.svg";
import bgImgDark from "../assets/images/ImgFooter/Fondo_Home.svg";
import Fujitsu from "../assets/images/CaseStudy/Fujitsu_Blanco.png";

const CaseFujitsu6 = () => {
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
                  OEM Solution for Fujitsu AnywAiR iO
                </h1>
                <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400 lg:pb-12">
                  iO Cloud delivered an OEM integration for Fujitsu&apos;s
                  commercial HVAC systems.
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
                Fujitsu AnywAiR iO
              </h2>
              <img
                src={Fujitsu}
                alt="Fujitsu"
                className="w-full object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4 dark:text-theme-teal">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Fujitsu General, a global leader in air conditioning solutions,
                has partnered with Nube iO to develop AnywAIR iO, an IoT
                solution that enhances integration with BMS systems. This
                collaboration highlights how Nube iO&apos;s OEM expertise
                empowers intelligent automation for leading brands.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                As the demand for smart building technologies and
                energy-efficient HVAC management continues to grow, Fujitsu
                identified the need for a solution that could seamlessly
                integrate their air conditioning systems with existing building
                management systems (BMS). To meet this objective, the solution
                had to be simple to deploy—requiring no complex rewiring or
                infrastructure modifications—while also being scalable to
                accommodate various commercial environments. Most importantly,
                it needed to provide reliable, secure, and continuous real-time
                monitoring and control to ensure optimal performance and energy
                efficiency.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                iO Cloud provided an OEM solution that integrates directly with
                Fujitsu commercial air conditioning systems. The compact, BACnet
                and Modbus-compatible AnywAIR iO device acts as a bridge between
                Fujitsu units and third-party BMS platforms, allowing facility
                managers to remotely monitor and control HVAC systems, optimize
                energy efficiency through advanced data analytics, and
                seamlessly integrate with existing infrastructure using standard
                communication protocols.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Since the launch of AnywAIR iO, Fujitsu has been able to offer
                its customers a highly flexible and intelligent BMS-compatible
                solution, with key benefits such as greater control over HVAC
                systems that improves comfort and efficiency, reduced operating
                costs through data-driven energy management, and future-proof
                air conditioning systems thanks to its IoT-enabled capabilities.
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

export default CaseFujitsu6;
