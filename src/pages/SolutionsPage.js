/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import {
  ServiceSolutions,
  AdvantageSolutions,
  Solutionsfeature,
} from "json/landingPageData";

import Header1 from "parts/Header1";
import HeroSolution from "parts/HeroSolution";
import DetailsProfessionalService from "parts/DetailsProfessionalService";
import Servicesolutions from "parts/ServiceSolutions";
import Ctasolutions from "parts/CtaSolutions";
import Detailoem from "parts/DetailsOEM";
import AdvantagesOEM from "parts/AdvangeOEM";
import DetailsHardware from "parts/DetailsHardware";
import SolutionHardware from "parts/SolutionHardware";
import DetailsSoftware from "parts/DetailsSoftware";
import SoftwareSolutions from "parts/SoftwareSolutions";
import Discuss from "parts/DiscussSolutions";
import Footer from "parts/Footer";
import Connectivity from "../partsproducts/Connectivity.js";

export default class SolutionsPage extends Component {
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
        <HeroSolution />

        <section id="Software">
          <DetailsSoftware />
          <SoftwareSolutions />
        </section>

        <section id="Hardware">
          <DetailsHardware />
          <SolutionHardware data={Solutionsfeature} />
        </section>

        <section id="Professional">
          <DetailsProfessionalService />
          <Servicesolutions data={ServiceSolutions} />
          <Ctasolutions />
        </section>

        <section id="OEM">
          <Detailoem />
          <AdvantagesOEM data={AdvantageSolutions} />
        </section>

        <section id="Connectivity">
          <Connectivity />
        </section>

        <Discuss />
        <Footer />
      </>
    );
  }
}
