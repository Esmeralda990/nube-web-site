/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: ["http://localhost:3000", "https://nube-web-site.vercel.app"],
  methods: "GET,POST",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

async function verifyRecaptchaToken(token) {
  const secretKey = process.env.RECAPTCHA_SECRET;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `secret=${secretKey}&response=${token}`,
      }
    );

    const data = await response.json();

    return data.success && (data.score === undefined || data.score >= 0.5);
  } catch (err) {
    console.error("❌ Error verificando reCAPTCHA:", err);
    return false;
  }
}

app.post("/contact-form", async (req, res) => {
  const { name, email, phone, company, inquiry, message, token } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Required fields are missing." });
  }

  const isDev = process.env.NODE_ENV !== "production";
  const isHuman = isDev ? true : await verifyRecaptchaToken(token);
  if (!isHuman) {
    return res.status(400).json({ message: "reCAPTCHA verification failed" });
  }

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New contact message from ${name}`,
    text: `
      Name: ${name}
      Mail: ${email}
      Phone: ${phone}
      Company: ${company}
      Inquiry: ${inquiry}
      Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Error sending email", error });
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
});

app.post("/get-demo", async (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    inquiry,
    message,
    contactAgreement,
    marketingAgreement,
    token,
  } = req.body;

  const isDev = process.env.NODE_ENV !== "production";
  const isHuman = isDev ? true : await verifyRecaptchaToken(token);
  if (!isHuman) {
    return res.status(400).json({ message: "reCAPTCHA verification failed." });
  }

  const DemoMailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New DEMO request from ${name}`,
    text: `
      Name: ${name}
      Mail: ${email}
      Phone: ${phone}
      Company: ${company}
      What do you want to see in the demo?: ${inquiry}
      Preferred date or time: ${message}
      Accept contact: ${contactAgreement ? "Yes" : "No"}
      Accept marketing: ${marketingAgreement ? "Yes" : "No"}
    `,
  };

  transporter.sendMail(DemoMailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Error sending request", error });
    }
    res.status(200).json({ message: "Request submitted successfully", info });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
