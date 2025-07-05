/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import CaseEnviro from "partsproducts/CaseEnviro";
import Footer from "parts/Footer";

export default class CaseEnviroPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            Smart Building Case Studies | Nube iO Real-World Scenarios
          </title>
          <meta
            name="description"
            content="Discover how Nube iO transforms buildings with scalable automation. Browse our case studies and implementation scenarios to see real-world results in action."
          />
          <meta
            name="keywords"
            content="smart building automation, building management system (BMS),OEM BMS integration,IoT for buildings,LoRaWAN building systems,Nube iO building automation,data-driven building performance"
          />
          <link rel="canonical" href="https://nubeio.com/enviro/ " />
          <meta
            property="og:title"
            content="Smart Building Case Studies | Nube iO Real-World Scenarios"
          />
          <meta
            property="og:description"
            content="Discover how Nube iO transforms buildings with scalable automation. Browse our case studies and implementation scenarios to see real-world results in action."
          />
          <meta property="og:url" content="https://nubeio.com/enviro/" />
        </Helmet>

        <Header1 />
        <CaseEnviro />
        <Footer />
      </>
    );
  }
}
