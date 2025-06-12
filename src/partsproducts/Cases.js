/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
import React, { Fragment, useEffect, useState } from "react";
import { Linkedin } from "lucide-react";
import PropTypes from "prop-types";
import bgImg from "../assets/images/ImgFooter/Fondo_Hom.svg";
import Fujitsu from "../assets/images/CaseStudy/Fujitsu_Colo.png";
import Galvin from "../assets/images/CaseStudy/Galvin_Colo.png";
import Enviro from "../assets/images/CaseStudy/Eviro_Color.png";
import Victorian from "../assets/images/CaseStudy/Victorian1.png";
import Daikin from "../assets/images/CaseStudy/Daikin_Color.png";
import Smart from "../assets/images/WorldSolutions/IoT.webp";
import OEM from "../assets/images/WorldSolutions/Customise.webp";
import Building from "../assets/images/WorldSolutions/Building.webp";

const BREADCRUMB = [
  {
    label: "Resources",
  },
  {
    label: "Case Studies",
    link: "/cases/",
  },
];

const SHARE_LINKS = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/nube-io/",
  },
];

const ARTICLE_DATE = "2025";

const Blogpost6 = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const chapterIds = [
      "Fujitsu-1",
      "Galvin-2",
      "Enviro-3",
      "Victorian-4",
      "Daikin-5",
      "Smart-1",
      "OEM-2",
      "Building-3",
    ];
    const headingElements = chapterIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.1,
      }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-32 px-4">
      <div className="relative lg:max-w-[130rem] w-full rounded-3xl overflow-hidden shadow-[0_4px_8px_rgba(0,0,0,0.4]">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImg}
            alt="Background"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-white bg-opacity-50" />
        </div>

        <div className="relative z-10 container mx-auto flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex w-full flex-col items-center justify-center gap-12">
            <div className="flex w-full max-w-[46rem] flex-col items-center justify-center gap-8">
              <BreadcrumbBlog breadcrumb={BREADCRUMB} />
              <div className="flex w-full flex-col gap-5 text-center">
                <div className="flex justify-center gap-2.5 text-sm font-bold text-theme-teal">
                  <div>{ARTICLE_DATE}</div>
                </div>
                <h1 className="text-3xl lg:text-6xl leading-[1.2] font-semibold text-theme-blue">
                  Real-World Results: Case Studies & Scenarios
                </h1>
                <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                  Explore how Nube iO&apos;s smart building solutions are
                  solving real challenges across industries. From commercial
                  offices to large-scale facilities, these case studies and
                  implementation scenarios show how we help clients connect,
                  automate, and optimise their environments.
                </p>
                <div className="flex items-center justify-center gap-2.5">
                  {SHARE_LINKS.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      className="p-2 rounded-full border bg-white hover:bg-gray-200 transition"
                    >
                      <link.icon className="w-4 h-4 text-theme-teal" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-20 mx-auto">
        <div className="mx-auto w-full max-w-5xl lg:flex lg:gap-20">
          <aside className="lg:w-1/3 lg:sticky lg:top-32 h-fit pt-8">
            <h4 className="text-base lg:text-xl font-bold text-theme-blue">
              Case Studies
            </h4>
            <div className="flex flex-col gap-2 pt-2 pl-2 mb-8">
              {[
                "Fujitsu-1",
                "Galvin-2",
                "Enviro-3",
                "Victorian-4",
                "Daikin-5",
              ].map((id, idx) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-base font-medium transition duration-300 ${
                    activeId === id
                      ? "rounded-md bg-gray-200 p-2 font-bold text-gray-600"
                      : "text-gray-400 hover:text-theme-teal"
                  }`}
                >
                  {
                    [
                      "Fujitsu AnywAiR iO",
                      "Galvin Engineering",
                      "Enviro Building Services",
                      "Victorian Schools",
                      "Daikin",
                    ][idx]
                  }
                </a>
              ))}
            </div>
            <h4 className="text-base lg:text-xl font-bold text-theme-blue">
              Case Scenarios
            </h4>
            <div className="flex flex-col gap-2 pt-2 pl-2">
              {["Smart-1", "OEM-2", "Building-3"].map((id, idx) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-base font-medium transition duration-300 ${
                    activeId === id
                      ? "rounded-md bg-gray-200 p-2 font-bold text-theme-teal"
                      : "text-gray-400 hover:text-theme-teal"
                  }`}
                >
                  {
                    [
                      "Smart Analytics",
                      "OEM Integration",
                      "Building Rating Systems",
                    ][idx]
                  }
                </a>
              ))}
            </div>
          </aside>

          <div className="flex w-full max-w-[40rem] flex-col gap-10">
            <div className="prose">
              <h2 className="text-2xl lg:text-4xl font-bold text-theme-blue mb-12 pt-4 text-center">
                Case Studies
              </h2>
              <h3
                id="Fujitsu-1"
                className=" text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-teal mb-6 scroll-mt-24 "
              >
                Fujitsu AnywAiR iO
              </h3>
              <img
                src={Fujitsu}
                alt="Fujitsu AnywAiR iO"
                className="w-full scale-[0.8] object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                iO Cloud delivered an OEM integration for Fujitsu&apos;s
                commercial HVAC systems.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Fujitsu needed a simple, scalable way to connect its systems to
                third-party BMS platforms without infrastructure overhauls.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO developed AnywAiR iO, a compact BACnet and
                Modbus-compatible device that bridges Fujitsu units with BMS
                platforms. It allows remote monitoring, HVAC control, and
                data-driven optimisation using standard protocols.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Fujitsu customers now benefit from smarter HVAC management,
                reduced operating costs, and future-proof systems-all while
                offering seamless integration into commercial building
                environments.
              </p>
              <br />
              <h3
                id="Galvin-2"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-teal mb-6 mt-12"
              >
                Galvin Engineering - Hospital Valve Monitoring
              </h3>
              <img
                src={Galvin}
                alt="Galvin Engineering"
                className="w-full scale-[0.8] object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Galvin Engineering partnered with Nube iO to improve water
                safety compliance in hospitals.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                They needed a wireless, low-maintenance system to monitor
                thermal mixing valves in real time across multiple healthcare
                sites.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO provided LoRaWAN sensors, Rubix gateways, and a cloud
                dashboard for accurate, scalable, and compliant valve
                temperature monitoring.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Galvin achieved real-time visibility, reduced maintenance costs,
                and ensured regulatory compliance-enhancing patient safety and
                operational reliability in critical healthcare environments.
              </p>
              <br />
              <h3
                id="Enviro-3"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-teal mb-8 mt-12"
              >
                Enviro Building Services - Smarter Retrofits
              </h3>
              <img
                src={Enviro}
                alt="Enviro Building Services, Smarter Retrofits"
                className="w-full scale-[0.8] object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Enviro sought a partner to modernise BMS and HVAC systems at
                high-profile commercial sites.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                The solution had to integrate with legacy infrastructure while
                minimising tenant disruption and boosting sustainability.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO deployed Rubix Compute, IO16 controllers, and Tridium
                Niagara software for intelligent system control and
                visualisation.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Enviro delivered major improvements in energy efficiency and
                facility control across multiple buildings, reinforcing its
                position as a leader in sustainable building management.
              </p>
              <br />
              <h3
                id="Victorian-4"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-teal mb-8 mt-12"
              >
                30+ Victorian Schools - IoT for Sustainability
              </h3>
              <img
                src={Victorian}
                alt="IoT for Sustainability"
                className="w-full scale-[0.8] object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Over 30 schools joined forces with QA Electrical and Nube iO to
                reduce energy use and improve indoor environments.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Schools struggled with high electricity costs, poor air quality,
                undetected leaks, and lack of actionable utility data.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO implemented wireless sensors and dashboards to monitor
                electricity, water, and air quality in real time.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Schools saw measurable energy savings, healthier learning
                spaces, and water conservation-achieving long-term
                sustainability goals with minimal disruption.
              </p>
              <br />
              <h3
                id="Daikin-5"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-teal mb-8 mt-12"
              >
                Daikin - Co-Development for Smarter HVAC
              </h3>
              <img
                src={Daikin}
                alt="Co-Development for Smarter HVAC"
                className="w-full scale-[0.8] object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Daikin partnered with Nube iO to enhance their HVAC platforms
                through software innovation and real-time data integration.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Daikin needed to optimise system performance, improve user
                experience, and enable predictive maintenance-without disrupting
                existing platforms.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO provided co-development services, creating a custom
                software layer with IoT-enabled data insights, enhanced UI, and
                seamless integration into Daikin&apos;s current systems.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                The partnership delivered faster system response times, reduced
                maintenance costs, and stronger customer satisfaction-enabling
                scalable growth and future-ready innovation.
              </p>
              <br />
              <h2 className="text-2xl lg:text-4xl font-bold text-theme-teal mb-12 lg:mt-12 text-center">
                Case Scenarios
              </h2>
              <h3
                id="Smart-1"
                className=" text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 scroll-mt-24 "
              >
                Smart Analytics for Better Buildings
              </h3>
              <img
                src={Smart}
                alt="Smart Analytics for Better Buildings"
                className="w-full scale-[0.8] object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO enables buildings to centralise performance data and
                unlock energy efficiency with intelligent analytics.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Many facilities had siloed systems with no real-time visibility,
                driving up costs and reducing operational control.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Using wireless sensors, Rubix Compute gateways, and the Rubix
                Platform, Nube iO delivered a unified data stream with real-time
                dashboards and cloud insights.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Clients saw up to 30% energy savings, improved comfort, and
                portfolio-wide visibility-empowering proactive decision-making
                and scalable facility optimisation.
              </p>
              <br />
              <h3
                id="OEM-2"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 mt-12"
              >
                OEM Integration: Smarter, Faster, Better
              </h3>
              <img
                src={OEM}
                alt="OEM Integration: Smarter, Faster, Better"
                className="w-full scale-[0.8] object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO helps OEMs deliver branded IoT solutions without
                investing in costly product development cycles.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                OEMs needed to bring connected solutions to market quickly,
                without building software, hardware, and cloud infrastructure
                from scratch.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO offered a white-label platform, including custom-branded
                hardware, dashboards, and secure cloud backend-ready for
                deployment under the OEM&apos;s brand.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Partners achieved faster time-to-market, avoided R&D costs, and
                delivered powerful connected products with long-term scalability
                and end-user satisfaction.
              </p>
              <br />
              <h3
                id="Building-3"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 mt-12"
              >
                Portfolio-Wide Visibility and Control
              </h3>
              <img
                src={Building}
                alt="Portfolio-Wide Visibility and Control"
                className="w-full scale-[0.8] object-contain "
              />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 pt-4">
                Overview
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO helps clients manage multiple buildings through a
                centralised platform-delivering real-time data, alerts, and
                performance insights across entire portfolios.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Challenge
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Facility teams often manage scattered sites with inconsistent
                systems, making it difficult to monitor operations, respond to
                faults, or track performance in one place.
              </p>
              <br />{" "}
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Solution
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO&apos;s wireless sensors, Rubix Compute gateways, and
                cloud dashboard unify data from all sites into a single,
                scalable interface for live monitoring and control.
              </p>
              <br />
              <h4 className="text-base lg:text-xl font-bold text-theme-blue mb-4 ">
                Results
              </h4>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Clients gain full operational visibility across sites, reduce
                response times, and optimise energy and resource use-enabling
                smarter decisions and easier management at scale.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BreadcrumbBlog = ({ breadcrumb }) => {
  return (
    <nav className="text-sm text-gray-500">
      <ol className="flex items-center space-x-2">
        {breadcrumb.map((item, i) => (
          <Fragment key={item.label}>
            <li>
              <a href={item.link} className="hover:underline">
                {item.label}
              </a>
            </li>
            {i < breadcrumb.length - 1 && <li>/</li>}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
};

BreadcrumbBlog.propTypes = {
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default Blogpost6;
