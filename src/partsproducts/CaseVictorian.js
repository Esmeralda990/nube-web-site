/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React from "react";

import bgImgLight from "../assets/images/ImgFooter/Fondo_Hom.svg";
import bgImgDark from "../assets/images/ImgFooter/Fondo_HomeD.svg";
import Victorian from "../assets/images/CaseStudy/Victorian1.png";

const CaseVictorian4 = () => {
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

        <div className="relative z-10 container mx-auto flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="flex w-full max-w-[46rem] flex-col items-center justify-center gap-8">
              <div className="flex w-full flex-col gap-5 text-center">
                <h1 className="text-4xl lg:text-6xl leading-[1.2] font-semibold text-theme-blue dark:text-white">
                  Driving Sustainability in 30+ Victorian Schools with IoT
                </h1>
                <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400 lg:pb-12">
                  Over 30 Victorian schools teamed up with QA Electrical to cut
                  rising utility costs and boost sustainability. Seeking
                  smarter, healthier learning spaces, they turned to Nube iO’s
                  IoT solutions to transform their utility management systems.
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
                30+ Victorian Schools - IoT for Sustainability
              </h2>
              <img
                src={Victorian}
                alt="Victorian Schools"
                className="w-full object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4 dark:text-theme-teal mt-6">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Galvin Engineering partnered with Nube iO to improve water
                safety compliance in hospitals.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Victorian schools struggled with high electricity bills from
                unnecessary appliance use, poor air quality affecting student
                focus, undetected water leaks, and a lack of actionable data for
                utility optimisation. These issues undermined sustainability
                goals, increased operational costs, and negatively impacted the
                learning environment.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                To tackle these challenges, Nube iO partnered with QA Electrical
                to implement an advanced IoT-based utility monitoring system
                across over 30 Victorian schools. The solution featured wireless
                LoRaWAN sensors for real-time monitoring of electricity, water
                usage, and air quality—eliminating the need for complex cabling.
                Data was collected via Rubix Compute Gateways and transmitted to
                a centralised cloud platform. A user-friendly, cloud-based
                dashboard enabled facility managers to visualise trends, receive
                alerts, and take proactive steps to improve efficiency, reduce
                costs, and support healthier learning environments.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 dark:text-theme-teal">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                The deployment of Nube iO’s utility monitoring system led to
                significant, measurable improvements across all participating
                schools. Real-time energy monitoring allowed for immediate
                interventions, reducing unnecessary electricity consumption and
                lowering utility costs. Air quality enhancements created
                healthier learning environments, improving student focus,
                concentration, and overall well-being. Additionally, early leak
                detection contributed to substantial water conservation,
                resulting in both financial savings and positive environmental
                impact. By combining data-driven insights with real-time alerts,
                schools advanced their sustainability goals while fostering more
                comfortable, efficient, and productive spaces for students and
                staff alike.
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

export default CaseVictorian4;
