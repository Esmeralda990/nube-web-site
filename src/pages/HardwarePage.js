/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Solutionsfeature } from "json/landingPageData";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import HeroSolution from "parts/HeroSolution";
import CtaHardware from "parts/CtaHardware.js";
import DetailsHardware from "parts/DetailsHardware";
import SolutionHardware from "parts/SolutionHardware";
import SmartHardware from "parts/SmartHardware";
import SoluHardware from "parts/SoluHardware";
import Footer from "parts/Footer";

export default class HardwarePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Hardware | Nube iO – Integrated BMS & IoT Technology</title>
          <meta
            name="description"
            content="Explore hardware tailored to modern building needs."
          />
          <meta
            name="keywords"
            content="BMS solutions, IoT integration, automation services"
          />
          <link rel="canonical" href="https://nubeio.com/hardware/" />
          <meta
            property="og:title"
            content=" Hardware | Nube iO – Integrated BMS & IoT Technology"
          />
          <meta
            property="og:description"
            content="Explore hardware, software, and professional services tailored to modern building needs."
          />
          <meta property="og:url" content="https://nubeio.com/hardware" />
        </Helmet>

        <Header1 />
        <HeroSolution />
        <DetailsHardware />
        <SolutionHardware data={Solutionsfeature} />
        <SmartHardware />
        <SoluHardware />
        <CtaHardware />
        <Footer />
      </>
    );
  }
}
