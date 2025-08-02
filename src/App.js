/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "pages/LandingPage";
import AboutPage from "pages/AboutPage";
import RubixCompute from "pages/RubixCompute";
import RubixIO16 from "pages/RubixIO16";
import NiagaraEdge from "pages/NiagaraEdge";
import LoraDroplet from "pages/LoraDroplet";
import NotFoundPage from "pages/NotFoundPage";
import TermsOfUsePage from "pages/TermsOfUsePage";
import PrivacyPage from "pages/PrivacyPage";
import TcsPage from "pages/TcsPage";
import WarrantyPage from "pages/WarrantyPage";
import ApplicationPage from "pages/ApplicationPage";
import AppPolicy from "pages/AppPoliciyPage";
import SoftwarePage from "pages/SoftwarePage";
import RubixLWPage from "pages/RubixLWPage";
import CaseStudyPage from "pages/CaseStudyPage";
import ContactPage from "pages/ContactPage";
import FAQsPage from "pages/FAQsPage";
import Partners from "pages/PartnersPage";
import HardwarePage from "pages/HardwarePage";
import ProfessionalPage from "pages/ProfessionalPage";
import OEMPage from "pages/OemPage";
import GalvinPage from "pages/GalvinPage";
import EnviroPage from "pages/EnviroPage";
import DaikinPage from "pages/DaikinPage";
import VictorianPage from "pages/VictorianPage";
import FujitsuPage from "pages/FujitsuPage1";
import FujitsuPage2 from "pages/FujitsuPage2";
import ComingSoonPage from "pages/ComingSoonPage";

import { pageview } from "utils/Analytics";

import "./assets/css/styles.css";

function App() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search);
  }, [location]);
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/our-story/" element={<AboutPage />} />
          <Route path="/rubix-compute/" element={<RubixCompute />} />
          <Route path="/rubix-io-16/" element={<RubixIO16 />} />
          <Route path="/ci-edgex2/" element={<NiagaraEdge />} />
          <Route path="/Lora/" element={<LoraDroplet />} />
          <Route path="/software/" element={<SoftwarePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/terms-of-use/" element={<TermsOfUsePage />} />
          <Route path="/privacy-policy/" element={<PrivacyPage />} />
          <Route path="/terms-and-conditions/" element={<TcsPage />} />
          <Route path="/warranty-policy/" element={<WarrantyPage />} />
          <Route
            path="/business-account-application-form/"
            element={<ApplicationPage />}
          />
          <Route path="/app-policy/" element={<AppPolicy />} />
          <Route path="/rubix-connect-lw/" element={<RubixLWPage />} />
          <Route path="/cases/" element={<CaseStudyPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/faqs/" element={<FAQsPage />} />
          <Route path="/partners/" element={<Partners />} />
          <Route path="/hardware/" element={<HardwarePage />} />
          <Route path="/professional/" element={<ProfessionalPage />} />
          <Route path="/oem/" element={<OEMPage />} />
          <Route path="/galvin/" element={<GalvinPage />} />
          <Route path="/enviro/" element={<EnviroPage />} />
          <Route path="/daikin/" element={<DaikinPage />} />
          <Route path="/victorian/" element={<VictorianPage />} />
          <Route path="/fujitsu/" element={<FujitsuPage />} />
          <Route path="/fujitsu2/" element={<FujitsuPage2 />} />
          <Route path="/comingsoon/" element={<ComingSoonPage />} />
        </Routes>
      </HelmetProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
