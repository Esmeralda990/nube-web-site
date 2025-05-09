/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { RubixWire } from "../json/ProductsPageData.js";
import Button from "../elements/Button/index.js";

const checkedItems = [
  "Drag-and-drop visual editor – create and deploy control logic without traditional coding",
  "Real-time monitoring – view live data flows and system behaviour instantly",
  "Built-in protocol support – works with BACnet, Modbus, and LoRaWAN®",
  "Flexible control options – program PACs, PIDs, RTUs, and FCUs with ease",
  "No licensing fees – included with all Nube iO controllers",
  "Designed for HVAC and IoT – ideal for smart buildings and connected devices",
  "Remote access – configure and monitor systems from anywhere",
];

const ProductsRubixW = () => {
  return (
    <section className="lg:py-32 container mx-auto flex flex-col items-start gap-8 lg:flex-row lg:items-center">
      <div className="relative z-10 w-full flex justify-center">
        <div className="w-full lg:w-[50%] flex justify-center">
          <video
            src={RubixWire[0].image}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-[4/3] lg:scale-[2] w-full object-contain rounded-md "
          />
        </div>
      </div>

      <div className="w-full lg:w-[60%] px-6 flex flex-col items-center lg:items-start">
        <h2 className="mb-6 text-3xl lg:text-5xl font-bold text-theme-blue text-center">
          Engineering Tools: Rubix Wires
        </h2>
        <p className="mb-6 text-base lg:text-lg font-light text-gray-400 ">
          Rubix Wires is Nube iO’s powerful low-code engineering tool for fast,
          flexible building automation and IoT deployment.
        </p>
        <ul className="mb-8 list-disc pl-10 text-muted-foreground font-light text-gray-400 text-base lg:text-lg">
          {checkedItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className=" w-full flex justify-center ">
          <Button
            href="https://nubeio.github.io/rubix-ce-docs/docs/category/rubix-ce/"
            type="link"
            className="block mx-auto px-6 py-3 bg-theme-teal text-white text-sm md:text-base rounded-xl transition duration-300 ease-in-out hover:scale-105 hover:bg-white border border-theme-teal hover:text-black"
          >
            USER MANUAL
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsRubixW;
