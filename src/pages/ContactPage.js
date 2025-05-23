/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header1 from "parts/Header1";
import ContactForm from "partsterm/ContactForm";
import Footer from "parts/Footer";

export default class HeroContc extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>
            Contact | Get a Demo of Nube iO’s Smart Building Technology
          </title>
          <meta
            name="description"
            content="Talk to our team about your building automation goals or schedule a live demo."
          />
          <meta
            name="keywords"
            content="building automation contact, demo smart BMS, IoT consultation"
          />
          <link rel="canonical" href="https://nubeio.com/contact/ " />
          <meta
            property="og:title"
            content="Contact | Get a Demo of Nube iO’s Smart Building Technology"
          />
          <meta
            property="og:description"
            content="Talk to our team about your building automation goals or schedule a live demo."
          />
          <meta property="og:url" content="https://nubeio.com/contact/" />
        </Helmet>
        <Header1 />
        <ContactForm />
        <Footer />
      </>
    );
  }
}
