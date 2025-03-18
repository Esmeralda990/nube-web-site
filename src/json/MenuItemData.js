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
    name: "About",
    link: "/about/",
  },
  {
    name: "Solutions",
    subMenu: [
      {
        image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
        links: [
          {
            title: "Our services",
            items: [
              { name: "Professional Services", link: "/solutions/" },
              { name: "OEM", link: "/solutions/" },
              { name: "Hardware", link: "/solutions/" },
              { name: "Software", link: "/solutions/" },
            ],
          },
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
            items: [{ name: "Rubix CE", link: "/software-rubix-platform/" }],
          },
          {
            title: "Connectivity",
            items: [
              {
                name: "Nube iO Cloud",
                link: "/connectivity/",
              },
            ],
          },
          {
            title: "Expansion Modules",
            items: [
              {
                name: "Rubix Conect",
                link: "/rubix-connect-lw/",
              },
            ],
          },
        ],
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenu: [
      {
        title: "Resources",
        image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
        description:
          "Real results and valuable insights for your building management journey.",
        name: "Case Study",
        link: "/case-study/",
        linkText: "Case Study",
      },
    ],
    gridCols: 1,
  },
];
