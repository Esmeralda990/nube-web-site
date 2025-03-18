/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React from "react";
import Button from "../elements/Button/index";

const GetD = () => {
  return (
    <section className="relative py-32 md:pl-32">
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)]" />
      <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="text-4xl font-bold text-theme-blue lg:text-5xl">
              Discover the Future of Building Management
            </h1>
            <div className="text-muted-foreground font-light md:text-base lg:text-lg lg:leading-7">
              Curious about how Nube iO s innovative solutions can enhance your
              operations? Schedule a personalised demo to gain a comprehensive
              understanding of our products and services, tailored to your
              specific needs.
            </div>
            <h3 className="text-3xl font-bold text-theme-blue lg:text-3xl">
              Why Book a Demo?
            </h3>
          </div>
          <div className="hidden md:block">
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Tailored Insights: Gain a deep understanding of our
                      products and services customised for your unique
                      requirements.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Expert Interaction: Engage live with our specialists for
                      real-time answers, ensuring clarity and confidence in our
                      offerings.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Hands-On Experience: Explore the user interface and
                      functionality of our products firsthand to see how they
                      can improve your operations.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Custom Solutions: Discuss options for customisation and
                      integration to fit our solutions seamlessly into your
                      existing systems.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Optimised Advice: Receive personalised advice on
                      optimising our tools for your business, leveraging
                      industry best practices and our team s expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:mt-2.5">
          <div className="relative flex w-full min-w-[20rem] max-w-[50rem] flex-col items-center overflow-visible md:min-w-[24rem]">
            <form className="z-10 space-y-6">
              <div className="w-full space-y-6 rounded-xl border border-border bg-background px-6 py-10 shadow-sm">
                <div>
                  <h3 className="text-lg font-bold lg:text-lg">
                    Contact Information
                  </h3>
                  <label className="mb-2.5 text-sm font-medium">
                    Name
                    <input
                      id="Name"
                      name="Name"
                      placeholder="Name"
                      className="w-full p-2 border rounded"
                    />
                  </label>
                </div>
                <div>
                  <label className="mb-2.5 text-sm font-medium">
                    Email
                    <input
                      id="Email"
                      name="Email"
                      placeholder="name@company.com"
                      className="w-full p-2 border rounded"
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2.5 text-sm font-medium">
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    placeholder="12 3456 7890"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Company/Organization"
                    className="mb-2.5 text-sm font-medium"
                  >
                    Company/Organization
                  </label>
                  <input
                    id="Company/Organization"
                    name="Company/Organization"
                    placeholder="12 3456 7890"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label
                    htmlFor="You are?"
                    className="mb-2.5 text-sm font-medium"
                  >
                    You are?
                  </label>
                  <select
                    id="You are"
                    name="You are"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="">Facility Manager</option>
                    <option value=""> Building Owner</option>
                    <option value=""> Distributor</option>
                    <option value="">System Integrator</option>
                    <option value=""> OEM</option>
                    <option value="">Property Owner</option>
                    <option value=""> Local Authority</option>
                    <option value=""> Engineering Office</option>
                    <option value=""> Distributor</option>
                    <option value="">Installer</option>
                    <option value=""> Integrator</option>
                    <option value="">Proptech</option>
                    <option value=""> Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="WhatSystems"
                    className="mb-2.5 text-sm font-medium"
                  >
                    What systems are you currently using for building
                    management?
                  </label>
                  <select
                    id="WhatSystems"
                    name="WhatSystems"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="">Manual processes</option>
                    <option value=""> Basic digital tools</option>
                    <option value="">
                      Advanced building management systems
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="PrimaryGoals"
                    className="mb-2.5 text-sm font-medium"
                  >
                    What are your primary goals in using Nube iO s solutions?
                  </label>
                  <select
                    id="PrimaryGoals"
                    name="PrimaryGoals"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="">Energy efficiency improvement</option>
                    <option value=""> Cost reduction</option>
                    <option value="">Building comfort enhancement</option>
                    <option value=""> Streamlined operations</option>
                    <option value="">Data-driven decision-making</option>
                    <option value="">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="buildings"
                    className="mb-2.5 text-sm font-medium"
                  >
                    How many buildings or sites are you managing?
                  </label>
                  <select
                    id="buildings"
                    name="buildings"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">1-5</option>
                    <option value="">6-10</option>
                    <option value=""> 11-20</option>
                    <option value=""> 21 or more</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=" interested"
                    className="mb-2.5 text-sm font-medium"
                  >
                    Which features are you most interested in exploring during
                    the demo?
                  </label>
                  <select
                    id=" interested"
                    name=" interested"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="search">Real-time monitoring</option>
                    <option value="">Analytics and reporting</option>
                    <option value="search">Energy management</option>
                    <option value="search">System integration</option>
                    <option value="search">
                      {" "}
                      Custom alerts and notifications
                    </option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=" challenges"
                    className="mb-2.5 text-sm font-medium"
                  >
                    What challenges are you facing with your current system?
                  </label>
                  <select
                    id=" challenges"
                    name="challenges"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="search">High operational costs</option>
                    <option value="">Inefficiency in processes</option>
                    <option value="search">Lack of data insights</option>
                    <option value="search"> Integration issues</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=" challenges"
                    className="mb-2.5 text-sm font-medium"
                  >
                    What is your timeline for implementing a new building
                    management solution?
                  </label>
                  <select
                    id=" challenges"
                    name="challenges"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="search">Immediate</option>
                    <option value="">Within 3 months</option>
                    <option value="search"> 6-12 months</option>
                    <option value="search"> No immediate plans</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=" Contact"
                    className="mb-2.5 text-sm font-medium"
                  >
                    I agree to be contacted to receive the information requested
                  </label>
                  <select
                    id=" Contact"
                    name="Contact"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Yes</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor=" Contact"
                    className="mb-2.5 text-sm font-medium"
                  >
                    I agree to be contacted to receive relevant content,
                    products, and services. For more information, check out our
                    legal notice. (optional)
                  </label>
                  <select
                    id=" Contact"
                    name="Contact"
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Yes</option>
                  </select>
                </div>
                <div className="flex w-full flex-col justify-end space-y-3 pt-2">
                  <Button
                    type="submit"
                    className="w-full bg-theme-teal text-white py-2 rounded"
                  >
                    Submit
                  </Button>
                  <div className="text-xs text-muted-foreground">
                    For more information about how we handle your personal
                    information, please visit our{" "}
                    <a href="/privacy-policy/" className="underline">
                      privacy policy
                    </a>
                    .
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetD;
