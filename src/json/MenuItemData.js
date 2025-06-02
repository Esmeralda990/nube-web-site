/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */

// Icons Menu
import icons1 from "../assets/images/IconsMenu/ProfessionalServices.svg";
import icons2 from "../assets/images/IconsMenu/OEM.svg";
import icons3 from "../assets/images/IconsMenu/Hardware.svg";
import icons4 from "../assets/images/IconsMenu/Software.svg";
import icons6 from "../assets/images/IconsMenu/CaseScenario.svg";
import icons15 from "../assets/images/IconsMenu/Support.svg";
import icons16 from "../assets/images/IconsMenu/FAQS.svg";

export const menuItemsData = [
  {
    name: "Our Story",
    link: "/our-story/",
  },
  {
    name: "Solutions",
    link: "/solutions/",
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
                    id: "Software",
                    icon: icons4,
                    description: "Intelligent IoT system",
                  },
                  {
                    name: "Hardware",
                    id: "Hardware",
                    icon: icons3,
                    description: "IoT control equipment",
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
                    id: "OEM",
                    icon: icons2,
                    description: "Custom integration ",
                  },
                  {
                    name: "Professional Services",
                    id: "Professional",
                    icon: icons1,
                    description: "Support and consulting",
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
                    link: "/case-fujitsu/",
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
                    icon: icons16,
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
                    icon: icons15,
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
];
