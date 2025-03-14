/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import SolutionsPage from "pages/SolutionsPage";
import AboutPage from "pages/AboutPage";
import RubixCompute from "pages/RubixCompute";
import RubixMiniCompute from "pages/Rubixmini";
import RubixIO16 from "pages/RubixIO16";
import NiagaraEdge from "pages/NiagaraEdge";
import LoraDroplet from "pages/LoraDroplet";
import LoraMicroEdge from "pages/LoraMicroEdge";
import ProjectPage from "pages/ProjectPage";
import NotFoundPage from "pages/NotFoundPage";
import TermsOfUsePage from "pages/TermsOfUsePage";
import PrivacyPage from "pages/PrivacyPage";
import TcsPage from "pages/TcsPage";
import WarrantyPage from "pages/WarrantyPage";
import ApplicationPage from "pages/ApplicationPage";
import AppPolicy from "pages/AppPoliciyPage";
import SoftwarePage from "pages/SoftwarePage";
import ConnectivityPage from "pages/ConnectivityPage";
import RubixLWPage from "pages/RubixLWPage";
import CaseStudyPage from "pages/CaseStudyPage";
import GetDemoPage from "pages/GetDemoPage";
import ContactPage from "pages/ContactPage";

import { ProjectDetailPage } from "pages/ProjectDetailPage";
import { DiscussProjectPage } from "pages/DiscussProjectPage";

import "./assets/css/styles.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/about/" element={<AboutPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/rubix-compute/" element={<RubixCompute />} />
        <Route path="/rubix-compute-mini/" element={<RubixMiniCompute />} />
        <Route path="/rubix-io/" element={<RubixIO16 />} />
        <Route path="/edge/" element={<NiagaraEdge />} />
        <Route path="/lora-environmental-sensor/" element={<LoraDroplet />} />
        <Route
          path="/lora-asset-monitoring-sensor/"
          element={<LoraMicroEdge />}
        />
        <Route path="/software-rubix-platform/" element={<SoftwarePage />} />
        <Route path="/connectivity/" element={<ConnectivityPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
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
        <Route path="/case-study/" element={<CaseStudyPage />} />
        <Route path="/get-demo/" element={<GetDemoPage />} />
        <Route path="/contact-us/" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
