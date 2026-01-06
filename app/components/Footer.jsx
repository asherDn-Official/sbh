import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row gap-8">
        {/* Logo + About (35%) */}
        <div className="md:w-[40%]">
          <Image
            src="/assets/home/SBH-LOGO.jpg"
            width={150}
            height={100}
            alt="Sri Balaji Homes Logo"
            className="mb-4"
          />
          <p className="text-sm leading-relaxed mb-4">
            Looking to invest in a plot, move into a resale plots, We guide you
            every step of the way.
          </p>
          {/* <div className="flex space-x-4">
            <Link href="#" className="hover:text-green-400">
              <FaFacebookF size={20} />
            </Link>
            <Link href="#" className="hover:text-green-400">
              <FaInstagram size={20} />
            </Link>
            <Link href="#" className="hover:text-green-400">
              <FaYoutube size={20} />
            </Link>
          </div> */}
        </div>

        {/* Other Pages + Quick Links + Contact Us (65%) */}
        <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Other Pages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Other Pages</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/katrambakkam"
                  className="hover:text-green-400"
                >
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/testimonial" className="hover:text-green-400">
                  Testimonial
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-green-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-400">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-green-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <BsTelephone />
                <a
                  href="tel:+917200940777"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  +91 7200940777
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <MdEmail />
                <a
                  href="mailto:info.sribalajihomes@gmail.com"
                  className="hover:text-green-400 transition-colors duration-200"
                >
                  info.sribalajihomes@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MdLocationOn className="mt-1" />
                <span>
                  A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam,
                  Chennai - 602 103.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="pb-7 text-center text-lg border-t border-gray-700 pt-4">
        Copyright © {year} Sri Balaji Homes. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
