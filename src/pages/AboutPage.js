/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import { AdvantageAbout, Managers, floatingIcons } from "json/landingPageData";
import Header from "parts/Header";
import HeroAbout from "parts/HeroAbout";
import DetailsAbout from "parts/DetailsAbout";
import AdvangeAbout from "parts/AdvangeAbout";
import LogosAbout from "parts/LogosAbout";
import OurStory from "parts/Ourstory";
import TeamSection from "parts/TeamSection";
import TeamGroup from "parts/TeamGroup";
import GifSectionAbout from "parts/GifSectionAbout";
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";

export default class ProjectPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <HeroAbout />
        <DetailsAbout />
        <AdvangeAbout data={AdvantageAbout} />
        <LogosAbout />
        <OurStory />
        <TeamSection data={Managers} />
        <TeamGroup data={floatingIcons} />
        <GifSectionAbout />
        <Discuss />
        <Footer />
      </>
    );
  }
}
