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

const BREADCRUMB = [
  {
    label: "Resources",
  },
  {
    label: "Case Studies",
    link: "/case-fujitsu/",
  },
];

const SHARE_LINKS = [
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/company/nube-io/",
  },
];

const ARTICLE_DATE = "May 18, 2025";

const Blogpost6 = () => {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const chapterIds = [
      "Fujitsu-1",
      "Galvin-2",
      "Enviro-3",
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
            <div className="flex w-full max-w-[36rem] flex-col items-center justify-center gap-8">
              <BreadcrumbBlog breadcrumb={BREADCRUMB} />
              <div className="flex w-full flex-col gap-5 text-center">
                <div className="flex justify-center gap-2.5 text-sm font-bold text-theme-teal">
                  <div>{ARTICLE_DATE}</div>
                </div>
                <h1 className="text-3xl lg:text-6xl leading-[1.2] font-semibold text-theme-blue">
                  Case studies
                </h1>
                <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  standard dummy text ever since the 1500s.
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
            <h4 className="text-base lg:text-xl font-bold text-theme-teal">
              Case Studies
            </h4>
            <div className="flex flex-col gap-2 pt-2 pl-2 mb-8">
              {["Fujitsu-1", "Galvin-2", "Enviro-3"].map((id, idx) => (
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
                    ][idx]
                  }
                </a>
              ))}
            </div>
            <h4 className="text-base lg:text-xl font-bold text-theme-teal">
              Case Scenarios
            </h4>
            <div className="flex flex-col gap-2 pt-2 pl-2">
              {["Smart-1", "OEM-2", "Building-3"].map((id, idx) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block text-base font-medium transition duration-300 ${
                    activeId === id
                      ? "rounded-md bg-gray-200 p-2 font-bold text-gray-800"
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
              <h2 className="text-2xl lg:text-4xl font-bold text-theme-teal mb-12 pt-4">
                Case Studies
              </h2>
              <h3
                id="Fujitsu-1"
                className=" text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 scroll-mt-24 "
              >
                Fujitsu AnywAiR iO
              </h3>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                iO Cloud provided an OEM solution that integrates directly with
                Fujitsu commercial air conditioning systems. The compact, BACnet
                and Modbus-compatible AnywAIR iO device acts as a bridge between
                Fujitsu units and third-party BMS platforms, allowing facility
                managers to remotely monitor and control HVAC systems, optimize
                energy efficiency through advanced data analytics, and
                seamlessly integrate with existing infrastructure using standard
                communication protocols.
              </p>
              <br />
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Since the launch of AnywAIR iO, Fujitsu has been able to offer
                its customers a highly flexible and intelligent BMS-compatible
                solution, with key benefits such as greater control over HVAC
                systems that improves comfort and efficiency, reduced operating
                costs through data-driven energy management, and future-proof
                air conditioning systems thanks to its IoT-enabled capabilities.
              </p>
              <br />
              <h3
                id="Galvin-2"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 mt-12"
              >
                Galvin Engineering
              </h3>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO partnered with Galvin Engineering to deliver a tailored
                IoT monitoring solution designed specifically for thermal mixing
                valve compliance in healthcare environments. The system featured
                LoRa gateways for long-range, low-power wireless communication,
                seamlessly connecting distributed assets. Integrated hardware
                and software enabled precise, real-time temperature monitoring
                with cloud-based visibility. A custom dashboard provided
                actionable insights, automated alerts, and proactive maintenance
                tools to ensure regulatory compliance and system reliability at
                scale.
              </p>
              <br />
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Galvin Engineering achieved substantial operational improvements
                through the implementation of Nube iO’s IoT monitoring solution.
                Real-time temperature tracking enhanced water safety by
                maintaining optimal conditions and reducing risks such as
                scalding or bacterial growth. The system’s continuous data
                logging supported full regulatory compliance with health and
                safety standards. Additionally, early detection of anomalies
                enabled cost-efficient maintenance, reducing downtime and
                preventing potential system failures across multiple hospital
                sites.
              </p>
              <br />
              <h3
                id="Enviro-3"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 mt-12"
              >
                Enviro Building Services
              </h3>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Nube iO equipped Enviro with a robust, future-ready building
                automation stack tailored to modernise legacy HVAC and BMS
                systems. The solution included Rubix Compute Edge Gateways and
                Rubix IO16 controllers, offering powerful on-site control and
                data processing. These were paired with the Tridium Niagara
                platform to enable centralised visualisation and real-time
                monitoring across multiple sites. With strong integration
                capabilities, the system adapted effortlessly to various
                infrastructure conditions, ensuring a seamless upgrade path with
                minimal disruption.
              </p>
              <br />
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Enviro’s clients experienced substantial improvements following
                the deployment of Nube iO’s solution. Energy efficiency and
                system reliability were significantly enhanced, leading to
                reduced operational costs and improved sustainability. Occupants
                benefited from more consistent and comfortable indoor
                environments, while facility managers gained greater control
                through real-time data insights and streamlined system
                monitoring. This comprehensive upgrade positioned clients for
                long-term performance and adaptability.
              </p>
              <br />
              <h2 className="text-2xl lg:text-4xl font-bold text-theme-teal mb-12 lg:mt-12">
                Case Scenarios
              </h2>
              <h3
                id="Smart-1"
                className=" text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 scroll-mt-24 "
              >
                Smart Analytics
              </h3>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                In an era of smart technology and sustainability, modern
                buildings demand advanced solutions that maximise efficiency,
                reduce costs, and enhance occupant comfort. Nube iO harnesses
                IoT analytics to transform building data into clear, actionable
                insights, enabling facility managers to proactively optimise
                operations and sustainability initiatives.
              </p>
              <br />
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Modern buildings generate vast amounts of data from various
                systems, including HVAC, lighting, and energy management tools.
                However, this data often remains trapped in isolated silos,
                making it difficult to gain a comprehensive understanding of
                building performance.
              </p>
              <br />
              <h3
                id="OEM-2"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 mt-12"
              >
                OEM Integration
              </h3>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Ready to take your brand to the next level? Offer your customers
                the innovation of the Nube iO solution with your own unique
                branding. Our integrated hardware, software, and secure cloud
                solutions help OEM partners accelerate innovation, enhance
                competitiveness, and provide robust, scalable market solutions.
              </p>
              <br />
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                OEMs gain a competitive edge and accelerate their time-to-market
                by leveraging next-gen connected solutions—without the need for
                internal R&D investment. Our platform enables enhanced brand
                experiences for end users while ensuring long-term scalability
                and seamless product evolution.
              </p>
              <br />
              <h3
                id="Building-3"
                className="scroll-mt-24 text-lg lg:text-3xl leading-[1.2] font-semibold text-theme-blue mb-8 mt-12"
              >
                Building Rating Systems
              </h3>
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Meeting stringent building rating and compliance standards is
                increasingly critical. Nube iO simplifies the compliance process
                through innovative IoT solutions, ensuring accurate, real-time
                monitoring, streamlined reporting, and enhanced building
                performance management aligned with industry standards.
              </p>
              <br />
              <p className="text-base lg:text-lg leading-[1.4] font-light text-gray-400">
                Building managers reduce risk, save time, and stay audit-ready
                with always-on reporting and real-time data. By streamlining
                admin tasks and improving coordination with auditors and
                consultants, they achieve stronger sustainability scores and
                maintain certification thresholds with confidence.
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
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Blogpost6;
