"use client";
import Image from "next/image";
import Link from "next/link";
import { BsTelephone } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true); // Track if page is at the very top
  const [nearTop, setNearTop] = useState(false); // Cursor is near the top edge
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Listen for scroll and update 'atTop'
  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY <= 8; // small threshold for bounce
      setAtTop(top);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect if cursor moves near the top (desktop behavior)
  useEffect(() => {
    let ticking = false;
    const threshold = 80; // px from top

    const onMouseMove = (e) => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        // Enable only on larger screens; on mobile there is no cursor
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

  const showNav = atTop || nearTop; // visible at top, or when cursor near top

  return (
    <>
      {/* Top contact bar (only visible on md and above) */}
      
        <div
          className={`${isHome?"bg-white":"bg-[#f7f7f7]"} w-screen hidden md:block transition-all duration-500 ease-out ${
            atTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-3 pointer-events-none"
          }`}
        >
          <div className={`${isHome?"text-black":"text-black"} flex justify-center gap-10 py-3 text-sm`}>
            <div className="flex items-center gap-2">
              <BsTelephone />
              <span>+91 89656895632</span>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail />
              <span>realbalaji999@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-none">
              <MdLocationOn className="flex-shrink-0" />
              <span className="truncate md:whitespace-normal md:overflow-visible md:text-ellipsis-none">
                A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam,
                Chennai - 602 103.
              </span>
            </div>
          </div>
        </div>
   

      {/* Main Navbar */}
      <div
        className={`flex justify-between md:justify-center px-2 md:px-6  lg:px-6 pt-5 absolute w-screen items-center z-50 md:gap-5 lg:gap-20 xl:gap-50 2xl:gap-60 transition-all duration-500 ease-out
        ${
          showNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }
        `}
      >
        {/* Logo */}
        <div>
          <Image
            src={isHome?"/assets/home/sbhwhitelogo1.png":"/assets/home/sbhlogo.svg"}
            alt="Logo"
            width={73}
            height={53}
            className="w-12 h-auto sm:w-[73px]" // 48px on mobile, original on sm+
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex p-3 font-poppins text-white rounded-full bg-[#024b12]">
          <Link
            href="/"
            className="md:px-2 lg:px-3 xl:px-5   xl:text-sm 2xl:text-lg"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="md:px-2 lg:px-3 xl:px-5   xl:text-sm 2xl:text-lg"
          >
            About Us
          </Link>
          <Link
            href="/properties"
            className="md:px-2 lg:px-3 xl:px-5  xl:text-sm 2xl:text-lg"
          >
            Properties
          </Link>
          <Link
            href="/testimonial"
            className="md:px-2 lg:px-3 xl:px-5  xl:text-sm 2xl:text-lg"
          >
            Testimonial
          </Link>
          <Link
            href="/contact"
            className="md:px-2 lg:px-3 xl:px-5  xl:text-sm 2xl:text-lg"
          >
            Contact Us
          </Link>
        </div>

        {/* Enquire Now Button (Desktop only) */}
        <div className="hidden md:block">
          <Link
            href="/contact"
           className={`rounded-full border-[1px] flex bg-transparent py-2 px-6 mt-3 
  ${isHome ? "border-white text-white" : "border-black text-[#024b12]"}`}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
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

      {/* Mobile Menu (Dropdown) */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#024b12] text-white flex flex-col items-center py-5 space-y-5 md:hidden z-40 animate-slideDown">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/properties" onClick={() => setMenuOpen(false)}>
            Properties
          </Link>
          <Link href="/testimonial" onClick={() => setMenuOpen(false)}>
            Testimonial
          </Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}>
            Contact Us
          </Link>
          <Link
            href="/contact"
          className={`rounded-full border flex bg-transparent py-2 px-6 mt-3 
  ${isHome ? "border-white text-white" : "border-white text-white"}`}

            onClick={() => setMenuOpen(false)}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
