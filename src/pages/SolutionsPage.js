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
import Discuss from "parts/Discuss";
import Footer from "parts/Footer";

export default class SolutionsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header1 />
        <HeroSolution />
        <DetailsProfessionalService />
        <Servicesolutions data={ServiceSolutions} />
        <Ctasolutions />
        <Detailoem />
        <AdvantagesOEM data={AdvantageSolutions} />
        <DetailsHardware />
        <SolutionHardware data={Solutionsfeature} />
        <DetailsSoftware />
        <SoftwareSolutions />
        <Discuss />
        <Footer />
      </>
    );
  }
}
