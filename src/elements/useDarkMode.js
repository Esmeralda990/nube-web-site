/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint react/prop-types: "off" */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
import { useState, useEffect } from "react";

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => setIsDark(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  return isDark;
}
