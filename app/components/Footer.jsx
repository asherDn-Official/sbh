// "use client";

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
// import { MdEmail, MdLocationOn } from "react-icons/md";
// import { BsTelephone } from "react-icons/bs";
// import { useState, useEffect } from "react";


// function Footer() {
//   const [year, setYear] = useState("");

//   useEffect(() => {
//     setYear(new Date().getFullYear());
//   }, []);

//   return (
//     <footer className="bg-black text-white">
//       {/* Top Section */}
//       <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
//         {/* Logo + About (35%) */}
//         <div className="md:w-[40%]">
//           <Image
//             src="/assets/home/SBH-LOGO.webp"
//             width={150}
//             height={100}
//             alt="Sri Balaji Homes – Resale Plots in Chennai"
//             className="mb-4"
//           />
//           <p className="text-sm leading-relaxed mb-4">
//   Looking to invest in a resale plot in Chennai? We guide you every
//   step of the way.
// </p>
//           {/* <div className="flex space-x-4">
//             <Link href="#" className="hover:text-green-400">
//               <FaFacebookF size={20} />
//             </Link>
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Logo + About (30%) */}
        <div className="md:w-[30%]">
          <Link href="/" title="Sri Balaji Homes Home Page">
            <Image
              src="/assets/home/sri-balaji-homes-logo.webp"
              width={150}
              height={100}
              alt="Sri Balaji Homes – Resale Plots in Chennai"
              title="Sri Balaji Homes - Verified Resale Plots in Chennai"
              className="mb-4"
            />
          </Link>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            Looking to invest in a resale plot in Chennai? We guide you every
            step of the way.
          </p>
        </div>

        {/* Links & Contact Section (70%) */}
        <nav aria-label="Footer Navigation" className="md:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Other Pages */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Other Pages</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/" 
                  title="Sri Balaji Homes Home"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about-us" 
                  title="Learn more about Sri Balaji Homes"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  title="Read Sri Balaji Homes customer reviews"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Properties */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Our Properties</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/properties/approved-resale-plots-kattrambakkam-chennai"
                  title="DTCP Approved Resale Plots in Kattrambakkam"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  DTCP Approved Plots in Kattrambakkam
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/cmda-approved-plots-nandhambakkam"
                  title="CMDA Approved Plots in Nandhambakkam"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  CMDA Approved Plots in Nandhambakkam
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/dtcp-resale-plots-thaiyur-omr"
                  title="Residential Resale Plots in Thaiyur, OMR"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  Resale Plots in Thaiyur (OMR)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link 
                  href="/privacy" 
                  title="Sri Balaji Homes Privacy Policy"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  title="Sri Balaji Homes Terms of Use"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  title="Frequently Asked Questions about Resale Plots"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact-us" 
                  title="Contact Sri Balaji Homes Team"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1.5 min-h-[44px] inline-flex items-center"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h2 className="font-semibold text-lg mb-4">Contact Us</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <BsTelephone className="mt-1 shrink-0 text-green-400" aria-hidden="true" />
                <div className="flex flex-col">
                  <a
                    href="tel:+917200940777"
                    title="Call Sri Balaji Homes at +91 72009 40777"
                    rel="nofollow"
                    className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1 min-h-[44px] inline-flex items-center"
                    aria-label="Call +91 72009 40777"
                  >
                    +91 72009 40777
                  </a>
                  <a
                    href="tel:+916384000006"
                    title="Call Sri Balaji Homes at +91 63840 00006"
                    rel="nofollow"
                    className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1 min-h-[44px] inline-flex items-center"
                    aria-label="Call +91 63840 00006"
                  >
                    +91 63840 00006
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-2">
                <MdEmail className="mt-1 shrink-0 text-green-400" aria-hidden="true" />
                <div className="flex flex-col">
                  <a
                    href="mailto:info.sribalajihomes@gmail.com"
                    title="Email Sri Balaji Homes Support"
                    rel="nofollow"
                    className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1 min-h-[44px] inline-flex items-center"
                  >
                    info.sribalajihomes@gmail.com
                  </a>
                  <a
                    href="mailto:sales@sribalajihomes.in"
                    title="Email Sri Balaji Homes Sales Team"
                    rel="nofollow"
                    className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm py-1 min-h-[44px] inline-flex items-center"
                  >
                    sales@sribalajihomes.in
                  </a>
                </div>
              </li>

              <li className="flex items-start space-x-2">
                <MdLocationOn className="mt-1 shrink-0 text-green-400" aria-hidden="true" />
                <span className="text-gray-300">
                  A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam,
                  Chennai - 602 103.
                </span>
              </li>
            </ul>
          </div>

        </nav>
      </div>

      {/* Bottom Section */}
      <div className="pb-7 text-center text-sm border-t border-gray-800 text-gray-400 pt-4">
        Copyright © {year || "2026"} Sri Balaji Homes. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;