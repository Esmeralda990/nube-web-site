/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */

import React, { Component } from "react";

import Header1 from "parts/Header1";
import AppcConnectivity from "partsproducts/AppConnectivity.js";
import Discuss from "parts/DiscussAbout.js";
import Footer from "parts/Footer";
import Connectivity from "../partsproducts/Connectivity.js";
import ContentConnectivity from "../partsproducts/ContentConnectivity.js";
import Appcaracterist from "../partsproducts/Appcaracterist.js";

export default class NubConnectivity extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <Connectivity showTitle />
        <ContentConnectivity />
        <AppcConnectivity />
        <Appcaracterist />
        <Discuss />
        <Footer />
      </>
    );
  }
}
