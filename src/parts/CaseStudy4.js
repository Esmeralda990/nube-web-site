/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useRef, useState } from "react";
import { AlignLeft, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import ImgLogo from "../assets/images/CaseStudy/Victorian.png";

const Casestudy4 = () => {
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
        "Victorian schools struggled with high electricity bills from unnecessary appliance use, poor air quality affecting student focus, undetected water leaks, and a lack of actionable data for utility optimisation. These issues undermined sustainability goals, increased operational costs, and negatively impacted the learning environment.",
    },
    {
      id: "section2",
      title: "Solution",
      description:
        "To tackle these challenges, Nube iO partnered with QA Electrical to implement an advanced IoT-based utility monitoring system across over 30 Victorian schools. The solution featured wireless LoRaWAN sensors for real-time monitoring of electricity, water usage, and air quality—eliminating the need for complex cabling. Data was collected via Rubix Compute Gateways and transmitted to a centralised cloud platform. A user-friendly, cloud-based dashboard enabled facility managers to visualise trends, receive alerts, and take proactive steps to improve efficiency, reduce costs, and support healthier learning environments.",
    },
    {
      id: "section3",
      title: "Results & Benefits",
      description:
        "The deployment of Nube iO’s utility monitoring system led to significant, measurable improvements across all participating schools. Real-time energy monitoring allowed for immediate interventions, reducing unnecessary electricity consumption and lowering utility costs. Air quality enhancements created healthier learning environments, improving student focus, concentration, and overall well-being. Additionally, early leak detection contributed to substantial water conservation, resulting in both financial savings and positive environmental impact. By combining data-driven insights with real-time alerts, schools advanced their sustainability goals while fostering more comfortable, efficient, and productive spaces for students and staff alike.",
    },
    {
      id: "section4",
      title: "Why Victorian Chose Nube",
      description:
        "The decision to partner with Nube iO was driven by their demonstrated expertise in IoT and a shared commitment to creating impactful, future-focused solutions. With a proven track record in delivering tailored IoT systems that enhance building automation and sustainability, Nube iO stood out as the ideal partner. Their scalable and non-intrusive technology enabled seamless integration into existing infrastructure with minimal disruption, while directly supporting the schools' sustainability goals. From improving energy efficiency and water conservation to fostering healthier indoor environments, Nube iO’s approach aligned perfectly with the consortium’s vision. “Nube iO’s ability to deliver scalable, data-driven solutions gave us the confidence to partner with them. Their expertise in IoT allowed us to optimise utilities while improving student well-being across all campuses,” stated a consortium representative.",
    },
    {
      id: "section5",
      title: "Smarter Buildings with Nube iO",
      description:
        "This case study showcases the transformative power of IoT in driving sustainability, cost savings, and healthier environments. Whether you're managing a single site or a portfolio of facilities, Nube iO’s solutions provide the insights and tools you need for smarter building management. Reach out today to see how we can help your organisation unlock its full potential.",
    },
  ];

  return (
    <section className="lg:py-24 max-w-screen-2xl mx-auto px-8 mt-8">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2">
          <h1 className="mt-10 text-2xl max-w-xl md:text-4xl lg:text-6xl leading-tight text-theme-blue font-bold ">
            Driving Sustainability in 30+ Victorian Schools with IoT
          </h1>
        </div>

        <img
          src={ImgLogo}
          alt="placeholder"
          className="max-h-[400px] w-full object-cover lg:w-1/2 rounded"
        />
      </div>

      <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:relative">
        <aside className="w-full lg:w-1/4 lg:sticky top-10">
          <h3 className="text-lg font-bold text-theme-blue mb-4 ">Overview</h3>
          <p className="text-base text-gray-400 font-light mb-4">
            Over 30 Victorian schools teamed up with QA Electrical to cut rising
            utility costs and boost sustainability. Seeking smarter, healthier
            learning spaces, they turned to Nube iO’s IoT solutions to transform
            their utility management systems.
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
                The schools needed to reduce high utility costs, improve air
                quality, detect water leaks early, and gain actionable data to
                meet sustainability goals and enhance learning environments.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-theme-teal">Solution </h2>
              <p className="mt-3 text-muted-foreground font-light text-gray-400 text-lg">
                Nube iO and QA Electrical implemented an IoT-based utility
                monitoring system using LoRaWAN sensors, Rubix Compute Gateways,
                and a cloud dashboard to track and optimise electricity, water,
                and air quality in real time.
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
                    Nube iO ensured minimal disruption to the schools’
                    day-to-day operations while deploying the IoT solution.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    The wireless nature of the sensors meant no major
                    infrastructural changes were required, reducing installation
                    time and avoiding disruptions to students and staff.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Hands-on training empowered school facility managers to
                    confidently use the dashboard and respond immediately to
                    alerts.
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

export default Casestudy4;
