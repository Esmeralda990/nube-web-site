/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import SolutionImg from "../assets/images/ImgMenu/Solutions.png";
import ResourceImg from "../assets/images/ImgMenu/Resources.png";

export const menuItemsData = [
  {
    name: "About",
    link: "/about/",
  },
  {
    name: "Solutions",
    subMenu: [
      {
        image: SolutionImg,
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
                  { name: "Connectivity", link: "/connectivity/" },
                  { name: "By Case Scenario", link: "/case-study/" },
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
                  { name: "Rubix Compute Mini", link: "/rubix-compute-mini/" },
                  { name: "Rubix iO 16", link: "/rubix-io/" },
                  { name: "Niagara N4", link: "/edge/" },
                ],
              },
              {
                title: "Expansion Modules",
                items: [{ name: "Rubix Connect", link: "/rubix-connect-lw/" }],
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
                    name: "Droplet Indoor ",
                    link: "/lora-environmental-sensor/",
                  },
                  {
                    name: "MicroEdge Asset",
                    link: "/lora-asset-monitoring-sensor/",
                  },
                ],
              },
              {
                title: "Software",
                items: [
                  { name: "Rubix CE", link: "/software-rubix-platform/" },
                ],
              },
              {
                title: "Connectivity",
                items: [{ name: "Nube iO Cloud", link: "/connectivity/" }],
              },
            ],
          },
        ],
      },
    ],
    gridCols: 2,
    hasSubMenu: true,
  },
  {
    name: "Resources",
    subMenu: [
      {
        image: ResourceImg,
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
            title: "Manuals &",
            items: [
              {
                title: "Support Articles",
                items: [
                  {
                    name: "TM&Support",
                    link: "https://nubeio.github.io/rubix-ce-docs/docs/category/tutorials",
                  },
                ],
              },
            ],
          },
          {
            title: "Frequently",
            items: [
              {
                title: "Asked Questions",
                items: [
                  {
                    name: "FAQs",
                    link: "/FAQs/",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    gridCols: 3,
    hasSubMenu: true,
  },
];
