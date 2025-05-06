/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import NubeConnectivity from "partsproducts/NubeConnectivity";
import PhoneNube from "partsproducts/NubPhone.js";
import Discuss from "parts/Discuss1";
import Footer from "parts/Footer";

import { Connectivity } from "../json/ProductsPageData.js";

export default class NubConnectivity extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <NubeConnectivity data={Connectivity} />
        <PhoneNube />
        <Discuss />
        <Footer />
      </>
    );
  }
}
