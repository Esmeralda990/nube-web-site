/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import ProductsMicroEdge from "partsproducts/ProductsMicroEdge";
import Discuss from "parts/DiscussMicro";
import Footer from "parts/Footer";
import { Microedge } from "../json/ProductsPageData.js";

export default class MicroEdge extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>MicroEdge Sensor | Nube iO – Smart Utility Monitoring</title>
          <meta
            name="description"
            content="The MicroEdge enables pulse metering, temperature, and digital input monitoring in a waterproof, wireless package"
          />
          <meta
            name="keywords"
            content="pulse monitoring, utility IoT sensor, LoRa outdoor sensor"
          />
          <link rel="canonical" href="https://nubeio.com/microedge/ " />
          <meta
            property="og:title"
            content="MicroEdge Sensor | Nube iO – Smart Utility Monitoring"
          />
          <meta
            property="og:description"
            content="The MicroEdge enables pulse metering, temperature, and digital input monitoring in a waterproof, wireless package"
          />
          <meta property="og:url" content="https://nubeio.com/microedge/" />
        </Helmet>
        <Header1 />
        <ProductsMicroEdge data={Microedge} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
