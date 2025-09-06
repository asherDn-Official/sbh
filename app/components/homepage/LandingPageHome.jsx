import Image from "next/image";
import React from "react";
import bgImage from "../../../public/assets/home/GroupHome1.png";
import bgMobileImage from "../../../public/assets/home/mobileHome.png";
import people from "../../../public/assets/home/people.png";

export default function LandingPageHome() {
  return (
    <div className="relative min-h-90 md:min-h-screen">
      {/* Mobile/Tablet background (up to 767px) */}
      <Image
        src={bgMobileImage}
        alt="Mobile Background"
        fill
        priority
        quality={100}
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 md:hidden"
      />

      {/* Overlay image bottom-right (only mobile/tablet) */}
      <Image
        src={people}
        alt="Bottom Right"
        width={320}
        height={220}
        className="absolute bottom-4 right-3 md:hidden"
      />

      {/* Desktop background (768px and above) */}
      <Image
        src={bgImage}
        alt="Desktop Background"
        fill
        priority
        quality={100}
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 hidden md:block"
      />

      {/* Overlay container */}
      <div className="absolute inset-0 flex flex-col justify-end w-full text-white md:mb-30 md:pl-10 lg:pl-20 xl:pl-35">
        {/* ✅ Full-width gradient overlay only for mobile + tablet */}
        <div className="absolute inset-0 md:hidden bg-[linear-gradient(180.8deg,rgba(24,43,0,0)_40%,rgba(24,43,0,0.9)_100%),linear-gradient(250.77deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_100%)]"></div>

        {/* Left text */}
        <div className="relative text-lg md:text-2xl lg:text-4xl mb-10   md:w-1/2 space-y-2 leading-snug z-10 pl-5">
          <p className="font-bold md:font-normal">You see Land, We See Plan</p>
          <span className="text-sm block md:text-lg">
            <p>Smart Investments. Exceptional Returns. Your Path to</p>
            <p> Wealth Starts with Us</p>
          </span>
          <div className="absolute left-5 bottom-0 translate-y-1/2 hidden md:block z-20 pt-20">
            <button className="bg-white glow-button text-black px-7 py-3 rounded-full font-poppins border-[#024b12] border-2 shadow-lg text-lg">
              Enquire Now
            </button>
          </div>
        </div>

        {/* ✅ Mobile/Tablet button */}
    <div className="absolute left-5 bottom-0 translate-y-1/2 md:hidden z-20">
  <button
    className={`
      bg-white text-black px-6 py-2 rounded-full font-poppins 
      border-2 border-[#024b12] shadow-lg relative overflow-hidden
      transition-all duration-300 ease-in-out
      before:content-[''] before:absolute before:top-0 before:left-0 
      before:w-0 before:h-full before:rounded-full before:-z-10
      before:transition-all before:duration-500 before:ease-in-out
      before:bg-[#024b12] hover:text-white hover:before:w-full
    `}
  >
    Enquire Now
  </button>
</div>

        {/* Right badge (only desktop) */}
        <div className="text-sm md:text-md lg:text-lg   md:flex justify-end items-end hidden">
          <div>
            <span className="bg-white/85 text-black px-6 lg:px-10 py-2 rounded-bl-full rounded-tl-full font-poppins flex">
              DTCP & CMDA Approved Plots | Resale Plots
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
