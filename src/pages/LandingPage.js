/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React, { Component } from "react";

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
import SoftwareSolutions from "parts/SoftwareSolutions";
import Connect from "parts/Connect";
import PartnersSection from "parts/PartnerSection";
import Discuss from "parts/DiscussHome";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <Hero />
        <SoftwareSolutions />
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
