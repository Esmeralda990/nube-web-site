/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { ServiceSolutions } from "json/landingPageData";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import CtaProfessional from "parts/CtaProfessional.js";
import DetailProfessional from "parts/DetailsProfessionalService";
import SmartProfessional from "parts/SmartProfessional";
import Servicesolutions from "parts/ServiceSolutions";
import Footer from "parts/Footer";

export default class ProfessionalPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            Professional Service | Nube iO – Integrated BMS & IoT Technology
          </title>
          <meta
            name="description"
            content="Explore hardware tailored to modern building needs."
          />
          <meta
            name="keywords"
            content="BMS solutions, IoT integration, automation services"
          />
          <link rel="canonical" href="https://nubeio.com/solutions" />
          <meta
            property="og:title"
            content=" Professional Service | Nube iO – Integrated BMS & IoT Technology"
          />
          <meta
            property="og:description"
            content="Explore hardware, software, and professional services tailored to modern building needs."
          />
          <meta property="og:url" content="https://nubeio.com/solutions" />
        </Helmet>

        <Header1 />
        <DetailProfessional />
        <Servicesolutions data={ServiceSolutions} />
        <SmartProfessional />
        <CtaProfessional />
        <Footer />
      </>
    );
  }
}
