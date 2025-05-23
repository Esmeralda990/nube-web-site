/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useRef, useState } from "react";
import { AlignLeft, CheckCircle2 } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import ImgLogo from "../assets/images/CaseStudy/Daikin_Blanco.png";

const Casestudy5 = () => {
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
        "Daikin, a leader in the HVAC industry, faced multiple challenges in adapting to the modern digital environment. These included a lack of actionable data for system performance and predictive maintenance, unintuitive interfaces that impact the user experience, and the need to integrate new solutions without disrupting existing operations. To overcome these challenges and future-proof its technology, Daikin sought a partner with proven expertise in IoT, software development, and data integration.",
    },
    {
      id: "section2",
      title: "Solution",
      description:
        "Nube iO partnered with Daikin to deliver innovative software and co-development services tailored to their specific goals. The collaboration focused on integrating custom software into Daikin’s existing platforms to unlock real-time data insights and provide actionable analytics for performance optimisation. By incorporating IoT-enabled solutions, Daikin gained the ability to monitor HVAC systems, predict maintenance needs, and boost overall efficiency. The partnership also emphasised user-centric design, enhancing the interface for a more intuitive and engaging user experience. Working closely with Daikin’s in-house teams, Nube iO ensured seamless integration and alignment with the company’s long-term strategic vision.",
    },
    {
      id: "section3",
      title: "Results & Benefits",
      description:
        "The collaboration between Nube iO and Daikin resulted in tangible improvements and strategic benefits across multiple areas. Real-time data insights empowered Daikin to continuously monitor and optimise system performance, enhancing efficiency and overall reliability. The newly designed, user-friendly interface significantly improved the customer experience, making platform interactions more intuitive and engaging. With IoT-enabled predictive maintenance, Daikin was able to detect potential issues early, reducing downtime and cutting maintenance costs. Additionally, the scalable nature of the co-developed solution positioned Daikin to seamlessly adopt future innovations and expand their system capabilities with ease.",
    },
    {
      id: "section4",
      title: "Why Daikin Chose Nube",
      description:
        "Daikin chose Nube iO as their strategic partner for this project based on a combination of expertise, collaboration, and innovation. Nube iO brought a strong track record in delivering tailored IoT solutions focused on building automation and performance optimisation. Their collaborative approach ensured that every step of the co-development process was fully aligned with Daikin’s operational goals. Most importantly, Nube iO demonstrated a forward-thinking mindset, offering cutting-edge software capabilities that not only addressed immediate challenges but also laid the groundwork for scalable, long-term growth.",
    },
    {
      id: "section5",
      title: "Your Potential with Nube",
      description:
        "This partnership highlights the impact of collaborative co-development and advanced software solutions in driving performance, efficiency, and user satisfaction. Whether you’re looking to optimise existing platforms or build new, data-driven solutions, Nube iO can help your organisation unlock its full potential.Reach out today to learn how we can support your digital transformation journey.",
    },
  ];

  return (
    <section className="lg:py-24 max-w-screen-2xl mx-auto px-8 mt-8">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="lg:w-1/2">
          <h1 className="mt-10 text-2xl md:text-4xl lg:text-6xl max-w-2xl leading-tight text-theme-blue font-bold ">
            Enhancing Daikin’s Platforms with Data Driven Development
          </h1>
        </div>

        <img
          src={ImgLogo}
          alt="placeholder"
          className="max-h-[300px] w-full object-cover lg:w-1/2 rounded"
        />
      </div>

      <div className="mt-20 flex flex-col lg:flex-row gap-10 lg:relative">
        <aside className="w-full lg:w-1/4 lg:sticky top-10">
          <h3 className="text-lg font-bold text-theme-blue mb-4">Overview</h3>
          <p className="text-base text-gray-400 font-light mb-4">
            Daikin partnered with Nube iO to enhance its HVAC platforms with
            data-driven solutions, aiming to optimise performance, streamline
            operations, and improve user experience through co-development.
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
                To enhance system intelligence, usability, and integration by
                overcoming digital gaps in performance data, UI design, and
                platform adaptability—ensuring future-ready HVAC solutions.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-theme-teal">Solution </h2>
              <p className="mt-3 text-muted-foreground font-light text-gray-400 text-lg">
                Nube iO co-developed IoT-enabled software with Daikin,
                integrating real-time analytics and intuitive UI into existing
                platforms to boost performance and user experience.
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
                    Seamless Integration Nube iO’s solutions were designed to
                    complement Daikin’s existing platforms, ensuring smooth
                    implementation without disrupting ongoing operations.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Agile Development Process A flexible, iterative approach
                    allowed for continuous feedback and refinement of solutions,
                    aligning with Daikin’s unique requirements.
                  </p>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-theme-teal" />
                  <p className="font-light text-gray-400 text-lg">
                    Knowledge Sharing Close collaboration ensured Daikin’s teams
                    were equipped to fully leverage the new tools and
                    technologies.
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

export default Casestudy5;
