/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import ProductsRubixLW from "partsproducts/ProductsRubixLW.js";
import Footer from "parts/Footer";

import { RubixConnectLW } from "../json/ProductsPageData.js";

export default class ProductsRubixConnectLW extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <Helmet>
          <title>Rubix Connect LW | Nube iO – LoRaWAN Expansion Module</title>
          <meta
            name="description"
            content="Add LoRaWAN® capability to Rubix Compute and manage large-scale sensor deployments with Rubix Connect LW."
          />
          <meta
            name="keywords"
            content="LoRaWAN module, IoT gateway expansion, building sensor network"
          />
          <link rel="canonical" href="https://nubeio.com/rubix-connect-lw/ " />
          <meta
            property="og:title"
            content="Rubix Connect LW | Nube iO – LoRaWAN Expansion Module"
          />
          <meta
            property="og:description"
            content="Add LoRaWAN® capability to Rubix Compute and manage large-scale sensor deployments with Rubix Connect LW."
          />
          <meta
            property="og:url"
            content="https://nubeio.com/rubix-connect-lw/"
          />
        </Helmet>
        <ProductsRubixLW data={RubixConnectLW} />
        <Footer />
      </>
    );
  }
}
