/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import { WhoSupport } from "json/landingPageData";
import Header1 from "parts/Header1";
import Partner from "parts/HeroPartners";
import Discuss from "parts/DiscussPartners";
import Footer from "parts/Footer";
import WhoSuport from "parts/WhoSupport";
import WhyPartners from "parts/WhyPartner";

export default class Partnerss extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleScroll();
    window.addEventListener("hashchange", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("hashchange", this.handleScroll, false);
  }

  handleScroll = () => {
    // eslint-disable-next-line prefer-destructuring
    const hash = window.location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  render() {
    return (
      <>
        <Header1 />
        <Partner />
        <section id="Why">
          <WhyPartners />
        </section>

        <section id="Support">
          <WhoSuport data={WhoSupport} />
        </section>

        <section id="Contact">
          <Discuss />
        </section>

        <Footer />
      </>
    );
  }
}
