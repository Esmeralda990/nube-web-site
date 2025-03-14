/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header1 from "parts/Header1";
import GetDemoHero from "partsterm/GetDemoHero.js";
import GetDemoForms from "partsterm/GetDemoForms";
import Footer from "parts/Footer";

export default class Getdemo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <GetDemoHero />
        <GetDemoForms />
        <Footer />
      </>
    );
  }
}
