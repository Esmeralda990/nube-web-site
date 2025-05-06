/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import ProductsNiagara from "partsproducts/ProductsNiagara";
import Discuss from "parts/Discuss1";
import Footer from "parts/Footer";

export default class Niagara extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <ProductsNiagara />
        <Discuss />
        <Footer />
      </>
    );
  }
}
