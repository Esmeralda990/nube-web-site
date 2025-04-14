/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Connectivity } from "../json/ProductsPageData.js";

const NubeConect = () => {
  return (
    <section className="lg:py-32 mt-12 pb-12 md:ml-24 ml-0">
      <div className="container mx-auto px-12">
        <h1 className="text-3xl mt-4 text-theme-blue font-bold md:text-5xl text-center">
          Connectivity Overview
        </h1>
        <div className="relative mt-12 grid gap-16 md:grid-cols-2">
          <article className="prose order-2 mx-auto md:order-1">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              speed={400}
              className="swiper-products mb-12 aspect-video w-full h-auto rounded-lg"
            >
              {Connectivity.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide-">
                  <img
                    src={item.image}
                    alt={`Nube ${item.id}`}
                    className="w-full h-auto mb-8 mt-0 object-cover rounded-lg "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              CLOUD SERVICES
            </h2>
            <p className="font-light text-lg text-gray-400 mb-10">
              Cloud services for managing connected devices
            </p>
            <ul className="text-muted-foreground font-light text-gray-400 text-lg list-inside">
              <li>
                <span className="text-theme-teal">&#10003;</span> MQTT Broker
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Rest-API
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Database
                services for influx-db or SQL based postgres
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> VPN Data
                Security
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Communication
                protocol management
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Automated data
                collection
              </li>
            </ul>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              VPN
            </h1>
            <ul className="text-muted-foreground font-light text-gray-400 text-lg list-inside">
              <li>
                <span className="text-theme-teal">&#10003;</span> Secure VPN
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Mass update of
                Security Certificates to devices
              </li>
            </ul>
          </article>

          <div className="order-1 h-fit md:sticky md:top-20 md:order-2 sm:items-center lg:items-start sm:flex-row">
            <h2 className="text-2xl font-bold mt-2 mb-4 text-theme-blue">
              Portfolio Management
            </h2>

            <p className="text-muted-foreground font-light text-lg text-gray-400 mb-10 leading-relaxed">
              Nube iO hardware can be connected to the Nube iO dashboard – a
              user-friendly, fully customisable web-based interface. Featuring
              rich animations and multiple skin designs, it can be personalised
              to your organisation’s brand specifications. There is no software
              to install, configure, or update. Access it from anywhere, using
              any browser and device. The dashboard comes with configurable
              alerts, mechanical statuses, location-based map overview, and
              support for any number of buildings or devices.
            </p>
            <div className="my-6 w-full border-t border-gray-300" />
            <h1 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              DATABASE
            </h1>
            <p className="font-light text-lg text-gray-400 mb-10">
              To measure change over time, sensor data is stored in a time
              serial database.
            </p>
            <ul className="text-muted-foreground font-light text-lg text-gray-400 list-inside">
              <li>
                <span className="text-theme-teal">&#10003;</span> Inbuilt
                Rest-API to access data
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Mass firmware
                updates
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Manage
                database and VPN connections
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Mass update of
                VPN certificates
              </li>
            </ul>
            <h1 className="text-2xl font-bold mt-8 mb-4 text-theme-blue">
              Securely Manage on Mass
            </h1>
            <ul className="text-muted-foreground font-light text-gray-400 text-lg list-inside">
              <li>
                <span className="text-theme-teal">&#10003;</span> Manage all
                your building on mass
              </li>
              <li>
                <span className="text-theme-teal">&#10003;</span> Mass updates
                through Rubix-CE playbooks
              </li>
            </ul>
            <div className="flex items-center justify-between" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NubeConect;
