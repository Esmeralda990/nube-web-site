/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { AdvantageSolutions, Testimonial } from "json/landingPageData";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import HeroOEM from "parts/HeroOEM";
import DetailsOEM from "parts/DetailsOEM";
import SmartOem from "parts/SmartOEM";
import Testimonials from "parts/Testimonials";
import CtaOem from "parts/CtaOEM";
import Footer from "parts/Footer";

export default class OEMPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>OEM | Nube iO – Integrated BMS & IoT Technology</title>
          <meta
            name="description"
            content="Explore hardware tailored to modern building needs."
          />
          <meta
            name="keywords"
            content="BMS solutions, IoT integration, automation services"
          />
          <link rel="canonical" href="https://nubeio.com/oem/" />
          <meta
            property="og:title"
            content=" OEM | Nube iO – Integrated BMS & IoT Technology"
          />
          <meta
            property="og:description"
            content="Explore OEM, software, and professional services tailored to modern building needs."
          />
          <meta property="og:url" content="https://nubeio.com/oem/" />
        </Helmet>

        <Header1 />
        <DetailsOEM />
        <HeroOEM data={AdvantageSolutions} />
        <SmartOem />
        <Testimonials data={Testimonial} />
        <CtaOem />
        <Footer />
      </>
    );
  }
}
