/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
// eslint-disable-next-line
import CaseStudy2 from "../parts/CaseStudy";
// eslint-disable-next-line
import CaseStudy1 from "../parts/CaseStudy2";
// eslint-disable-next-line
import CaseStudy3 from "../parts/CaseStudy3";
// eslint-disable-next-line
import CaseStudy4 from "../parts/CaseStudy4";

export default class Casestudy extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <CaseStudy1 />
        <CaseStudy2 />
        <CaseStudy3 />
        <CaseStudy4 />
        <Footer />
      </>
    );
  }
}
