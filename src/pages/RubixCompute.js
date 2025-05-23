/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import ProductsRubix from "partsproducts/ProductsRubix";
import Discuss from "parts/DiscussRC";
import Footer from "parts/Footer";
import { RubixCompute } from "../json/ProductsPageData.js";

export default class RubixComputePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Rubix Compute | Nube iO – Multi-Protocol Smart Gateway</title>
          <meta
            name="description"
            content="Control and connect your building systems with Rubix Compute—Nube iO’s powerful BACnet and LoRa-ready edge controller."
          />
          <meta
            name="keywords"
            content="BACnet controller, IoT gateway, smart building automation"
          />
          <link rel="canonical" href="https://nubeio.com/rubix-compute/ " />
          <meta
            property="og:title"
            content="Rubix Compute | Nube iO – Multi-Protocol Smart Gateway"
          />
          <meta
            property="og:description"
            content="Control and connect your building systems with Rubix Compute—Nube iO’s powerful BACnet and LoRa-ready edge controller."
          />
          <meta property="og:url" content="https://nubeio.com/rubix-compute/" />
        </Helmet>
        <Header1 />
        <ProductsRubix data={RubixCompute} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
