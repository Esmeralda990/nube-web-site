/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { ArrowRight, Lightbulb, Star } from "lucide-react";
import Button from "../elements/Button/index.js";
import Logo from "../assets/images/LogoNube.png";

const ScenarioBuild = () => {
  return (
    <section className="lg:py-32 pt-12">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="lg:max-w-full">
              <h1 className="text-3xl lg:text-6xl font-bold text-theme-blue">
                Building Rating Systems – Enhanced Compliance
              </h1>
              <p className="mt-2 text-lg text-gray-400 font-light">
                Meeting stringent building rating and compliance standards is
                increasingly critical. Nube iO simplifies the compliance process
                through innovative IoT solutions, ensuring accurate, real-time
                monitoring, streamlined reporting, and enhanced building
                performance management aligned with industry standards.
              </p>
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="placeholder"
                className="my-8 aspect-video w-full rounded-lg object-cover"
              />

              <div className="p-4 border border-gray-300 text-gray-400 rounded-xl mb-6 font-light">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-5 h-5 text-theme-blue" />
                  <strong className="block mb-1 text-xl font-bold text-theme-blue">
                    {" "}
                    Who This Is For!
                  </strong>
                </div>
                <span>
                  Sustainability consultants, compliance managers, and property
                  owners focused on achieving or maintaining certifications like
                  NABERS, Green Star, or LEED.
                </span>
              </div>

              <div className="prose max-w-none prose-lg">
                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Challenges
                </h2>
                <p className="text-lg font-light text-gray-400 mb-6">
                  The pressure to meet rating standards like NABERS or Green
                  Star has grown, but many buildings lack the automation and
                  data quality needed for timely, accurate reporting.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left border text-sm text-gray-500 font-bold text-lg">
                    <tbody>
                      <tr className="border-t bg-gray-50">
                        <td className="px-4 py-2">
                          Difficulty meeting strict documentation and audit
                          requirements
                        </td>
                      </tr>
                      <tr className="border-t ">
                        <td className="px-4 py-2">
                          Reliance on manual or spreadsheet-based reporting
                        </td>
                      </tr>
                      <tr className="border-t  bg-gray-50">
                        <td className="px-4 py-2">
                          Low visibility into compliance-critical data streams
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-2">
                          Risk of penalties or performance score degradation
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Nube iO&apos;s Solution
                </h2>
                <p className="text-lg font-light text-gray-400 mb-6">
                  Our technology provides a transparent, automated way to track
                  and report compliance performance across various building
                  systems.
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-400 font-light text-lg">
                  <li>Real-time environmental and equipment monitoring</li>
                  <li>
                    Auto-aligned reporting with major certification frameworks
                  </li>
                  <li>
                    Secure cloud dashboard for ongoing performance management
                  </li>
                  <li>
                    Integration-ready with facilities, consultants, and ESG
                    tools
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Implementation
                </h2>
                <p className="text-lg font-light text-gray-400 mb-6">
                  Quick to deploy, Nube iO connects your building to smart
                  compliance tools without overhauling your systems.
                </p>
                <ul className="space-y-4 text-gray-400 text-lg font-light mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">1.</span>
                    Identify compliance requirements and metrics
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">2.</span>
                    Deploy sensors and integrate with BMS if needed
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">3.</span>
                    Configure compliance dashboards and workflows
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">4.</span>
                    Deliver ongoing monitoring and automated reports
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Results
                </h2>
                <p className="text-lg font-light text-gray-400 mb-8">
                  Building managers reduce risk, save time, and stay audit-ready
                  with always-on reporting and real-time data. By streamlining
                  admin tasks and improving coordination with auditors and
                  consultants, they achieve stronger sustainability scores and
                  maintain certification thresholds with confidence.
                </p>

                <h2 className="text-2xl font-bold text-theme-teal mb-6">
                  Future Outlook
                </h2>
                <p className="text-lg font-light text-gray-400 mb-6">
                  Nube iO is committed to advancing compliance technology
                  through intelligence and automation. Our roadmap includes
                  predictive alerts and AI-driven recommendations, ongoing
                  support for evolving international standards, and seamless
                  integration with ESG and CSR systems—empowering organizations
                  to stay ahead of regulatory demands and sustainability goals.
                </p>
              </div>
            </div>

            <div className="h-fit lg:sticky lg:top-8 lg:max-w-80">
              <img src={Logo} alt="logo" className="mb-8 w-36" />
              <p className="mb-1.5 text-lg font-bold text-theme-blue">
                Overview
              </p>
              <p className="mb-5 text-base text-gray-400 font-light">
                Meeting sustainability rating standards is increasingly
                critical, yet many buildings still struggle with manual
                reporting, limited data visibility, and growing audit pressures.
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
          <div className="mt-32 border border-gray-200 rounded-xl p-6 text-center shadow-sm max-w-4xl mx-auto">
            <p className="mb-6 text-xl md:text-2xl font-light text-gray-600">
              &ldquo;We no longer fear the next NABERS audit—everything’s ready,
              and our score has improved significantly.&ldquo;
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
      </div>
    </section>
  );
};

export default ScenarioBuild;
