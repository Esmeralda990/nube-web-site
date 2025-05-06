/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import ProductsRubixLW from "partsproducts/ProductsRubixLW.js";
import Footer from "parts/Footer";
import Discuss from "parts/Discuss1.js";

import { RubixConnectLW } from "../json/ProductsPageData.js";

export default class ProductsRubixConnectLW extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <ProductsRubixLW data={RubixConnectLW} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
