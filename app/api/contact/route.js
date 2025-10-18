// app/api/contact/route.js
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, mobile, message } = await request.json();

    // Log to check if environment variables are loaded
    if (!process.env.EMAIL_USER) {
      console.error("EMAIL_USER is not defined. Make sure your .env.local file is set up correctly and the server is restarted.");
      return NextResponse.json(
        { message: "Server configuration error." },
        { status: 500 }
      );
    }
    // IMPORTANT: Use environment variables for credentials
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST, // e.g., 'smtp.gmail.com'
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // your email address
        pass: process.env.EMAIL_PASS, // your email password or app password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "info.sribalajihomes@gmail.com", // Your receiving email
      subject: "New Contact Form Submission from Sri Balaji Homes",
      html: `
        <h3>New Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // Log the detailed error from nodemailer
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
