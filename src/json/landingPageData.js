/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */

// Services Img Imports
import Sofware from "../assets/images/Services/Software.webp";
import OEM from "../assets/images/Services/OEM.webp";
import Professional from "../assets/images/Services/Professional.webp";
import Hardware from "../assets/images/Services/Hardware.webp";

// Logos
import logo1 from "../assets/images/Logos/7.svg";
import Logo2 from "../assets/images/Logos/Fujitsu.svg";
import Logo3 from "../assets/images/Logos/Mc.svg";
import Logo4 from "../assets/images/Logos/Qantas.svg";
import Logo5 from "../assets/images/Logos/Schneider.svg";
import Logo6 from "../assets/images/Logos/Sydney.svg";
import Logo7 from "../assets/images/Logos/VictoriaState.svg";
import Logo8 from "../assets/images/Logos/Westpac.svg";

// Slides
import slide1 from "../assets/animaciones/C1.json";
import slide2 from "../assets/animaciones/C2.json";
import slide3 from "../assets/animaciones/C3.json";

// AdvangeAbout
import Company from "../assets/images/AdvangesAbout/Company.svg";
import Growth from "../assets/images/AdvangesAbout/Global.svg";
import Excellence from "../assets/images/AdvangesAbout/Innovationt.svg";
import Solutions from "../assets/images/AdvangesAbout/Future.svg";
import IconsCom from "../assets/images/AdvangesAbout/IconsCom.png";
import IconsGro from "../assets/images/AdvangesAbout/ IconsGro.png";
import IconsExc from "../assets/images/AdvangesAbout/ IconsCom.png";
import IconsSol from "../assets/images/AdvangesAbout/GroupExc.png";

// Service Solutions
import Client from "../assets/images/ServiceSolutions/Client.webp";
import Establish from "../assets/images/ServiceSolutions/Asset.webp";
import Management from "../assets/images/ServiceSolutions/Establish.webp";
import Energy from "../assets/images/ServiceSolutions/Energy.png";

// Managers
import CEOT from "../assets/images/Team/TomFyfe.png";
import CTO from "../assets/images/Team/Aidan.png";
import COO from "../assets/images/Team/Matthew.png";
import IOT from "../assets/images/Team/Jonathan.png";
import CFO from "../assets/images/Team/Jonkane.png";

// solution Feature
import RubixSolu from "../assets/images/ImgFooter/RubixCompute.svg";
import Rubix16Solu from "../assets/images/ImgFooter/Rubix_io_16.svg";
import ExpansionSolu from "../assets/images/ImgFooter/Rubix_Connect.svg";

// Floatings Icons
import Floatings1 from "../assets/images/IconsTeam/01.svg";
import Floatings2 from "../assets/images/IconsTeam/02.svg";
import Floatings3 from "../assets/images/IconsTeam/03.svg";
import Floatings4 from "../assets/images/IconsTeam/04.svg";
import Floatings5 from "../assets/images/IconsTeam/05.svg";
import Floatings6 from "../assets/images/IconsTeam/06.svg";
import Floatings7 from "../assets/images/IconsTeam/07.svg";
import Floatings8 from "../assets/images/IconsTeam/08.svg";
import Floatings9 from "../assets/images/IconsTeam/09.svg";
import Floatings10 from "../assets/images/IconsTeam/10.svg";

// WorldSolutions
import WorldSolutions1 from "../assets/images/WorldSolutions/Customise.webp";
import WorldSolutions2 from "../assets/images/WorldSolutions/IoT.webp";
import WorldSolutions3 from "../assets/images/WorldSolutions/Building.webp";

// AdvangeOEM Solutions
import Labelling from "../assets/images/AdvantageSolutionOEM/Labelling.webp";
import Custom from "../assets/images/AdvantageSolutionOEM/Custom.webp";
import Leveraging from "../assets/images/AdvantageSolutionOEM/Leveraging.webp";
import Support from "../assets/images/AdvantageSolutionOEM/Support.webp";

// OurStory
import IconsOur1 from "../assets/images/OurStory/Enviro1.svg";
import IconsOur2 from "../assets/images/OurStory/NubeiO2.svg";
import IconsOur3 from "../assets/images/OurStory/Software3svg.svg";
import IconsOur4 from "../assets/images/OurStory/Edge4.svg";
import IconsOur5 from "../assets/images/OurStory/RubixWires5.svg";
import IconsOur6 from "../assets/images/OurStory/NubeiOCloud6.svg";
import IconsOur7 from "../assets/images/OurStory/Hardwaresupport7.svg";
import IconsOur8 from "../assets/images/OurStory/RubixCompute8.svg";
import IconsOur9 from "../assets/images/OurStory/RubixWires9.svg";
import IconsOur10 from "../assets/images/OurStory/NubeiOMobile10.svg";
import IconsOur11 from "../assets/images/OurStory/Partnership11.svg";
import IconsOur12 from "../assets/images/OurStory/SoutheastAsia12.svg";
import IconsOur13 from "../assets/images/OurStory/ZoneControl13.svg";

// Who Support
import Who1 from "../assets/images/WhoSupport/Dedicated.png";
import Who2 from "../assets/images/WhoSupport/Technical.png";
import Who3 from "../assets/images/WhoSupport/Marketing.png";
import Who4 from "../assets/images/WhoSupport/Continuous.png";

// Why Partners
import Why1 from "../assets/images/WhyPartners/Client.svg";
import Why2 from "../assets/images/WhyPartners/Collaborative2.svg";
import Why3 from "../assets/images/WhyPartners/Innovation3.svg";
import Why4 from "../assets/images/WhyPartners/Sustainability4.svg";

export const Services = [
  {
    id: "Software",
    title: "Software",
    imageUrl: Sofware,
    type: "Desktop, Licence-Free BMS Programming Software with real-time analytics and intuitive control.",
    animation: "left",
  },
  {
    id: "Hardware",
    title: "Hardware",
    imageUrl: Hardware,
    type: "Reliable, scalable devices designed for seamless integration and intelligent automation.",
    animation: "right",
  },
  {
    id: "Professional",
    title: "Professional Services",
    imageUrl: Professional,
    type: "Expert support, analytics, and insights to optimise your operational performance.",
    animation: "right",
  },
  {
    id: "OEM",
    title: "OEM ",
    imageUrl: OEM,
    type: "Fully customisable software and hardware solutions tailored specifically to your brand needs.",
    animation: "right",
  },
];

export const Logos = [
  {
    id: "Logo1",
    description: "Logo1",
    image: logo1,
    className: "h-1 w-1 ",
  },
  {
    id: "Logo2",
    description: "Logo2",
    image: Logo2,
    className: "h-1 w-1",
  },
  {
    id: "Logo3",
    description: "logo3",
    image: Logo3,
    className: "h-1 w-1",
  },
  {
    id: "Logo4",
    description: "logo4",
    image: Logo4,
    className: "h-1 w-1",
  },
  {
    id: "Logo5",
    description: "logo5",
    image: Logo5,
    className: "h-1 w-1",
  },
  {
    id: "Logo6",
    description: "Logo6",
    image: Logo6,
    className: "h-1 w-1",
  },
  {
    id: "Logo7",
    description: "logo7",
    image: Logo7,
    className: "h-1 w-1",
  },
  {
    id: "Logo8",
    description: "Logo8",
    image: Logo8,
    className: "h-1 w-1",
  },
];

export const Slides = [
  {
    id: "slide-1",
    image: slide1,
    title: "Building Smarter, Thinking Forward",
    Subtitles: "The power to predict, adapt, and optimise",
    description:
      "Stay ahead with technology that anticipates changes in energy demand, system performance, and environmental conditions before they happen.",
  },
  {
    id: "slide-2",
    image: slide2,
    title: "Building Smarter, Thinking Forward",
    Subtitles: "The power to predict, adapt, and optimise",
    description:
      "Stay ahead with technology that anticipates changes in energy demand, system performance, and environmental conditions before they happen.",
  },
  {
    id: "slide-3",
    image: slide3,
    title: "Building Smarter, Thinking Forward",
    Subtitles: "The power to predict, adapt, and optimise",
    description:
      "Stay ahead with technology that anticipates changes in energy demand, system performance, and environmental conditions before they happen.",
  },
];

export const WorldSolutions = [
  {
    id: "1",
    title: "Customise OEM solution",
    imageUrl: WorldSolutions1,
    description: "Accelerate innovation with integrated OEM solutions.",
    link: "/case-oem/",
  },
  {
    id: "2",
    title: "IoT integrations",
    imageUrl: WorldSolutions2,
    description: "Transform building data into actionable insights",
    link: "/case-analytics/",
  },
  {
    id: "3",
    title: "Building Rating Systems",
    imageUrl: WorldSolutions3,
    description: "Simplify building ratings for optimal compliance.",
    link: "/case-compliance/",
  },
];

export const Badges = [
  {
    title: "BACnet®",
    className: "size-1",
  },
  {
    title: "Modbus",
    className: "size-1",
  },
  {
    title: "Serial",
    className: "size-1",
  },
  {
    title: "LoRa®",
    className: "size-1",
  },
  {
    title: "LoRaWAN®",
    className: "size-1",
  },
  {
    title: "Logo1",
    className: "size-1",
  },
  {
    title: "Protocol Agnostic",
    className: "size-1",
  },
  {
    title: "Remote Access",
    className: "size-1",
  },
  {
    title: "Real-Time Insights",
    className: "size-1",
  },
  {
    title: "Multi-Site Control",
    className: "size-1",
  },
  {
    title: "AI + Analytics Ready",
    className: "size-1",
  },
];

export const AdvantageAbout = [
  [
    {
      image: Company,
      logo: IconsCom,
      title: "Company Overview",
      description:
        "Nube iO is an Australian technology company transforming building automation with simple, open, and scalable solutions.",
    },
    {
      title: "Global Reach & Growth",
      description:
        "From Australia to Southeast Asia, our global development team powers innovation across time zones to support smart building ecosystems",
      logo: IconsGro,
      image: Growth,
    },
    {
      title: "Innovation & Impact",
      description:
        "We combine intelligent hardware, flexible software, and cloud automation to drive performance, energy efficiency, and long-term value.",
      logo: IconsExc,
      image: Excellence,
    },
    {
      title: "Future-Ready Technology",
      description:
        "Our platform integrates with existing systems, enabling real-time control, advanced analytics, and future-proof infrastructure for every building.Updated ",
      logo: IconsSol,
      image: Solutions,
    },
  ],
];

export const OurStoryD = [
  [
    {
      id: 0,
      title: "Enviro Building Services Founded",
      description:
        "Foundation laid for future innovation in building services and facility optimisation.",
      date: "2009",
      icon: IconsOur1,
    },
    {
      id: 1,
      title: "Nube iO Begins Operations",
      description:
        "Launched with a mission to simplify building automation through advanced IoT and software solutions.",
      date: "2016",
      icon: IconsOur2,
    },
    {
      id: 2,
      title: "Global Software Support Established",
      date: "2017",
      description:
        "Development teams set up across time zones to provide continuous innovation and support.",
      icon: IconsOur3,
    },
    {
      id: 3,
      title: "First Hardware Release – Edge Gateway & Droplet Sensors",
      date: "2017",
      description:
        "Released initial IoT hardware devices enabling multi-site data collection and edge processing.",
      icon: IconsOur4,
    },
    {
      id: 4,
      title: "Rubix Wires Programming Software (v1.0)",
      date: "2018",
      description:
        "Introduced low-code configuration tool for seamless device programming and logic control.",
      icon: IconsOur5,
    },
    {
      id: 5,
      title: "Nube iO Cloud Platform Launched",
      date: "2018",
      description:
        "Released secure, scalable cloud infrastructure for remote monitoring and control.",
      icon: IconsOur6,
    },
    {
      id: 6,
      title: "Expanded Global Support – Dual Time Zones",
      date: "2020",
      description:
        "Scaled customer and technical support to operate effectively across Asia-Pacific and global regions.",
      icon: IconsOur7,
    },
    {
      id: 7,
      title: "Rubix Compute Gateway & iO16 Controller Released",
      date: "2020",
      description:
        "Launched key IoT edge devices, enabling integrated control and monitoring for BMS.",
      icon: IconsOur8,
    },
    {
      id: 8,
      title: "Rubix Wires Programming 2.0 Released",
      date: "2023",
      description:
        "Enhanced UI/UX and logic capabilities for system integrators and developers.",
      icon: IconsOur9,
    },
    {
      id: 9,
      title: "Nube iO Mobile App Launched",
      date: "2023",
      description:
        "Brought real-time BMS control and monitoring to mobile devices.",
      icon: IconsOur10,
    },
    {
      id: 10,
      title: "Partnership with Fujitsu General Australia",
      date: "2024",
      description:
        "Collaborated on HVAC control solutions as part of an OEM integration strategy.",
      icon: IconsOur11,
    },
    {
      id: 11,
      title: "APC Design Centre Opened – Vietnam",
      date: "2025",
      description:
        "Launched a regional design hub to support APAC growth, custom solutions, and partner integration.",
      icon: IconsOur12,
    },
    {
      id: 12,
      title: "Smart Home Solution Launched",
      date: "2025",
      description:
        "Introduced intelligent control technology for residential HVAC and energy automation..",
      icon: IconsOur13,
    },
  ],
];

export const ServiceSolutions = [
  {
    id: "Client",
    title: "Client Solutions",
    imageUrl: Client,
    type: "",
    animation: "left",
  },
  {
    id: "Establish",
    title: "Client Solutions",
    imageUrl: Establish,
    animation: "right",
  },
  {
    id: "Management",
    title: "Sales & Marketing",
    imageUrl: Management,
    type: "",
    animation: "right",
  },
  {
    id: "Energy",
    title: "Energy Analytics",
    imageUrl: Energy,
    type: "",
    animation: "right",
  },
];

export const Managers = [
  {
    id: "person-1",
    name: "Tom Fyfe",
    role: "CEO",
    description:
      "Experienced leader driving growth and innovation across manufacturing and PropTech.",
    imageUrl: CEOT,
    linkedinUrl: "https://au.linkedin.com/in/tom-fyfe-8352aa51",
  },
  {
    id: "person-2",
    name: "Aidan Pickard",
    role: "CTO & Co-Founder",
    description:
      "HVAC & Automation Expert | 15+ Years Driving Smart Building Innovation",
    imageUrl: CTO,
    linkedinUrl: "https://www.linkedin.com/in/aidan-pickard-b4689643/",
  },
  {
    id: "person-3",
    name: "Matthew Cady",
    role: "COO & Co-Founder",
    description:
      "Entrepreneurial finance expert managing operations, budgets, and key alliances",
    imageUrl: COO,
    linkedinUrl: "https://www.linkedin.com/in/matt-cady-75596410b/",
  },
  {
    id: "person-4",
    name: "Jonathan Hill",
    role: "General Manager",
    description:
      "Experienced manager leading operations, strategy, and successful project delivery.",
    imageUrl: IOT,
    linkedinUrl: "https://www.linkedin.com/in/jonathan-hill-6775b187/",
  },
  {
    id: "person-5",
    name: "Jon Kane",
    role: "C.F.O",
    description:
      "Experienced finance leader in growth businesses across FMCG & manufacturing.",
    imageUrl: CFO,
    linkedinUrl: "https://www.linkedin.com/in/jon-kane-4564363/",
  },
];

export const floatingIcons = [
  // Left Floating Icons
  {
    position: "left",
    offset: "15vw",
    top: "0vh",
    src: Floatings1,
  },
  {
    position: "left",
    offset: "5vw",
    top: "10vh",
    src: Floatings2,
  },
  {
    position: "left",
    offset: "18vw",
    top: "20vh",
    src: Floatings3,
  },
  {
    position: "left",
    offset: "10vw",
    top: "30vh",
    src: Floatings4,
  },
  {
    position: "left",
    offset: "2vw",
    top: "40vh",
    src: Floatings5,
  },

  // Right Floating Icons
  {
    position: "right",
    offset: "15vw",
    top: "0vh",
    src: Floatings6,
  },
  {
    position: "right",
    offset: "5vw",
    top: "10vh",
    src: Floatings7,
  },
  {
    position: "right",
    offset: "18vw",
    top: "20vh",
    src: Floatings8,
  },
  {
    position: "right",
    offset: "10vw",
    top: "30vh",
    src: Floatings9,
  },
  {
    position: "right",
    offset: "2vw",
    top: "40vh",
    src: Floatings10,
  },
];

export const Solutionsfeature = [
  {
    id: "feature-1",
    title: "Rubix Compute",
    description:
      "Edge Controller for real-time automation, data processing, and multi-protocol integration in smart building environments.",
    image: RubixSolu,
    link: "/rubix-compute/",
  },
  {
    id: "feature-2",
    title: "Rubix iO 16",
    description:
      "Compact I/O Module for scalable sensor and actuator control across HVAC, lighting, and building systems.",
    image: Rubix16Solu,
    link: "/rubix-io-16/",
  },
  {
    id: "feature-3",
    title: "LoRa® Sensors",
    description:
      "Wireless LoRaWAN® Sensors for long-range, battery-powered monitoring of temperature, humidity, and indoor air quality.",
    image: IconsOur4,
    link: "/Lora/",
  },
  {
    id: "feature-4",
    title: "Expansion Modules",
    description:
      "Modular Add-ons that extend Rubix controller capabilities with additional inputs, outputs, and communication features.",
    image: ExpansionSolu,
    link: "/rubix-connect-lw/",
  },
];

export const AdvantageSolutions = [
  [
    {
      title: "White Labelling",
      description:
        "Custom-branded interfaces and hardware that let your product shine—with Nube iO behind the scenes.",
      imageUrl: Labelling,
    },
    {
      title: "Scalable Commercial Models",
      description:
        "Flexible licencing and deployment strategies tailored to your business growth.",
      imageUrl: Custom,
    },
  ],
  [
    {
      title: "Embedded Integration",
      description:
        "Seamlessly embed Rubix devices and software into your existing platforms and product ecosystem.",
      imageUrl: Leveraging,
    },
    {
      title: "Onboarding Enablement",
      description:
        "Partner toolkits, documentation, and training to get your team up and running—fast.",
      imageUrl: Support,
    },
  ],
];

export const WhoSupport = [
  {
    id: "1",
    title: "Dedicated Collaboration",
    image: Who1,
    description:
      "Our team is committed to providing dedicated support, working closely with partners through every stage of project implementation.",
  },
  {
    id: "2",
    title: "Technical Expertise",
    image: Who2,
    description:
      " Partners have direct access to our expert technical teams, ensuring seamless integration and maximised efficiency of solutions.",
  },
  {
    id: "3",
    title: "Marketing and Support",
    image: Who3,
    description:
      "We offer co-marketing opportunities, joint sales initiatives, and strategic positioning to enhance visibility and drive mutual growth.",
  },
  {
    id: "4",
    title: "Continuous Training",
    image: Who4,
    description:
      "Regular training sessions and educational resources are available to empower partners with the latest knowledge and best practices.",
  },
];

export const WhyData = [
  [
    {
      id: "phase1",
      heading: "Innovation",
      title: "Innovation Driven",
      description:
        "We design with purpose, delivering solutions that push the boundaries of smart building automation.",
      image: Why1,
    },
    {
      id: "phase2",
      heading: "Sustainability",
      title: "Sustainability Focused",
      description:
        "Our technology helps partners achieve energy efficiency and long-term environmental goals.",
      image: Why2,
    },
    {
      id: "phase3",
      heading: "User-centric",
      title: "Client-Centric Approach",
      description:
        "We tailor our offerings to meet your project needs and customer expectations.",
      image: Why3,
    },
    {
      id: "phase4",
      heading: "Co-market",
      title: "Collaborative Market Approach",
      description:
        "We actively support our partners in winning business through co-marketing and tailored support.",
      image: Why4,
    },
  ],
];
