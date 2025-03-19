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
            title: "Our Services",
            items: [
              {
                title: "",
                items: [
                  { name: "Professional Services", id: "Professional" },
                  { name: "OEM", id: "OEM" },
                  { name: "Hardware", id: "Hardware" },
                  { name: "Software", id: "Software" },
                ],
              },
            ],
          },
          {
            title: "Our Products",
            items: [
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
                title: "Software",
                items: [
                  { name: "Rubix CE", link: "/software-rubix-platform/" },
                ],
              },
            ],
          },
          {
            title: "  ",
            items: [
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
                title: "Connectivity",
                items: [{ name: "Nube iO Cloud", link: "/connectivity/" }],
              },
              {
                title: "Expansion Modules",
                items: [{ name: "Rubix Connect", link: "/rubix-connect-lw/" }],
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
        image: "https://shadcnblocks.com/images/block/placeholder-1.svg",
        links: [
          {
            title: "Case Studies",
            items: [
              {
                title: "",
                items: [
                  { name: "Case Studies 1", link: "/case-study/" },
                  { name: "Case Studies 2", link: "/" },
                  { name: "Case Studies 3", link: "/" },
                  { name: "Case Studies 4", link: "/" },
                ],
              },
            ],
          },
          {
            title: " ",
            items: [
              {
                title: " Manuals & Support Articles",
                items: [
                  { name: "TM&Support 1", link: "/" },
                  { name: "TM&Support 2", link: "/" },
                  { name: "TM&Support 3", link: "/" },
                ],
              },
            ],
          },
          {
            title: "FAQs",
            items: [
              {
                title: "",
                items: [
                  {
                    name: "FAQs1",
                    link: "/",
                  },
                  {
                    name: "FAQs2",
                    link: "/",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    gridCols: 3,
  },
];
