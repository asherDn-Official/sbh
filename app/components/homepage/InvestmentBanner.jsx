// import Image from "next/image";
// import Link from "next/link";
// import Banner from "../../../public/assets/home/landscape.webp";

// export default function InvestmentBanner() {
//   return (
//     <section className="px-6 py-8 lg:px-24 lg:py-16">
//       <div
//         className="
//           relative overflow-hidden
//           h-[220px] lg:h-[330px]   /* mobile vs desktop height */
//           rounded-xl lg:rounded-3xl  /* border radius for mobile vs desktop */
//         "
//       >
//         {/* Background Image */}
//         <div className="absolute inset-0">
//           <Image
//             src={Banner}
//             alt="Investment Background"
//             fill
//             className="object-cover"
//             priority
//           />
//           {/* Dark overlay for readability */}
//           <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
//         </div>

//         {/* Content */}
//         <div className="relative flex flex-col md:flex-row items-center h-full md:justify-between text-white px-6 md:px-12 py-8 lg:py-12 gap-9 lg:gap-6">
//           <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center md:text-left max-w-xl">
//             The Best Investment on Earth is Earth
//           </h2>
//           <Link
//             href="/contact-us"
//             className="bg-white text-gray-900 font-medium px-6 md:px-8 py-3 rounded-full shadow hover:bg-gray-100 transition text-base lg:text-lg"
//           >
//             Enquire Now
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import Banner from "../../../public/assets/home/book-a-site-visit.webp";

export default function InvestmentBanner() {
  return (
    <section id="site-visit" className="px-6 py-8 lg:px-24 lg:py-16">
      <div className="relative overflow-hidden min-h-[260px] lg:min-h-[320px] rounded-xl lg:rounded-3xl shadow-xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Banner}
            alt="Book a free site visit - Sri Balaji Homes"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        </div>

        {/* Content Overlay */}
        <div className="relative flex flex-col md:flex-row items-center justify-between h-full text-white px-6 md:px-12 py-8 lg:py-12 gap-6 z-10">
          <div className="max-w-2xl text-center md:text-left space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold">
              Book a Free Site Visit Today
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed">
              The only way to properly evaluate a plot is to see it. Book a free site visit to Katrambakkam, Nandhambakkam, or Thaiyur OMR, and we'll walk you through everything — location, approvals, and pricing — with zero pressure and zero brokerage.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-white text-gray-900 font-semibold px-8 py-3.5 rounded-full shadow-lg hover:bg-gray-100 transition text-sm md:text-base whitespace-nowrap"
          >
            Book Your Free Site Visit →
          </Link>
        </div>
      </div>
    </section>
  );
}