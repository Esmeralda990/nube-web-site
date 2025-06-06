/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import { WhyData } from "json/landingPageData";
import Header1 from "parts/Header1";
import Partner from "parts/HeroPartners";
import Footer from "parts/Footer";
import WhyPartners from "parts/WhyPartner";

export default class Partnerss extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleScroll();
    window.addEventListener("hashchange", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleScroll, false);
  }

  handleScroll = () => {
    // eslint-disable-next-line prefer-destructuring
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

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
          <WhyPartners data={WhyData} />
        </section>

        <section id="Contact" />

        <Footer />
      </>
    );
  }
}
