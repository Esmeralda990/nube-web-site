/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import ProductsDroplet from "partsproducts/ProductsDroplet";
import ProductsMicroEdge from "partsproducts/ProductsMicroEdge";
import Footer from "parts/Footer";
import Products from "parts/ProductsBlog3.js";
import { Droplet, Microedge, Blog3 } from "../json/ProductsPageData.js";

export default class DropletPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>LoRa® Sensor | Nube iO – Wireless Indoor Monitoring</title>
          <meta
            name="description"
            content="The LoRa® Sensor is a compact that tracks temperature, humidity, light, and motion with up to 10 years of battery life."
          />
          <meta
            name="keywords"
            content="LoRa® indoor sensor, environmental monitoring, temperature sensor"
          />
          <link rel="canonical" href="https://nubeio.com/lora/ " />
          <meta
            property="og:title"
            content="Lora® Sensor| Nube iO – Wireless Indoor Monitoring"
          />
          <meta
            property="og:description"
            content="The LoRa® Sensor is a compact that tracks temperature, humidity, light, and motion with up to 10 years of battery life."
          />
          <meta property="og:url" content="https://nubeio.com/lora/" />
        </Helmet>
        <Header1 />
        <ProductsDroplet data={Droplet} />
        <ProductsMicroEdge data={Microedge} />
        <Products data={Blog3} />
        <Footer />
      </>
    );
  }
}
