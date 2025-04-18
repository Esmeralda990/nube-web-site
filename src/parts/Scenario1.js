/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { ArrowRight, Lightbulb, Star } from "lucide-react";
import Button from "../elements/Button/index.js";
import Logo from "../assets/images/LogoNube.png";

const ScenarioIT = () => {
  return (
    <section className="lg:py-32 pt-12">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="lg:max-w-full ">
              <h1 className="text-3xl lg:text-6xl font-bold text-theme-blue">
                Smart Analytics for Better Buildings
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
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="placeholder"
                className="my-8 aspect-video w-full rounded-lg object-cover"
              />

              <div className="p-4 border border-gray-300 text-gray-400 rounded-xl mb-6 font-light">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-5 h-5 text-theme-blue" />
                  <strong className="block mb-1 text-xl">
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

              <div className="prose max-w-none prose-lg">
                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Challenges
                </h2>
                <p className="text-lg font-light text-gray-400 mb-6">
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

                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Nube iO&apos;s Solution
                </h2>
                <p className="text-lg font-light text-gray-400 mb-6">
                  To unlock the value of building data, Nube iO delivers an
                  end-to-end platform that bridges the gap between disconnected
                  systems and actionable intelligence.
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-400 font-light text-lg">
                  <li>Unified data integration with Rubix Compute</li>
                  <li> Real-time insights via Rubix Platform</li>
                  <li>
                    Wireless sensor network deployment for scalable coverage
                  </li>
                  <li>Secure cloud access to data from any location</li>
                </ul>

                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Implementation
                </h2>
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

                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Results
                </h2>
                <p className="text-lg font-light text-gray-400 mb-8">
                  Our solution empowers teams to make informed decisions,
                  optimize operations, and significantly reduce costs. By
                  delivering up to 30% energy savings, it enhances visibility
                  and control across building systems, improves occupant comfort
                  and air quality, and provides a scalable platform that adapts
                  seamlessly to entire building portfolios.
                </p>

                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Future Outlook
                </h2>
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
              <Button
                size="sm"
                href="/connectivity/"
                type="link"
                className="justify-center w-auto px-4 py-3 bg-white text-black border border-gray-500 text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
              >
                Nube IO cloud
              </Button>
              <div className="my-5 border-t border-gray-300" />
              <p className="mb-6 text-lg font-bold text-theme-blue">
                Want to learn more?
              </p>
              <Button
                className="flex items-center text-lg text-gray-400 font-light hover:text-theme-teal"
                href="/contact-us/"
                type="link"
              >
                Contact
                <ArrowRight className="ml-2 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-32 border border-gray-200 rounded-xl p-6 text-center shadow-sm max-w-4xl mx-auto">
          <p className="mb-6 text-xl md:text-2xl font-light text-gray-600">
            &ldquo;With Nube iO, we finally have a live view into how our
            buildings breathe saving us energy and giving us control we
            didn&apos;t have before&ldquo;
          </p>

          <div className="flex justify-center mb-4">
            <img
              src="https://shadcnblocks.com/images/block/avatar-1.webp"
              alt="Samantha Lee"
              className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
            />
          </div>

          <p className="font-semibold text-gray-800 text-lg">Samantha Lee</p>
          <p className="text-sm text-gray-500 mb-2">
            Facilities Manager at GreenCore
          </p>

          <div className="flex justify-center gap-1">
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
            <Star className="w-5 h-5 fill-yellow-400 stroke-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioIT;
