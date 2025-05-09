/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import CaseBlog1 from "parts/CaseBlog1";
import Discuss from "parts//DiscussAbout.js";
// eslint-disable-next-line
import CaseStudy4 from "../parts/CaseStudy4";

export default class Casestudy4 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <CaseStudy4 />
        <CaseBlog1 />
        <Discuss />
        <Footer />
      </>
    );
  }
}
