/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React from "react";

import bgImgLight from "../assets/images/ImgFooter/Fondo_Hom.svg";
import bgImgDark from "../assets/images/ImgFooter/Fondo_HomeD.svg";
import Fujitsu from "../assets/images/CaseStudy/CaseMcDonal.png";

const CaseFujitsu6 = () => {
  return (
    <section className="pb-32 ">
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
                  Smarter Operations at McDonald’s Burwood
                </h1>
                <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400 lg:pb-12">
                  Explore how Fujitsu General implemented their anywAiR® iO
                  technology at McDonald’s Burwood, enabling remote HVAC
                  management, energy monitoring, and indoor air quality insights
                  — all powered by Nube iO’s OEM solution.
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
                src={Fujitsu}
                alt="McDonald’s"
                className="w-full object-contain rounded-lg mb-12"
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4 dark:text-theme-teal">
                The Project
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Located on the corner of Burwood Highway and Scott Grove,
                Burwood, Victoria, the 24-hour McDonald’s restaurant was
                undergoing a refurbishment. This included modifying the interior
                layout and replacing the air conditioning with a system that
                could provide the latest technology and control options to
                minimise the restaurant’s power usage, while also providing
                usage reports that arm the franchisee with information to make
                informed business decisions.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Before deploying the IoT-enabled anywAiR® iO system, the
                restaurant faced several operational challenges:
                <ul className="pl-5">
                  <br /> • Limited Visibility Across Locations: The franchisee
                  lacked a centralised way to monitor and manage HVAC systems
                  and energy usage across multiple restaurant sites, leading to
                  inefficiencies and increased operating costs.
                  <br /> <br />• Manual Monitoring and Maintenance: Critical
                  equipment such as bins and refrigeration units required
                  regular manual checks
                  <br /> <br />• Energy Usage: Without real-time monitoring, it
                  was difficult to identify unnecessary energy consumption or
                  optimize HVAC performance based on occupancy or usage
                  patterns.
                  <br /> <br />• Poor Indoor Air Quality Insights: The absence
                  of air quality monitoring meant that the environment could not
                  be proactively managed for customer comfort and staff
                  well-being.
                </ul>
                <br />
                These challenges highlighted the need for an integrated,
                scalable solution capable of providing real-time insights,
                remote management, and predictive alerts—ultimately driving the
                decision to implement the anywAiR® iO system with a suite of IoT
                sensors.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal ">
                Outcome
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                To enable remote control capabilities, Fujitsu General installed
                the anywAiR® iO system with wireless sensors. This solution
                allows the franchisee to monitor power consumption, manage HVAC
                system operations, and remotely adjust set temperatures. It also
                provides a centralised dashboard—accessible from the office or
                remotely via computer, smartphone, or tablet—enabling the
                franchisee to oversee multiple restaurant locations with ease.
                <br /> <br />A wide range of IoT sensors were deployed alongside
                HVAC controls, including:
                <ul className="pl-5">
                  <br /> • People counters to track the number of individuals
                  entering and exiting the store;
                  <br /> <br />• Ultrasonic wireless bin sensors that alert
                  staff when bins are full;
                  <br /> <br />• CO₂ sensors to monitor and improve indoor air
                  quality;
                  <br /> <br />• Integration with the main refrigeration unit to
                  enable predictive maintenance alerts in case of performance
                  anomalies.
                </ul>
                <br />
                This implementation delivered a cost-effective yet powerful IoT
                solution tailored to the restaurant environment, enhancing
                operational efficiency, reducing manual oversight, and improving
                overall system reliability.
              </p>
              <br />
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
