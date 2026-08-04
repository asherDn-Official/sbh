// import Image from "next/image";
// import {
//   UserIcon,
//   DocumentCheckIcon,
//   EyeIcon,
//   MapPinIcon,
//   LifebuoyIcon,
// } from "@heroicons/react/24/outline";
// import park from "../../../public/assets/home/park.webp";
// import sbhLgog from "../../../public/assets/home/sbh-logo.webp";
// const features = [
//   {
//     icon: <UserIcon className="h-6 w-6 text-gray-700" />,
//     title: "Personalized Service",
//     desc: "We don't sell we help you select the right property based on your goals: building a home, rental income, or long-term investment.",
//   },
//   {
//     icon: <DocumentCheckIcon className="h-6 w-6 text-gray-700" />,
//     title: "Verified Documentation",
//     desc: "Every property listed is DTCP/CMDA approved, ensuring clear titles, legal safety, and peace of mind.",
//   },
//   {
//     icon: <EyeIcon className="h-6 w-6 text-gray-700" />,
//     title: "Free Site Visits",
//     desc: "We'll arrange guided site visits at your convenience, so you can see and evaluate the property firsthand before making any decision.",
//   },
//   {
//     icon: <MapPinIcon className="h-6 w-6 text-gray-700" />,
//     title: "Featured Locations We Specialize In",
//     desc: "Katrambakkam (near Kundrathur), Nandhambakkam and Thaiyur (OMR) are fast-growing Chennai suburbs with great connectivity and high appreciation.",
//   },
//   {
//     icon: <LifebuoyIcon className="h-6 w-6 text-gray-700" />,
//     title: "End-to-End Support",
//     desc: "We assist with legal formalities, Patta/Chitta, bank loan process, and post-sale support.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="w-full px-6 py-12 max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row gap-10">
//         {/* Left Side - Heading + Image */}
//         <div className="w-full lg:w-1/2 space-y-6">
//           <Image
//             src={sbhLgog}
//            alt="Sri Balaji Homes – Resale Plots in Chennai"
//             width={93}
//             height={73}
//             className="w-22 h-auto sm:w-[93px] lg:w-[150px]" // 48px on mobile, original on sm+
//           />
//           <div>
//             <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
//               Why Property Buyers Prefer Sri Balaji Homes
//             </h2>
//           </div>
//           <div className="relative w-full h-64 md:h-80 lg:h-[400px]">
//             <Image
//               src={park}
//               alt="Why Choose Sri Balaji Homes"
//               fill
//               className="rounded-xl object-cover"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Side - Features */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6">
//           {features.map((feature, index) => (
//             <div key={index} className="flex items-start gap-7">
//               <div className="flex-shrink-0">{feature.icon}</div>
//               <div>
//                 <h3 className="font-bold text-xl text-gray-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm md:text-lg">
//                   {feature.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



// import Image from "next/image";
// import {
//   DocumentCheckIcon,
//   ShieldCheckIcon,
//   MapPinIcon,
//   ClockIcon,
//   BuildingOffice2Icon,
// } from "@heroicons/react/24/outline";
// import park from "../../../public/assets/home/park.webp";
// import sbhLgog from "../../../public/assets/home/sbh-logo.webp";

// const verificationAndWhyUs = [
//   {
//     icon: <DocumentCheckIcon className="h-6 w-6 text-green-800" />,
//     title: "Clear Title & Encumbrance Check",
//     desc: "Every plot is checked for a clean chain of ownership and zero pending encumbrance before it's listed — not after a buyer has already shown interest.",
//   },
//   {
//     icon: <ShieldCheckIcon className="h-6 w-6 text-green-800" />,
//     title: "CMDA / DTCP Approval Verification",
//     desc: "We confirm the plot's approval status directly rather than taking a seller's word for it, so what you see listed is what you can legally register and build on.",
//   },
//   {
//     icon: <MapPinIcon className="h-6 w-6 text-green-800" />,
//     title: "Physical Site Survey",
//     desc: "Beyond paperwork, we physically verify plot boundaries and access roads match what's documented — a step many resale listings skip entirely.",
//   },
//   {
//     icon: <BuildingOffice2Icon className="h-6 w-6 text-green-800" />,
//     title: "Zero Brokerage, Direct From Owner",
//     desc: "No brokerage fees on either side of the transaction — you deal with us directly, which also means fewer parties for information to get lost between.",
//   },
//   {
//     icon: <ClockIcon className="h-6 w-6 text-green-800" />,
//     title: "Trusted Since 2005 & Local Expertise",
//     desc: "Over two decades of resale plot transactions across Sriperumbudur, Kundrathur, and OMR belts with deep insights on infrastructure timelines and pricing trends.",
//   },
// ];

// const WhyChooseUs = () => {
//   return (
//     <section className="w-full px-6 py-12 max-w-7xl mx-auto">
//       <div className="flex flex-col lg:flex-row gap-10">
//         {/* Left Side - Heading + Image */}
//         <div className="w-full lg:w-1/2 space-y-6">
//           <Image
//             src={sbhLgog}
//             alt="Sri Balaji Homes – Resale Plots in Chennai"
//             width={93}
//             height={73}
//             className="w-22 h-auto sm:w-[93px] lg:w-[130px]"
//           />
//           <div>
//             <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
//               How We Verify Plots & Why Buyers Choose Sri Balaji Homes
//             </h2>
//           </div>
//           <div className="relative w-full h-64 md:h-80 lg:h-[380px]">
//             <Image
//               src={park}
//               alt="Verification and Why Choose Sri Balaji Homes"
//               fill
//               className="rounded-xl object-cover"
//               priority
//             />
//           </div>
//         </div>

//         {/* Right Side - Features List */}
//         <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
//           {verificationAndWhyUs.map((feature, index) => (
//             <div key={index} className="flex items-start gap-5">
//               <div className="flex-shrink-0 p-2 bg-green-50 rounded-lg">{feature.icon}</div>
//               <div>
//                 <h3 className="font-bold text-lg text-gray-900">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
//                   {feature.desc}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import Image from "next/image";
import Link from "next/link";
import {
  DocumentCheckIcon,
  ShieldCheckIcon,
  MapPinIcon,
  ClockIcon,
  BuildingOffice2Icon,
} from "@heroicons/react/24/outline";
import park from "../../../public/assets/home/sri-balaji-homes-park.webp";
import sbhLgog from "../../../public/assets/home/sri-balaji-homes-logo-dark.webp";

const verificationAndWhyUs = [
  {
    icon: <DocumentCheckIcon className="h-6 w-6 text-green-800" />,
    title: "Clear Title & Encumbrance Check",
    desc: "Every plot is checked for a clean chain of ownership and zero pending encumbrance before it's listed — not after a buyer has already shown interest.",
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6 text-green-800" />,
    title: "CMDA / DTCP Approval Verification",
    desc: "We confirm the plot's approval status directly rather than taking a seller's word for it, so what you see listed is what you can legally register and build on.",
  },
  {
    icon: <MapPinIcon className="h-6 w-6 text-green-800" />,
    title: "Physical Site Survey",
    desc: "Beyond paperwork, we physically verify plot boundaries and access roads match what's documented — a step many resale listings skip entirely.",
  },
  {
    icon: <BuildingOffice2Icon className="h-6 w-6 text-green-800" />,
    title: "Zero Brokerage, Direct From Owner",
    desc: "No brokerage fees on either side of the transaction — you deal with us directly, which also means fewer parties for information to get lost between.",
  },
  {
    icon: <ClockIcon className="h-6 w-6 text-green-800" />,
    title: "Trusted Since 2005 & Local Expertise",
    desc: "Over two decades of resale plot transactions across Sriperumbudur, Kundrathur, and OMR belts with deep insights on infrastructure timelines and pricing trends.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side - Heading + Image */}
        <div className="w-full lg:w-1/2 space-y-6">
          <Image
            src={sbhLgog}
            alt="Sri Balaji Homes – Resale Plots in Chennai"
            width={93}
            height={73}
            className="w-22 h-auto sm:w-[93px] lg:w-[130px]"
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
              How We Verify Plots & Why Buyers Choose Sri Balaji Homes
            </h2>
            {/* Added About Us Anchor Link */}
            <p className="text-gray-600 text-sm md:text-base mt-2">
              Learn more about our verification standards and company history on our{" "}
              <Link
                href="/about-us"
                className="text-green-800 font-semibold underline hover:text-green-900 transition"
              >
                About Us
              </Link>{" "}
              page.
            </p>
          </div>
          <div className="relative w-full h-64 md:h-80 lg:h-[380px]">
            <Image
              src={park}
              alt="Verification and Why Choose Sri Balaji Homes"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side - Features List */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 justify-center">
          {verificationAndWhyUs.map((feature, index) => (
            <div key={index} className="flex items-start gap-5">
              <div className="flex-shrink-0 p-2 bg-green-50 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;