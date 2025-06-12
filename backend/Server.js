/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim())
  : [];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
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
    console.error(" Error verifying reCAPTCHA:", err);
    return false;
  }
}

app.post("/contact-form", async (req, res) => {
  const {
    name,
    email,
    phone,
    company,
    inquiry,
    message,
    token,
    contactAgreement,
    marketingAgreement,
  } = req.body;

  if (!name || !email || !inquiry || !message) {
    return res.status(400).json({
      status: "error",
      message: "Required fields are missing.",
    });
  }

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
      Message: ${message}
      Accept contact: ${contactAgreement ? "Yes" : "No"}
      Accept marketing: ${marketingAgreement ? "Yes" : "No"}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({
        status: "error",
        message: "Error sending email.",
        error,
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Email sent successfully.",
      info,
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
