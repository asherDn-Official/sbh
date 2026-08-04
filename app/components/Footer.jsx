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
//             <Link href="#" className="hover:text-green-400">
//               <FaInstagram size={20} />
//             </Link>
//             <Link href="#" className="hover:text-green-400">
//               <FaYoutube size={20} />
//             </Link>
//           </div> */}
//         </div>

//         {/* Other Pages + Quick Links + Contact Us (65%) */}
//         <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-8">
//           {/* Other Pages */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Other Pages</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/" className="hover:text-green-400">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about-us" className="hover:text-green-400">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/properties/plots-in-katrambakkam"
//                   className="hover:text-green-400"
//                 >
//                   Properties
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/testimonials" className="hover:text-green-400">
//                   Testimonials
//                 </Link>
//               </li>
//             </ul>
//           </div>

          

//           {/* Quick Links */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="/privacy" className="hover:text-green-400">
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/terms" className="hover:text-green-400">
//                   Terms of Use
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/faq" className="hover:text-green-400">
//                   FAQ
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact-us" className="hover:text-green-400">
//                   Contact Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

          

//           {/* Contact Us */}
//           <div>
//             <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
//             <ul className="space-y-3 text-sm">
//               <li className="flex items-center space-x-2">
//                 <BsTelephone />
//                 <a
//                   href="tel:+917200940777"
//                   className="hover:text-green-400 transition-colors duration-200"
//                 >
//                   +91 72009 40777, {" "}
//                 </a>
//                 <a href="tel:+91638400006" className="hover:text-green-400 transition-colors duration-200">
//                   +91 63840 00006
//                 </a>
//               </li>
//               <li className="flex items-center space-x-2">
//                 <MdEmail />
//                 <div className="flex flex-col">
//                     <a
//                   href="mailto:info.sribalajihomes@gmail.com"
//                   className="hover:text-green-400 transition-colors duration-200"
//                 >
//                   info.sribalajihomes@gmail.com{" "},
//                 </a>
//                 <a href="mailto:sales@sribalajihomes.in" className="hover:text-green-400 transition-colors duration-200">
//                   sales@sribalajihomes.in
//                 </a>
//                 </div>
              
//               </li>
//               <li className="flex items-start space-x-2">
//                 <MdLocationOn className="mt-1" />
//                 <span>
//                   A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam,
//                   Chennai - 602 103.
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Section */}
//       <div className="pb-7 text-center text-lg border-t border-gray-700 pt-4">
//         Copyright © {year} Sri Balaji Homes. All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;

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
          <Image
            src="/assets/home/sri-balaji-homes-logo.webp"
            width={150}
            height={100}
            alt="Sri Balaji Homes – Resale Plots in Chennai"
            className="mb-4"
          />
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
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about-us" 
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/testimonials" 
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  Testimonials
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
                  href="/properties/plots-in-katrambakkam"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  Plots in Katrambakkam
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/plots-in-nandhambakkam"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  Plots in Nandhambakkam
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/plots-in-thaiyur-omr"
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  Plots in Thaiyur OMR
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
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq" 
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact-us" 
                  className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
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
                    className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                    aria-label="Call +91 72009 40777"
                  >
                    +91 72009 40777
                  </a>
                  <a
                    href="tel:+916384000006"
                    className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
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
                    className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
                  >
                    info.sribalajihomes@gmail.com
                  </a>
                  <a
                    href="mailto:sales@sribalajihomes.in"
                    className="text-gray-300 hover:text-green-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 rounded-sm"
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