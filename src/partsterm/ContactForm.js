/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React from "react";
import Button from "../elements/Button/index";

const ContactForm = () => {
  return (
    <section className="mt-12 pb-12 md:mt-32 md:pl-32 px-6">
      <div className="container">
        <div className="mx-auto flex max-w-full flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-full flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-4xl font-bold text-theme-blue lg:mb-1 lg:text-5xl mt-40 max-w-2xl">
                Unlock Your Buildings Potential
              </h1>
              <p className="text-muted-foreground font-light text-gray-400 text-lg max-w-2xl">
                To craft a bespoke experience and maximise the value of your
                personalized demo, please provide us with a few details
              </p>
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 mt-6 text-theme-teal font-bold  text-center text-2xl  lg:text-left">
                  Contact Details
                </h3>
                <ul className="ml-4 list-disc">
                  <li>
                    <span className=" font-bold text-lg ">Phone: </span>
                    <span className=" font-light text-gray-400 text-lg  ">
                      {" "}
                      +123-456-7890
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-lg">Email: </span>
                    <a
                      href="email"
                      className=" text-theme-teal underline text-lg"
                    >
                      info@nubeio.com
                    </a>
                  </li>
                  <li>
                    <span className="font-bold text-lg">Address: </span>
                    <span className=" font-light text-gray-400 text-lg  ">
                      {" "}
                      123 Building Tech Way, Suite 456, Metropolis, AU
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 mt-6 text-teal-600 text-center text-2xl font-semibold lg:text-left">
                  Business Hours
                </h3>
                <ul className="ml-4 list-disc">
                  <li>
                    <span className="font-bold text-lg ">
                      Monday to Friday:{" "}
                    </span>
                    <span className="font-light text-gray-400 text-lg ">
                      {" "}
                      9:00 AM - 5:00 PM:{" "}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-lg">
                      Saturday and Sunday{" "}
                    </span>
                    <span className="font-light text-gray-400 text-lg ">
                      {" "}
                      Closed
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 mt-6 text-teal-600 text-center text-2xl font-semibold lg:text-left">
                  Stay Connected
                </h3>
                <span className=" font-light text-gray-400 text-lg ">
                  Follow us on our social media platforms to stay updated and
                  part of our community :{" "}
                </span>
                <ul className="ml-4 list-disc">
                  <li>
                    <span className="font-bold text-lg ">LinkedIn </span>
                    <a
                      href="https://linkedin.com/company/nubeio"
                      className="underline text-theme-teal text-lg"
                    >
                      Nube iO LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5 ">
                <label htmlFor="firstname">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  className="w-full p-1 border rounded"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="lastname">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-1 border rounded"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="email">Phone</label>
              <input
                type="phone"
                id="phone"
                placeholder="Phone"
                className="w-full p-1 border rounded"
              />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <label htmlFor="subject">Company/Organization</label>
              <input
                type="text"
                id="company"
                placeholder="Company/Organization"
                className="w-full p-1 border rounded"
              />
            </div>
            <div>
              <label htmlFor="yourRole?" className="mb-2.5 text-sm font-medium">
                Your Role
              </label>
              <select
                id="Your Role"
                name="Your Role"
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
                What systems are you currently using for building management?
              </label>
              <select
                id="WhatSystems"
                name="WhatSystems"
                className="w-full p-2 border rounded"
              >
                <option value="">Select</option>
                <option value="">Manual processes</option>
                <option value=""> Basic digital tools</option>
                <option value="">Advanced building management systems</option>
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
              <label htmlFor="buildings" className="mb-2.5 text-sm font-medium">
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
                Which features are you most interested in exploring during the
                demo?
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
                <option value="search"> Custom alerts and notifications</option>
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
                What is your timeline for implementing a new building management
                solution?
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
              <label htmlFor=" Contact" className="mb-2.5 text-sm font-medium">
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
              <label htmlFor=" Contact" className="mb-2.5 text-sm font-medium">
                I agree to be contacted to receive relevant content, products,
                and services. For more information, check out our legal notice.
                (optional)
              </label>
              <select
                id=" Contact"
                name="Contact"
                className="w-full p-2 border rounded"
              >
                <option value="">Yes</option>
              </select>
            </div>
            <Button className="w-full bg-theme-teal text-white py-2 rounded">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
