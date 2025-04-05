/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable react/no-array-index-key */
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
      "Prefer to chat? Give us a call Monday–Friday, 9 AM–5 PM (PST).",
    contact: "+61 2 7906 8414",
  },
  {
    icon: Building,
    title: "Address",
    description:
      "Stop by our office @ 123 Productivity Ave, San Francisco, CA 94105",
  },
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
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
        phone: "",
        company: "",
        role: "",
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
                    <h3 className="text-xl tracking-[-0.96px]  text-theme-teal">
                      {method.title}
                    </h3>
                  </div>
                  <div className="space-y-2 tracking-[-0.32px]">
                    <p className="text-base font-light text-gray-400">
                      {method.description}
                    </p>
                    <div className="text-base font-light text-gray-400">
                      {method.contact}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto flex mx-w-full flex-col gap-6 rounded-lg border p-10 h-full mt-8 md:mt-48">
            <form onSubmit={handleSubmit}>
              <div className="flex gap-8">
                <div className="grid w-full items-center gap-1.5 ">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="w-full p-1 border rounded"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full p-1 border rounded"
                  />
                </div>
              </div>

              <div className="grid w-full items-center gap-1.5 mb-6 mt-6 ">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full p-1 border rounded"
                />
              </div>

              <div className="grid w-full items-center gap-1.5 mb-6 mt-6 ">
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
                <label htmlFor="role" className="mb-2.5 font-medium mb-6 mt-6 ">
                  Your Role
                </label>
                <select
                  id="role"
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
                  <option value="Engineering Office">Engineering Office</option>
                  <option value="Installer">Installer</option>
                  <option value="Integrator">Integrator</option>
                  <option value="Proptech">Proptech</option>
                  <option value="Other">Other</option>
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

              <Button
                type="submit"
                className="w-full bg-theme-teal text-white py-2 rounded"
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
