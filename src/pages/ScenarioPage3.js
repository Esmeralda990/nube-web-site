/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import Discuss from "parts/DiscussSolutions";
import Scenario3 from "parts/Scenario3";

export default class scenario3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            Compliance & Ratings | Nube iO – Automate NABERS & Green Star
          </title>
          <meta
            name="description"
            content="Nube iO automates the path to building certification with continuous compliance and real-time data logging."
          />
          <meta
            name="keywords"
            content="NABERS automation, ESG data tracking, sustainability compliance"
          />
          <link rel="canonical" href="https://nubeio.com/case-compliance/ " />
          <meta
            property="og:title"
            content="Compliance & Ratings | Nube iO – Automate NABERS & Green Star"
          />
          <meta
            property="og:description"
            content="Nube iO automates the path to building certification with continuous compliance and real-time data logging."
          />
          <meta
            property="og:url"
            content="https://nubeio.com/case-compliance/"
          />
        </Helmet>
        <Header1 />
        <Scenario3 />
        <Discuss />
        <Footer />
      </>
    );
  }
}
