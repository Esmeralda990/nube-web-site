/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
// eslint-disable-next-line
import CaseStudy4 from "../parts/CaseStudy4";

export default class Casestudy4 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            Case Study: QA Electrical | Energy Compliance in Victorian Schools
          </title>
          <meta
            name="description"
            content="Learn how QA Electrical used Nube iO to deploy smart HVAC monitoring in schools across Victoria."
          />
          <meta
            name="keywords"
            content="school automation, HVAC compliance, state-funded BMS"
          />
          <link rel="canonical" href="https://nubeio.com/case-qa/ " />
          <meta
            property="og:title"
            content="Case Study: QA Electrical | Energy Compliance in Victorian Schools"
          />
          <meta
            property="og:description"
            content="Learn how QA Electrical used Nube iO to deploy smart HVAC monitoring in schools across Victoria."
          />
          <meta property="og:url" content="https://nubeio.com/case-qa/" />
        </Helmet>

        <Header1 />
        <CaseStudy4 />
        <Footer />
      </>
    );
  }
}
