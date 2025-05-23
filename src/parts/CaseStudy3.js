/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useRef, useState } from "react";
import { AlignLeft, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import ImgLogo from "../assets/images/CaseStudy/Eviro_Blanco.png";

const Casestudy3 = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs = useRef({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    });

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const addSectionRef = (id, ref) => {
    if (ref) sectionRefs.current[id] = ref;
  };

  const sectionTitles = [
    {
      id: "section1",
      title: "Challenge ",
      description:
        "Enviro sought to modernise outdated HVAC and BMS systems across several high-profile client sites. The project required solutions that were not only scalable and flexible to adapt to varying site conditions, but also capable of integrating seamlessly with existing infrastructure. Additionally, the implementation needed to minimise disruption to ongoing operations, ensuring business continuity while upgrading to smarter, more efficient building systems.",
    },
    {
      id: "section2",
      title: "Solution",
      description:
        "Nube iO equipped Enviro with a robust, future-ready building automation stack tailored to modernise legacy HVAC and BMS systems. The solution included Rubix Compute Edge Gateways and Rubix IO16 controllers, offering powerful on-site control and data processing. These were paired with the Tridium Niagara platform to enable centralised visualisation and real-time monitoring across multiple sites. With strong integration capabilities, the system adapted effortlessly to various infrastructure conditions, ensuring a seamless upgrade path with minimal disruption.",
    },
    {
      id: "section3",
      title: "Results & Benefits",
      description:
        "Enviro’s clients experienced substantial improvements following the deployment of Nube iO’s solution. Energy efficiency and system reliability were significantly enhanced, leading to reduced operational costs and improved sustainability. Occupants benefited from more consistent and comfortable indoor environments, while facility managers gained greater control through real-time data insights and streamlined system monitoring. This comprehensive upgrade positioned clients for long-term performance and adaptability.",
    },
    {
      id: "section4",
      title: "Why Enviro Chose Nube",
      description:
        "Enviro selected Nube iO for our innovative, easily integrable, and reliable building automation technology. Our solutions' scalability and flexibility significantly enhanced Enviro's capability to deliver customised, efficient, and sustainable BMS solutions, maintaining their competitive edge.",
    },
  ];

  return (
    <section className="lg:py-24 max-w-screen-2xl mx-auto px-8 mt-8">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2">
          <h1 className="mt-10 text-2xl md:text-4xl lg:text-6xl leading-tight text-theme-blue font-bold ">
            Enhancing Sustainability and Efficiency
          </h1>
        </div>

        <img
          src={ImgLogo}
          alt="placeholder"
          className="max-h-[200px] w-full object-cover lg:w-1/2 rounded"
        />
      </div>

      <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:relative">
        <aside className="w-full lg:w-1/4 lg:sticky top-10">
          <h3 className="text-lg font-bold text-theme-blue mb-4 ">Overview</h3>
          <p className="text-base text-gray-400 font-light mb-4">
            Enviro Building Services is an Australian BMS integrator
            specializing in HVAC and automation, focusing on sustainable,
            efficient, and user-centric solutions.
          </p>
          <div className="text-sm text-gray-400 space-y-6">
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Sector
              </strong>
              <div className="text-base font-light mt-4">
                Technology: Automation
              </div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Location:
              </strong>
              <div className="text-base font-light mt-4">San Francisco</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Core features:
              </strong>
              <div className="text-base font-light mt-4">
                Dashboards, Tools, API
              </div>
            </div>
          </div>
          <div className="mt-6">
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/nube-io/?originalSubdomain=au">
                <FaLinkedin className="size-6 text-2xl text-theme-blue " />
              </a>
            </div>
          </div>
        </aside>

        <main className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-10 rounded-3xl border p-6 lg:border-none lg:p-0 w-full">
            <div>
              <h2 className="text-xl font-bold text-theme-teal">Objective</h2>
              <p className="mt-3 text-muted-foreground font-light text-gray-400 text-lg">
                Modernise legacy HVAC and BMS systems with scalable,
                non-disruptive solutions that integrate seamlessly into existing
                infrastructure.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-theme-teal">Solution </h2>
              <p className="mt-3 text-muted-foreground font-light text-gray-400 text-lg">
                Nube iO equipped Enviro with scalable edge hardware and
                Niagara-based software to modernise control systems and
                streamline integration across complex sites.
              </p>
            </div>

            <div className="col-span-1 block lg:hidden">
              <hr className="my-6 border-muted" />
            </div>

            <div className="col-span-1 lg:col-span-2 border-t pt-10">
              <h2 className="text-xl font-bold text-theme-teal">
                Implementation
              </h2>
              <ul className="mt-4 grid gap-x-10 gap-y-3 lg:grid-cols-2">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Smooth integration with minimal disruption to tenants
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Enhanced monitoring and management of HVAC systems, energy
                    consumption, and environmental parameters
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Completion within set project timelines
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-20 space-y-16">
            {sectionTitles.map(({ id, title, description }) => (
              <section
                key={id}
                id={id}
                ref={(ref) => addSectionRef(id, ref)}
                className="prose max-w-none scroll-mt-28"
              >
                <h2 className="text-theme-teal font-light text-xl mb-6">
                  {title}
                </h2>
                <p className="text-gray-400 font-light text-lg mb-8">
                  {description}
                </p>
              </section>
            ))}
          </div>
        </main>

        <nav className="hidden lg:block sticky top-10 w-64">
          <span className="flex items-center gap-2 text-base mb-2 ">
            <AlignLeft className="h-4 w-4" /> On this page
          </span>
          <ul className="space-y-1 text-sm">
            {sectionTitles.map(({ id, title }) => (
              <li key={`nav-${id}`}>
                <a
                  href={`#${id}`}
                  className={`block py-1 transition-colors duration-200 ${
                    activeSection === id
                      ? "font-bold text-theme-teal text-base"
                      : "text-gray-400 text-base hover:text-theme-teal"
                  }`}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Casestudy3;
