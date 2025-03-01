/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import ProductsRubix16 from "partsproducts/ProductsRubix16";
import GifSectionAbout from "parts/GifSectionAbout";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";

export default class RubixIO extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <ProductsRubix16 />
        <GifSectionAbout />
        <Discuss />
        <Footer />
      </>
    );
  }
}
