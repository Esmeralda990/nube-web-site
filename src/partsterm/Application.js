/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import heroapplication from "assets/images/hero/Business.png";
import { trackEvent } from "utils/Analytics";

const handleDownload = () => {
  trackEvent({
    action: "pdf_download",
    category: "Datasheet",
    label: "Business-Account-Application.pdf",
  });
};

export default function Application() {
  return (
    <div className="mb-12">
      <h2 className="lg:mt-24 text-5xl text-theme-blue text-center font-bold leading-tight dark:text-white mt-12">
        Business Account Application Form
      </h2>

      <section className="hero flex flex-col sm:flex-row items-center sm:items-start px-5 sm:px-12 mt-10 ">
        <div className="w-full sm:w-1/2 flex flex-col">
          <p className="font-light text-base text-gray-400 leading-relaxed mt-6">
            The Nube iO Business Account Application form enables your entity to
            apply for trade credit with us. If you wish to proceed, please
            download and complete the form. Once received, we will conduct a
            credit reference of your company to ensure all ongoing commercial
            requirements can be met.
          </p>
          <p className="font-light text-base lg:text-lg  text-gray-400 leading-relaxed mt-4">
            We look forward to hearing from you so you can access our products
            and services.
          </p>
          <h2 className="text-xl font-bold text-theme-blue mt-6 dark:text-white">
            <strong>Get Started Today!</strong>
          </h2>

          <div className="mt-8">
            <a
              href="/Docs/Business-Account-Application.pdf"
              type="link"
              className="text-lg flex items-center justify-center w-36 h-14 px-6 py-4 text-white bg-theme-teal rounded-lg shadow-xl hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
              download="Business-Account-Application.pdf"
              onClick={handleDownload}
            >
              Download
            </a>
          </div>
        </div>

        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end mt-12 sm:mt-0">
          <img
            src={heroapplication}
            alt="Hero"
            className="w-full max-w-md sm:max-w-lg lg:max-w-xl"
          />
        </div>
      </section>
    </div>
  );
}
