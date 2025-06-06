/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import { Blog1 } from "json//ProductsPageData";
import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import CaseBlog1 from "parts/CaseBlog1";
// eslint-disable-next-line
import CaseStudy1 from "../parts/CaseStudy1";

export default class Casestudy1 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Case Study: Fujitsu | AnywAiR iO Powered by Nube iO</title>
          <meta
            name="description"
            content="See how Nube iO helped Fujitsu launch a fully integrated smart HVAC solution using our OEM technology stack."
          />
          <meta
            name="keywords"
            content="OEM BMS integration, Fujitsu HVAC controls"
          />
          <link rel="canonical" href="https://nubeio.com/case-fujitsu/ " />
          <meta
            property="og:title"
            content="Case Study: Fujitsu | AnywAiR iO Powered by Nube iO"
          />
          <meta
            property="og:description"
            content="See how Nube iO helped Fujitsu launch a fully integrated smart HVAC solution using our OEM technology stack."
          />
          <meta property="og:url" content="https://nubeio.com/case-fujitsu/" />
        </Helmet>

        <Header1 />
        <CaseStudy1 />
        <CaseBlog1 data={Blog1} />
        <Footer />
      </>
    );
  }
}
