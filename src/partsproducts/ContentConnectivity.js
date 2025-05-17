/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React from "react";

const Content = () => {
  return (
    <section className="max-w-screen-md mx-auto px-8">
      <div className="flex flex-col justify-between gap-10">
        <div className="mt-12 space-y-8">
          <h4 className="text-theme-teal font-light text-base lg:text-xl mb-6">
            {" "}
            Portfolio Management
          </h4>
          <p className="text-gray-400 font-light text-lg">
            Nube iO hardware can be connected to the Nube iO dashboard –a
            user-friendly, fully customisable web-based interface. Featuring
            rich animations and multiple skin designs, it can be personalised to
            your organisation’s brand specifications. There is no software to
            install, configure, or update. Access it from anywhere, using any
            browser and device. The dashboard comes with configurable alerts,
            mechanical statuses, location-based map overview, and support for
            any number of buildings or devices
          </p>
        </div>

        <div className="prose max-w-none mt-8">
          <h4 className="text-theme-teal font-light text-base lg:text-xl mb-6">
            Database
          </h4>
          <p className="text-gray-400 font-light text-lg mb-6">
            To measure change over time, sensor data is stored in a time serial
            database.
          </p>
          <table className="text-left w-full border-collapse text-gray-400 font-light">
            <thead>
              <tr>
                <th className="border-b py-2">SPECIFICATION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="py-2">Inbuilt Rest-API to access data</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">Mass firmware updates</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">Manage database and VPN connections</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">Mass update of VPN certificates</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="prose max-w-none mt-8">
          <h4 className="text-theme-teal font-light text-xl mb-6">
            Securely Manage on Mass
          </h4>
          <table className="text-left w-full border-collapse text-gray-400 font-light">
            <thead>
              <tr>
                <th className="border-b py-2">SPECIFICATION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="py-2">Manage all your building on mass</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">
                  Mass updates through Rubix-CE playbooks
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="prose max-w-none mt-8">
          <h4 className="text-theme-teal font-light text-base lg:text-xl mb-6">
            Cloud Services
          </h4>
          <p className="text-gray-400 font-light text-lg mb-6">
            Cloud services for managing connected devices
          </p>
          <table className="text-left w-full border-collapse text-gray-400 font-light">
            <thead>
              <tr>
                <th className="border-b py-2">SPECIFICATION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="py-2">MQTT Broker</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">Rest-API</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">
                  {" "}
                  Database services for influx-db or SQL based postgres
                </td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">VPN Data Security</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">Communication protocol management</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">Automated data collection</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="prose max-w-none mt-8">
          <h4 className="text-theme-teal font-light text-xl mb-6">VPN</h4>
          <table className="text-left w-full border-collapse text-gray-400 font-light">
            <thead>
              <tr>
                <th className="border-b py-2">SPECIFICATION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="even:bg-gray-50">
                <td className="py-2">Secure VPN</td>
              </tr>
              <tr className="even:bg-gray-50">
                <td className="py-2">
                  Mass update of Security Certificates to devices
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Content;
