/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import { Check } from "lucide-react";
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
    <section className="relative py-32  px-8">
      <div className="container mx-auto">
        <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_15%_at_40%_55%,hsl(var(--accent))_0%,transparent_100%)] lg:bg-[radial-gradient(ellipse_12%_20%_at_60%_45%,hsl(var(--accent))_0%,transparent_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(ellipse_35%_20%_at_70%_75%,hsl(var(--accent))_0%,transparent_80%)] lg:bg-[radial-gradient(ellipse_15%_30%_at_70%_65%,hsl(var(--accent))_0%,transparent_80%)]" />
        <div className="pointer-events-none absolute inset-x-0 -bottom-20 -top-20 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:8px_8px] [mask-image:radial-gradient(ellipse_60%_60%_at_65%_50%,#000_0%,transparent_80%)]" />
        <div className="container grid w-full grid-cols-1 gap-x-32 overflow-hidden lg:grid-cols-2">
          <div className="w-full pb-10 md:space-y-10 md:pb-0  px-8">
            <div className="space-y-4 md:max-w-[40rem]">
              <h2 className="text-xl font-bold text-theme-blue lg:text-3xl">
                Discover the Future of Building Management
              </h2>
              <div className="text-muted-foreground font-light md:text-base lg:text-base lg:leading-7">
                Curious about how Nube iO s innovative solutions can enhance
                your operations? Schedule a personalised demo to gain a
                comprehensive understanding of our products and services,
                tailored to your specific needs.
              </div>
              <h3 className="text-xl font-bold text-theme-blue lg:text-xl pt-6">
                Why Book a Demo?
              </h3>
            </div>
            <div className="hidden md:block">
              <div className="space-y-8 pb-16 lg:pb-0">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-base font-light">
                      Tailored Insights: Gain a deep understanding of our
                      products and services
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-base font-light">
                      Expert Interaction: Engage live with our specialists for
                      real-time answers.
                    </p>
                  </div>
                  <div className="flex items-center space-x-2.5">
                    <Check className="size-5 shrink-0 text-muted-foreground" />
                    <p className="text-base font-light">
                      Hands-On Experience: Explore the user interface and
                      functionality of our products
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto flex mx-w-full flex-col gap-6 rounded-lg border p-10 h-full px-4">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <div className="grid w-full items-center gap-3 font-light">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-1 border rounded"
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-3 font-light">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-1 border rounded"
                    required
                  />
                </div>
              </div>

              <div className="grid w-full items-center gap-3 mb-6 mt-6 font-light">
                <label htmlFor="company">Company/Organization* </label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company/Organization"
                  className="w-full p-1 border rounded"
                  required
                />
              </div>

              <div className="grid w-full items-center gap-3 mb-6 mt-6 font-light">
                <label htmlFor="phone">Phone </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number "
                  className="w-full p-1 border rounded"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry"
                  className="font-light mb-6 mt-6 gap-3 "
                >
                  What would you like to see in the demo *
                </label>
                <select
                  id="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-4 font-light"
                  required
                >
                  <option value="">Select</option>
                  <option value="automation ">
                    Full building automation demo
                  </option>
                  <option value="Software ">
                    Software features (Rubix CE / Cloud)
                  </option>
                  <option value="Hardware">
                    Hardware overview (controllers, sensors)
                  </option>
                  <option value="OEM">OEM / custom solutions</option>
                  <option value="sample">
                    Im not sure - just show me whats possible
                  </option>
                </select>
              </div>

              <div className="grid w-full items-center gap-3  mb-6 mt-6">
                <label htmlFor="message" className="mb-2.5 font-light">
                  Preferred date or time
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Let us know if you have a time in mind"
                  className="w-full p-2 border rounded font-light mb-2.5"
                  rows="4"
                />
              </div>
              <div>
                <label className="text-sm font-light">
                  I agree to be contacted by Nube iO regarding my demo request *
                </label>
                <input
                  type="checkbox"
                  id="contactAgreement"
                  checked={formData.contactAgreement}
                  onChange={handleChange}
                  className=" mx-3"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-light">
                  I’d like to receive occasional marketing emails and updates.
                </label>
                <input
                  type="checkbox"
                  id="marketingAgreement"
                  checked={formData.marketingAgreement}
                  onChange={handleChange}
                  className="mt-4 mx-3 "
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-theme-teal text-white py-2 rounded mt-6"
              >
                Request Demo
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetD;
