/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";

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
        <Header1 />
        <CaseStudy3 />
        <CaseBlog3 />
        <Footer />
      </>
    );
  }
}
