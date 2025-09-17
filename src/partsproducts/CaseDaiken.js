/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React from "react";
import bgImgLight from "../assets/images/ImgFooter/Fondo_Hom.svg";
import bgImgDark from "../assets/images/ImgFooter/Fondo_HomeD.svg";
import Daikin from "../assets/images/CaseStudy/CaseDaikin.png";

const CaseDaikin3 = () => {
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
                  Partnering for Innovation: Daikin and Nube iO
                </h1>
                <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400 lg:pb-12">
                  Daikin transforms HVAC platforms with Nube iO software,
                  achieving real-time insights, enhanced efficiency, and
                  intuitive, user-friendly interfaces.
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
                src={Daikin}
                alt="Daiken"
                className="w-full object-contain rounded-lg mb-12"
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4 dark:text-theme-teal">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Daikin partnered with Nube iO to enhance their HVAC platforms
                through software innovation and real-time data integration.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Daikin, a leader in the HVAC industry, faced multiple challenges
                in adapting to the modern digital environment. These included a
                lack of actionable data for system performance and predictive
                maintenance, unintuitive interfaces that impact the user
                experience, and the need to integrate new solutions without
                disrupting existing operations. To overcome these challenges and
                future-proof its technology, Daikin sought a partner with proven
                expertise in IoT, software development, and data integration.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO partnered with Daikin to deliver innovative software and
                co-development services tailored to their specific goals. The
                collaboration focused on integrating custom software into
                Daikin’s existing platforms to unlock real-time data insights
                and provide actionable analytics for performance optimisation.
                By incorporating IoT-enabled solutions, Daikin gained the
                ability to monitor HVAC systems, predict maintenance needs, and
                boost overall efficiency. The partnership also emphasised
                user-centric design, enhancing the interface for a more
                intuitive and engaging user experience. Working closely with
                Daikin’s in-house teams, Nube iO ensured seamless integration
                and alignment with the company’s long-term strategic vision.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                The collaboration between Nube iO and Daikin resulted in
                tangible improvements and strategic benefits across multiple
                areas. Real-time data insights empowered Daikin to continuously
                monitor and optimise system performance, enhancing efficiency
                and overall reliability. The newly designed, user-friendly
                interface significantly improved the customer experience, making
                platform interactions more intuitive and engaging. With
                IoT-enabled predictive maintenance, Daikin was able to detect
                potential issues early, reducing downtime and cutting
                maintenance costs. Additionally, the scalable nature of the
                co-developed solution positioned Daikin to seamlessly adopt
                future innovations and expand their system capabilities with
                ease.
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

export default CaseDaikin3;
