/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import { DataAccordion } from "json/FaqData";
import Header1 from "parts/Header1";
import FAQs from "partsterm/Faqs";
import Footer from "parts/Footer";

export default class FAqs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>FAQs | Nube iO – Frequently Asked Questions</title>
          <meta
            name="description"
            content="Find answers about Nube iO's smart building products, integrations, and support options."
          />
          <meta
            name="keywords"
            content="smart BMS FAQ, IoT automation help, Nube iO support"
          />
          <link rel="canonical" href="https://nubeio.com/faqs/ " />
          <meta
            property="og:title"
            content="FAQs | Nube iO – Frequently Asked Questions"
          />
          <meta
            property="og:description"
            content="Find answers about Nube iO's smart building products, integrations, and support options."
          />
          <meta property="og:url" content="https://nubeio.com/faqs/" />
        </Helmet>
        <Header1 />
        <FAQs data={DataAccordion} />
        <Footer />
      </>
    );
  }
}
