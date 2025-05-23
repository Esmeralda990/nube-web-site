/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import ProductsRubix16 from "partsproducts/ProductsRubix16";
import Discuss from "parts/DiscussR16";
import Footer from "parts/Footer";
import { RubixIO16 } from "../json/ProductsPageData.js";

export default class RubixIO extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Rubix IO-16 | Nube iO – Flexible Smart I/O Module</title>
          <meta
            name="description"
            content="The Rubix IO-16 offers wireless expansion for BMS and HVAC—ideal for fast installations and retrofits."
          />
          <meta
            name="keywords"
            content="wireless I/O module, LoRa I/O, HVAC control"
          />
          <link rel="canonical" href="https://nubeio.com/rubix-io-16/ " />
          <meta
            property="og:title"
            content="Rubix IO-16 | Nube iO – Flexible Smart I/O Module"
          />
          <meta
            property="og:description"
            content="The Rubix IO-16 offers wireless expansion for BMS and HVAC—ideal for fast installations and retrofits."
          />
          <meta property="og:url" content="https://nubeio.com/rubix-io-16/" />
        </Helmet>
        <Header1 />
        <ProductsRubix16 data={RubixIO16} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
