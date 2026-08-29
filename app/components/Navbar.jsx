"use client";
import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [nearTop, setNearTop] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let ticking = false;
    const threshold = 80;
    const onMouseMove = (e) => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        if (window.innerWidth >= 768) {
          setNearTop(e.clientY <= threshold);
        } else {
          setNearTop(false);
        }
        ticking = false;
      });
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const showNav = atTop || nearTop;

  return (
    <>
      {/* Top contact bar (desktop only) */}
      <div
        className={`${
          isHome ? "bg-white" : "bg-[#f7f7f7]"
        } w-screen hidden md:block transition-all duration-500 ease-out`}
      >
        <div
          className={`${
            isHome ? "text-black" : "text-black"
          } flex justify-center gap-10 py-3 text-sm`}
        >
          <div className="flex items-center gap-2">
            <BsTelephone aria-hidden="true" />
            <a href="tel:+917200940777" title="Call Sri Balaji Homes at +91 72009 40777" className="hover:underline py-1">
              +91 72009 40777
            </a>
            <span>,</span>
            <a href="tel:+916384000006" title="Call Sri Balaji Homes at +91 63840 00006" className="hover:underline py-1">
              +91 63840 00006
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail aria-hidden="true" />
            <a href="mailto:info.sribalajihomes@gmail.com" title="Email Sri Balaji Homes" className="hover:underline py-1">
              info.sribalajihomes@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-none">
            <MdLocationOn className="flex-shrink-0" aria-hidden="true" />
            <span className="truncate md:whitespace-normal">
              A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam,
              Chennai - 602 103.
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`flex justify-between md:justify-center px-4 md:px-6 lg:px-6 pt-5 fixed w-screen items-center z-50 md:gap-5 lg:gap-20 transition-all duration-500 ease-out
        ${
          showNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        {/* Logo */}
        <Link href="/" title="Sri Balaji Homes Home Page" className="min-h-[48px] inline-flex items-center">
          <Image
            src={
              isHome
                ? "/assets/home/sri-balaji-homes-logo-white.webp"
                : "/assets/home/sri-balaji-homes-logo-dark.webp"
            }
            alt="Sri Balaji Homes – Resale Plots in Chennai"
            title="Sri Balaji Homes - Approved Resale Plots in Chennai"
            width={73}
            height={53}
            className="w-12 h-auto sm:w-[100px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex p-2 font-poppins text-white rounded-full bg-[#024b12] items-center">
          <Link href="/" title="Go to Home" className="px-4 py-2 hover:text-[#91eda5] min-h-[44px] inline-flex items-center">
            Home
          </Link>
          <Link href="/about-us" title="Learn more about Sri Balaji Homes" className="px-4 py-2 hover:text-[#91eda5] min-h-[44px] inline-flex items-center">
            About Us
          </Link>

          {/* Desktop Properties Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              aria-label="Toggle Properties Dropdown"
              className="flex items-center px-4 py-2 hover:text-[#91eda5] min-h-[44px] cursor-pointer"
            >
              Properties
              {dropdownOpen ? (
                <HiChevronUp className="ml-1" />
              ) : (
                <HiChevronDown className="ml-1" />
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-[#023a0d] rounded-2xl shadow-lg py-2 w-56 z-50">
                <Link
                  href="/properties"
                  title="View all approved resale plots in Chennai"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-[#91eda5] font-semibold border-b border-green-900 hover:bg-[#024b12]"
                >
                  All Properties Hub →
                </Link>
                <Link
                  href="/properties/approved-resale-plots-kattrambakkam-chennai"
                  title="Approved Resale Plots in Katrambakkam - Sri Balaji Homes"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-white hover:bg-[#024b12] hover:text-[#91eda5]"
                >
                  Katrambakkam
                </Link>
                <Link
                  href="/properties/cmda-approved-plots-nandhambakkam"
                  title="CMDA Approved Plots in Nandhambakkam - Sri Balaji Homes"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-white hover:bg-[#024b12] hover:text-[#91eda5]"
                >
                  Nandhambakkam
                </Link>
                <Link
                  href="/properties/dtcp-resale-plots-thaiyur-omr"
                  title="DTCP Approved Resale Plots in Thaiyur OMR - Sri Balaji Homes"
                  onClick={() => setDropdownOpen(false)}
                  className="block px-4 py-2.5 text-white hover:bg-[#024b12] hover:text-[#91eda5]"
                >
                  Thaiyur (OMR)
                </Link>
              </div>
            )}
          </div>

          <Link href="/testimonials" title="Read Sri Balaji Homes customer reviews" className="px-4 py-2 hover:text-[#91eda5] min-h-[44px] inline-flex items-center">
            Testimonials
          </Link>
          <Link href="/contact-us" title="Contact Sri Balaji Homes" className="px-4 py-2 hover:text-[#91eda5] min-h-[44px] inline-flex items-center">
            Contact Us
          </Link>
        </div>

        {/* Enquire Now (Desktop) */}
        <div className="hidden md:flex items-center h-full">
          <Link
            href="/contact-us"
            title="Book site visit or enquire about resale plots"
            className={`rounded-full border flex items-center justify-center min-h-[48px] bg-transparent py-2.5 px-6  
            transition-all duration-300 ease-in-out relative overflow-hidden font-semibold
            ${
              isHome ? "border-white text-white" : "border-black text-[#024b12]"
            }
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:rounded-full
            before:transition-all before:duration-500 before:ease-in-out before:-z-10
            ${
              isHome
                ? "before:bg-white hover:text-[#024b12] hover:before:w-full"
                : "before:bg-[#024b12] hover:text-white hover:before:w-full"
            }`}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden bg-[#024b12] rounded-lg p-3 min-w-[48px] min-h-[48px] flex items-center justify-center cursor-pointer"
        >
          {menuOpen ? (
            <HiX className="text-white text-2xl" />
          ) : (
            <HiMenu className="text-white text-2xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full bg-[#024b12] text-white flex flex-col items-start p-6 space-y-4 md:hidden z-40 animate-slideDown font-poppins shadow-2xl">
          <Link
            href="/"
            title="Go to Home page"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#91eda5] py-2 min-h-[48px] w-full flex items-center text-lg"
          >
            Home
          </Link>
          <Link
            href="/about-us"
            title="Learn more about Sri Balaji Homes"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#91eda5] py-2 min-h-[48px] w-full flex items-center text-lg"
          >
            About Us
          </Link>

          {/* Mobile Properties Dropdown */}
          <div className="w-full flex flex-col items-start">
            <button
              onClick={() => setMobileDropdownOpen((prev) => !prev)}
              aria-label="Toggle mobile properties list"
              className="flex items-center justify-between gap-1 w-full py-2 min-h-[48px] text-lg hover:text-[#91eda5]"
            >
              Properties
              {mobileDropdownOpen ? (
                <HiChevronUp className="ml-1" />
              ) : (
                <HiChevronDown className="ml-1" />
              )}
            </button>

            {mobileDropdownOpen && (
              <div className="flex flex-col items-start w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden my-2">
                <Link
                  href="/properties"
                  title="All approved resale plots in Chennai"
                  className="w-full text-start px-4 py-3 min-h-[48px] flex items-center text-[#024b12] font-bold bg-green-50 border-b border-gray-200 hover:bg-[#024b12] hover:text-white transition-colors duration-300"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  All Properties Hub →
                </Link>
                <Link
                  href="/properties/approved-resale-plots-kattrambakkam-chennai"
                  title="Resale plots in Katrambakkam"
                  className="w-full text-start px-4 py-3 min-h-[48px] flex items-center text-[#024b12] font-medium hover:bg-[#024b12] hover:text-white transition-colors duration-300"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Katrambakkam
                </Link>
                <div className="h-px w-full bg-gray-200"></div>
                <Link
                  href="/properties/cmda-approved-plots-nandhambakkam"
                  title="Resale plots in Nandhambakkam"
                  className="w-full text-start px-4 py-3 min-h-[48px] flex items-center text-[#024b12] font-medium hover:bg-[#024b12] hover:text-white transition-colors duration-300"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Nandhambakkam
                </Link>
                <div className="h-px w-full bg-gray-200"></div>
                <Link
                  href="/properties/dtcp-resale-plots-thaiyur-omr"
                  title="Resale plots in Thaiyur OMR"
                  className="w-full text-start px-4 py-3 min-h-[48px] flex items-center text-[#024b12] font-medium hover:bg-[#024b12] hover:text-white transition-colors duration-300"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Thaiyur (OMR)
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/testimonials"
            title="Sri Balaji Homes reviews & testimonials"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#91eda5] py-2 min-h-[48px] w-full flex items-center text-lg"
          >
            Testimonials
          </Link>
          <Link
            href="/contact-us"
            title="Contact Sri Balaji Homes team"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#91eda5] py-2 min-h-[48px] w-full flex items-center text-lg"
          >
            Contact Us
          </Link>
          <Link
            href="/contact-us"
            title="Enquire now with Sri Balaji Homes"
            onClick={() => setMenuOpen(false)}
            className="rounded-full border flex items-center justify-center min-h-[48px] w-full bg-white text-[#024b12] py-3 px-6 mt-3 font-semibold text-center"
          >
            Enquire Now
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;