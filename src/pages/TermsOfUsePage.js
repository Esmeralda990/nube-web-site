/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import Terms from "partsterm/termsofuse";
import Footer from "parts/Footer";

export default class TermsOfUsePage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <Terms />
        <Footer />
      </>
    );
  }
}
