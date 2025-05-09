/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable-next-line */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import Footer from "parts/Footer";
import Discuss from "parts/DiscussSolutions";
import Scenario2 from "parts/Scenario2";

export default class scenario2 extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <Scenario2 />
        <Discuss />
        <Footer />
      </>
    );
  }
}
