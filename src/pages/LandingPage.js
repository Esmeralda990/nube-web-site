/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import {
  Services,
  WorldSolutions,
  Advantages,
  Badges,
  Slides,
  Logos,
} from "json/landingPageData";

import Header1 from "parts/Header1";
import Hero from "parts/Hero";
import Service from "parts/Service";
import PorfolioCarousel from "parts/PortfolioCarousel";
import Advantage from "parts/Advantage";
import SolutionHero from "parts/SolutionHero";
import Connect from "parts/Connect";
import PartnersSection from "parts/PartnerSection";
import Discuss from "parts/DiscussHome";
import Footer from "parts/Footer";
import Connectivity from "../partsproducts/Connectivity.js";

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Nube iO | Building Automation & Smart IoT Solutions</title>
          <meta
            name="description"
            content="Discover Nube iO’s innovative building automation platform—designed to simplify integration, enhance control, and deliver scalable smart solutions."
          />
          <meta
            name="keywords"
            content="building automation, smart buildings, IoT BMS"
          />
          <link rel="canonical" href="https://nubeio.com/home" />
          <meta
            property="og:title"
            content="Nube iO | Building Automation & Smart IoT Solutions"
          />
          <meta
            property="og:description"
            content="Discover Nube iO’s innovative building automation platform—designed to simplify integration, enhance control, and deliver scalable smart solutions."
          />
          <meta property="og:url" content="https://nubeio.com/home" />
        </Helmet>

        <Header1 />
        <Hero />
        <Connectivity showTitle={false} />
        <Service data={Services} />
        <PorfolioCarousel data={Slides} logos={Logos} />
        <Advantage data={Advantages} />
        <PartnersSection />
        <Connect data={Badges} />
        <SolutionHero data={WorldSolutions} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
