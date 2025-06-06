/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import { Blog3 } from "json//ProductsPageData";
import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import CaseBlog3 from "parts/CaseBlog3";
// eslint-disable-next-line
import CaseStudy3 from "../parts/CaseStudy3";

export default class Casestudy3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>Case Study: Enviro | Smart Building Modernisation</title>
          <meta
            name="description"
            content="Explore how Enviro used Nube iO to modernise existing BMS systems and drive sustainability across portfolios."
          />
          <meta
            name="keywords"
            content="BMS upgrades, building optimisation services"
          />
          <link rel="canonical" href="https://nubeio.com/case-enviro/ " />
          <meta
            property="og:title"
            content="Case Study: Enviro | Smart Building Modernisation"
          />
          <meta
            property="og:description"
            content="Explore how Enviro used Nube iO to modernise existing BMS systems and drive sustainability across portfolios."
          />
          <meta property="og:url" content="https://nubeio.com/case-enviro/" />
        </Helmet>

        <Header1 />
        <CaseStudy3 />
        <CaseBlog3 data={Blog3} />
        <Footer />
      </>
    );
  }
}
