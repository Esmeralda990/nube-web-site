/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
import ResourceImg from "../assets/images/ImgMenu/Resources.png";
import icons from "../assets/images/IconsMenu/icons.png";

export const menuItemsData = [
  {
    name: "Our Story",
    link: "/about/",
  },
  {
    name: "Solutions",
    subMenu: [
      {
        image: ResourceImg,
        links: [
          {
            title: "",
            items: [
              {
                title: "Our services",
                items: [
                  {
                    name: "Professional Services",
                    id: "Professional",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },

                  {
                    name: "OEM",
                    id: "OEM",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                  {
                    name: "Hardware",
                    id: "Hardware",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "Our services",
                items: [
                  {
                    name: "Software",
                    id: "Software",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                  {
                    name: "Connectivity",
                    link: "/connectivity/",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                  {
                    name: "By Case Scenario",
                    link: "/case-study/",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
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
    name: "Products",
    subMenu: [
      {
        image: ResourceImg,
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
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                  {
                    name: "Nube iO Cloud",
                    link: "/connectivity/",
                    icon: icons,
                    description: "Neque porro quisquam est qui",
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
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                  {
                    name: "Rubix iO 16",
                    link: "/rubix-io/",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                  {
                    name: "CI-EdgeX2",
                    link: "/edge/",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
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
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                  {
                    name: "MicroEdge Asset",
                    link: "/lora-asset-monitoring-sensor/",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                ],
              },
              {
                title: "Expansion Modules",
                items: [
                  {
                    name: "Rubix Connect",
                    link: "/rubix-connect-lw/",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
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
        image: ResourceImg,
        title: "Work With Us",
        description:
          "Partner with Nube iO and leverage our dedicated support, technical expertise, and collaborative growth opportunities to achieve shared innovation and sustainable success.",
        name: "Lear More",
        link: "/",
      },
    ],
    gridCols: 2,
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
                    link: "/case-study/",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },

                  {
                    name: "Case Studies 2",
                    link: "/",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
                  },
                ],
              },
            ],
          },
          {
            title: "",
            items: [
              {
                title: "Manuals & Support Articles",
                items: [
                  {
                    name: "TM&Support",
                    link: "https://nubeio.github.io/rubix-ce-docs/docs/category/tutorials",
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
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
                    icon: icons,
                    description: "Neque porro quisquam est qui ",
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
