/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
/* eslint-disable comma-dangle */
import React, { useState } from "react";
import { Mail, Phone, Building } from "lucide-react";
import Button from "../elements/Button/index";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description:
      "Have a question or need help? Drop us an email, and we'll respond within 24 hours.",
    contact: "info@nubeio.com",
  },
  {
    icon: Phone,
    title: "Phone",
    description:
      "Prefer to chat? Give us a call Monday–Friday, 8:30 AM– 4:30 PM.",
    contact: "+61 2 7906 8414",
  },
  {
    icon: Building,
    title: "Sydney office",
    description: "28 Margaret St, Sydney NSW 2000, Australia",
  },
  {
    icon: Building,
    title: "Warehouse",
    description: "17 Cemetery Rd, Helensburgh NSW 2508, Australia",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiry: "",
    message: "",
    contactAgreement: false,
    marketingAgreement: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: value,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(formData);

    try {
      const response = await fetch("http://localhost:3001/contact-form", {
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
        company: "",
        inquiry: "",
        message: "",
      });
    } catch (error) {
      // eslint-disable-next-line
      console.error("Error:", error);
      // eslint-disable-next-line
      alert("There was an error submitting the form.");
    }
  };

  return (
    <section className="mt-2 pb-12 lg:pl-32 px-6 mb-20">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          <div className="lg:w-1/2 flex flex-col gap-6">
            <div className="text-center lg:text-left">
              <h1 className="mt-40 mb-2 text-2xl lg:text-5xl font-bold text-theme-blue max-w-2xl mx-auto lg:mx-0">
                Elevate Your Building Management Solutions with Nube iO
              </h1>
            </div>

            <div className="grid flex-2 gap-8 self-start lg:grid-cols-2 mt-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-4">
                    <method.icon className="w-5 h-5 text-theme-teal" />
                    <h3 className="text-xl tracking-[-0.96px] font-bold text-theme-teal">
                      {method.title}
                    </h3>
                  </div>
                  <div className="space-y-2 tracking-[-0.32px]">
                    {["Sydney office", "Warehouse"].includes(method.title) ? (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                          method.description
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-light text-theme-teal underline"
                      >
                        {method.description}
                      </a>
                    ) : (
                      <p className="text-base font-light text-gray-400">
                        {method.description}
                      </p>
                    )}
                    {method.contact && (
                      <div className="text-base font-light text-gray-400">
                        {method.contact}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex mx-w-full flex-col gap-6 rounded-lg border p-10 h-full mt-8 md:mt-48">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <div className="grid w-full items-center gap-3 font-bold">
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
                <div className="grid w-full items-center gap-3 font-bold">
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

              <div className="grid w-full items-center gap-3 mb-6 mt-6 font-bold">
                <label htmlFor="company">Company/Organization</label>
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company/Organization"
                  className="w-full p-1 border rounded"
                />
              </div>

              <div>
                <label htmlFor="inquiry" className="font-light mb-6 mt-6 gap-3">
                  Tell us about your inquiry *
                </label>
                <select
                  id="inquiry"
                  value={formData.inquiry}
                  onChange={handleChange}
                  className="w-full p-2 border rounded mt-4 font-light"
                >
                  <option value="">Select</option>
                  <option value="Request ">Request a product demo</option>
                  <option value="solutions">
                    Learn more about our solutions
                  </option>
                  <option value="pricing">Get a quote or pricing info</option>
                  <option value="support">Technical support</option>
                  <option value="partner">Become a partner</option>
                  <option value="General enquiry">General enquiry</option>
                </select>
              </div>

              <div className="grid w-full items-center gap-3  mb-6 mt-6">
                <label htmlFor="message" className="mb-2.5 font-bold">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Add any extra details you’d like to share."
                  className="w-full p-2 border rounded font-light mb-2.5"
                  rows="4"
                />
              </div>
              <div>
                <label className="text-sm font-light">
                  I agree to be contacted by Nube iO regarding my enquiry. *
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
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
