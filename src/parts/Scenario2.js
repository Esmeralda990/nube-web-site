/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { ArrowRight, Lightbulb, Star } from "lucide-react";
import Button from "../elements/Button/index.js";
import Logo from "../assets/images/LogoNube.png";

const ScenarioOEM = () => {
  return (
    <section className="pt-12 lg:py-32 ">
      <div className="container mx-auto px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="relative flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="lg:max-w-full">
              <h1 className="text-3xl lg:text-7xl font-bold text-theme-blue">
                OEM Integration – Smarter, Faster, Better
              </h1>
              <p className="mt-2  text-base lg:text-lg text-gray-400 font-light">
                Ready to take your brand to the next level? Offer your customers
                the innovation of the Nube iO solution with your own unique
                branding. Our integrated hardware, software, and secure cloud
                solutions help OEM partners accelerate innovation, enhance
                competitiveness, and provide robust, scalable market solutions.
              </p>
              <img
                src="https://shadcnblocks.com/images/block/placeholder-1.svg"
                alt="placeholder"
                className="my-8 aspect-video w-full rounded-lg object-cover"
              />

              <div className="p-4 border border-gray-300 text-gray-400 rounded-xl mb-6 font-light  mt-20">
                <div className="flex items-center gap-2 mb-1">
                  <Lightbulb className="w-5 h-5 text-theme-blue" />
                  <strong className="block mb-1 text-base lg:text-xl font-bold text-theme-blue ">
                    {" "}
                    Who This Is For!
                  </strong>
                </div>
                <span>
                  OEM companies in HVAC, automation, energy, or industrial
                  sectors looking to offer smart, connected solutions under
                  their own brand—without high development costs.
                </span>
              </div>

              <div className="prose max-w-none prose-lg">
                <h4 className="text-base lg:text-xl font-bold text-theme-teal mb-6 mt-20">
                  Challenges
                </h4>
                <p className="text-lg font-light text-gray-400 mb-6">
                  OEMs face increasing pressure to innovate and bring products
                  to market faster, often with limited development resources and
                  tight deadlines.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full text-left border text-sm text-gray-500 font-bold text-lg">
                    <tbody>
                      <tr className="border-t bg-gray-50">
                        <td className="px-4 py-2">
                          Accelerated development cycles and limited resources
                        </td>
                      </tr>
                      <tr className="border-t ">
                        <td className="px-4 py-2">
                          Difficulty differentiating in a crowded marketplace
                        </td>
                      </tr>
                      <tr className="border-t  bg-gray-50">
                        <td className="px-4 py-2">
                          Complex tech stack integration (hardware + software +
                          cloud)
                        </td>
                      </tr>
                      <tr className="border-t">
                        <td className="px-4 py-2">
                          Need for scalability without large infrastructure
                          investment
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h4 className="text-xl font-bold text-theme-teal mb-6 mt-20">
                  Nube iO&apos;s Solution
                </h4>
                <p className="text-lg font-light text-gray-400 mb-6">
                  Nube iO offers a complete white-label IoT solution that lets
                  OEMs add value to their offerings without reinventing the
                  wheel.
                </p>
                <ul className="list-disc pl-6 mb-8 text-gray-400 font-light text-lg">
                  <li>Custom-branded hardware and device enclosures</li>
                  <li>
                    {" "}
                    Software platform ready for rebranding and personalisation
                  </li>
                  <li>Pre-tested cloud backend for scalable data management</li>
                  <li>
                    Seamless integration with your workflows and distribution
                  </li>
                </ul>

                <h4 className="text-xl  font-bold text-theme-teal mb-6">
                  Implementation
                </h4>
                <p className="text-lg font-light text-gray-400 mb-6">
                  We work closely with OEM partners to deliver a branded and
                  tested product that meets market demand.
                </p>
                <ul className="space-y-4 text-gray-400 text-lg font-light mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">1.</span>
                    Co-development and roadmap alignment
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">2.</span>
                    Hardware branding and configuration
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">3.</span>
                    Software and cloud platform customisation
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-theme-teal font-bold">4.</span>
                    Testing, onboarding, and ongoing support
                  </li>
                </ul>

                <h4 className="text-xl font-bold text-theme-teal mb-6 mt-20">
                  Results
                </h4>
                <p className="text-lg font-light text-gray-400 mb-8">
                  OEMs gain a competitive edge and accelerate their
                  time-to-market by leveraging next-gen connected
                  solutions—without the need for internal R&D investment. Our
                  platform enables enhanced brand experiences for end users
                  while ensuring long-term scalability and seamless product
                  evolution.
                </p>

                <h4 className="text-xl font-bold text-theme-teal mb-6 mt-20">
                  Future Outlook
                </h4>
                <p className="text-lg font-light text-gray-400 mb-6">
                  As market expectations evolve, Nube iO continues to support
                  OEMs with advanced and flexible technology. Our platform now
                  offers more customisable white-label options, enhanced
                  diagnostics and remote servicing capabilities, and seamless
                  integration with emerging smart ecosystems—empowering OEMs to
                  innovate faster and deliver greater value to their customers.
                </p>
              </div>
            </div>

            <div className="h-fit lg:sticky lg:top-8 lg:max-w-80">
              <img src={Logo} alt="logo" className="mb-8 w-36" />
              <p className="mb-1.5 text-lg font-bold text-theme-blue">
                Overview
              </p>
              <p className="mb-5 text-base text-gray-400 font-light">
                OEMs face growing pressure to innovate quickly, stand out in
                competitive markets, and scale without heavy
                infrastructure—often with limited resources and complex tech
                demands.
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
                className="justify-center w-auto px-4 py-3 bg-white text-black border border-theme-blue text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-100"
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
          <div className="mt-32 border border-gray-200 rounded-xl p-6 text-center shadow-sm max-w-3xl mx-auto">
            <p className="mb-6 text-lg md:text-xl font-light text-gray-400">
              &ldquo;Partnering with Nube iO allowed us to launch a connected
              version of our platform in months instead of years.&ldquo;
            </p>

            <div className="flex justify-center mb-4">
              <img
                src="https://shadcnblocks.com/images/block/avatar-1.webp"
                alt="Samantha Lee"
                className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover"
              />
            </div>

            <p className="font-bold text-lg text-theme-blue">Samantha Lee</p>

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

export default ScenarioOEM;
