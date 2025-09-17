/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React from "react";

import bgImgLight from "../assets/images/ImgFooter/Fondo_Hom.svg";
import bgImgDark from "../assets/images/ImgFooter/Fondo_HomeD.svg";
import Enviro from "../assets/images/CaseStudy/CaseEnviro.png";

const CaseEnviro2 = () => {
  return (
    <section className="pb-32">
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

        <div className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="flex w-full max-w-[46rem] flex-col items-center justify-center gap-8">
              <div className="flex w-full flex-col gap-5 text-center">
                <h1 className="text-3xl lg:text-6xl leading-[1.2] font-semibold text-theme-blue dark:text-white">
                  Enviro Delivers Scalable HVAC & BMS Modernisation
                </h1>
                <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400 lg:pb-12">
                  Enviro Building Services leverages Nube iO’s automation stack
                  to deliver scalable HVAC and BMS upgrades with minimal
                  disruption, transforming legacy systems into smart,
                  sustainable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="mx-auto w-full max-w-5xl lg:flex lg:gap-20 ">
          <div className="flex w-full max-w-[40rem] mx-auto flex-col gap-10">
            <div className="prose">
              <img
                src={Enviro}
                alt="Enviro Building"
                className="w-full  object-contain rounded-lg mb-12 "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4 dark:text-theme-teal">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Enviro sought a partner to modernise BMS and HVAC systems at
                high-profile commercial sites.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Enviro sought to modernise outdated HVAC and BMS systems across
                several high-profile client sites. The project required
                solutions that were not only scalable and flexible to adapt to
                varying site conditions, but also capable of integrating
                seamlessly with existing infrastructure. Additionally, the
                implementation needed to minimise disruption to ongoing
                operations, ensuring business continuity while upgrading to
                smarter, more efficient building systems.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO equipped Enviro with a robust, future-ready building
                automation stack tailored to modernise legacy HVAC and BMS
                systems. The solution included Rubix Compute Edge Gateways and
                Rubix IO16 controllers, offering powerful on-site control and
                data processing. These were paired with the Tridium Niagara
                platform to enable centralised visualisation and real-time
                monitoring across multiple sites. With strong integration
                capabilities, the system adapted effortlessly to various
                infrastructure conditions, ensuring a seamless upgrade path with
                minimal disruption.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Enviro’s clients experienced substantial improvements following
                the deployment of Nube iO’s solution. Energy efficiency and
                system reliability were significantly enhanced, leading to
                reduced operational costs and improved sustainability. Occupants
                benefited from more consistent and comfortable indoor
                environments, while facility managers gained greater control
                through real-time data insights and streamlined system
                monitoring. This comprehensive upgrade positioned clients for
                long-term performance and adaptability.
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
                <h4 className="text-xl font-bold text-theme-blue dark:text-white">
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

export default CaseEnviro2;
