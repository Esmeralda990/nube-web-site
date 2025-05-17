/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Plus,
  RotateCw,
  Share,
} from "lucide-react";
import React from "react";
import PropTypes from "prop-types";
import DashPC from "../assets/images/DasboardConnect/DashboardConnect.png";
import DashPhone from "../assets/images/DasboardConnect/DashboardConnect2.png";

const Connectivity = ({ showTitle = true }) => {
  return (
    <section className="bg-white py-28 px-4">
      <div className="container mx-auto w-full flex flex-col items-center text-center">
        {showTitle && (
          <h1 className="font-bold text-5xl lg:text-6xl text-foreground  text-theme-blue">
            Connectivity Overview
          </h1>
        )}

        <div className="relative flex h-full w-full flex-col items-center justify-center">
          <BrowserMockup
            className="w-full"
            url="https://NubeIO.com"
            DahboardUrlDesktop={DashPC}
            DahboardUrlMobile={DashPhone}
          />
          <div className="absolute bottom-0 h-2/3 w-full bg-gradient-to-t from-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Connectivity;

Connectivity.propTypes = {
  showTitle: PropTypes.bool.isRequired,
};

const BrowserMockup = ({ url, DahboardUrlDesktop, DahboardUrlMobile }) => (
  <div className="relative w-full overflow-hidden rounded-xl border mt-20">
    <div className="flex items-center justify-between gap-10 bg-muted px-8 py-4 lg:gap-25 bg-gray-100">
      <div className="flex items-center gap-2">
        <div className="size-3 rounded-full bg-red-500" />
        <div className="size-3 rounded-full bg-yellow-500" />
        <div className="size-3 rounded-full bg-green-500" />
        <div className="ml-6 hidden items-center gap-2 opacity-40 lg:flex">
          <ChevronLeft className="size-5" />
          <ChevronRight className="size-5" />
        </div>
      </div>
      <div className="flex w-full items-center justify-center">
        <p className="relative hidden w-full rounded-full bg-white px-4 py-1 text-center text-sm tracking-tight md:block">
          {url}
          <RotateCw className="absolute top-2 right-3 size-3.5" />
        </p>
      </div>

      <div className="flex items-center gap-4 opacity-40">
        <Share className="size-4" />
        <Plus className="size-4" />
        <Copy className="size-4" />
      </div>
    </div>

    <div className="relative w-full">
      <img
        src={DahboardUrlDesktop}
        alt="dashboard desktop"
        className="object-cover hidden aspect-video h-full w-full object-top md:block"
      />
      <img
        src={DahboardUrlMobile}
        alt="dashboard mobile"
        className="block h-full w-full object-cover md:hidden"
      />
    </div>
    <div className="absolute bottom-0 z-10 flex w-full items-center justify-center bg-muted py-3 md:hidden bg-gray-100">
      <p className="relative flex items-center gap-2 rounded-full px-8 py-1 text-center text-sm tracking-tight">
        {url}
      </p>
    </div>
  </div>
);

BrowserMockup.propTypes = {
  url: PropTypes.string.isRequired,
  DahboardUrlDesktop: PropTypes.string.isRequired,
  DahboardUrlMobile: PropTypes.string.isRequired,
};
