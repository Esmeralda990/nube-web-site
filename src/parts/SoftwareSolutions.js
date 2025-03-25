/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { ContainerScroll } from "../elements/ContainerScroll";
import GrowthImage from "../assets/images/Dashboard/DashboardPrincipal.png";

export default function SoftwareSolutions() {
  return (
    <div className="flex flex-col overflow-hidden w-full px-4">
      <ContainerScroll>
        <img
          src={GrowthImage}
          alt="Growth"
          className="rounded-2xl object-cover h-full w-full object-center responsive-image object-contain"
          height={820}
          width={1800}
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
