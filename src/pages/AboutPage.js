/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import { AdvantageAbout, Managers, OurStoryD } from "json/landingPageData";
import Header1 from "parts/Header1";
import AdvangeAbout from "parts/AdvangeAbout";
import OurStory from "parts/Ourstory";
import TeamSection from "parts/TeamSection";
import TeamGroup from "parts/TeamGroup";
import CtaAbout from "parts/CtaAbout";
import Footer from "parts/Footer";

export default class AboutPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Helmet>
          <title>About | Nube iO – Smart Building Innovation</title>
          <meta
            name="description"
            content="Learn how Nube iO is transforming building automation through scalable IoT and software-driven integration."
          />
          <meta
            name="keywords"
            content="about Nube iO, smart building innovation, IoT automation"
          />
          <link rel="canonical" href="https://nubeio.com/our-story/" />
          <meta
            property="og:title"
            content="About | Nube iO – Smart Building Innovation"
          />
          <meta
            property="og:description"
            content="Learn how Nube iO is transforming building automation through scalable IoT and software-driven integration."
          />
          <meta property="og:url" content="https://nubeio.com/our-story/" />
        </Helmet>

        <Header1 />
        <OurStory data={OurStoryD} />
        <AdvangeAbout data={AdvantageAbout} />
        <TeamGroup />
        <TeamSection data={Managers} />
        <CtaAbout />
        <Footer />
      </>
    );
  }
}
