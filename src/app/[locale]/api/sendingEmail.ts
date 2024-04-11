import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

let lastRequestTime = 0;
const limitTimeWindow = 5000; //5s

const sendingEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      //time difference since last req
      const currTime = Date.now();
      const timeDiff = currTime - lastRequestTime;

      //validation
      if (!name || !email || !message) {
        res.status(400).json({ message: "All fields are required." });
        return;
      }
      //email
      if (!/\S+@\S+\.\S+/.test(email)) {
        res.status(422).json({ message: "Invalid Email format" });

        return;
      }

      if (timeDiff < limitTimeWindow) {
        //429 status: too many requests
        return res
          .status(429)
          .json({ message: "Too many requests, please try again later." });
      }

      //update last request time
      lastRequestTime = currTime;

      //nodemailer
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      });

      const emailOptions = {
        from: `${email}`,
        to: process.env.EMAIL,
        subject: "New Contact Form Submission",
        text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}`,
      };

      await transporter.sendMail(emailOptions);
      res.status(200).json({ message: "Email sent successfully" });
    } catch (err) {
      res.status(500).json({ message: "Error sending email", error: err });
      console.log(err);
    }
  } else {
    res.status(405).json({ message: "Method not Allowed" });
  }
};

export default sendingEmail;
