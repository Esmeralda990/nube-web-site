/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import ProductsNiagara from "partsproducts/ProductsNiagara";
import Footer from "parts/Footer";
import { Edge } from "../json/ProductsPageData.js";

export default class NiagaraPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>CI-EdgeX2 | Nube iO – Niagara Framework at the Edge</title>
          <meta
            name="description"
            content="The CI-EdgeX2 delivers the full Niagara Framework in a compact, edge-ready controller for building integration."
          />
          <meta
            name="keywords"
            content="Niagara controller, edge BMS, building gateway"
          />
          <link rel="canonical" href="https://nubeio.com/ci-edgex2/ " />
          <meta
            property="og:title"
            content="CI-EdgeX2 | Nube iO – Niagara Framework at the Edge"
          />
          <meta
            property="og:description"
            content="The CI-EdgeX2 delivers the full Niagara Framework in a compact, edge-ready controller for building integration."
          />
          <meta property="og:url" content="https://nubeio.com/ci-edgex2/" />
        </Helmet>
        <Header1 />
        <ProductsNiagara data={Edge} />
        <Footer />
      </>
    );
  }
}
