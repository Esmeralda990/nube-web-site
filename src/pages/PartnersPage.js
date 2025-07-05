/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import { WhyData } from "json/landingPageData";
import Header1 from "parts/Header1";
import Partner from "parts/HeroPartners";
import Footer from "parts/Footer";
import CTAPartners from "parts/CTAPartners";
import WhyPartner from "parts/WhyPartner";

export default class PartnersPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Partners | Nube iO – Become a Global Technology Partner</title>
          <meta
            name="description"
            content="Join our partner network to deliver smart building solutions under your brand."
          />
          <meta
            name="keywords"
            content="BMS partners, smart building distributors, OEM integration"
          />
          <link rel="canonical" href="https://nubeio.com/partners/ " />
          <meta
            property="og:title"
            content="Partners | Nube iO – Become a Global Technology Partner"
          />
          <meta
            property="og:description"
            content="Join our partner network to deliver smart building solutions under your brand."
          />
          <meta property="og:url" content="https://nubeio.com/partners/" />
        </Helmet>

        <Header1 />
        <Partner />
        <section id="Why">
          <WhyPartner data={WhyData} />
        </section>

        <section id="Contact" />

        <CTAPartners />
        <Footer />
      </>
    );
  }
}
