/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import Button from "../elements/Button/index";

const GetD = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    whatSystems: "",
    primaryGoals: "",
    buildings: "",
    Specific: "",
    challenges: "",
    timeline: "",
    contactAgreement: false,
    marketingAgreement: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log("Enviando:", formData);

    try {
      const response = await fetch("http://localhost:3001/get-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      // eslint-disable-next-line
      alert(result.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        role: "",
        whatSystems: "",
        primaryGoals: "",
        buildings: "",
        interestedFeatures: "",
        challenges: "",
        timeline: "",
        contactAgreement: false,
        marketingAgreement: false,
      });
      // eslint-disable-next-line
    } catch (error) {
      // eslint-disable-next-line
      console.error("Error:", error);
      // eslint-disable-next-line
      alert("Hubo un error al enviar la solicitud de demo.");
    }
  };

  return (
    <section className="relative py-32 lg:pl-32 px-8">
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)]" />
      <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
        <div className="w-full pb-10 md:space-y-10 md:pb-0">
          <div className="space-y-4 md:max-w-[40rem]">
            <h1 className="text-4xl font-bold text-theme-blue lg:text-5xl">
              Discover the Future of Building Management
            </h1>
            <div className="text-muted-foreground font-light md:text-base lg:text-lg lg:leading-7">
              Curious about how Nube iO s innovative solutions can enhance your
              operations? Schedule a personalised demo to gain a comprehensive
              understanding of our products and services, tailored to your
              specific needs.
            </div>
            <h3 className="text-3xl font-bold text-theme-blue lg:text-3xl">
              Why Book a Demo?
            </h3>
          </div>
          <div className="hidden md:block">
            <div className="space-y-16 pb-20 lg:pb-0">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Tailored Insights: Gain a deep understanding of our
                      products and services customised for your unique
                      requirements.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Expert Interaction: Engage live with our specialists for
                      real-time answers, ensuring clarity and confidence in our
                      offerings.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Hands-On Experience: Explore the user interface and
                      functionality of our products firsthand to see how they
                      can improve your operations.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Custom Solutions: Discuss options for customisation and
                      integration to fit our solutions seamlessly into your
                      existing systems.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <p className="text-base font-light">
                      Optimised Advice: Receive personalised advice on
                      optimising our tools for your business, leveraging
                      industry best practices and our team s expertise.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center lg:mt-2.5">
          <div className="relative flex w-full min-w-[20rem] max-w-[50rem] flex-col items-center overflow-visible md:min-w-[24rem]">
            <form onSubmit={handleSubmit} className="z-10 space-y-6">
              <div className="w-full space-y-6 rounded-xl border border-border bg-background px-6 py-10 shadow-sm">
                <div>
                  <h3 className="text-lg font-bold lg:text-lg">
                    Contact Information
                  </h3>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="12 3456 7890"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Company/Organization
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full p-2 border rounded"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">You are?</label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="Facility Manager">Facility Manager</option>
                    <option value="Building Owner">Building Owner</option>
                    <option value="Distributor">Distributor</option>
                    <option value="System Integrator">System Integrator</option>
                    <option value="OEM">OEM</option>
                    <option value="Property Owner">Property Owner</option>
                    <option value="Local Authority">Local Authority</option>
                    <option value="Engineering Office">
                      Engineering Office
                    </option>
                    <option value="Installer">Installer</option>
                    <option value="Integrator">Integrator</option>
                    <option value="Proptech">Proptech</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    What systems are you currently using for building
                    management?
                  </label>
                  <select
                    id="whatSystems"
                    name="whatSystems"
                    value={formData.whatSystems}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="Manual processes">Manual processes</option>
                    <option value="Basic digital tools">
                      Basic digital tools
                    </option>
                    <option value="Advanced BMS">
                      Advanced building management systems
                    </option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    What are your primary goals in using Nube iO s solutions?
                  </label>
                  <select
                    id="primaryGoals"
                    name="primaryGoals"
                    value={formData.primaryGoals}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="Energy efficiency">
                      Energy efficiency improvement
                    </option>
                    <option value="Cost reduction">Cost reduction</option>
                    <option value="Comfort enhancement">
                      Building comfort enhancement
                    </option>
                    <option value="Streamlined operations">
                      Streamlined operations
                    </option>
                    <option value="Data-driven decisions">
                      Data-driven decision-making
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    How many buildings or sites are you managing?
                  </label>
                  <select
                    id="buildings"
                    name="buildings"
                    value={formData.buildings}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-20">11-20</option>
                    <option value="21+">21 or more</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Which features are you most interested in exploring during
                    the demo?
                  </label>
                  <select
                    id="Specific "
                    name="Specific "
                    value={formData.Specific}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="High costs">Real-time monitoring</option>
                    <option value="Inefficiency">
                      Analytics and reporting
                    </option>
                    <option value="Lack of data"> Energy management</option>
                    <option value="Integration issues">
                      System integration
                    </option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    What challenges are you facing with your current system?
                  </label>
                  <select
                    id="Challenges"
                    name="Challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="High costs">High operational costs</option>
                    <option value="Inefficiency">
                      Analytics and reporting
                    </option>
                    <option value="Lack of data"> Energy management</option>
                    <option value="Integration issues">
                      System integration
                    </option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Implementation timeline?
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="">Select</option>
                    <option value="Immediate">Immediate</option>
                    <option value="3 months">Within 3 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="No plans">No immediate plans</option>
                  </select>
                </div>

                <div className="grid w-full items-center gap-1.5  mb-6 mt-6">
                  <label htmlFor="message" className="mb-2.5 font-medium">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    className="w-full p-2 border rounded"
                    rows="4"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    I agree to be contacted
                  </label>
                  <input
                    type="checkbox"
                    id="contactAgreement"
                    checked={formData.contactAgreement}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">
                    Receive marketing emails
                  </label>
                  <input
                    type="checkbox"
                    id="marketingAgreement"
                    checked={formData.marketingAgreement}
                    onChange={handleChange}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-theme-teal text-white py-2 rounded"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetD;
