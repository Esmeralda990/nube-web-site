/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import ProductsDroplet from "partsproducts/ProductsDroplet";
import ProductsMicroEdge from "partsproducts/ProductsMicroEdge";
import Discuss from "parts/DiscussDroplet";
import Footer from "parts/Footer";
import { Droplet, Microedge } from "../json/ProductsPageData.js";

export default class DropletPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Lora Sensor | Nube iO – Wireless Indoor Monitoring</title>
          <meta
            name="description"
            content="The Lora Sensor is a compact that tracks temperature, humidity, light, and motion with up to 10 years of battery life."
          />
          <meta
            name="keywords"
            content="LoRa indoor sensor, environmental monitoring, temperature sensor"
          />
          <link rel="canonical" href="https://nubeio.com/droplet/ " />
          <meta
            property="og:title"
            content="Lora Sensor| Nube iO – Wireless Indoor Monitoring"
          />
          <meta
            property="og:description"
            content="The Lora Sensor is a compact that tracks temperature, humidity, light, and motion with up to 10 years of battery life."
          />
          <meta property="og:url" content="https://nubeio.com/droplet/" />
        </Helmet>
        <Header1 />
        <ProductsDroplet data={Droplet} />
        <ProductsMicroEdge data={Microedge} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
