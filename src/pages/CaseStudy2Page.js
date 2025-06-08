/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
// eslint-disable-next-line
import CaseStudy2 from "../parts/CaseStudy2";

export default class Casestudy2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Case Study: Galvin Engineering | Smart Valve Monitoring</title>
          <meta
            name="description"
            content="Discover how Galvin Engineering used Nube iO wireless sensors to streamline hospital water compliance."
          />
          <meta
            name="keywords"
            content="hospital compliance monitoring, water safety IoT"
          />
          <link rel="canonical" href="https://nubeio.com/case-galvin/ " />
          <meta
            property="og:title"
            content="Case Study: Galvin Engineering | Smart Valve Monitoring"
          />
          <meta
            property="og:description"
            content="Discover how Galvin Engineering used Nube iO wireless sensors to streamline hospital water compliance."
          />
          <meta property="og:url" content="https://nubeio.com/case-galvin/" />
        </Helmet>

        <Header1 />
        <CaseStudy2 />
        <Footer />
      </>
    );
  }
}
