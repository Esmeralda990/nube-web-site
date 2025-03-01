/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React, { Component } from "react";

import { Services, Portfolios, Advantages, Badges } from "json/landingPageData";
import Header1 from "parts/Header1";
import Hero from "parts/Hero";
import Service from "parts/Service";
import PorfolioCarousel from "parts/PortfolioCarousel";
import Advantage from "parts/Advantage";
import Connects from "parts/Connect";
import Portfolio from "parts/Portfolio";
import GifSection from "parts/GifSectionhero";
import Discuss from "parts/Discuss";
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
        <Service data={Services} />
        <PorfolioCarousel />
        <Advantage data={Advantages} />
        <Connects data={Badges} />
        <Portfolio data={Portfolios} />
        <GifSection />
        <Discuss />
        <Footer />
      </>
    );
  }
}
