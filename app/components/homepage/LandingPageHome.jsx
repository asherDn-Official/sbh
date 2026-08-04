// import Image from "next/image";
// import React from "react";
// import bgImage from "../../../public/assets/home/GroupHome1.webp";
// import bgMobileImage from "../../../public/assets/home/mobileHome.webp";
// import people from "../../../public/assets/home/people.webp";
// import Link from "next/link";

// export default function LandingPageHome() {
//   return (
//     <div className="relative min-h-90 md:min-h-screen">
//       {/* Mobile/Tablet background (up to 767px) */}
//       <Image
//         src={bgMobileImage}
//         alt="Mobile Background"
//         fill
//         priority
//         quality={100}
//         className="absolute inset-0 w-full h-full object-cover object-center -z-10 md:hidden"
//       />

//       {/* Overlay image bottom-right (only mobile/tablet) */}
//       <Image
//         src={people}
//         alt="Bottom Right"
//         width={320}
//         height={220}
//         className="absolute bottom-4 right-3 md:hidden"
//       />

//       {/* Desktop background (768px and above) */}
//       <Image
//         src={bgImage}
//         alt="Desktop Background"
//         fill
//         priority
//         quality={100}
//         className="absolute inset-0 w-full h-full object-cover object-center -z-10 hidden md:block"
//       />

//       {/* Overlay container */}
//       <div className="absolute inset-0 flex flex-col justify-end w-full text-white md:mb-30 md:pl-10 lg:pl-20 xl:pl-35">
//         {/* ✅ Full-width gradient overlay only for mobile + tablet */}
//         <div className="absolute inset-0 md:hidden bg-[linear-gradient(180.8deg,rgba(24,43,0,0)_40%,rgba(24,43,0,0.9)_100%),linear-gradient(250.77deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_100%)]"></div>

//         {/* Left text */}
//         <div className="relative text-lg md:text-2xl lg:text-4xl mb-10   md:w-1/2 space-y-2 leading-snug z-10 pl-5">
//           <p className="font-bold md:font-normal">You see Land, We See Plan</p>
//           <span className="text-sm block md:text-lg">
//             <p>Smart Investments. Exceptional Returns. Your Path to</p>
//             <p> Wealth Starts with Us</p>
//           </span>
//           <div className="absolute left-5 bottom-0 translate-y-1/2 hidden md:block z-20 pt-20">
//             <Link href="/contact-us">
//               <button className="bg-white glow-button text-black px-7 py-3 rounded-full font-poppins border-[#024b12] border-2 shadow-lg text-lg">
//                 Enquire Now
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* ✅ Mobile/Tablet button */}
//         <div className="absolute left-5 bottom-0 translate-y-1/2 md:hidden z-20">
//           <Link href="/contact-us">
//             <button
//               className={`
//       bg-white text-black px-6 py-2 rounded-full font-poppins 
//       border-2 border-[#024b12] shadow-lg relative overflow-hidden
//       transition-all duration-300 ease-in-out
//       before:content-[''] before:absolute before:top-0 before:left-0 
//       before:w-0 before:h-full before:rounded-full before:-z-10
//       before:transition-all before:duration-500 before:ease-in-out
//       before:bg-[#024b12] hover:text-white hover:before:w-full
//     `}
//             >
//               Enquire Now
//             </button>{" "}
//           </Link>
//         </div>

//         {/* Right badge (only desktop) */}
//         <div className="text-sm md:text-md lg:text-lg   md:flex justify-end items-end hidden">
//           <div>
//             <span className="bg-white/85 text-black px-6 lg:px-10 py-2 rounded-bl-full rounded-tl-full font-poppins flex">
//               DTCP & CMDA Approved Plots | Resale Plots
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import React from "react";
// import bgImage from "../../../public/assets/home/GroupHome1.webp";
// import bgMobileImage from "../../../public/assets/home/mobileHome.webp";
// import people from "../../../public/assets/home/people.webp";
// import Link from "next/link";

// export default function LandingPageHome() {
//   return (
//     <div className="relative min-h-90 md:min-h-screen">
//       {/* Mobile/Tablet background */}
//       <Image
//         src={bgMobileImage}
//         alt="Approved Resale Plots in Chennai Mobile Banner"
//         fill
//         priority
//         quality={100}
//         className="absolute inset-0 w-full h-full object-cover object-center -z-10 md:hidden"
//       />

//       {/* Overlay image */}
//       <Image
//         src={people}
//         alt="Happy property buyers with Sri Balaji Homes"
//         width={320}
//         height={220}
//         className="absolute bottom-4 right-3 md:hidden"
//       />

//       {/* Desktop background */}
//       <Image
//         src={bgImage}
//         alt="Approved Resale Plots in Chennai - Sri Balaji Homes"
//         fill
//         priority
//         quality={100}
//         className="absolute inset-0 w-full h-full object-cover object-center -z-10 hidden md:block"
//       />

//       {/* Overlay container */}
//       <div className="absolute inset-0 flex flex-col justify-end w-full text-white md:mb-20 md:pl-10 lg:pl-20 xl:pl-35">
//         <div className="absolute inset-0 md:hidden bg-[linear-gradient(180.8deg,rgba(24,43,0,0)_40%,rgba(24,43,0,0.9)_100%),linear-gradient(250.77deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_100%)]"></div>

//         <div className="relative text-lg md:text-2xl lg:text-3xl mb-10 md:w-3/5 space-y-3 leading-snug z-10 pl-5 pr-5">
//           <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-tight">
//             Approved Resale Plots in Chennai — Clear Title, Zero Brokerage
//           </h1>
//           <p className="text-xs sm:text-sm md:text-base text-gray-200 font-normal leading-relaxed">
//             Buying a resale plot in Chennai comes with a real risk most listings don't talk about: unclear titles, pending litigation, or approvals that don't hold up under scrutiny. Sri Balaji Homes exists to remove that risk. Every plot we list is CMDA or DTCP approved, verified for clear title and zero encumbrance, and sold directly with zero brokerage — across our three active locations in Katrambakkam, Nandhambakkam, and Thaiyur, OMR.
//           </p>

//           <div className="hidden md:block pt-4">
//             <Link href="/contact-us">
//               <button className="bg-white text-black px-7 py-3 rounded-full font-poppins border-[#024b12] border-2 shadow-lg text-lg hover:bg-gray-100 transition cursor-pointer">
//                 Book a Free Site Visit
//               </button>
//             </Link>
//           </div>
//         </div>

//         {/* Mobile/Tablet button */}
//         <div className="absolute left-5 bottom-2 md:hidden z-20">
//           <Link href="/contact-us">
//             <button className="bg-white text-black px-6 py-2 rounded-full font-poppins border-2 border-[#024b12] shadow-lg text-sm">
//               Book Site Visit
//             </button>
//           </Link>
//         </div>

//         {/* Right badge */}
//         <div className="text-sm md:text-md lg:text-lg md:flex justify-end items-end hidden">
//           <div>
//             <span className="bg-white/85 text-black px-6 lg:px-10 py-2 rounded-bl-full rounded-tl-full font-poppins flex">
//               CMDA & DTCP Approved Plots | Zero Brokerage
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


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
          alt="Approved Resale Plots in Chennai Mobile Banner"
          fill
          priority
          sizes="100vw"
          quality={80}
          className="absolute inset-0 w-full h-full object-cover object-center -z-10 md:hidden"
        />

        {/* Overlay image */}
        <Image
          src={people}
          alt="Happy property buyers with Sri Balaji Homes"
          width={320}
          height={220}
          className="absolute bottom-4 right-3 md:hidden"
        />

        {/* Desktop background */}
        <Image
          src={bgImage}
          alt="Approved resale plot layout in Chennai with marked boundaries"
          caption="CMDA & DTCP approved resale plots across Chennai"
          fill
          priority={true}
          sizes="100vw"
          quality={80}
          className="absolute inset-0 w-full h-full object-cover object-center -z-10 hidden md:block"
        />

        {/* Overlay container */}
 {/* Changed pb-6 to p-5 for clean mobile padding all around */}
<div className="absolute inset-0 flex flex-col justify-end w-full text-white p-5 md:pb-10 md:pl-10 lg:pl-16 xl:pl-24">
    {/* Mobile gradient overlay */}
    <div className="absolute inset-0 md:hidden bg-[linear-gradient(180.8deg,rgba(24,43,0,0)_40%,rgba(24,43,0,0.9)_100%),linear-gradient(250.77deg,rgba(0,0,0,0)_50%,rgba(0,0,0,0.4)_100%)]"></div>

    {/* Glassmorphism Text Container (Desktop) */}
    <div className="relative text-lg md:text-2xl lg:text-3xl md:w-[55%] xl:w-[48%] space-y-3 md:space-y-4 leading-snug z-10 p-5 md:p-7 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10 shadow-2xl">
      <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-white drop-shadow-md">
        Approved Resale Plots in Chennai — Clear Title, Zero Brokerage
      </h1>
      <p className="text-xs sm:text-sm md:text-base text-gray-100 font-normal leading-relaxed drop-shadow-sm">
        Buying a resale plot in Chennai comes with a real risk most listings don't talk about: unclear titles, pending litigation, or approvals that don't hold up under scrutiny. Sri Balaji Homes exists to remove that risk. Every plot we list is CMDA or DTCP approved, verified for clear title and zero encumbrance, and sold directly with zero brokerage — across our three active locations in Katrambakkam, Nandhambakkam, and Thaiyur, OMR.
      </p>

      <div className="pt-2 md:pt-3">
  <Link href="/contact-us">
    <button className="bg-white text-black px-5 py-2.5 sm:px-6 sm:py-2.5 lg:px-7 lg:py-3 rounded-full font-poppins border-[#024b12] border-2 shadow-lg text-xs sm:text-sm lg:text-base hover:bg-gray-100 transition cursor-pointer font-semibold">
      Book a Free Site Visit
    </button>
  </Link>
</div>
    </div>

    {/* Mobile/Tablet button */}
    {/* <div className="absolute left-5 bottom-5 md:hidden z-20">
      <Link href="/contact-us">
        <button className="bg-white text-black px-6 py-2 rounded-full font-poppins border-2 border-[#024b12] shadow-lg text-sm">
          Book Site Visit
        </button>
      </Link>
    </div> */}


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