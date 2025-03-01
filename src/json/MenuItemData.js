/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
export const menuItemsData = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    subMenu: [
      {
        title: "Products",
        image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
        links: [
          {
            title: "Controllers",
            items: [
              { name: "Rubix Compute", link: "/rubix-compute/" },
              { name: "Rubix-Compute-Mini", link: "/rubix-compute-mini/" },
              { name: "Rubix iO 16", link: "/rubix-io/" },
              { name: "Niagara N4", link: "/edge/" },
            ],
          },
          {
            title: "LoRa",
            items: [
              {
                name: "Droplet Indoor Sensor",
                link: "/lora-environmental-sensor/",
              },
              {
                name: "MicroEdge Asset Monitoring Sensor",
                link: "/lora-asset-monitoring-sensor/",
              },
            ],
          },
          {
            title: "Software",
            items: [{ name: "Rubix CE", link: "/products/software/rubix-ce" }],
          },
          {
            title: "Connectivity",
            items: [
              {
                name: "Nube iO Cloud",
                link: "/products/connectivity/nube-io-cloud",
              },
            ],
          },
          {
            title: "Expansion Modules",
            items: [
              {
                name: "Rubix Conect",
                link: "/products/expansion-modules/rubix-conect",
              },
            ],
          },
        ],
      },
    ],
    gridCols: 2,
  },
  {
    name: "Knowledge Base",
    subMenu: [
      {
        title: "Knowledge Base",
        image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
        description:
          "Find manuals and support articles to help you solve your questions.",
        name: "Manuals And Support Articles",
        link: "/knowledge-base/manuals-support",
        linkText: "Manuals And Support Articles",
      },
    ],
    gridCols: 1,
  },
  {
    name: "Solutions",
    subMenu: [
      {
        title: "Solutions",
        image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
        description: "Discover our innovative solutions for various needs.",
        links: [
          {
            name: "BMS Data Integration",
            link: "/solutions/bms-data-integration",
          },
          {
            name: "Building HVAC Controls",
            link: "/solutions/building-hvac-controls",
          },
          {
            name: "IoT Utility Monitoring",
            link: "/solutions/iot-utility-monitoring",
          },
          {
            name: "IoT Environmental Monitoring",
            link: "/solutions/iot-environmental-monitoring",
          },
        ],
      },
    ],
    gridCols: 2,
  },
  {
    name: "Our Customer",
    link: "/our-customer",
  },
  {
    name: "About",
    link: "/about/",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];
