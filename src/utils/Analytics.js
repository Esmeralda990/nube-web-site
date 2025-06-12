/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import ReactGA from "react-ga4";

const GA_ID = process.env.REACT_APP_GA_ID;

export const initGA = () => {
  if (GA_ID) {
    ReactGA.initialize(GA_ID);
  }
};

export const pageview = (path) => {
  if (GA_ID) {
    console.log("📊 Tracking pageview:", path);
    ReactGA.send({ hitType: "pageview", page: path });
  }
};
