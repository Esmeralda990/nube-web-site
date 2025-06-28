/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import { IconsBenefits, GifBenefits } from "json/ProductsPageData";
import Header1 from "parts/Header1";
import HeroSoftware from "partsproducts/HeroSoftware";
import SoftwareBenefits from "partsproducts/BenefitsSoftware";
import VideoSoftware from "partsproducts/VideoSoftware";
import GifSoftware from "partsproducts/GifSoftware";
import CtaSoftware from "parts/CtaSoftware";
import Footer from "parts/Footer";

export default class SoftwarePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Nube iO Software | Visual BMS & IoT Control Platform</title>
          <meta
            name="description"
            content="Rubix-CE and Rubix Wires provide powerful, low-code, real-time control over building systems and IoT devices."
          />
          <meta
            name="keywords"
            content="BMS software, IoT software platform, low-code automation"
          />
          <link rel="canonical" href="https://nubeio.com/home" />
          <meta
            property="og:title"
            content="Nube iO Software | Visual BMS & IoT Control Platform"
          />
          <meta
            property="og:description"
            content="Rubix-CE and Rubix Wires provide powerful, low-code, real-time control over building systems and IoT devices."
          />
          <meta property="og:url" content="https://nubeio.com/home" />
        </Helmet>

        <Header1 />
        <HeroSoftware />
        <SoftwareBenefits data={IconsBenefits} />
        <VideoSoftware />
        <GifSoftware data={GifBenefits} />
        <CtaSoftware />
        <Footer />
      </>
    );
  }
}
