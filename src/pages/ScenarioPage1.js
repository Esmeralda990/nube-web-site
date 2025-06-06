/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import Scenario1 from "parts/Scenario1";

export default class scenario1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Smart Analytics | Nube iO – Real-Time Building Insights</title>
          <meta
            name="description"
            content="Unlock actionable insights from your building data with Nube iO’s smart analytics platform."
          />
          <meta
            name="keywords"
            content="building analytics, smart building data, real-time monitoring"
          />
          <link rel="canonical" href="https://nubeio.com/case-analytics/ " />
          <meta
            property="og:title"
            content="Smart Analytics | Nube iO – Real-Time Building Insights"
          />
          <meta
            property="og:description"
            content="Unlock actionable insights from your building data with Nube iO’s smart analytics platform."
          />
          <meta
            property="og:url"
            content="https://nubeio.com/case-analytics/"
          />
        </Helmet>
        <Header1 />
        <Scenario1 />
        <Footer />
      </>
    );
  }
}
