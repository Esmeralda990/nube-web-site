/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable-next-line no-unused-vars */
import { Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LandingPage from "pages/LandingPage";
import SolutionsPage from "pages/SolutionsPage";
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
import ConnectivityPage from "pages/ConnectivityPage";
import RubixLWPage from "pages/RubixLWPage";
import CaseStudy1Page from "pages/CaseStudy1Page";
import CaseStudy2Page from "pages/CaseStudy2Page";
import CaseStudy3Page from "pages/CaseStudy3Page";
import CaseStudy4Page from "pages/CaseStudy4Page";
import CaseStudy5Page from "pages/CaseStudy5Page";
import GetDemoPage from "pages/GetDemoPage";
import ScenarioPage1 from "pages/ScenarioPage1";
import ScenarioPage2 from "pages/ScenarioPage2";
import ScenarioPage3 from "pages/ScenarioPage3";
import ContactPage from "pages/ContactPage";
import FAQsPage from "pages/FAQsPage";
import Partners from "pages/PartnersPage";

import "./assets/css/styles.css";

function App() {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/our-story/" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/rubix-compute/" element={<RubixCompute />} />
          <Route path="/rubix-io-16/" element={<RubixIO16 />} />
          <Route path="/ci-edgex2/" element={<NiagaraEdge />} />
          <Route path="/Lora/" element={<LoraDroplet />} />
          <Route path="/software/" element={<SoftwarePage />} />
          <Route path="/connectivity/" element={<ConnectivityPage />} />
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
          <Route path="/case-fujitsu/" element={<CaseStudy1Page />} />
          <Route path="/case-galvin/" element={<CaseStudy2Page />} />
          <Route path="/case-enviro/" element={<CaseStudy3Page />} />
          <Route path="/case-qa/" element={<CaseStudy4Page />} />
          <Route path="/case-daikin/" element={<CaseStudy5Page />} />
          <Route path="/case-analytics/" element={<ScenarioPage1 />} />
          <Route path="/case-oem/" element={<ScenarioPage2 />} />
          <Route path="/case-compliance/" element={<ScenarioPage3 />} />
          <Route path="/get-demo/" element={<GetDemoPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/faqs/" element={<FAQsPage />} />
          <Route path="/partners/" element={<Partners />} />
        </Routes>
      </HelmetProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
