"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required.";
    if (!formData.mobile) {
      tempErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      tempErrors.mobile = "Mobile number must be 10 digits.";
    }
    if (!formData.email) {
      tempErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
    }
    if (!formData.message) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Here you would call your API to send the email
      console.log("Form is valid, submitting...", formData);
      // After submission, you might want to reset the form or show a success message.
      // setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-20 md:pt-30 lg:pt-30 placeholder-sky-300 bg-gradient-to-b from-white to-gray-50">
      {/* Heading */}
      <div className=" lg:px-20 ">
        <div className="text-center px-4 mb-16">
          <h2 className="text-4xl font-serif font-semibold mb-4 text-gray-900">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Have questions or ready to invest? Contact Sri Balaji Homes for
            expert guidance, site visits, and complete plot-buying support.
          </p>
        </div>

        {/* Contact Info + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start md:px-20  lg:px-35">
          {/* Left - Contact Info */}
          <div className="space-y-10 flex flex-col h-full pt-20 lg:pl-20">
            {/* Phone */}
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-12 h-12 bg-green-50 text-green-700 rounded-full shadow-sm">
                <FaPhoneAlt className="text-xl" />
              </span>
              <div>
                <p className="text-gray-500 text-sm">Have any question?</p>
                <p className="text-lg font-semibold text-gray-900">
                  +91 7200940777
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-12 h-12 bg-green-50 text-green-700 rounded-full shadow-sm">
                <FaEnvelope className="text-xl" />
              </span>
              <div>
                <p className="text-gray-500 text-sm">Write Email</p>
                <p className="text-lg font-semibold text-gray-900">
                  info.sribalajihomes@gmail.com
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-5">
              <span className="flex items-center justify-center w-20 h-11 bg-green-50 text-green-700 rounded-full shadow-sm">
                <FaMapMarkerAlt className="text-xl" />
              </span>
              <div>
                <p className="text-gray-500 text-sm">Visit Now</p>
                <p className="text-lg font-semibold text-gray-900 ">
                  A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam,
                  Chennai - 602 103.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-5 mx-auto">
              <div className="flex items-center justify-center space-x-4">
                <Link href="#" className="hover:text-green-400">
                  <FaFacebookF size={20} />
                </Link>
                <Link href="#" className="hover:text-green-400">
                  <FaInstagram size={20} />
                </Link>
                <Link href="#" className="hover:text-green-400">
                  <FaYoutube size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white shadow-lg lg:rounded-3xl px-5 py-10 lg:py-15 lg:px-20  border border-gray-100">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Get in Touch
            </h3>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition ${
                    errors.name ? "border-red-500 ring-red-500" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile Number"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition ${
                    errors.mobile ? "border-red-500 ring-red-500" : ""
                  }`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Mail Id"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition ${
                    errors.email ? "border-red-500 ring-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Write Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition ${
                    errors.message ? "border-red-500 ring-red-500" : ""
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-40 bg-green-700 text-white py-3 rounded-lg font-medium shadow-md hover:bg-green-800 hover:shadow-lg transition-all disabled:bg-gray-400"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8414762254033!2d80.0295029!3d12.9819891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528bb7a16ae543%3A0x10ae9addafa574fd!2sSRI%20BALAJI%20HOMES!5e0!3m2!1sen!2sin!4v1760514644539!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-xl shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}
