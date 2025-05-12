/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import { IconsBenefits, GifBenefits, RubixWire } from "json/ProductsPageData";
import Header1 from "parts/Header1";
import HeroSoftware from "partsproducts/HeroSoftware";
import SoftwareBenefits from "partsproducts/BenefitsSoftware";
import VideoSoftware from "partsproducts/VideoSoftware";
import GifSoftware from "partsproducts/GifSoftware";
import RubixWireSoftware from "partsproducts/RubixWireSoftware";
import Discuss from "parts/DiscussRubixCE";
import Footer from "parts/Footer";

export default class SoftwarePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <HeroSoftware />
        <SoftwareBenefits data={IconsBenefits} />
        <VideoSoftware />
        <GifSoftware data={GifBenefits} />
        <RubixWireSoftware data={RubixWire} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
