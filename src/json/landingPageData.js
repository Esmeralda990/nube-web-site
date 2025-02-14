/* eslint-disable import/extensions */
/* eslint-disable object-curly-newline */

// Services Img Imports
import Sofware from "../assets/images/Services/Sofftware.png";
import OEM from "../assets/images/Services/OEM.png";
import Professional from "../assets/images/Services/Professsional.png";
import Hardware from "../assets/images/Services/Hardware.png";

// Logos
import logo1 from "../assets/images/Logos/Schneider1.svg";
import Logo2 from "../assets/images/Logos/Westpac2.svg";
import Logo3 from "../assets/images/Logos/Qantas3.svg";
import Logo4 from "../assets/images/Logos/Fujitsu4.svg";
import Logo5 from "../assets/images/Logos/Honeywell5.svg";
import Logo6 from "../assets/images/Logos/JLL6.svg";

// Slides
import slide1 from "../assets/images/PortfolioCarousel/Carousel01gif.gif";
import slide2 from "../assets/images/PortfolioCarousel/Carousel02.gif";
import slide3 from "../assets/images/PortfolioCarousel/Carousel03.gif";

// Icons connect1
import Icons1 from "../assets/images/Icons/API.png";
import Icons2 from "../assets/images/Icons/BuildingCompliace.png";
import Icons3 from "../assets/images/Icons/DataAlerts.png";
import Icons4 from "../assets/images/Icons/Energy.png";
import Icons5 from "../assets/images/Icons/PeopleCouting.png";
import Icons6 from "../assets/images/Icons/PhoneApp.png";
import Icons7 from "../assets/images/Icons/RemoteBuilding Monitoring.png";
import Icons8 from "../assets/images/Icons/Iconslogo1.png";
import Icons9 from "../assets/images/Icons/Iconslogo2.png";
import Icons10 from "../assets/images/Icons/Iconslogo3.png";
import Icons11 from "../assets/images/Icons/Iconslogo4.png";
import Icons12 from "../assets/images/Icons/Iconslogo5.png";
import Icons13 from "../assets/images/Icons/Iconslogo6.png";

// Icons Elements
import IconElem1 from "../assets/images/IconElem/Bot.png";
import IconElem2 from "../assets/images/IconElem/Controllers.png";
import IconElem3 from "../assets/images/IconElem/Leak.png";
import IconElem4 from "../assets/images/IconElem/Lighting.svg";
import IconElem5 from "../assets/images/IconElem/Security.png";
import IconElem8 from "../assets/images/IconElem/co2.png";
import IconElem9 from "../assets/images/IconElem/nub.png";

// Portfolio Img Imports
import Recruiting from "../assets/images/Portfolio/Recruiting.png";
import Stream from "../assets/images/Portfolio/Stream.png";
import Freelance from "../assets/images/Portfolio/Freelance.png";

// Advantages
import Technology from "../assets/images/Advantages/Tecnology.png";
import Integration from "../assets/images/Advantages/Integration.png";
import Sustainability from "../assets/images/Advantages/Sustainability.png";
import Insights from "../assets/images/Advantages/Insights.png";

// Testimonials
import Sasha from "../assets/images/Testimonials/Sasha.jpg";
import Reiner from "../assets/images/Testimonials/Reiner.jpg";
import Kruger from "../assets/images/Testimonials/Kruger.jpg";

// TeamMembers
import CEO from "../assets/images/TeamMembers/CEO.jpg";
import HRD from "../assets/images/TeamMembers/HRD.jpg";
import Finance from "../assets/images/TeamMembers/Finance.jpg";
import ProjectManager from "../assets/images/TeamMembers/Project-manager.jpg";
import Frontend1 from "../assets/images/TeamMembers/Frontend1.jpg";
import Frontend2 from "../assets/images/TeamMembers/Frontend2.jpg";
import Backend1 from "../assets/images/TeamMembers/Backend1.jpg";
import Backend2 from "../assets/images/TeamMembers/Backend2.jpg";
import Mobile1 from "../assets/images/TeamMembers/Mobile1.jpg";
import Mobile2 from "../assets/images/TeamMembers/Mobile2.jpg";
import UIUX1 from "../assets/images/TeamMembers/UIUX1.jpg";
import UIUX2 from "../assets/images/TeamMembers/UIUX2.jpg";

export const Services = [
  {
    id: "Sofware",
    title: "Software",
    imageUrl: Sofware,
    type: "",
    animation: "left",
  },
  {
    id: "OEM",
    title: "OEM ",
    imageUrl: OEM,
    animation: "right",
  },
  {
    id: "Professional",
    title: "Professional",
    imageUrl: Professional,
    type: "",
    animation: "right",
  },
  {
    id: "Hardware",
    title: "Hardware",
    imageUrl: Hardware,
    type: "",
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
    description: "logo2",
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
    description: "Logo 6",
    image: Logo6,
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

export const Portfolios = [
  {
    id: "asd1293uasdads1",
    title: "Customise OEM solution",
    imageUrl: Recruiting,
    type: "Custom Hardware and Software for OEM Partners",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15164950-Recruiting-app",
  },
  {
    id: "asd1293uhjkhkjh2",
    title: "IoT integrations",
    imageUrl: Stream,
    type: "Custom Hardware and Software for OEM Partners",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15276430-Stream",
  },
  {
    id: "asd1293uvbvcbbd3",
    title: "Building Rating Systems",
    imageUrl: Freelance,
    type: "Custom Hardware and Software for OEM Partners",
    responsibility: ["Mobile Development", "UI/UX Design"],
    credit: "https://dribbble.com/shots/15223131-Freelance-Mobile-App-Concept",
  },
];

export const Badges = [
  {
    title: "BACnet",
    icon: Icons1,
    className: "size-1",
  },
  {
    title: "Modbus",
    icon: Icons2,
    className: "size-1",
  },
  {
    title: "REST",
    icon: Icons3,
    className: "size-1",
  },
  {
    title: "MQTT",
    icon: Icons4,
    className: "size-1",
  },
  {
    title: "Serial",
    icon: Icons5,
    className: "size-1",
  },
  {
    title: "LoRa",
    icon: Icons6,
    className: "size-1",
  },
  {
    title: "LoRaWAN",
    icon: Icons7,
    className: "size-1",
  },
  {
    title: "Logo1",
    icon: Icons8,
    className: "size-1",
  },
  {
    title: "Logo2",
    icon: Icons9,
    className: "size-1",
  },
  {
    title: "logo3",
    icon: Icons10,
    className: "size-1",
  },
  {
    title: "Logo4",
    icon: Icons11,
    className: "size-1",
  },
  {
    title: "Logo5",
    icon: Icons12,
    className: "size-1",
  },
  {
    title: "Logo6",
    icon: Icons13,
    className: "size-1",
  },
];

export const IconElem = [
  {
    image: IconElem1,
    title: "",
  },
  {
    image: IconElem2,
    title: "",
  },
  {
    image: IconElem3,
    title: "",
  },
  {
    image: IconElem4,
    title: "",
  },
  {
    image: IconElem5,
    title: "",
  },
  {
    image: IconElem9,
    title: "",
  },
  {
    image: IconElem8,
    title: "",
  },
];

export const Advantages = [
  [
    {
      title: "Smart, Scalable Technology",
      description:
        "Our solutions grow with your needs, from single sites to multi-building portfolios,providing the flexibility to adapt to any challenge",
      imageUrl: Technology,
    },
    {
      title: "End-to-End Integration",
      description:
        "Nube iO seamlessly connects legacy systems with modern technology, offering advanced IoT capabilities while ensuring effortless integration with existing infrastructure.",
      imageUrl: Integration,
    },
  ],
  [
    {
      title: "Sustainability at the Core",
      description:
        "We’re committed to creating energy-efficient and environmentally responsible systems that help reduce carbon footprints and meet sustainability goals.",
      imageUrl: Sustainability,
    },
    {
      title: "Real-Time Insights",
      description: "Our advanced analytics and monitoring",
      imageUrl: Insights,
    },
  ],
];

export const Testimonials = [
  {
    id: 1,
    name: "Sasha Rose",
    company: "Owner, Surveyor Corps",
    testimoni:
      "Thanks for Racxstudio, you guys are the best! Keep up the great work!",
    imageUrl: Sasha,
  },
  {
    id: 2,
    name: "Kruger Khan",
    company: "Director, Shultan Oil",
    testimoni:
      "I just wanted to let you know that it’s been great working with Racxstudio.",
    imageUrl: Kruger,
  },
  {
    id: 3,
    name: "Reiner John",
    company: "CEO, Marley CO",
    testimoni: "Racxstudio is so great. Thank you so much for a job well done.",
    imageUrl: Reiner,
  },
];

export const TeamMembers = [
  {
    name: "Tom Fyfe",
    position: "CEO",
    imageUrl: CEO,
  },
  {
    name: "Pauline Sydney",
    position: "HRD",
    imageUrl: HRD,
  },
  {
    name: "Granger Watterson",
    position: "Finance",
    imageUrl: Finance,
  },
  {
    name: "Tom Jimmy",
    position: "Project Manager",
    imageUrl: ProjectManager,
  },
  {
    name: "Jim Hendrix",
    position: "Front-end Developer",
    imageUrl: Frontend1,
  },
  {
    name: "Calvin Max",
    position: "Front-end Developer",
    imageUrl: Frontend2,
  },
  {
    name: "Hawkins Jim",
    position: "Back-end Developer",
    imageUrl: Backend1,
  },
  {
    name: "Don Bizaro",
    position: "Back-end Developer",
    imageUrl: Backend2,
  },
  {
    name: "Bill Markinson",
    position: "Mobile Developer",
    imageUrl: Mobile1,
  },
  {
    name: "Igor Kavarov",
    position: "Mobile Developer",
    imageUrl: Mobile2,
  },
  {
    name: "Freddie Curl",
    position: "UI/UX Designer",
    imageUrl: UIUX2,
  },
  {
    name: "Monica Lovegood",
    position: "UI/UX Designer",
    imageUrl: UIUX1,
  },
];
