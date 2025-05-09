/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import { DataAccordion } from "json/FaqData";
import Header1 from "parts/Header1";
import FAQs from "partsterm/Faqs";
import Discuss from "parts/DiscussAbout.js";
import Footer from "parts/Footer";

export default class FAqs extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <FAQs data={DataAccordion} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
