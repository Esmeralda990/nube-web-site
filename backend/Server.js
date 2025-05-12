const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: "http://localhost:3000",
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

app.post("/contact-form", async (req, res) => {
  const { name, email, phone, company, inquiry, message } = req.body;

  const isHuman = await verifyRecaptchaToken(token);
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
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Required fields are missing." });
    }
    res.status(200).json({ message: "Email sent successfully", info });
  });
});

app.post("/Get-demo", async (req, res) => {
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

  const mailOptions = {
    from: email,
    to: process.env.EMAIL,
    subject: `New demo request ${name}`,
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

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: "Error sending request", error });
    }
    res.status(200).json({ message: "Request submitted successfully", info });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
