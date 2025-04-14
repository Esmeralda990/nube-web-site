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
        alt="Logo Nube IO"
        className="w-auto h-8 md:h-12 max-w-[192px]"
      />
    </Button>
  );
}
