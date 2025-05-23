/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import AppcConnectivity from "partsproducts/AppConnectivity.js";
import Discuss from "parts/DiscussAbout.js";
import Footer from "parts/Footer";
import Connectivity from "../partsproducts/Connectivity.js";
import ContentConnectivity from "../partsproducts/ContentConnectivity.js";
import Appcaracterist from "../partsproducts/Appcaracterist.js";
import { AppConect } from "../json/ProductsPageData.js";

export default class NubConnectivity extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Connectivity | Nube iO – Real-Time Building Integration</title>
          <meta
            name="description"
            content="Manage building systems and IoT data with real-time dashboards, secure VPNs, and mobile access."
          />
          <meta
            name="keywords"
            content="building connectivity, IoT data integration, BMS cloud control"
          />
          <link rel="canonical" href="https://nubeio.com/connectivity/ " />
          <meta
            property="og:title"
            content="Connectivity | Nube iO – Real-Time Building Integration"
          />
          <meta
            property="og:description"
            content="Manage building systems and IoT data with real-time dashboards, secure VPNs, and mobile access."
          />
          <meta property="og:url" content="https://nubeio.com/connectivity/" />
        </Helmet>
        <Header1 />
        <Connectivity showTitle />
        <ContentConnectivity />
        <AppcConnectivity />
        <Appcaracterist data={AppConect} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
