/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import CaseBlog2 from "parts/CaseBlog2";
// eslint-disable-next-line
import CaseStudy2 from "../parts/CaseStudy2";

export default class Casestudy2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <CaseStudy2 />
        <CaseBlog2 />
        <Footer />
      </>
    );
  }
}
