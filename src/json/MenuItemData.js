/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import ResourceImg from "../assets/images/ImgMenu/Resources.webp";
import PartnersImg from "../assets/images/ImgMenu/Partner.webp";
import SolutionsImg from "../assets/images/ImgMenu/Solutions.webp";
import ProductsImg from "../assets/images/ImgMenu/Products.webp";

// Icons Menu
import icons1 from "../assets/images/IconsMenu/ProfessionalServices.svg";
import icons2 from "../assets/images/IconsMenu/OEM.svg";
import icons3 from "../assets/images/IconsMenu/Hardware.svg";
import icons4 from "../assets/images/IconsMenu/Software.svg";
import icons5 from "../assets/images/IconsMenu/Connectivity.svg";
import icons6 from "../assets/images/IconsMenu/CaseScenario.svg";
import icons7 from "../assets/images/IconsMenu/RubixCE.svg";
import icons8 from "../assets/images/IconsMenu/NubeCloud.svg";
import icons9 from "../assets/images/IconsMenu/RubixCompute.svg";
import icons10 from "../assets/images/IconsMenu/Rubix16.svg";
import icons11 from "../assets/images/IconsMenu/Niagara.svg";
import icons12 from "../assets/images/IconsMenu/Droplet.svg";
import icons13 from "../assets/images/IconsMenu/MicroEdge.svg";
import icons14 from "../assets/images/IconsMenu/Expansion.svg";
import icons15 from "../assets/images/IconsMenu/Support.svg";
import icons16 from "../assets/images/IconsMenu/FAQS.svg";
import icons17 from "../assets/images/IconsMenu/WhyPartners.svg";
import icons18 from "../assets/images/IconsMenu/Supportwhy.svg";
import icons19 from "../assets/images/IconsMenu/Contact.svg";

export const menuItemsData = [
  {
    name: "Our Story",
    link: "/ourstory/",
  },
  {
    name: "Solutions",
    subMenu: [
      {
        image: SolutionsImg,
        links: [
          {
            title: "",
            items: [
              {
                title: "Our solutions",
                items: [
                  {
                    name: "Professional Services",
                    id: "Professional",
                    icon: icons1,
                    description: "Support and consulting",
                  },

                  {
                    name: "OEM",
                    id: "OEM",
                    icon: icons2,
                    description: "Custom integration ",
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
                title: "Our solutions",
                items: [
                  {
                    name: "Software",
                    id: "Software",
                    icon: icons4,
                    description: "Intelligent IoT system",
                  },
                  {
                    name: "Connectivity",
                    link: "/connectivity/",
                    icon: icons5,
                    description: "Connecting devices",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "Case scenarios",
                items: [
                  {
                    name: "By case scenarios 1",
                    link: "/scenario1-integration/",
                    icon: icons6,
                    description: "Smart Analytics",
                  },
                  {
                    name: "By case scenarios 2",
                    link: "/scenario2-oem/",
                    icon: icons6,
                    description: "OEM Integration",
                  },
                  {
                    name: "By case scenarios 3",
                    link: "/scenario3-building/",
                    icon: icons6,
                    description: "Simplify building",
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
    name: "Products",
    subMenu: [
      {
        image: ProductsImg,
        links: [
          {
            title: "",
            items: [
              {
                title: "Software",
                items: [
                  {
                    name: "Rubix CE",
                    link: "/software-rubix-platform/",
                    icon: icons7,
                    description: "Web IoT platform",
                  },
                  {
                    name: "Nube iO Cloud",
                    link: "/connectivity/",
                    icon: icons8,
                    description: "Remote cloud management",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "Controllers",
                items: [
                  {
                    name: "Rubix Compute",
                    link: "/rubix-compute/",
                    icon: icons9,
                    description: "Central controller",
                  },
                  {
                    name: "Rubix iO 16",
                    link: "/rubix-io/",
                    icon: icons10,
                    description: "Input/output module",
                  },
                  {
                    name: "CI-EdgeX2",
                    link: "/edge/",
                    icon: icons11,
                    description: "Edge gateway",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "LoRa",
                items: [
                  {
                    name: "Droplet Indoor ",
                    link: "/lora-environmental-sensor/",
                    icon: icons12,
                    description: "LoRa indoor sensor",
                  },
                  {
                    name: "MicroEdge Asset",
                    link: "/lora-asset-monitoring-sensor/",
                    icon: icons13,
                    description: "Tracking via LoRa",
                  },
                ],
              },
              {
                title: "Expansion Modules",
                items: [
                  {
                    name: "Rubix Connect",
                    link: "/rubix-connect-lw/",
                    icon: icons14,
                    description: "IoT Expansion Module ",
                  },
                ],
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
    name: "Partners",
    subMenu: [
      {
        type: "featured",
        image: PartnersImg,
        title: "Work With Us",
        description:
          "Partner with Nube iO and leverage our dedicated support, technical expertise, and collaborative growth opportunities to achieve shared innovation and sustainable success.",
        name: "Lear More",
        link: "/partners/",
        items: [
          {
            name: "Why Partner",
            id: "Why",
            icon: icons17,
            description: "Alliance with purpose",
          },
          {
            name: "Support",
            id: "Support",
            icon: icons18,
            description: "Specialized assistance",
          },
          {
            name: "Contact",
            id: "Hardware",
            icon: icons19,
            description: "Contact us today",
          },
        ],
      },
    ],
    gridCols: 3,
  },
  {
    name: "Resources",
    subMenu: [
      {
        image: ResourceImg,
        links: [
          {
            title: "",
            items: [
              {
                title: "Case Studies",
                items: [
                  {
                    name: "Case Studies 1",
                    link: "/case-study1/",
                    icon: icons6,
                    description: "Fujitsu General–AnywAIR iO",
                  },
                  {
                    name: "Case Studies 2",
                    link: "/case-study2/",
                    icon: icons6,
                    description: "Galvin TMV ",
                  },
                  {
                    name: "Case Studies 3",
                    link: "/case-study3/",
                    icon: icons6,
                    description: "Enviro",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "Case Studies",
                items: [
                  {
                    name: "Case Studies 4",
                    link: "/case-study4/",
                    icon: icons6,
                    description: "Victorian Schools",
                  },

                  {
                    name: "Case Studies 5",
                    link: "/case-study5/",
                    icon: icons6,
                    description: "Daikin ",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "Frequently Asked ",
                items: [
                  {
                    name: "FAQs",
                    link: "/FAQs/",
                    icon: icons16,
                    description: "Common IoT Answers",
                  },
                ],
              },
              {
                title: "Manuals & Support Articles",
                items: [
                  {
                    name: "TM&Support",
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
