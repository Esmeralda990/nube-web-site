/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import Scenario2 from "parts/Scenario2";

export default class scenario2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            OEM Solutions | Nube iO – White Label IoT for Smart Buildings
          </title>
          <meta
            name="description"
            content="Launch branded smart building products with Nube iO’s OEM-ready hardware and software stack."
          />
          <meta
            name="keywords"
            content="OEM smart hardware, BMS white label, IoT platform branding"
          />
          <link rel="canonical" href="https://nubeio.com/case-oem/ " />
          <meta
            property="og:title"
            content="OEM Solutions | Nube iO – White Label IoT for Smart Buildings"
          />
          <meta
            property="og:description"
            content="Launch branded smart building products with Nube iO’s OEM-ready hardware and software stack."
          />
          <meta property="og:url" content="https://nubeio.com/case-oem/" />
        </Helmet>
        <Header1 />
        <Scenario2 />
        <Footer />
      </>
    );
  }
}
