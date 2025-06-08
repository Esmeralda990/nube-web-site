/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
// eslint-disable-next-line
import CaseStudy5 from "../parts/CaseStudy5";

export default class Casestudy5 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            Case Study: Daikin | Smarter Data for Better HVAC Products
          </title>
          <meta
            name="description"
            content="See how Daikin used Nube iO’s sensors and cloud tools to enhance product testing and development."
          />
          <meta
            name="keywords"
            content="HVAC IoT feedback, product testing analytics"
          />
          <link rel="canonical" href="https://nubeio.com/case-daikin/ " />
          <meta
            property="og:title"
            content="Case Study: Daikin | Smarter Data for Better HVAC Products"
          />
          <meta
            property="og:description"
            content="See how Daikin used Nube iO’s sensors and cloud tools to enhance product testing and development."
          />
          <meta property="og:url" content="https://nubeio.com/case-daikin/" />
        </Helmet>

        <Header1 />
        <CaseStudy5 />
        <Footer />
      </>
    );
  }
}
