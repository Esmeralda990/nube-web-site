/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable max-len */
import React, { useEffect, useRef, useState } from "react";
import { AlignLeft, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../assets/images/LogoNube.png";

const Casestudy2 = () => {
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
        "To ensure the highest standards of safety and efficiency across its healthcare installations, Galvin Engineering needed a robust monitoring system for its thermal mixing valves. The solution required real-time temperature tracking to mitigate risks like scalding and bacterial growth, strict compliance with health and safety regulations, and a wireless, low-maintenance architecture capable of scaling across multiple hospital sites.",
    },
    {
      id: "section2",
      title: "Solution",
      description:
        "Nube iO partnered with Galvin Engineering to deliver a tailored IoT monitoring solution designed specifically for thermal mixing valve compliance in healthcare environments. The system featured LoRa gateways for long-range, low-power wireless communication, seamlessly connecting distributed assets. Integrated hardware and software enabled precise, real-time temperature monitoring with cloud-based visibility. A custom dashboard provided actionable insights, automated alerts, and proactive maintenance tools to ensure regulatory compliance and system reliability at scale.",
    },
    {
      id: "section3",
      title: "Results & Benefits",
      description:
        "Galvin Engineering achieved substantial operational improvements through the implementation of Nube iO’s IoT monitoring solution. Real-time temperature tracking enhanced water safety by maintaining optimal conditions and reducing risks such as scalding or bacterial growth. The system’s continuous data logging supported full regulatory compliance with health and safety standards. Additionally, early detection of anomalies enabled cost-efficient maintenance, reducing downtime and preventing potential system failures across multiple hospital sites.",
    },
    {
      id: "section4",
      title: "Why Galvin Chose Nube",
      description:
        "Galvin Engineering chose Nube iO as their strategic partner due to the company’s proven expertise in delivering IoT solutions for high-compliance industries. Nube iO’s ability to provide reliable and scalable monitoring systems tailored to the specific needs of healthcare environments was a key differentiator. By offering seamless end-to-end integration of hardware and cloud-based software, Nube iO ensured real-time visibility, operational efficiency, and compliance across Galvin’s infrastructure.",
    },
  ];

  return (
    <section className="lg:py-24 max-w-screen-2xl mx-auto px-8 mt-12">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2">
          <h1 className="mt-10 text-2xl md:text-4xl lg:text-5xl text-theme-blue font-bold ">
            Galvin Engineering – Hospital Thermal Mixing Valve Monitoring
          </h1>
        </div>

        <img
          src="https://shadcnblocks.com/images/block/placeholder-1.svg"
          alt="placeholder"
          className="max-h-[400px] w-full object-cover lg:w-1/2 rounded"
        />
      </div>

      <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:relative">
        <aside className="w-full lg:w-1/4 lg:sticky top-10">
          <img src={Logo} alt="logo" className="h-8 mb-4" />
          <h3 className="text-lg font-bold text-theme-blue ">Overview</h3>
          <p className="text-base text-gray-400 font-light mb-4">
            Galvin Engineering is a trusted manufacturer and supplier of
            specialised water solutions for the health, education, and
            commercial sectors. Their hospital-grade thermal mixing valves are
            critical for maintaining water safety and ensuring regulatory
            compliance in healthcare environments.
          </p>
          <div className="text-sm text-gray-400 space-y-6">
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Sector
              </strong>
              <div className="text-base font-light">Technology: Automation</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Team size:
              </strong>
              <div className="text-base font-light">10-100</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Location:
              </strong>
              <div className="text-base font-light">San Francisco</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Established:
              </strong>
              <div className="text-base font-light">2020</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Funding:
              </strong>
              <div className="text-base font-light">$25m (Series A)</div>
            </div>
            <div>
              <strong className="text-theme-blue font-bold text-base">
                Core features:
              </strong>
              <div className="text-base font-light">Dashboards, Tools, API</div>
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
                Develop a smart solution that optimizes hospital water safety
                through efficient thermal monitoring and regulatory compliance.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-theme-teal">Solution </h2>
              <p className="mt-3 text-muted-foreground font-light text-gray-400 text-lg">
                IoT system with LoRa sensors and cloud monitoring to capture
                real-time temperature and enable predictive maintenance.
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
                    Ease of Retrofitting: The system was installed without major
                    overhauls to existing infrastructure.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    High Data Accuracy: Reliable monitoring ensured consistently
                    precise temperature readings.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Scalability: The IoT solution was capable of expanding to
                    monitor multiple valves and facilities efficiently.
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

export default Casestudy2;
