/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */

import React from "react";
import { FaLinkedin } from "react-icons/fa";

const sections = [
  {
    title: "Contact us",
    links: [
      { name: "info@nube-io.com", href: "mailto:info@nube-io.com" },
      { name: "+61 2 7906 8414", href: "tel:+61 2 7906 8414" },
      {
        name: (
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="https://www.linkedin.com/company/nube-io/?originalSubdomain=au"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-6 text-2xl text-theme-blue dark:text-white" />
            </a>
          </div>
        ),
        href: "https://www.linkedin.com/company/nube-io/?originalSubdomain=au",
      },
    ],
  },
];

const Footer7 = () => {
  return (
    <section className="py-32 bg-gray-200 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <footer>
          <div className="flex flex-col items-center justify-center gap-10 text-center lg:flex-row lg:text-left">
            <div className="flex w-full max-w-96 flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center text-theme-teal-500 justify-center gap-4 lg:justify-start">
                  <img
                    src="/Logo.svg"
                    alt="Logo claro"
                    className="h-11 block dark:hidden"
                  />
                  <img
                    src="/Logodark.svg"
                    alt="Logo oscuro"
                    className="h-11 hidden dark:block"
                  />
                </span>
                <p className="mt-6 text-sm text-gray-500 dark:text-white">
                  Nube iO’s mission is to push the boundaries of traditional
                  building automation. Our systems do more than just
                  automate—they optimise every aspect of building management,
                  from energy efficiency to occupant comfort. By leveraging
                  cutting-edge IoT technology, Nube iO creates environments that
                  are smarter, safer, and more sustainable, perfectly aligning
                  with the growing demand for eco-friendly infrastructure.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section, i) => (
                <div key={`${section.title}-${i}`}>
                  <h3 className="mb-6 font-bold text-gray-800 dark:text-theme-teal">
                    {section.title === "empty-section" ? "" : section.title}
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-600 dark:text-white">
                    {section.links.map((link, index) => (
                      <li
                        key={`${section.title}-link-${index}`}
                        className="hover:text-primary"
                      >
                        {typeof link.name === "string" ? (
                          <a href={link.href}>{link.name}</a>
                        ) : (
                          link.name
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-center gap-4 border-t pt-8 text-center text-sm font-medium text-gray-600 lg:flex-row lg:items-center lg:text-left lg:text-base dark:text-white">
            <p>© 2025 Nube IO. All rights reserved.</p>
            <ul className="flex flex-col gap-4 lg:flex-row lg:justify-start lg:gap-6">
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/terms-of-use">Terms Of Use</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/privacy-policy/">Privacy Policy</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/terms-and-conditions/">T&C s</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/warranty-policy/">Warranty Policy</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/business-account-application-form/">
                  Business Account application
                </a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/app-policy/">App Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer7;
