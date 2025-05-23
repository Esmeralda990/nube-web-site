/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { ArrowRight, Lightbulb } from "lucide-react";
import Button from "../elements/Button/index.js";
import Logo from "../assets/images/LogoNube.png";
import ImgLogo from "../assets/images/WorldSolutions/IoT.webp";

const ScenarioIT = () => {
  return (
    <section className="lg:py-32 pt-12">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="lg:max-w-full ">
              <h1 className="text-3xl lg:text-7xl font-bold text-theme-blue leading-tight">
                Turn Building Data into Smarter Decisions
              </h1>
              <p className="mt-2 text-lg text-gray-400 font-light">
                In an era of smart technology and sustainability, modern
                buildings demand advanced solutions that maximise efficiency,
                reduce costs, and enhance occupant comfort. Nube iO harnesses
                IoT analytics to transform building data into clear, actionable
                insights, enabling facility managers to proactively optimise
                operations and sustainability initiatives.
              </p>
              <img
                src={ImgLogo}
                alt="placeholder"
                className="my-8 aspect-video w-full rounded-lg object-cover"
              />

              <div className="p-4 border border-gray-300 text-gray-400 rounded-xl mb-6 font-light mt-20 space-y-16">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-5 h-5 text-theme-blue" />
                  <strong className="block mb-1 text-base lg:text-xl text-theme-blue">
                    {" "}
                    Who This Is For!
                  </strong>
                </div>
                <span>
                  Facility managers, property owners, and sustainability teams
                  looking to gain centralised, real-time insights into building
                  performance and resource usage.
                </span>
              </div>

              <div className="prose max-w-none prose-lg mt-20 ">
                <h4 className="text-base lg:text-xl font-bold text-theme-teal mb-6">
                  Challenges
                </h4>
                <p className="ext-base lg:text-lg font-light text-gray-400 mb-6">
                  Modern buildings generate vast amounts of data from various
                  systems, including HVAC, lighting, and energy management
                  tools. However, this data often remains trapped in isolated
                  silos, making it difficult to gain a comprehensive
                  understanding of building performance.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left border text-sm text-gray-500 font-bold text-lg">
                    <tbody>
                      <tr className="border-t bg-gray-50">
                        <td className="px-4 py-2">
                          Fragmented data across multiple building systems
                        </td>
                      </tr>
                      <tr className="border-t ">
                        <td className="px-4 py-2">
                          Limited real-time visibility into building performance
                        </td>
                      </tr>
                      <tr className="border-t  bg-gray-50">
                        <td className="px-4 py-2">
                          High operational costs due to inefficiencies
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-2">
                          Lack of scalable and integrated solutions
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-xl font-bold text-theme-teal mb-6 mt-20 ">
                  Nube iO&apos;s Solution
                </h4>
                <p className="text-base lg:text-lg  font-light text-gray-400 mb-6">
                  To unlock the value of building data, Nube iO delivers an
                  end-to-end platform that bridges the gap between disconnected
                  systems and actionable intelligence.
                </p>
                <ul className="list-disc pl-6 text-gray-400 font-light text-base lg:text-lg">
                  <li>Unified data integration with Rubix Compute</li>
                  <li> Real-time insights via Rubix Platform</li>
                  <li>
                    Wireless sensor network deployment for scalable coverage
                  </li>
                  <li>Secure cloud access to data from any location</li>
                </ul>

                <h4 className="text-xl font-bold text-theme-teal mb-6 mt-20">
                  Implementation
                </h4>
                <p className="text-lg font-light text-gray-400 mb-6">
                  With minimal disruption, Nube iO solutions can be installed
                  and scaled to suit both new and existing infrastructure.
                </p>
                <ul className="space-y-4 text-gray-400 text-lg font-light mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">1.</span>
                    Integration planning and site review
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">2.</span>
                    Installation of edge devices and sensors
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">3.</span>
                    Dashboard and software configuration
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">4.</span>
                    Training and handover to operations team
                  </li>
                </ul>

                <h4 className="text-xl font-bold text-theme-teal mb-6 mt-20">
                  Results
                </h4>
                <p className="text-lg font-light text-gray-400 mb-8">
                  Our solution empowers teams to make informed decisions,
                  optimize operations, and significantly reduce costs. By
                  delivering up to 30% energy savings, it enhances visibility
                  and control across building systems, improves occupant comfort
                  and air quality, and provides a scalable platform that adapts
                  seamlessly to entire building portfolios.
                </p>

                <h4 className="text-xl font-bold text-theme-teal mb-6 mt-20">
                  Future Outlook
                </h4>
                <p className="text-lg font-light text-gray-400 mb-6">
                  We&apos;re continuing to invest in new capabilities that help
                  buildings operate smarter and more sustainably. Our latest
                  innovations include AI-enabled performance forecasting,
                  expanded device support for indoor air quality and occupancy
                  monitoring, and enhanced reporting tools that deliver
                  automated, actionable insights for better decision-making.
                </p>
              </div>
            </div>

            <div className="h-fit lg:sticky lg:top-8 lg:max-w-80  self-start">
              <img src={Logo} alt="logo" className="mb-8 w-36" />
              <p className="mb-1.5 text-lg font-bold text-theme-blue">
                Overview
              </p>
              <p className="mb-5 text-base text-gray-400 font-light">
                iO Cloud transforms data into intelligent decisions to optimize
                buildings, reduce costs, and advance sustainability.
              </p>
              <p className="mb-1.5 text-lg font-bold text-theme-blue">Sector</p>
              <p className="mb-5 text-base text-gray-400 font-light">
                Technology
              </p>
              <p className="mb-6 text-lg font-bold text-theme-blue">Solution</p>
              <div className="flex flex-col gap-4 ">
                <Button
                  size="sm"
                  href="/solutions#Hardware"
                  type="link"
                  className="justify-center inline-flex px-4 py-3 bg-white text-black border border-theme-blue text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  Hardware
                </Button>

                <Button
                  size="sm"
                  href="/software/"
                  type="link"
                  className="justify-center inline-flex px-4 py-3 bg-white text-black border border-theme-blue text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  Software
                </Button>

                <Button
                  size="sm"
                  href="/connectivity/"
                  type="link"
                  className="justify-center inline-flex px-4 py-3 bg-white text-black border border-theme-blue text-sm md:text-base rounded-xl transition duration-300 ease-in-out  hover:bg-gray-100"
                >
                  Nube iO Cloud
                </Button>
              </div>
              <div className="my-5 border-t border-gray-300" />
              <p className="mb-6 text-lg font-bold text-theme-blue">
                Want to learn more?
              </p>
              <div className="flex flex-col gap-4 ">
                <Button
                  className="flex items-center text-lg text-gray-400 font-light hover:text-theme-teal"
                  href="/case-oem/"
                  type="link"
                >
                  OEM integration
                  <ArrowRight className="ml-2 w-4" />
                </Button>
                <Button
                  className="flex items-center text-lg text-gray-400 font-light hover:text-theme-teal"
                  href="/case-compliance/"
                  type="link"
                >
                  Building Rating
                  <ArrowRight className="ml-2 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioIT;
