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
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop dropdown
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // mobile dropdown
  const dropdownRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Track if page is at top
  useEffect(() => {
    const onScroll = () => {
      setAtTop(window.scrollY === 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect cursor near top (desktop only)
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

  // Close desktop dropdown if clicked outside
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
            <BsTelephone />
            <span>+91 7200940777</span>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            <span>info.sribalajihomes@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-none">
            <MdLocationOn className="flex-shrink-0" />
            <span className="truncate md:whitespace-normal">
              A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam,
              Chennai - 602 103.
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`flex justify-between md:justify-center px-2 md:px-6 lg:px-6 pt-5 fixed w-screen items-center z-50 md:gap-5 lg:gap-20 transition-all duration-500 ease-out
        ${
          showNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        {/* Logo */}
        <div>
          <Image
            src={
              isHome
                ? "/assets/home/sbhwhitelogo1.png"
                : "/assets/home/sbhlogo.svg"
            }
            alt="Logo"
            width={73}
            height={53}
            className="w-12 h-auto sm:w-[73px]"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex p-3 font-poppins text-white rounded-full bg-[#024b12]">
          <Link href="/" className="px-3 hover:text-[#91eda5]">
            Home
          </Link>
          <Link href="/about" className="px-3 hover:text-[#91eda5]">
            About Us
          </Link>

          {/* Desktop Properties Dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center px-3 hover:text-[#91eda5]"
            >
              Properties
              {dropdownOpen ? (
                <HiChevronUp className="ml-1" />
              ) : (
                <HiChevronDown className="ml-1" />
              )}
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 mt-2 bg-[#023a0d] rounded-2xl shadow-lg py-2 w-48">
                <Link
                  href="/properties/katrambakkam"
                  className="block px-4 py-2 text-white hover:bg-[#024b12] hover:text-[#91eda5]"
                >
                  Katrambakkam
                </Link>
                <Link
                  href="/properties/thaiyur"
                  className="block px-4 py-2 text-white hover:bg-[#024b12] hover:text-[#91eda5]"
                >
                  Thaiyur
                </Link>
              </div>
            )}
          </div>

          <Link href="/testimonial" className="px-3 hover:text-[#91eda5]">
            Testimonial
          </Link>
          <Link href="/contact" className="px-3 hover:text-[#91eda5]">
            Contact Us
          </Link>
        </div>

        {/* Enquire Now (Desktop) */}
        <div className="hidden md:flex items-center h-full">
          <Link
            href="/contact"
            className={`rounded-full border flex bg-transparent py-2 px-6  
            transition-all duration-300 ease-in-out relative overflow-hidden
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

        {/* Mobile Hamburger */}
        <div className="md:hidden bg-[#024b12] rounded-lg p-1">
          {menuOpen ? (
            <HiX
              className="text-white text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <HiMenu
              className="text-white text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 p-15  w-full bg-[#024b12] text-white flex flex-col items-start py-15 space-y-5 md:hidden z-40 animate-slideDown font-poppins">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#91eda5]"
          >
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          {/* Mobile Properties Dropdown */}
          <div className="w-full flex flex-col items-start">
            <button
              onClick={() => setMobileDropdownOpen((prev) => !prev)}
              className="flex items-center justify-start gap-1 w-full py-2"
            >
              Properties
              {mobileDropdownOpen ? (
                <HiChevronUp className="ml-1" />
              ) : (
                <HiChevronDown className="ml-1" />
              )}
            </button>

            {mobileDropdownOpen && (
              <div className="flex flex-col items-start w-56 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
                <Link
                  href="/properties/katrambakkam"
                  className="w-full text-start px-4 py-3 text-[#024b12] font-medium hover:bg-[#024b12] hover:text-white transition-colors duration-300"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Katrambakkam
                </Link>
                <div className="h-px w-full bg-gray-200"></div>
                <Link
                  href="/properties/thaiyur"
                  className="w-full text-start px-4 py-3 text-[#024b12] font-medium hover:bg-[#024b12] hover:text-white transition-colors duration-300"
                  onClick={() => {
                    setMenuOpen(false);
                    setMobileDropdownOpen(false);
                  }}
                >
                  Thaiyur
                </Link>
              </div>
            )}
          </div>

          <Link href="/testimonial" onClick={() => setMenuOpen(false)}>
            Testimonial
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`rounded-full border flex bg-transparent py-2 px-6 mt-3 
              transition-all duration-300 ease-in-out relative overflow-hidden
              border-white text-white
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:rounded-full
              before:transition-all before:duration-500 before:ease-in-out before:-z-10
              before:bg-white hover:text-[#024b12] hover:before:w-full`}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
