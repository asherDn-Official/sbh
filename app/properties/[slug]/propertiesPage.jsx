// "use client";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import katrambakkam  from "../../../public/assets/home/katrambakkamvilla1.webp"
// // import plotKatrambakkam from "../../../public/assets/home/katrambakkamvilla1.webp";
// const propertyData = {
//   "plots-in-katrambakkam": {
//     title: "Katrambakkam",
//     description:
//       "In Katrambakkam, Sri Balaji Homes offers DTCP-approved plots in sizes of 2400 sqft, 2100 sqft, 1800 sqft, 1200 sqft, 800 sqft  with prices starting from just Rs.700/- to Rs.1600/- per sqft — making them ideal for building your dream home or a secure long-term investment.",
//     plots: [
//       { id: 1, img: "/assets/properties/k-1.webp", size: "800 Sq. Feet" },
//       { id: 2, img: "/assets/properties/k-2.webp", size: "1200 Sq. Feet" },
//       { id: 3, img: "/assets/properties/k-3.webp", size: "2400 Sq. Feet" },
//       { id: 4, img: "/assets/properties/k-4.webp", size: "1800 Sq. Feet" },
//       { id: 5, img: "/assets/properties/k-5.webp", size: "2100 Sq. Feet" },
//     ],
//     h1: "CMDA & DTCP Approved Resale Plots in Kattrambakkam near Sriperumbudur",
//   },
//   "plots-in-nandhambakkam": {
//     title: "Nandhambakkam",
//     description:
//       "In Nandhambakkam, Sri Balaji Homes presents CMDA-approved plots with prime connectivity and plot sizes ranging from 1200 to 2400 sqft, with prices starting from Rs.1500/- to Rs.3000/- per sqft, giving you flexible options for both residence and investment.",
//     plots: [
//       { id: 1, img: "/assets/properties/plot-1.webp", size: "2400 Sq. Feet" },
//       { id: 2, img: "/assets/properties/plot-2.webp", size: "1200 Sq. Feet" },
//       { id: 3, img: "/assets/properties/n-plot-3.webp", size: "2400 Sq. Feet" },
//       { id: 4, img: "/assets/properties/n-plot-4.webp", size: "1200 Sq. Feet" },
//       { id: 5, img: "/assets/properties/n-plot-5.webp", size: "2400 Sq. Feet" },
//     ],
//     h1: "Premium CMDA Approved Resale Plots in Nandhambakkam near Kundrathur",
//   },
//   "plots-in-thaiyur-omr": {
//     title: "Thaiyur (OMR)",
//     description:
//       "In Thaiyur (OMR), Sri Balaji Homes offers DTCP-approved plots in Sqft sizes -800 Sqft, 1200 Sqft, 2400 Sqft, with prices starting from just Rs.2400/- to Rs.3000/- per sqft — making them ideal for building your dream home or a secure long-term investment.",
//     plots: [
//       { id: 1, img: "/assets/properties/t-1.webp", size: "1200 Sq. Feet" },
//       { id: 2, img: "/assets/properties/t-2.webp", size: "2400 Sq. Feet" },
//       { id: 3, img: "/assets/properties/t-3.webp", size: "1200 Sq. Feet" },
//       { id: 4, img: "/assets/properties/t-4.webp", size: "800 Sq. Feet" },
//       { id: 5, img: "/assets/properties/5.webp", size: "2400 Sq. Feet" },
//     ],
//     h1: "CMDA & DTCP Approved Resale Plots for Sale in Thaiyur, OMR",
//   },
// };

// export default function PropertyPageClient() {
//   const { slug } = useParams();
//   const data = propertyData[slug];

//   if (!data) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-xl">
//         Property not found ❌
//       </div>
//     );
//   }

//   return (
//     <div>
//       {/* Hero Section */}
//       <div className="relative w-full h-[400px] bg-black/60 flex items-end justify-start  text-white pb-5   lg:pb-15 lg:pl-15">
//       <h1 className="hidden">{data.h1}</h1>
//         <Image
//           src={katrambakkam}
//           alt={data.title}
//           fill
//           className="object-cover -z-10"
//         />
//         <div className="max-w-2xl px-4">
//           <h2 className="text-4xl font-bold">{data.title}</h2>
//           <p className="mt-4">{data.description}</p>
//         </div>
//       </div>

//       {/* Properties Grid */}
//       <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {data.plots.map((plot) => (
//           <div
//             key={plot.id}
//             className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
//           >
//             {/* Image */}
//             <div className="relative h-44 lg:h-60 w-full">
//               <Image
//                 src={plot.img}
//                 alt={`${data.title} Plot`}
//                 fill
//                 className="object-cover p-3 rounded-3xl"
//               />
//             </div>

//             {/* Content */}
//             <div className="p-4">
//               <h3 className="text-lg font-medium">{data.title} Plots</h3>
//               <p className="text-gray-500 text-sm mt-1">📐 {plot.size}</p>
//               <Link href="/contact-us">
//                 <button className="mt-3 px-4 py-2 bg-green-800 text-white text-sm rounded-lg hover:bg-green-700 transition">
//                   Know More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


// "use client";
// import React, { useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// import katrambakkamHero from "../../../public/assets/home/katrambakkamvilla1.webp";

// const propertyData = {
//   "resale-plots-katrambakkam": {
//     h1: "Resale Plots in Katrambakkam – DTCP & CMDA Approved Land Near Sriperumbudur",
//     introText:
//       "Katrambakkam is our original and most established location — a DTCP and CMDA approved layout close to the Sriperumbudur industrial belt, one of Chennai's most active manufacturing and employment corridors. Every plot here has been verified for clear title and zero encumbrance, and sold directly with zero brokerage.",
    
//     whyBuyText:
//       "Katrambakkam sits within reach of Sriperumbudur's industrial employment base, giving it steady demand from both end-users looking to build and investors targeting rental or resale appreciation. Unlike a brand-new unapproved layout, this is an established plotted development with existing infrastructure and legal approvals already in place — you're not waiting years for a project to catch up to its promises.",

//     plots: [
//       { id: 1, img: "/assets/properties/k-1.webp", size: "800 Sq. Feet" },
//       { id: 2, img: "/assets/properties/k-2.webp", size: "1200 Sq. Feet" },
//       { id: 3, img: "/assets/properties/k-3.webp", size: "2400 Sq. Feet" },
//       { id: 4, img: "/assets/properties/k-4.webp", size: "1800 Sq. Feet" },
//       { id: 5, img: "/assets/properties/k-5.webp", size: "2100 Sq. Feet" },
//     ],

//     specifications: {
//       sizes:
//         "Plots are available across a range of sizes to suit different budgets and building plans — from compact residential plots (800 sqft, 1200 sqft) to larger parcels (1800 sqft, 2100 sqft, 2400 sqft) for those planning bigger builds.",
//       approvals:
//         "This layout carries formal DTCP approval, confirmed and verified as part of our standard listing process — meaning the plots meet legal planning requirements for registration, bank loans, and construction.",
//       pricing:
//         "Pricing varies by plot size and position within the layout. We provide transparent, upfront pricing starting from competitive rates with no hidden brokerage costs, and can discuss payment structuring during your site visit.",
//     },

//     connectivity: {
//       hubs: "Katrambakkam's proximity to Sriperumbudur places it within reach of a major manufacturing and electronics employment corridor — a key driver of steady housing and land demand in this belt.",
//       amenities:
//         "The area is served by schools, healthcare facilities, and everyday essentials within a reasonable distance, supporting practical day-to-day living for residents who choose to build here.",
//       roads:
//         "The layout is accessed via a well-defined road network connecting to the broader Sriperumbudur–Chennai corridor, supporting both daily commute and future infrastructure growth.",
//     },

//     whyChooseUs:
//       "Katrambakkam is where we started, and it remains one of our most thoroughly documented layouts. Every plot has gone through our full verification process — title check, approval confirmation, and physical site survey — before it's ever listed. We deal with you directly, with zero brokerage, and have been active in this specific location since 2005.",

//     investmentPotential:
//       "Land values along the Sriperumbudur corridor have benefited from sustained industrial growth in the region, and Katrambakkam's established, approved status makes it a lower-risk entry point than newer, unapproved layouts nearby. For buyers weighing end-use versus investment, this location supports both — proximity to industrial employment for rental demand, and DTCP-approved status for straightforward resale later.",

//     faqs: [
//       {
//         q: "Are the plots in Katrambakkam DTCP approved?",
//         a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available to buyers.",
//       },
//       {
//         q: "How far is Katrambakkam from Sriperumbudur?",
//         a: "Katrambakkam is positioned within convenient reach of the Sriperumbudur industrial belt — exact distance to specific points of interest can be confirmed during your site visit.",
//       },
//       {
//         q: "Do you charge brokerage on plots in this location?",
//         a: "No — all plots in Katrambakkam are sold directly, with zero brokerage.",
//       },
//       {
//         q: "Can I get a bank loan for a plot in this layout?",
//         a: "DTCP-approved plots are generally eligible for bank financing, though this depends on the specific lender and plot — we can guide you on this during your enquiry.",
//       },
//       {
//         q: "What documents will I receive after registration?",
//         a: "You'll receive the registered sale deed along with the title and encumbrance verification documents compiled before the plot was listed.",
//       },
//     ],
//   },

//   "resale-plots-nandhambakkam": {
//   h1: "Resale Plots in Nandhambakkam – DTCP & CMDA Approved Land Near Kundrathur",
//   intro:
//     "Nandhambakkam gives buyers a DTCP and CMDA approved layout positioned near Kundrathur and Porur, on Chennai's western side. As with every location we list, plots here have been verified for clear title and zero encumbrance, and are sold directly with zero brokerage.",
  
//   whyBuy: {
//     title: "Why Buy Resale Plots in Nandhambakkam?",
//     content:
//       "Nandhambakkam benefits from its position near Kundrathur and Porur — an area with growing residential demand and improving connectivity toward Chennai's western industrial corridor. For buyers who want proximity to the city's west side without the price premium of more established Porur-adjacent layouts, this location offers a practical middle ground, backed by the same verification process we apply everywhere.",
//   },

//   specifications: {
//     title: "Plot Details & Specifications",
//     sizes: {
//       title: "Available Plot Sizes",
//       content:
//         "A range of plot sizes is available in this layout to suit different budgets and construction plans. Contact us for current availability and exact dimensions.",
//     },
//     approvals: {
//       title: "DTCP & CMDA Approval Details",
//       content:
//         "This layout carries formal DTCP approval, independently verified as part of our listing process, confirming the plots meet legal planning requirements.",
//     },
//     pricing: {
//       title: "Pricing & Payment Options",
//       content:
//         "Transparent, upfront pricing by plot size and position, with zero hidden brokerage costs — payment structuring can be discussed during your site visit.",
//     },
//   },

//   location: {
//     title: "Location & Connectivity from Nandhambakkam",
//     distance: {
//       title: "Distance to Kundrathur & Porur",
//       content:
//         "Nandhambakkam sits within reach of both Kundrathur and Porur, giving residents access to Chennai's western residential and commercial corridor without being positioned directly in its highest-priced zones.",
//     },
//     hubs: {
//       title: "Proximity to Industrial & IT Hubs",
//       content:
//         "The location also benefits from relative proximity to the broader Sriperumbudur–Oragadam industrial belt, extending its appeal to buyers connected to that employment corridor as well as Chennai's west side.",
//     },
//     connectivity: {
//       title: "Road Connectivity & Public Transport",
//       content:
//         "The layout connects to established road networks serving the Kundrathur–Porur corridor, supporting practical day-to-day commuting.",
//     },
//   },

//   whyChooseUs: {
//     title: "Why Choose Sri Balaji Homes for This Layout",
//     content:
//       "Every plot in Nandhambakkam goes through the same verification process we apply across all our locations — title check, DTCP approval confirmation, and physical site survey. We deal with buyers directly, charge zero brokerage, and bring the same track record built since 2005 to this layout as we do in Katrambakkam.",
//   },

//   investment: {
//     title: "Investment Potential of Plots in Nandhambakkam",
//     content:
//       "The Kundrathur–Chennai West corridor has seen steady residential demand growth as the city expands westward, and Nandhambakkam's DTCP-approved status positions it well for buyers looking at both near-term construction and longer-term resale value. Its dual proximity — to Chennai's western residential zone and the Sriperumbudur industrial belt — gives it a broader demand base than a location tied to just one driver.",
//   },

//   faqs: {
//     title: "Frequently Asked Questions",
//     items: [
//       {
//         q: "Are the plots in Nandhambakkam DTCP approved?",
//         a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available.",
//       },
//       {
//         q: "How far is Nandhambakkam from Kundrathur and Porur?",
//         a: "Nandhambakkam is positioned within convenient reach of both — exact distances to specific landmarks can be confirmed during your site visit.",
//       },
//       {
//         q: "Do you charge brokerage on plots in this location?",
//         a: "No — all plots in Nandhambakkam are sold directly, with zero brokerage.",
//       },
//       {
//         q: "Is bank loan financing available for plots in this layout?",
//         a: "DTCP-approved plots are generally loan-eligible, though this depends on the specific lender — we can advise during your enquiry.",
//       },
//       {
//         q: "What makes Nandhambakkam different from your Katrambakkam location?",
//         a: "Nandhambakkam is positioned on Chennai's western side near Kundrathur and Porur, while Katrambakkam is closer to the Sriperumbudur industrial belt — the right choice depends on which corridor better matches your commute or investment goals.",
//       },
//     ],
//   },

//   cta: {
//     title: "Book a Site Visit to Nandhambakkam",
//     content: "See the layout in person and get a transparent, no-brokerage quote.",
//     buttonText: "Book Your Free Site Visit →",
//   },
// },

// };

// // Fallback mapping for alternative slug format
// propertyData["plots-in-katrambakkam"] = propertyData["resale-plots-katrambakkam"];
// propertyData["plots-in-nandhambakkam"] = propertyData["resale-plots-nandhambakkam"];

// export default function PropertyPageClient() {
//   const { slug } = useParams();
//   const data = propertyData[slug] || propertyData["resale-plots-katrambakkam"];
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   return (
//     <div className="bg-white text-gray-800">
//       {/* 1. Hero Section (Visibly Renders H1) */}
//       <section className="relative w-full bg-slate-900 text-white py-16 px-6 lg:px-24">
//         <div className="absolute inset-0 overflow-hidden opacity-30">
//           <Image
//             src={katrambakkamHero}
//             alt="Katrambakkam Resale Plots"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//         <div className="relative max-w-5xl mx-auto z-10 py-6">
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
//             {data.h1}
//           </h1>
//           <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
//             {data.introText}
//           </p>
//         </div>
//       </section>

//       <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
//         {/* 2. Why Buy Resale Plots in Katrambakkam */}
//         <section>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//             Why Buy Resale Plots in Katrambakkam?
//           </h2>
//           <p className="text-gray-600 leading-relaxed text-base md:text-lg bg-gray-50 p-6 rounded-2xl border border-gray-100">
//             {data.whyBuyText}
//           </p>
//         </section>

//         {/* 3. Plot Details & Specifications + Plot Grid */}
//         <section className="space-y-8">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
//             Plot Details & Specifications
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 Available Plot Sizes
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.specifications.sizes}
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 DTCP & CMDA Approval Details
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.specifications.approvals}
//               </p>
//             </div>

//             <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 Pricing & Payment Options
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.specifications.pricing}
//               </p>
//             </div>
//           </div>

//           {/* Available Plot Cards */}
//           <div className="pt-6">
//             <h3 className="text-xl font-semibold text-gray-900 mb-6">
//               Featured Available Plots in Katrambakkam
//             </h3>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {data.plots.map((plot) => (
//                 <div
//                   key={plot.id}
//                   className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition"
//                 >
//                   <div className="relative h-48 w-full bg-gray-100">
//                     <Image
//                       src={plot.img}
//                       alt={`Katrambakkam Plot ${plot.size}`}
//                       fill
//                       className="object-cover p-2 rounded-2xl"
//                     />
//                   </div>
//                   <div className="p-5 flex justify-between items-center">
//                     <div>
//                       <span className="text-xs font-semibold text-green-800 bg-green-50 px-2.5 py-1 rounded-full">
//                         DTCP Approved
//                       </span>
//                       <p className="text-lg font-bold text-gray-900 mt-2">
//                         📐 {plot.size}
//                       </p>
//                     </div>
//                     <Link href="/contact-us">
//                       <button className="px-4 py-2 bg-green-800 text-white text-sm font-medium rounded-xl hover:bg-green-700 transition">
//                         Know More
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 4. Location & Connectivity */}
//         <section>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//             Location & Connectivity from Katrambakkam
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 Distance to Sriperumbudur & Key Hubs
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.connectivity.hubs}
//               </p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 Nearby Schools, Hospitals & Landmarks
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.connectivity.amenities}
//               </p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 Road Connectivity
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.connectivity.roads}
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* 5. Why Choose Sri Balaji Homes */}
//         <section className="bg-green-900 text-white p-8 md:p-10 rounded-3xl">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Why Choose Sri Balaji Homes for This Layout
//           </h2>
//           <p className="text-green-100 leading-relaxed text-base md:text-lg">
//             {data.whyChooseUs}
//           </p>
//         </section>

//         {/* 6. Investment Potential */}
//         <section>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//             Investment Potential of Plots in Katrambakkam
//           </h2>
//           <p className="text-gray-600 leading-relaxed text-base md:text-lg bg-gray-50 p-6 rounded-2xl border border-gray-100">
//             {data.investmentPotential}
//           </p>
//         </section>

//         {/* 7. Frequently Asked Questions */}
//         <section className="pt-4">
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
//             Frequently Asked Questions
//           </h2>
//           <div className="space-y-4 max-w-4xl mx-auto">
//             {data.faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
//               >
//                 <button
//                   onClick={() => toggleFaq(index)}
//                   className="w-full text-left p-5 flex justify-between items-center font-semibold text-gray-900 text-sm md:text-base hover:bg-gray-50 transition cursor-pointer"
//                 >
//                   <span>{faq.q}</span>
//                   <ChevronDownIcon
//                     className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
//                       openFaq === index ? "rotate-180 text-green-800" : ""
//                     }`}
//                   />
//                 </button>
//                 {openFaq === index && (
//                   <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
//                     {faq.a}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* 8. Call to Action Banner */}
//         <section className="bg-gradient-to-r from-gray-900 to-green-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4">
//             Book a Site Visit to Katrambakkam
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
//             See the layout, verify the details yourself, and get a transparent quote — no pressure, zero brokerage.
//           </p>
//           <Link href="/contact-us">
//             <button className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl shadow-lg transition transform hover:-translate-y-0.5">
//               Book Your Free Site Visit →
//             </button>
//           </Link>
//         </section>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

import katrambakkamHero from "../../../public/assets/home/resale-plots-katrambakkam-layout.webp";

// --- KATRAMBAKKAM PLOTS ---
export const katrambakkamPlots = [
  {
    id: 1,
    img: "/assets/properties/resale-plots-katrambakkam-800sqft.webp",
    size: "800 Sq. Feet",
    alt: "800 Sq Ft DTCP approved resale plot layout in Katrambakkam near Sriperumbudur",
    title: "Resale Plots Katrambakkam 800 Sq Ft",
    caption: "DTCP approved 800 sq ft plot in Katrambakkam, verified for clear title.",
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    img: "/assets/properties/resale-plots-katrambakkam-1200sqft.webp",
    size: "1200 Sq. Feet",
    alt: "1200 Sq Ft CMDA approved residential plot layout in Katrambakkam Chennai",
    title: "Resale Plots Katrambakkam 1200 Sq Ft",
    caption: "1200 sq ft ready-to-build resale plot in Katrambakkam with zero brokerage.",
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    img: "/assets/properties/resale-plots-katrambakkam-2400sqft.webp",
    size: "2400 Sq. Feet",
    alt: "2400 Sq Ft corner plot layout in Katrambakkam near Sriperumbudur corridor",
    title: "Resale Plots Katrambakkam 2400 Sq Ft",
    caption: "DTCP approved premium 2400 sq ft resale plot with road connectivity.",
    width: 1200,
    height: 800,
  },
  {
    id: 4,
    img: "/assets/properties/resale-plots-katrambakkam-1800sqft.webp",
    size: "1800 Sq. Feet",
    alt: "1800 Sq Ft clear title residential plot layout in Katrambakkam",
    title: "Resale Plots Katrambakkam 1800 Sq Ft",
    caption: "1800 sq ft plot verified with 30-year encumbrance certificate.",
    width: 1200,
    height: 800,
  },
  {
    id: 5,
    img: "/assets/properties/resale-plots-katrambakkam-2100sqft.webp",
    size: "2100 Sq. Feet",
    alt: "2100 Sq Ft resale plot in Katrambakkam layout ready for immediate construction",
    title: "Resale Plots Katrambakkam 2100 Sq Ft",
    caption: "Direct developer 2100 sq ft plot in Katrambakkam, clear legal title.",
    width: 1200,
    height: 800,
  },
];

// --- NANDHAMBAKKAM PLOTS ---
export const nandhambakkamPlots = [
  {
    id: 1,
    img: "/assets/properties/resale-plots-nandhambakkam-2400sqft.webp",
    size: "2400 Sq. Feet",
    alt: "2400 Sq Ft CMDA approved resale plot layout in Nandhambakkam near Kundrathur",
    title: "Resale Plots Nandhambakkam 2400 Sq Ft",
    caption: "CMDA approved 2400 sq ft resale plot in Nandhambakkam near Kundrathur.",
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    img: "/assets/properties/resale-plots-nandhambakkam-1200sqft.webp",
    size: "1200 Sq. Feet",
    alt: "1200 Sq Ft clear title plot layout in Nandhambakkam Chennai",
    title: "Resale Plots Nandhambakkam 1200 Sq Ft",
    caption: "Ready for construction 1200 sq ft plot in Nandhambakkam with clear Patta.",
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    img: "/assets/properties/resale-plots-nandhambakkam-2400sqft-layout2.webp",
    size: "2400 Sq. Feet",
    alt: "2400 Sq Ft residential plot in Nandhambakkam near Porur junction",
    title: "Resale Plots Nandhambakkam 2400 Sq Ft",
    caption: "2400 sq ft premium resale plot verified for legal title in Nandhambakkam.",
    width: 1200,
    height: 800,
  },
  {
    id: 4,
    img: "/assets/properties/resale-plots-nandhambakkam-1200sqft-layout2.webp",
    size: "1200 Sq. Feet",
    alt: "1200 Sq Ft CMDA plot layout in Nandhambakkam ready for villa construction",
    title: "Resale Plots Nandhambakkam 1200 Sq Ft",
    caption: "CMDA approved 1200 sq ft plot in Nandhambakkam with 0% brokerage.",
    width: 1200,
    height: 800,
  },
  {
    id: 5,
    img: "/assets/properties/resale-plots-nandhambakkam-2400sqft-layout3.webp",
    size: "2400 Sq. Feet",
    alt: "2400 Sq Ft gated community resale plot layout in Nandhambakkam",
    title: "Resale Plots Nandhambakkam 2400 Sq Ft",
    caption: "2400 sq ft residential land in Nandhambakkam with excellent road connectivity.",
    width: 1200,
    height: 800,
  },
];

// --- THAIYUR OMR PLOTS ---
export const thaiyurOmrPlots = [
  {
    id: 1,
    img: "/assets/properties/resale-plots-thaiyur-omr-1200sqft.webp",
    size: "1200 Sq. Feet",
    alt: "1200 Sq Ft DTCP approved plot layout in Thaiyur OMR near Siruseri IT Park",
    title: "Resale Plots Thaiyur OMR 1200 Sq Ft",
    caption: "Approved 1200 sq ft plot in Thaiyur OMR, close to Siruseri IT Park.",
    width: 1200,
    height: 800,
  },
  {
    id: 2,
    img: "/assets/properties/resale-plots-thaiyur-omr-2400sqft.webp",
    size: "2400 Sq. Feet",
    alt: "2400 Sq Ft resale plot in Thaiyur OMR Kelambakkam stretch",
    title: "Resale Plots Thaiyur OMR 2400 Sq Ft",
    caption: "2400 sq ft plot in Thaiyur OMR, 100% verified clear title.",
    width: 1200,
    height: 800,
  },
  {
    id: 3,
    img: "/assets/properties/resale-plots-thaiyur-omr-1200sqft-layout2.webp",
    size: "1200 Sq. Feet",
    alt: "1200 Sq Ft residential land layout in Thaiyur OMR Chennai",
    title: "Resale Plots Thaiyur OMR 1200 Sq Ft",
    caption: "1200 sq ft investment-ready plot in Thaiyur OMR with zero broker fees.",
    width: 1200,
    height: 800,
  },
  {
    id: 4,
    img: "/assets/properties/resale-plots-thaiyur-omr-800sqft.webp",
    size: "800 Sq. Feet",
    alt: "800 Sq Ft compact plot layout in Thaiyur OMR near IT corridor",
    title: "Resale Plots Thaiyur OMR 800 Sq Ft",
    caption: "Affordable 800 sq ft plot layout in Thaiyur OMR near Kelambakkam.",
    width: 1200,
    height: 800,
  },
  {
    id: 5,
    img: "/assets/properties/resale-plots-thaiyur-omr-2400sqft-layout2.webp",
    size: "2400 Sq. Feet",
    alt: "2400 Sq Ft DTCP approved corner plot layout in Thaiyur OMR",
    title: "Resale Plots Thaiyur OMR 2400 Sq Ft",
    caption: "DTCP approved 2400 sq ft plot in Thaiyur OMR with direct owner pricing.",
    width: 1200,
    height: 800,
  },
];


const allLocations = [
  {
    key: "plots-in-katrambakkam",
    name: "Katrambakkam resale plots",
    href: "/properties/plots-in-katrambakkam",
    desc: "DTCP & CMDA approved plots near the Sriperumbudur industrial belt.",
  },
  {
    key: "plots-in-nandhambakkam",
    name: "Nandhambakkam resale plots",
    href: "/properties/plots-in-nandhambakkam",
    desc: "Verified CMDA approved plots near Kundrathur and Porur.",
  },
  {
    key: "plots-in-thaiyur-omr",
    name: "Thaiyur OMR resale plots",
    href: "/properties/plots-in-thaiyur-omr",
    desc: "Ready-to-build plots located near Siruseri IT Park on OMR.",
  },
];

const propertyData = {
  "plots-in-katrambakkam": {
    locationName: "Katrambakkam",
    h1: "Resale Plots in Katrambakkam – DTCP & CMDA Approved Land Near Sriperumbudur",
    introText:
      "Katrambakkam is our original and most established location — a DTCP and CMDA approved layout close to the Sriperumbudur industrial belt, one of Chennai's most active manufacturing and employment corridors. Every plot here has been verified for clear title and zero encumbrance, and sold directly with zero brokerage.",

    whyBuyTitle: "Why Buy Resale Plots in Katrambakkam?",
    canonicalKey: "plots-in-katrambakkam",
    whyBuyText:
      "Katrambakkam sits within reach of Sriperumbudur's industrial employment base, giving it steady demand from both end-users looking to build and investors targeting rental or resale appreciation. Unlike a brand-new unapproved layout, this is an established plotted development with existing infrastructure and legal approvals already in place — you're not waiting years for a project to catch up to its promises.",

    // plots: [
    //   { id: 1, img: "/assets/properties/k-1.webp", size: "800 Sq. Feet" },
    //   { id: 2, img: "/assets/properties/k-2.webp", size: "1200 Sq. Feet" },
    //   { id: 3, img: "/assets/properties/k-3.webp", size: "2400 Sq. Feet" },
    //   { id: 4, img: "/assets/properties/k-4.webp", size: "1800 Sq. Feet" },
    //   { id: 5, img: "/assets/properties/k-5.webp", size: "2100 Sq. Feet" },
    // ],
    
    plots: katrambakkamPlots,

    specifications: {
      sizes:
        "Plots are available across a range of sizes to suit different budgets and building plans — from compact residential plots (800 sqft, 1200 sqft) to larger parcels (1800 sqft, 2100 sqft, 2400 sqft) for those planning bigger builds.",
      approvals:
        "This layout carries formal DTCP approval, confirmed and verified as part of our standard listing process — meaning the plots meet legal planning requirements for registration, bank loans, and construction.",
      pricing:
        "Pricing varies by plot size and position within the layout. We provide transparent, upfront pricing starting from competitive rates with no hidden brokerage costs, and can discuss payment structuring during your site visit.",
    },

    connectivity: {
      hubTitle: "Distance to Sriperumbudur & Key Hubs",
      hubText:
        "Katrambakkam's proximity to Sriperumbudur places it within reach of a major manufacturing and electronics employment corridor — a key driver of steady housing and land demand in this belt.",
      amenityTitle: "Nearby Schools, Hospitals & Landmarks",
      amenityText:
        "The area is served by schools, healthcare facilities, and everyday essentials within a reasonable distance, supporting practical day-to-day living for residents who choose to build here.",
      roadTitle: "Road Connectivity",
      roadText:
        "The layout is accessed via a well-defined road network connecting to the broader Sriperumbudur–Chennai corridor, supporting both daily commute and future infrastructure growth.",
    },

    whyChooseUs:
      "Katrambakkam is where we started, and it remains one of our most thoroughly documented layouts. Every plot has gone through our full verification process — title check, approval confirmation, and physical site survey — before it's ever listed. We deal with you directly, with zero brokerage, and have been active in this specific location since 2005.",

    investmentPotentialTitle: "Investment Potential of Plots in Katrambakkam",
    investmentPotentialText:
      "Land values along the Sriperumbudur corridor have benefited from sustained industrial growth in the region, and Katrambakkam's established, approved status makes it a lower-risk entry point than newer, unapproved layouts nearby. For buyers weighing end-use versus investment, this location supports both — proximity to industrial employment for rental demand, and DTCP-approved status for straightforward resale later.",

    faqs: [
      {
        q: "Are the plots in Katrambakkam DTCP approved?",
        a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available to buyers.",
      },
      {
        q: "How far is Katrambakkam from Sriperumbudur?",
        a: "Katrambakkam is positioned within convenient reach of the Sriperumbudur industrial belt — exact distance to specific points of interest can be confirmed during your site visit.",
      },
      {
        q: "Do you charge brokerage on plots in this location?",
        a: "No — all plots in Katrambakkam are sold directly, with zero brokerage.",
      },
      {
        q: "Can I get a bank loan for a plot in this layout?",
        a: "DTCP-approved plots are generally eligible for bank financing, though this depends on the specific lender and plot — we can guide you on this during your enquiry.",
      },
      {
        q: "What documents will I receive after registration?",
        a: "You'll receive the registered sale deed along with the title and encumbrance verification documents compiled before the plot was listed.",
      },
    ],

    ctaTitle: "Book a Site Visit to Katrambakkam",
    ctaText:
      "See the layout, verify the details yourself, and get a transparent quote — no pressure, zero brokerage.",
  },

  "plots-in-nandhambakkam": {
    locationName: "Nandhambakkam",
    h1: "Resale Plots in Nandhambakkam – DTCP & CMDA Approved Land Near Kundrathur",
    introText:
      "Nandhambakkam gives buyers a DTCP and CMDA approved layout positioned near Kundrathur and Porur, on Chennai's western side. As with every location we list, plots here have been verified for clear title and zero encumbrance, and are sold directly with zero brokerage.",

    whyBuyTitle: "Why Buy Resale Plots in Nandhambakkam?",
    canonicalKey: "plots-in-nandhambakkam",
    whyBuyText:
      "Nandhambakkam benefits from its position near Kundrathur and Porur — an area with growing residential demand and improving connectivity toward Chennai's western industrial corridor. For buyers who want proximity to the city's west side without the price premium of more established Porur-adjacent layouts, this location offers a practical middle ground, backed by the same verification process we apply everywhere.",

    // plots: [
    //   { id: 1, img: "/assets/properties/plot-1.webp", size: "2400 Sq. Feet" },
    //   { id: 2, img: "/assets/properties/plot-2.webp", size: "1200 Sq. Feet" },
    //   { id: 3, img: "/assets/properties/n-plot-3.webp", size: "2400 Sq. Feet" },
    //   { id: 4, img: "/assets/properties/n-plot-4.webp", size: "1200 Sq. Feet" },
    //   { id: 5, img: "/assets/properties/n-plot-5.webp", size: "2400 Sq. Feet" },
    // ],

    plots: nandhambakkamPlots,

    specifications: {
      sizes:
        "A range of plot sizes is available in this layout to suit different budgets and construction plans (1200 to 2400 sqft). Contact us for current availability and exact dimensions.",
      approvals:
        "This layout carries formal DTCP & CMDA approvals, independently verified as part of our listing process, confirming the plots meet legal planning requirements.",
      pricing:
        "Transparent, upfront pricing starting from Rs. 1500/- to Rs. 3000/- per sqft with zero hidden brokerage costs — payment structuring can be discussed during your site visit.",
    },

    connectivity: {
      hubTitle: "Distance to Kundrathur & Porur",
      hubText:
        "Nandhambakkam sits within reach of both Kundrathur and Porur, giving residents access to Chennai's western residential and commercial corridor without being positioned directly in its highest-priced zones.",
      amenityTitle: "Proximity to Industrial & IT Hubs",
      amenityText:
        "The location also benefits from relative proximity to the broader Sriperumbudur–Oragadam industrial belt, extending its appeal to buyers connected to that employment corridor as well as Chennai's west side.",
      roadTitle: "Road Connectivity & Public Transport",
      roadText:
        "The layout connects to established road networks serving the Kundrathur–Porur corridor, supporting practical day-to-day commuting.",
    },

    whyChooseUs:
      "Every plot in Nandhambakkam goes through the same verification process we apply across all our locations — title check, DTCP/CMDA approval confirmation, and physical site survey. We deal with buyers directly, charge zero brokerage, and bring the same track record built since 2005 to this layout as we do in Katrambakkam.",

    investmentPotentialTitle:
      "Investment Potential of Plots in Nandhambakkam",
    investmentPotentialText:
      "The Kundrathur–Chennai West corridor has seen steady residential demand growth as the city expands westward, and Nandhambakkam's approved status positions it well for buyers looking at both near-term construction and longer-term resale value. Its dual proximity — to Chennai's western residential zone and the Sriperumbudur industrial belt — gives it a broader demand base than a location tied to just one driver.",

    faqs: [
  {
    q: "Are the plots in Nandhambakkam DTCP approved?",
    a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available.",
  },
  {
    q: "How far is Nandhambakkam from Kundrathur and Porur?",
    a: "Nandhambakkam is positioned within convenient reach of both — exact distances to specific landmarks can be confirmed during your site visit.",
  },
  {
    q: "Do you charge brokerage on plots in this location?",
    a: "No — all plots in Nandhambakkam are sold directly, with zero brokerage.",
  },
  {
    q: "Is bank loan financing available for plots in this layout?",
    a: "DTCP-approved plots are generally loan-eligible, though this depends on the specific lender — we can advise during your enquiry.",
  },
  {
    q: "What makes Nandhambakkam different from your Katrambakkam location?",
    a: "Nandhambakkam is positioned on Chennai's western side near Kundrathur and Porur, while Katrambakkam is closer to the Sriperumbudur industrial belt — the right choice depends on which corridor better matches your commute or investment goals.",
  },
],

    ctaTitle: "Book a Site Visit to Nandhambakkam",
    ctaText:
      "See the layout in person, verify the documents, and get a transparent, no-brokerage quote.",
  },
  "plots-in-thaiyur-omr": {
    locationName: "Thaiyur, OMR",
    h1: "Resale Plots in Thaiyur, OMR – DTCP & CMDA Approved Land Near Siruseri IT Park",
    introText:
      "Thaiyur is our OMR location, positioned close to Siruseri IT Park and Chennai's broader IT employment corridor. Like our other layouts, every plot here is DTCP and CMDA approved, verified for clear title and zero encumbrance, and sold directly with zero brokerage.",

    whyBuyTitle: "Why Buy Resale Plots in Thaiyur, OMR?",
    canonicalKey: "plots-in-thaiyur-omr",
    whyBuyText:
      "OMR's IT corridor has driven some of the most consistent land and rental demand in Chennai over the past decade, and Thaiyur sits within that demand zone without carrying the premium pricing of more central OMR stretches. For buyers targeting rental yield from IT/ITES employees or long-term appreciation tied to continued corridor growth, this location offers a genuinely different investment case than our Katrambakkam or Nandhambakkam layouts.",

//     plots: [
//       { id: 1, img: "/assets/properties/t-1.webp", size: "1200 Sq. Feet" },
//        { id: 2, img: "/assets/properties/t-2.webp", size: "2400 Sq. Feet" },
//       { id: 3, img: "/assets/properties/t-3.webp", size: "1200 Sq. Feet" },
//      { id: 4, img: "/assets/properties/t-4.webp", size: "800 Sq. Feet" },
//       { id: 5, img: "/assets/properties/5.webp", size: "2400 Sq. Feet" },
//     ],

   plots:thaiyurOmrPlots,

    specifications: {
      sizes:
        "Multiple plot sizes are available to suit different budgets and building plans. Contact us for current availability and exact dimensions.",
      approvals:
        "This layout carries formal DTCP approval, independently verified as part of our listing process, confirming eligibility for registration and construction.",
      pricing:
        "Transparent, upfront pricing by plot size and position, with zero brokerage — payment structuring can be discussed during your site visit.",
    },

    connectivity: {
      hubTitle: "Distance to Siruseri IT Park & the OMR Corridor",
      hubText:
        "Thaiyur's proximity to Siruseri IT Park places it directly within one of Chennai's most active IT employment zones, a key driver of consistent rental and resale demand in this stretch of OMR.",
      amenityTitle: "Proximity to Other Tech Hubs",
      amenityText:
        "Beyond Siruseri, the location also has reasonable reach to other OMR IT hubs including Sholinganallur and Navalur, broadening its appeal to the wider IT workforce.",
      roadTitle: "Road Connectivity (OMR & ECR Access)",
      roadText:
        "The layout benefits from OMR connectivity, with practical access toward ECR as well — supporting both daily commutes for IT employees and broader regional connectivity.",
    },

    whyChooseUs:
      "Thaiyur goes through the same rigorous verification process as our other locations — title check, DTCP approval confirmation, and physical site survey — before any plot is listed. We sell directly with zero brokerage, and bring the same track record established since 2005 to this OMR location.",

    investmentPotentialTitle: "Investment Potential of Plots in Thaiyur, OMR",
    investmentPotentialText:
      "The OMR IT corridor has consistently outperformed many other Chennai micro-markets in both rental demand and long-term appreciation, driven by sustained IT/ITES employment growth. Thaiyur's position near Siruseri IT Park gives it direct exposure to that demand, while its relative position slightly outside the most saturated OMR stretches keeps entry pricing more accessible than plots closer to Sholinganallur or Navalur.",

    faqs: [
      {
        q: "Are the plots in Thaiyur, OMR DTCP approved?",
        a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available.",
      },
      {
        q: "How far is Thaiyur from Siruseri IT Park?",
        a: "Thaiyur is positioned within convenient reach of Siruseri IT Park — exact distance can be confirmed during your site visit.",
      },
      {
        q: "Is this location good for rental income from IT employees?",
        a: "Thaiyur's proximity to the OMR IT corridor makes it a location commonly considered for rental potential tied to IT/ITES employment, though rental outcomes depend on your specific plans (build type, timing, and market conditions).",
      },
      {
        q: "Do you charge brokerage on plots in this location?",
        a: "No — all plots in Thaiyur, OMR are sold directly, with zero brokerage.",
      },
      {
        q: "How does Thaiyur compare to your Katrambakkam and Nandhambakkam locations?",
        a: "Thaiyur is positioned on OMR near Siruseri IT Park, giving it an IT-corridor demand profile, while Katrambakkam and Nandhambakkam are tied to the Sriperumbudur industrial belt and Kundrathur–Porur corridor respectively — the best fit depends on which employment/growth corridor matches your goals.",
      },
    ],

    ctaTitle: "Book a Site Visit to Thaiyur, OMR",
    ctaText:
      "See the layout, verify the details in person, and get a transparent, no-brokerage quote.",
  },
};

// Aliases for alternate URL formats
propertyData["resale-plots-katrambakkam"] = propertyData["plots-in-katrambakkam"];
propertyData["resale-plots-nandhambakkam"] = propertyData["plots-in-nandhambakkam"];
propertyData["resale-plots-thaiyur"] = propertyData["plots-in-thaiyur-omr"];
propertyData["plots-in-thaiyur"] = propertyData["plots-in-thaiyur-omr"];

export default function PropertyPageClient() {
  const { slug } = useParams();
  const data = propertyData[slug] || propertyData["resale-plots-katrambakkam"];
  const [openFaq, setOpenFaq] = useState(null);

  const otherLocations = allLocations.filter(
    (loc) => loc.key !== data.canonicalKey
  );

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  

  return (
    <div className="bg-white text-gray-800">
      
      {/* 1. Hero Section */}
      <section className="relative w-full bg-slate-900 text-white py-16 px-6 lg:px-24">
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <Image
            src={katrambakkamHero}
            alt={`${data.locationName} Resale Plots`}
            caption="Approved resale plot layout in Chennai with marked boundaries"
            fill
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-5xl mx-auto z-10 py-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            {data.h1}
          </h1>
          <p className="text-base md:text-lg text-gray-200 max-w-3xl leading-relaxed">
            {data.introText}
          </p>
          <p className="mt-4 text-sm text-gray-300">
    Explore this layout alongside{" "}
    <Link
      href="/"
      className="text-green-400 font-semibold underline hover:text-green-300 transition"
    >
      our approved resale plots across Chennai
    </Link>
    .
  </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
        {/* 2. Why Buy Section */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {data.whyBuyTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg bg-gray-50 p-6 rounded-2xl border border-gray-100">
            {data.whyBuyText}
          </p>
        </section>

        {/* 3. Plot Specifications & Grid */}
        <section className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Plot Details & Specifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Available Plot Sizes
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {data.specifications.sizes}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                DTCP & CMDA Approval Details
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {data.specifications.approvals}
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Pricing & Payment Options
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {data.specifications.pricing}
              </p>
            </div>
          </div>

          {/* Plot Cards Grid */}
<div className="pt-6">
  <h3 className="text-xl font-semibold text-gray-900 mb-6">
    Featured Available Plots in {data.locationName}
  </h3>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Optional chaining ?. prevents page crashes if plots is missing */}
    {data.plots?.map((plot) => (
      <div
        key={plot.id}
        className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition flex flex-col justify-between"
      >
        <div>
          {/* Card Image */}
          <div className="relative h-48 w-full bg-gray-100">
            <Image
              src={plot.img}
              alt={plot.alt || `${data.locationName} Plot ${plot.size}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover p-2 rounded-2xl"
            />
          </div>

          {/* Card Content */}
          <div className="p-5 pb-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-green-800 bg-green-50 px-2.5 py-1 rounded-full">
                Approved
              </span>
              <span className="text-lg font-bold text-gray-900">
                📐 {plot.size}
              </span>
            </div>

            {/* Display Title */}
            {plot.title && (
              <h4 className="font-semibold text-gray-900 text-base mt-2">
                {plot.title}
              </h4>
            )}

            {/* Display Caption */}
            {plot.caption && (
              <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
                {plot.caption}
              </p>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="p-5 pt-3">
          <Link href="/contact-us">
            <button className="w-full px-4 py-2 bg-green-800 text-white text-sm font-medium rounded-xl hover:bg-green-700 transition text-center">
              Know More
            </button>
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
</section>

        {/* 4. Location & Connectivity */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Location & Connectivity from {data.locationName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {data.connectivity.hubTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {data.connectivity.hubText}
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {data.connectivity.amenityTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {data.connectivity.amenityText}
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {data.connectivity.roadTitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {data.connectivity.roadText}
              </p>
            </div>
          </div>
        </section>

        {/* Location Cross-Linking Section */}
<section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-900 mb-2">
    Comparing Corridors? Explore Our Other Prime Locations
  </h2>
  <p className="text-sm text-gray-600 mb-6">
    If you are evaluating other key growth zones across Chennai, inspect our verified listings in neighboring hubs:
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {otherLocations.map((loc) => (
      <div
        key={loc.key}
        className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between"
      >
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            <Link
              href={loc.href}
              className="text-green-800 underline hover:text-green-900 transition"
            >
              {loc.name}
            </Link>
          </h3>
          <p className="text-sm text-gray-600">{loc.desc}</p>
        </div>
        <div className="mt-4">
          <Link
            href={loc.href}
            className="text-xs font-bold text-green-800 uppercase tracking-wider hover:underline"
          >
            View Layout →
          </Link>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* 5. Why Choose Sri Balaji Homes */}
        {/* 5. Why Choose Sri Balaji Homes */}
<section className="bg-green-900 text-white p-8 md:p-10 rounded-3xl">
  <h2 className="text-2xl md:text-3xl font-bold mb-4">
    Why Choose Sri Balaji Homes for This Layout
  </h2>
  <p className="text-green-100 leading-relaxed text-base md:text-lg">
    {data.whyChooseUs} Contact{" "}
    <Link
      href="/about-us"
      className="text-white font-bold underline hover:text-green-200 transition"
    >
      Sri Balaji Homes
    </Link>{" "}
    to speak directly with{" "}
    <Link
      href="/about-us"
      className="text-white font-bold underline hover:text-green-200 transition"
    >
      our team
    </Link>{" "}
    and review full document verification records.
  </p>
</section>

        {/* 6. Investment Potential */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {data.investmentPotentialTitle}
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg bg-gray-50 p-6 rounded-2xl border border-gray-100">
            {data.investmentPotentialText}
          </p>
        </section>

        {/* Testimonials Banner */}
<div className="text-center bg-green-50 p-4 rounded-2xl border border-green-100">
  <p className="text-sm md:text-base text-gray-700">
    Considering a plot here? Read{" "}
    <Link
      href="/testimonials"
      className="text-green-800 font-bold underline hover:text-green-900 transition"
    >
      what our customers say
    </Link>{" "}
    about their legal verification and plot registration experience.
  </p>
</div>

        {/* 7. FAQs */}
        <section className="pt-4">
  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
    Frequently Asked Questions
  </h2>
  <div className="space-y-4 max-w-4xl mx-auto">
    {data.faqs.map((faq, index) => (
      <div
        key={index}
        className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
      >
        <button
          onClick={() => toggleFaq(index)}
          className="w-full text-left p-5 flex justify-between items-center font-semibold text-gray-900 text-sm md:text-base hover:bg-gray-50 transition cursor-pointer"
        >
          <span className="pr-4">{faq.q}</span>
          <div className="flex-shrink-0">
            {openFaq === index ? (
              <MinusIcon className="h-5 w-5 text-green-800 font-bold transition-all duration-200" />
            ) : (
              <PlusIcon className="h-5 w-5 text-gray-500 font-bold transition-all duration-200" />
            )}
          </div>
        </button>
        {openFaq === index && (
          <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
            {faq.a}
          </div>
        )}
      </div>
    ))}
  </div>
</section>

        {/* 8. Call to Action Banner */}
        <section className="bg-gradient-to-r from-gray-900 to-green-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {data.ctaTitle}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            {data.ctaText}
          </p>
          <Link href="/contact-us">
            <button className="px-8 py-4 bg-green-600 hover:bg-green-500 text-white font-bold rounded-2xl shadow-lg transition transform hover:-translate-y-0.5">
              Book Your Free Site Visit →
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

