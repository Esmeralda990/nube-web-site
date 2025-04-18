/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import Discuss from "parts/Discuss";
import Scenario3 from "parts/Scenario3";

export default class scenario3 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <Scenario3 />
        <Discuss />
        <Footer />
      </>
    );
  }
}
