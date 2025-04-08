/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */

// Services Img Imports
import Sofware from "../assets/images/Services/Software.webp";
import OEM from "../assets/images/Services/OEM.webp";
import Professional from "../assets/images/Services/Professional.webp";
import Hardware from "../assets/images/Services/Hardware.webp";

// Logos
import logo1 from "../assets/images/Logos/Costco.png";
import Logo2 from "../assets/images/Logos/Fujitsu.png";
import Logo3 from "../assets/images/Logos/Honeywell.png";
import Logo4 from "../assets/images/Logos/JLL.png";
import Logo5 from "../assets/images/Logos/Schneider.png";
import Logo6 from "../assets/images/Logos/Qantas.png";
import Logo7 from "../assets/images/Logos/Mc.png";
import Logo8 from "../assets/images/Logos/Westpac.png";

// Slides
import slide1 from "../assets/images/PortfolioCarousel/Carousel1.gif";
import slide2 from "../assets/images/PortfolioCarousel/Carousel2.gif";
import slide3 from "../assets/images/PortfolioCarousel/Carousel3.gif";

// Icons connect
import Icons1 from "../assets/images/Icons/Iconslogo1.png";
import Icons2 from "../assets/images/Icons/Iconslogo2.png";
import Icons3 from "../assets/images/Icons/Iconslogo3.png";
import Icons4 from "../assets/images/Icons/Iconslogo4.png";
import Icons5 from "../assets/images/Icons/Iconslogo5.png";
import Icons6 from "../assets/images/Icons/Iconslogo6.png";

// Advantages
import Technology from "../assets/images/Advantages/Smart.webp";
import Integration from "../assets/images/Advantages/End.webp";
import Sustainability from "../assets/images/Advantages/Sustainability.webp";
import Insights from "../assets/images/Advantages/Real.webp";

// AdvangeAbout
import Company from "../assets/images/AdvangesAbout/Company.webp";
import Growth from "../assets/images/AdvangesAbout/Growthh.webp";
import Excellence from "../assets/images/AdvangesAbout/Commitment .webp";
import Solutions from "../assets/images/AdvangesAbout/Expertise.webp";

// Service Solutions
import Client from "../assets/images/ServiceSolutions/Client.webp";
import Establish from "../assets/images/ServiceSolutions/Asset.webp";
import Management from "../assets/images/ServiceSolutions/Establish.webp";

// Managers
import CEOT from "../assets/images/Team/Tom.png";
import CTO from "../assets/images/Team/AidanPickard.png";
import COO from "../assets/images/Team/MatthewCady.png";
import IOT from "../assets/images/Team/JonathanHill.png";

// solution Feature
import Controller from "../assets/images/RubixCompute/RubixC1.png";
import Lora from "../assets/images/MicroEdge/MICRO2.png";
import Expansion from "../assets/images/RubixLW/RC-LW.png";
import Iconshard1 from "../assets/images/IconsHardware/controllers.png";
import Iconshard2 from "../assets/images/IconsHardware/Lora.png";
import Iconshard3 from "../assets/images/IconsHardware/Expansion.png";

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

export const Services = [
  {
    id: "Software",
    title: "Software",
    imageUrl: Sofware,
    type: "Desktop, Licence-Free BMS Programming Software with real-time analytics and intuitive control.",
    animation: "left",
  },
  {
    id: "OEM",
    title: "OEM ",
    imageUrl: OEM,
    type: "Fully customisable software and hardware solutions tailored specifically to your brand needs.",
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
    id: "Hardware",
    title: "Hardware",
    imageUrl: Hardware,
    type: "Reliable, scalable devices designed for seamless integration and intelligent automation.",
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
    title: "The power to predict, adapt, and optimise",
    description:
      "Stay ahead with technology that anticipates changes in energy demand, system performance, and environmental conditions—before they happen.",
  },
  {
    id: "slide-2",
    image: slide2,
    title: "Total control of every connection",
    description:
      "Achieve seamless integration and visibility across devices, spaces, and systems, unified on one intuitive platform.",
  },
  {
    id: "slide-3",
    image: slide3,
    title: "Insights that drive action",
    description:
      "Reveal hidden opportunities to improve efficiency, reduce costs, and enhance building performance.",
  },
];

export const WorldSolutions = [
  {
    id: "1",
    title: "Customise OEM solution",
    imageUrl: WorldSolutions1,
    description: "Custom Hardware and Software for OEM Partners",
    link: "https://dribbble.com/shots/15164950-Recruiting-app",
  },
  {
    id: "2",
    title: "IoT integrations",
    imageUrl: WorldSolutions2,
    description: "Custom Hardware and Software for OEM Partners",
    link: "https://dribbble.com/shots/15276430-Stream",
  },
  {
    id: "3",
    title: "Building Rating Systems",
    imageUrl: WorldSolutions3,
    description: "Custom Hardware and Software for OEM Partners",
    link: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
  },
];

export const Badges = [
  {
    title: "BACnet",
    className: "size-1",
  },
  {
    title: "Modbus",
    className: "size-1",
  },
  {
    title: "REST",
    className: "size-1",
  },
  {
    title: "MQTT",
    className: "size-1",
  },
  {
    title: "Serial",
    className: "size-1",
  },
  {
    title: "LoRa",
    className: "size-1",
  },
  {
    title: "LoRaWAN",
    className: "size-1",
  },
  {
    title: "Logo1",
    icon: Icons1,
    className: "size-32",
  },
  {
    title: "Logo2",
    icon: Icons2,
    className: "size-24",
  },
  {
    title: "logo3",
    icon: Icons3,
    className: "size-16",
  },
  {
    title: "Logo4",
    icon: Icons4,
    className: "size-32",
  },
  {
    title: "Logo5",
    icon: Icons5,
    className: "size-32",
  },
  {
    title: "Logo6",
    icon: Icons6,
    className: "size-32",
  },
];

export const Advantages = [
  [
    {
      title: "Smart, Scalable Technology",
      description:
        "Our solutions grow with your needs, from single sites to multi-building portfolios,providing the flexibility to adapt to any",
      imageUrl: Technology,
    },
    {
      title: "End-to-End Integration",
      description:
        "Nube iO seamlessly connects legacy systems with modern technology, offering advanced IoT capabilities while ensuring.",
      imageUrl: Integration,
    },
  ],
  [
    {
      title: "Sustainability at the Core",
      description:
        "We’re committed to creating energy-efficient and environmentally responsible systems that help reduce carbon footprints and meet.",
      imageUrl: Sustainability,
    },
    {
      title: "Real-Time Insights",
      description:
        "Our advanced analytics and monitoring advanced analytics and monitoring advanced analytics and monitoring advanced ",
      imageUrl: Insights,
    },
  ],
];

export const AdvantageAbout = [
  [
    {
      image: Company,
      logo: Iconshard1,
      title: "Company Overview",
      description:
        "Nube iO, an Australian technology company, is transforming building automation with smart, scalable, software-driven solutions. ",
    },
    {
      title: "Growth and Sustainability ",
      description:
        "Nube iO started in Australia and has grown into a global leader in smart technology. ",
      logo: Iconshard2,
      image: Growth,
    },
  ],
  [
    {
      title: "Commitment to Excellence",
      description:
        "At Nube iO, we provide innovative technology and expert services to drive success.",
      logo: Iconshard3,
      image: Excellence,
    },
    {
      title: "Expertise in Smart Technology Solutions",
      description:
        "We specialise in intelligent infrastructure, cloud automation, and IoT connectivity, delivering customised, future-ready solutions . ",
      logo: Iconshard1,
      image: Solutions,
    },
  ],
];

export const OurStoryD = [
  [
    {
      id: 1,
      title: "Enviro Building Services",
      description:
        "Nube iO’s advanced software solutions transform complex building management into simple, actionable insights.",
      year: "2009",
      image:
        "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 2,
      title: "Nube iO Operations began",
      description:
        "Nube iO’s advanced software solutions transform complex building management into simple, actionable insights.",
      year: "2016",
      image:
        "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 3,
      title: "Software Support India/Nepal, Edge 28",
      year: "2017",
      description:
        "Nube iO’s advanced software solutions transform complex building management into simple, actionable insights.",
      image:
        "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 4,
      title: "Rubix Wires, Nube iO Cloud ",
      year: "2018",
      description:
        "Nube iO’s advanced software solutions transform complex building management into simple, actionable insights.",
      image:
        "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 5,
      title: "Hardware and Rubix Compute and iO16",
      year: "2020",
      description:
        "Nube iO’s advanced software solutions transform complex building management into simple, actionable insights.",
      image:
        "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      id: 6,
      title: "Nube iO Mobile App",
      year: "2023",
      description:
        "Nube iO’s advanced software solutions transform complex building management into simple, actionable insights.",
      image:
        "https://images.unsplash.com/photo-1653288973812-81d1951b8127?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3",
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
    title: "Establish Long-Term Compliance",
    imageUrl: Establish,
    animation: "right",
  },
  {
    id: "Management",
    title: "Asset Management",
    imageUrl: Management,
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
      "Expert developer advancing smart-building tech with 15+ years in HVAC and automation.",
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
    title: "Controllers",
    description:
      "Our state-of-the-art controllers, including Rubix Compute, Rubix IO-16, Rubix Compute Mini, and Rubix IO-24, put advanced automation at your fingertips. Designed for simplicity and scalability, these controllers seamlessly integrate diverse systems and protocols, offering real-time insights and control.",
    icon: Iconshard1,
    image: Controller,
  },
  {
    id: "feature-2",
    title: "LoRa® Sensors",
    description:
      "Our LoRa® wireless sensors, including the Droplet Indoor Sensor and MicroEdge Asset Monitoring Sensor, deliver exceptional range, reliability, and accuracy for all your automation needs. From precise environmental monitoring and real-time occupancy detection to predictive asset management, our sensors provide critical insights instantly, helping you keep spaces optimised, comfortable, and cost-efficient.",
    icon: Iconshard2,
    image: Lora,
  },
  {
    id: "feature-3",
    title: "Expansion Modules",
    description:
      "Our Rubix Connect LW expansion modules provide effortless scalability and extended functionality for your automation ecosystem. Quickly integrate additional sensors and devices, strengthen your monitoring capabilities, and unlock enhanced control—all without compromising ease of use or efficiency. Nube iO ensures that as your business grows, your technology adapts seamlessly.",
    icon: Iconshard3,
    image: Expansion,
  },
];

export const AdvantageSolutions = [
  [
    {
      title: "White Labelling",
      description:
        "Offer Nube iO products under a client’s brand, providing a cohesive brand experience.",
      imageUrl: Labelling,
    },
    {
      title: "Hardware and Software",
      description:
        "Develop tailored hardware and software solutions to meet specific client needs, offering flexibility and bespoke innovation.",
      imageUrl: Custom,
    },
  ],
  [
    {
      title: "Leveraging Our Technology",
      description:
        "Utilize Nube iO's existing technology stack to create unique products or solutions for partners, enhancing market differentiation and competitiveness.",
      imageUrl: Leveraging,
    },
    {
      title: "Support Services",
      description:
        "Provide ongoing support, training, and maintenance to ensure optimal system performance, empowering our partners to achieve operational excellence.",
      imageUrl: Support,
    },
  ],
];
