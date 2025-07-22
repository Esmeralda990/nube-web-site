/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../elements/ThemeContext";

export default function BrandIcon() {
  const { theme } = useTheme();

  const logoSrc = theme === "dark" ? "/Logodark.svg" : "/Logo.svg";
  return (
    <Link to="/" className="inline-block">
      <img
        src={logoSrc}
        alt="Logo Nube IO"
        className="w-auto h-8 md:h-12 max-w-[192px] transition-all duration-300 ml-4"
      />
    </Link>
  );
}
