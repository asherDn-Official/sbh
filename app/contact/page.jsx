"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
return (
    <section className="pt-20 md:pt-30 lg:pt-30 placeholder-sky-300 bg-gradient-to-b from-white to-gray-50">
      {/* Heading */}
      <div className=" lg:px-20 ">
              <div className="text-center px-4 mb-16">
        <h2 className="text-4xl font-serif font-semibold mb-4 text-gray-900">
          Contact Us
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Have questions or ready to invest? Contact Sri Balaji Homes for expert
          guidance, site visits, and complete plot-buying support.
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
                +91 74011 71777
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
                realbalaji999@gmail.com
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
        </div>

        {/* Right - Form */}
        <div className="bg-white shadow-lg lg:rounded-3xl px-5 py-10 lg:py-15 lg:px-20  border border-gray-100">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900">
            Get in Touch
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3  bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full px-4 py-3  bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
            />
            <input
              type="email"
              placeholder="Mail Id"
              className="w-full px-4 py-3  bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
            />
            <textarea
              placeholder="Write Message"
              rows={4}
              className="w-full px-4 py-3  bg-gray-50 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-green-600 outline-none transition"
            ></textarea>
            <button
              type="submit"
              className="w-40 bg-green-700 text-white py-3 rounded-lg font-medium shadow-md hover:bg-green-800 hover:shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      </div>

      {/* Map Section */}
      <div className="mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4738142679956!2d80.06716977481967!3d12.81756631962164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a528bc7e77c85c3%3A0x9c3bff4466e4b3d!2sPallavan%20Nagar%2C%20Katrambakkam%2C%20Tamil%20Nadu%20602105!5e0!3m2!1sen!2sin!4v1693643319271!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-xl shadow-lg"
        ></iframe>
      </div>
    </section>
  );
}