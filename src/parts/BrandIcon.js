/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from "react";

import Button from "../elements/Button";

export default function BrandIcon() {
  return (
    <Button className="" type="link" href="/">
      <img
        src="/LogoNube.png"
        alt="nube"
        className="w-28 h-8 md:w-48 md:h-12"
      />
    </Button>
  );
}
