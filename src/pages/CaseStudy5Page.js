/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import CaseBlog4 from "parts/CaseBlog4";
import Discuss from "parts/Discuss";
// eslint-disable-next-line
import CaseStudy5 from "../parts/CaseStudy5";

export default class Casestudy5 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <CaseStudy5 />
        <CaseBlog4 />
        <Discuss />
        <Footer />
      </>
    );
  }
}
