/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React, { useState } from "react";
import Button from "../elements/Button/index";

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
    <section className="mt-12 pb-12 md:mt-28 lg:pl-32 px-6">
      <div className="container">
        <div className="mx-auto flex max-w-full flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-full flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-4xl font-bold text-theme-blue lg:mb-1 lg:text-5xl mt-40 max-w-2xl">
                Unlock Your Buildings Potential
              </h1>
              <p className="text-muted-foreground font-light text-gray-400 text-lg max-w-2xl">
                To craft a bespoke experience and maximize the value of your
                personalized demo, please provide us with a few details
              </p>

              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 mt-6 text-theme-teal font-bold text-2xl lg:text-left">
                  Contact Details
                </h3>
                <ul className="ml-4 list-disc text-left">
                  <li>
                    <span className="font-bold text-lg">Phone: </span>
                    <span className="font-light text-gray-400 text-lg">
                      +123-456-7890
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-lg">Email: </span>
                    <a
                      href="mailto:info@nubeio.com"
                      className="text-theme-teal underline text-lg"
                    >
                      info@nubeio.com
                    </a>
                  </li>
                  <li>
                    <span className="font-bold text-lg">Address: </span>
                    <span className="font-light text-gray-400 text-lg">
                      123 Building Tech Way, Suite 456, Metropolis, AU
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 mt-6 text-teal-600 text-2xl font-semibold lg:text-left">
                  Business Hours
                </h3>
                <ul className="md:ml-4 list-disc text-left">
                  <li>
                    <span className="font-bold text-lg">
                      Monday to Friday:{" "}
                    </span>
                    <span className="font-light text-gray-400 text-lg">
                      9:00 AM - 5:00 PM
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-lg">
                      Saturday and Sunday{" "}
                    </span>
                    <span className="font-light text-gray-400 text-lg">
                      Closed
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mx-auto w-fit lg:mx-0">
                <h3 className="mb-6 mt-6 text-teal-600 text-2xl font-semibold lg:text-left">
                  Stay Connected
                </h3>
                <span className="font-light text-gray-400 text-lg">
                  Follow us on our social media platforms to stay updated and
                  part of our community:{" "}
                </span>
                <ul className="ml-4 list-disc text-left">
                  <li>
                    <span className="font-bold text-lg">LinkedIn </span>
                    <a
                      href="https://linkedin.com/company/nubeio"
                      className="underline text-theme-teal text-lg"
                    >
                      Nube iO LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
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
