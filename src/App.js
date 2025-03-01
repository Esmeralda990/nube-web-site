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
import TeamPage from "pages/TeamPage";

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
        <Route path="/project" element={<ProjectPage />} />
        <Route exact path="/project/:id" element={<ProjectDetailPage />} />
        <Route exact path="/team" element={<TeamPage />} />
        <Route exact path="/discuss-project" element={<DiscussProjectPage />} />
        <Route path="**" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
