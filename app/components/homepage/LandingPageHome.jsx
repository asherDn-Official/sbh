import Image from "next/image";
import React from "react";
import bgImage from "../../../public/assets/home/approved-resale-plots-chennai-hero.webp";
import bgMobileImage from "../../../public/assets/home/mobileHome.webp";
import people from "../../../public/assets/home/people.webp";
import Link from "next/link";

export default function LandingPageHome() {
  return (
    <div className="relative min-h-90 md:min-h-screen">
      {/* Mobile/Tablet background */}
      <Image
        src={bgMobileImage}
        alt="CMDA & DTCP Approved Resale Plots in Chennai Mobile Banner"
        title="CMDA & DTCP Approved Resale Plots in Chennai - Sri Balaji Homes"
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        quality={80}
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 md:hidden"
      />

      {/* Overlay image */}
      <Image
        src={people}
        alt="Happy property buyers with Sri Balaji Homes"
        title="Happy property buyers with Sri Balaji Homes"
        width={320}
        height={220}
        className="absolute bottom-4 right-3 md:hidden"
      />

      {/* Desktop background */}
      <Image
        src={bgImage}
        alt="Approved resale plot layout in Chennai with marked boundaries"
        title="Approved Resale Plots in Chennai - Sri Balaji Homes"
        fill
        priority={true}
        fetchPriority="high"
        sizes="100vw"
        quality={80}
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 hidden md:block"
      />

      {/* Overlay container */}
      <div className="absolute inset-0 flex flex-col justify-end w-full text-white p-5 md:pb-10 md:pl-10 lg:pl-16 xl:pl-24">
        {/* Mobile gradient overlay */}
        <div className="absolute inset-0 md:hidden bg-[linear-gradient(180.8deg,rgba(24,43,0,0)_40%,rgba(24,43,0,0.9)_100%),linear-gradient(250.77deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_100%)]"></div>

        {/* Glassmorphism Text Container (Desktop) */}
        <div className="relative text-lg md:text-2xl lg:text-3xl md:w-[55%] xl:w-[48%] space-y-3 md:space-y-4 leading-snug z-10 p-5 md:p-7 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-white drop-shadow-md">
            CMDA & DTCP Approved Resale Plots in Chennai
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#91eda5] drop-shadow-sm">
            You see Land, We See Plan
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-100 font-normal leading-relaxed drop-shadow-sm">
            Buying a resale plot in Chennai comes with a real risk most listings don't talk about: unclear titles, pending litigation, or approvals that don't hold up under scrutiny. Sri Balaji Homes exists to remove that risk. Every plot we list is CMDA or DTCP approved, verified for clear title and zero encumbrance, and sold directly with zero brokerage — across our three active locations in Katrambakkam, Nandhambakkam, and Thaiyur, OMR.
          </p>

          <div className="pt-2 md:pt-3">
            <Link href="/contact-us" title="Book a free site visit with Sri Balaji Homes">
              <button className="bg-white text-black min-h-[44px] min-w-[44px] inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-full font-poppins border-[#024b12] border-2 shadow-lg text-xs sm:text-sm lg:text-base hover:bg-gray-100 transition cursor-pointer font-semibold">
                Book a Free Site Visit
              </button>
            </Link>
          </div>
        </div>

        {/* Right badge */}
        <div className="text-sm md:text-md lg:text-lg md:flex justify-end items-end hidden">
          <div>
            <span className="bg-white/85 text-black px-6 lg:px-10 py-2 rounded-bl-full rounded-tl-full font-poppins flex font-medium">
              CMDA & DTCP Approved Plots | Zero Brokerage
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}