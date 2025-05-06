/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from "react";
import { AlignLeft, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import ImgLogo from "../assets/images/CaseStudy/Fujitsu_Blanc.png";

const Casestudy = () => {
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
        "As the demand for smart building technologies and energy-efficient HVAC management continues to grow, Fujitsu identified the need for a solution that could seamlessly integrate their air conditioning systems with existing building management systems (BMS). To meet this objective, the solution had to be simple to deploy—requiring no complex rewiring or infrastructure modifications—while also being scalable to accommodate various commercial environments. Most importantly, it needed to provide reliable, secure, and continuous real-time monitoring and control to ensure optimal performance and energy efficiency.",
    },
    {
      id: "section2",
      title: "Solution",
      description:
        "iO Cloud provided an OEM solution that integrates directly with Fujitsu commercial air conditioning systems. The compact, BACnet and Modbus-compatible AnywAIR iO device acts as a bridge between Fujitsu units and third-party BMS platforms, allowing facility managers to remotely monitor and control HVAC systems, optimize energy efficiency through advanced data analytics, and seamlessly integrate with existing infrastructure using standard communication protocols.",
    },
    {
      id: "section3",
      title: "Results & Benefits",
      description:
        "Since the launch of AnywAIR iO, Fujitsu has been able to offer its customers a highly flexible and intelligent BMS-compatible solution, with key benefits such as greater control over HVAC systems that improves comfort and efficiency, reduced operating costs through data-driven energy management, and future-proof air conditioning systems thanks to its IoT-enabled capabilities.",
    },
    {
      id: "section4",
      title: "Conclusion",
      description:
        "Nube iO’s OEM partnership with Fujitsu General exemplifies how smart integration solutions can transform HVAC management. By embedding Nube iO’s IoT technology into Fujitsu’s air conditioning range, AnywAIR iO delivers the future of smart, connected, and energy-efficient buildings.For more details on how Nube iO’s OEM solutions can elevate your product offerings, contact us today.",
    },
  ];

  return (
    <section className="lg:py-24 max-w-screen-2xl mx-auto px-8 ">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2">
          <h1 className="mt-10 text-3xl md:text-5xl lg:text-7xl leading-tight text-theme-blue font-bold ">
            OEM Solution for Fujitsu AnywAIR iO
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
          <h4 className="text-lg font-bold text-theme-blue mb-4">Overview</h4>
          <p className="text-base text-gray-400 font-light mb-4">
            Fujitsu General, a global leader in air conditioning solutions, has
            partnered with Nube iO to develop AnywAIR iO, an IoT solution that
            enhances integration with BMS systems. This collaboration highlights
            how Nube iO&apos;s OEM expertise empowers intelligent automation for
            leading brands.
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
                Team size:
              </strong>
              <div className="text-base font-light mt-4">10-100</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Location:
              </strong>
              <div className="text-base font-light mt-4">San Francisco</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Established:
              </strong>
              <div className="text-base font-light mt-4">2020</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Funding:
              </strong>
              <div className="text-base font-light mt-4">$25m (Series A)</div>
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
              <h4 className="text-xl font-bold text-theme-teal">Objective</h4>
              <p className="mt-3 text-muted-foreground font-light text-gray-400 text-lg">
                Offer a scalable, reliable, and real-time monitoring-ready
                solution.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-theme-teal">Solution </h4>
              <p className="mt-3 text-muted-foreground font-light text-gray-400 text-lg">
                Direct and easy integration between Fujitsu HVAC and BMS systems
                with AnywAIR iO.
              </p>
            </div>

            <div className="col-span-1 block lg:hidden">
              <hr className="my-6 border-muted" />
            </div>

            <div className="col-span-1 lg:col-span-2 border-t pt-10">
              <h4 className="text-xl font-bold text-theme-teal">
                Implementation
              </h4>
              <ul className="mt-4 grid gap-x-10 gap-y-3 lg:grid-cols-2">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Plug-and-play integration, reducing installation complexity.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Cloud connectivity for remote access and insights.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Scalability across different building types, from small
                    businesses to large commercial facilities.
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
                <h4 className="text-theme-teal font-light text-xl mb-6">
                  {title}
                </h4>
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
          <ul className="space-y-2 text-sm">
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

export default Casestudy;
