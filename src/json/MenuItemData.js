/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */

// Icons Menu
import icons1 from "../assets/images/IconsMenu/ProfessionalServices.svg";
import icons2 from "../assets/images/IconsMenu/OEMicon.svg";
import icons3 from "../assets/images/IconsMenu/Hardwareicon.svg";
import icons4 from "../assets/images/IconsMenu/Softwareicon.svg";
import icons6 from "../assets/images/IconsMenu/CaseScenario.svg";
import icons7 from "../assets/images/IconsMenu/Supporticon.svg";
import icons8 from "../assets/images/IconsMenu/FAQS.svg";

export const menuItemsData = [
  {
    name: "Solutions",
    subMenu: [
      {
        links: [
          {
            title: "",
            items: [
              {
                title: "Our Solutions",
                items: [
                  {
                    name: "Software",
                    link: "/software/",
                    icon: icons4,
                    description: "Intuitive interfaces",
                  },
                  {
                    name: "Hardware",
                    link: "/hardware/",
                    icon: icons3,
                    description: "Connected devices",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "",
                items: [
                  {
                    name: "OEM",
                    link: "/oem/",
                    icon: icons2,
                    description: "Technology Tailored for Partners",
                  },
                  {
                    name: "Professional Services",
                    link: "/professional/",
                    icon: icons1,
                    description: "Engineering, Support, and Delivery",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "",
                items: [
                  {
                    name: "",
                    link: "",
                    description: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    gridCols: 1,
    hasSubMenu: true,
  },
  {
    name: "Partners",
    link: "/partners/",
  },
  {
    name: "Resources",
    subMenu: [
      {
        links: [
          {
            title: "",
            items: [
              {
                title: "Our Resources",
                items: [
                  {
                    name: "Case studies",
                    link: "/cases/",
                    icon: icons6,
                    description: "Learn More",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "",
                items: [
                  {
                    name: "FAQs",
                    link: "/faqs/",
                    icon: icons8,
                    description: "Common IoT Answers",
                  },
                ],
              },
            ],
          },

          {
            title: "",
            items: [
              {
                title: "",
                items: [
                  {
                    name: "Technical Resources",
                    link: "https://nubeio.github.io/rubix-ce-docs/docs/category/tutorials",
                    icon: icons7,
                    description: "Manuals and support",
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
  {
    name: "About Us",
    link: "/our-story/",
  },
];
