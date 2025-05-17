import React from "react";
import PropTypes from "prop-types";
import { AppConect } from "../json/ProductsPageData.js";

const FeatureCard = ({ title, description, icon }) => {
  return (
    <div className="w-full rounded-xl bg-white p-4 shadow-md flex items-start gap-4">
      <div className="h-12 w-12 flex-shrink-0">
        <img src={icon} alt={title} className="h-full w-full object-contain" />
      </div>
      <div>
        <p className="text-base lg:text-lg text-gray-400 font-light text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const CaracteristApp = () => {
  return (
    <section className="relative  bg-white">
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div
          className="w-full h-full bg-[length:60px_60px]"
          style={{
            backgroundImage: `url("https://shadcnblocks.com/images/patterns/pie-factory.svg")`,
            maskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at top, black 30%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-theme-blue">
          App
        </h2>
        <h4 className=" text-base lg:text-xl text-gray-400 max-w-3xl mx-auto mb-12 font-light text-theme-teal">
          Remotely Monitor Your Entire Asset Portfolio
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-24 px-4">
          {AppConect.map((item) => (
            <FeatureCard
              key={item.id}
              icon={item.icon}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaracteristApp;
