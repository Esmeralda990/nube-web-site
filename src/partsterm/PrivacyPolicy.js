/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";

import { Fade } from "react-awesome-reveal";

export default function Privacy() {
  return (
    <div className="bg-white mb-12">
      <section className="hero sm:items-center lg:items-start sm:flex-row">
        <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6 xl:mt-16">
          <Fade direction="up" triggerOnce>
            <h3 className="text-5xl text-theme-blue text-center font-bold leading-tight mb-4">
              Nube iO Privacy Policy
            </h3>
            <div className="my-6 w-full border-t-4 border-theme-teal" />
          </Fade>
          <Fade direction="up" triggerOnce delay={300}>
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-theme-teal">
                <strong>Privacy Policy</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                This Privacy Policy outlines how we collect, use, and protect
                any personal information you provide when using this website. We
                are committed to safeguarding your privacy. If we request
                certain information that can be used to identify you while using
                this website, you can be confident that it will be handled in
                accordance with this privacy policy. We may update this policy
                occasionally, and we encourage you to check this page
                periodically to ensure that you are comfortable with any
                changes.
              </p>
              <h2 className="text-xl font-semibold text-teal-600">
                <strong>What Information We Collect</strong>
              </h2>
              <ul className="list-inside list-disc text-base font-light text-gray-700 mb-6">
                <li>Personal Details: Name and job title</li>
                <li>Contact Information: Email address and phone number</li>
                <li>Demographic Data: Postcode, preferences, and interests</li>
                <li>
                  Other Information: Relevant to customer surveys or special
                  offers
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-teal-600">
                <strong>How We Use Your Information</strong>
              </h2>
              <ul className="list-inside list-disc text-base font-light text-gray-700 mb-6">
                <li>
                  Internal Record Keeping: To maintain our business operations.
                </li>
                <li>
                  Service Improvement: To enhance the quality of our products
                  and services.
                </li>
                <li>
                  Marketing: We may send periodic promotional emails about new
                  products, special offers, or other relevant information based
                  on the contact details you’ve provided.
                </li>
                <li>
                  Market Research: Occasionally, we may contact you for market
                  research purposes, using your information to help us
                  understand your needs and interests.
                </li>
                <li>
                  Customization: To tailor the website’s content to your
                  preferences.
                </li>
              </ul>

              <h2 className="text-xl text-teal-600 font-bold">
                <strong>Security of Your Informatione</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                We take the security of your personal information seriously. We
                have implemented appropriate physical, electronic, and
                managerial safeguards to protect your data from unauthorized
                access or disclosure.
              </p>

              <h2 className="text-xl text-teal-600 font-bold">
                <strong>Use of Cookies</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                Cookies are small files placed on your device’s hard drive when
                you visit our site. By using cookies, we can analyze web traffic
                and identify which pages are of interest to you. This helps us
                tailor the site to your preferences. We use traffic log cookies
                to track website usage and improve our services. The information
                gathered is only used for statistical analysis and is then
                removed from the system. Cookies help us enhance your browsing
                experience, but they do not give us access to your computer or
                personal data beyond what you choose to share. You can manage
                cookie preferences through your browser settings. Most browsers
                accept cookies by default, but you can decline them if you
                prefer. Please note that declining cookies may limit some
                functionalities of the website.
              </p>

              <h2 className="text-xl text-teal-600 font-bold">
                <strong>Links to Other Websites</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                Our website may contain links to external websites for your
                convenience. However, once you leave our site, we cannot control
                the content or privacy practices of these other sites. We are
                not responsible for the protection of your personal information
                when visiting these sites. We advise you to review their privacy
                policies before providing any personal data.
              </p>

              <h2 className="text-xl  text-teal-600 font-bold ">
                <strong>Managing Your Personal Information</strong>
              </h2>
              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                You have the right to control the collection and use of your
                personal information. You may:
              </p>
              <ul className="list-inside list-disc text-base font-light text-gray-700 mb-6">
                <li>
                  Opt out of direct marketing by selecting the relevant option
                  on any form where we request your details.
                </li>
                <li>
                  Change your mind at any time about receiving marketing
                  communications from us by contacting us by email or mail.
                </li>
              </ul>

              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                We will never sell, distribute, or lease your personal
                information to third parties unless required by law or with your
                explicit consent. If you agree, we may send you promotional
                information from third parties we think may be of interest to
                you.
              </p>

              <p className="text-base font-light text-gray-700 leading-relaxed mb-6">
                If you believe that any information we hold about you is
                incorrect or incomplete, please contact us promptly. We will
                correct any inaccuracies as soon as possible.
              </p>
            </div>
            <div className="my-6 w-full border-t-4 border-gray-300" />
          </Fade>
        </div>
      </section>
    </div>
  );
}
