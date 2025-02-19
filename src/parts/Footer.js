/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/LogoNube.png";

const sections = [
  {
    title: "Useful links",
    links: [
      { name: "Hardware", href: "/hardware" },
      { name: "Software", href: "/software" },
      { name: "Connectivity", href: "/connectivity" },
      { name: "Blog", href: "/blog" },
      { name: "About", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Contact us",
    links: [{ name: "info@nube-io.com", href: "mailto:info@nube-io.com" }],
  },
];

const Footer7 = () => {
  return (
    <section className="py-32 bg-gray-200">
      <div className="container mx-auto px-6">
        <footer>
          <div className="flex flex-col items-center justify-center gap-10 text-center lg:flex-row lg:text-left">
            {/* Logo y descripción */}
            <div className="flex w-full max-w-96 flex-col items-center justify-between gap-6 lg:items-start">
              <div>
                <span className="flex items-center text-theme-teal-500 justify-center gap-4 lg:justify-start">
                  <img src={logo} alt="Nube Logo" className="h-11" />
                </span>
                <p className="mt-6 text-sm text-gray-500">
                  Nube iO is a manufacturer of IoT devices used to create smart
                  buildings. This solution was developed in response to key
                  industry issues such as shortage of low-cost solutions for
                  small buildings, outdated technology and limited wireless
                  hardware that can integrate with legacy systems. Nube iO now
                  provides a technology bridge that is both IoT ready and
                  building automation ready
                </p>
              </div>
              <ul className="flex items-center space-x-6 text-theme-blue">
                <li className="hover:text-teal-500 transition-colors duration-300">
                  <a href="https://x.com/nube_iot?lang=en&mx=2">
                    <FaTwitter className="size-6" />
                  </a>
                </li>
                <li className="hover:text-teal-500 transition-colors duration-300">
                  <a href="https://www.linkedin.com/company/nube-io/?originalSubdomain=au">
                    <FaLinkedin className="size-6" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Secciones de enlaces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-20">
              {sections.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-6 font-bold text-gray-800">
                    {section.title}
                  </h3>
                  <ul className="space-y-4 text-sm text-gray-600">
                    {section.links.map((link) => (
                      <li key={link.name} className="hover:text-primary">
                        <a href={link.href}>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* Pie de página */}
          <div className="mt-20 flex flex-col justify-center gap-4 border-t pt-8 text-center text-sm font-medium text-gray-600 lg:flex-row lg:items-center lg:text-left">
            <p>© 2025 Nube IO. All rights reserved.</p>
            <ul className="flex justify-center gap-4 lg:justify-start">
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/terms">Terms Of Use</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/terms">Privacy Policy</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/privacy">T&C s</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/privacy">Warranty Policy</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/privacy">Business Account application</a>
              </li>
              <li className="hover:text-gray-400 transition-colors duration-300">
                <a href="/privacy">App Policy</a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Footer7;
