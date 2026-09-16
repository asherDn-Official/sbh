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



// "use client";
// import React, { useState } from "react";
// import { useParams } from "next/navigation";
// import Image from "next/image";
// import Link from "next/link";
// import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

// import katrambakkamHero from "../../../public/assets/home/resale-plots-katrambakkam-layout.webp";

// // --- KATRAMBAKKAM PLOTS ---
// export const katrambakkamPlots = [
//   {
//     id: 1,
//     img: "/assets/properties/resale-plots-katrambakkam-800sqft.webp",
//     size: "800 Sq. Feet",
//     alt: "800 Sq Ft DTCP approved resale plot layout in Katrambakkam near Sriperumbudur",
//     title: "Resale Plots Katrambakkam 800 Sq Ft",
//     caption: "DTCP approved 800 sq ft plot in Katrambakkam, verified for clear title.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 2,
//     img: "/assets/properties/resale-plots-katrambakkam-1200sqft.webp",
//     size: "1200 Sq. Feet",
//     alt: "1200 Sq Ft CMDA approved residential plot layout in Katrambakkam Chennai",
//     title: "Resale Plots Katrambakkam 1200 Sq Ft",
//     caption: "1200 sq ft ready-to-build resale plot in Katrambakkam with zero brokerage.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 3,
//     img: "/assets/properties/resale-plots-katrambakkam-2400sqft.webp",
//     size: "2400 Sq. Feet",
//     alt: "2400 Sq Ft corner plot layout in Katrambakkam near Sriperumbudur corridor",
//     title: "Resale Plots Katrambakkam 2400 Sq Ft",
//     caption: "DTCP approved premium 2400 sq ft resale plot with road connectivity.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 4,
//     img: "/assets/properties/resale-plots-katrambakkam-1800sqft.webp",
//     size: "1800 Sq. Feet",
//     alt: "1800 Sq Ft clear title residential plot layout in Katrambakkam",
//     title: "Resale Plots Katrambakkam 1800 Sq Ft",
//     caption: "1800 sq ft plot verified with 30-year encumbrance certificate.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 5,
//     img: "/assets/properties/resale-plots-katrambakkam-2100sqft.webp",
//     size: "2100 Sq. Feet",
//     alt: "2100 Sq Ft resale plot in Katrambakkam layout ready for immediate construction",
//     title: "Resale Plots Katrambakkam 2100 Sq Ft",
//     caption: "Direct developer 2100 sq ft plot in Katrambakkam, clear legal title.",
//     width: 1200,
//     height: 800,
//   },
// ];

// // --- NANDHAMBAKKAM PLOTS ---
// export const nandhambakkamPlots = [
//   {
//     id: 1,
//     img: "/assets/properties/resale-plots-nandhambakkam-2400sqft.webp",
//     size: "2400 Sq. Feet",
//     alt: "2400 Sq Ft CMDA approved resale plot layout in Nandhambakkam near Kundrathur",
//     title: "Resale Plots Nandhambakkam 2400 Sq Ft",
//     caption: "CMDA approved 2400 sq ft resale plot in Nandhambakkam near Kundrathur.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 2,
//     img: "/assets/properties/resale-plots-nandhambakkam-1200sqft.webp",
//     size: "1200 Sq. Feet",
//     alt: "1200 Sq Ft clear title plot layout in Nandhambakkam Chennai",
//     title: "Resale Plots Nandhambakkam 1200 Sq Ft",
//     caption: "Ready for construction 1200 sq ft plot in Nandhambakkam with clear Patta.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 3,
//     img: "/assets/properties/resale-plots-nandhambakkam-2400sqft-layout2.webp",
//     size: "2400 Sq. Feet",
//     alt: "2400 Sq Ft residential plot in Nandhambakkam near Porur junction",
//     title: "Resale Plots Nandhambakkam 2400 Sq Ft",
//     caption: "2400 sq ft premium resale plot verified for legal title in Nandhambakkam.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 4,
//     img: "/assets/properties/resale-plots-nandhambakkam-1200sqft-layout2.webp",
//     size: "1200 Sq. Feet",
//     alt: "1200 Sq Ft CMDA plot layout in Nandhambakkam ready for villa construction",
//     title: "Resale Plots Nandhambakkam 1200 Sq Ft",
//     caption: "CMDA approved 1200 sq ft plot in Nandhambakkam with 0% brokerage.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 5,
//     img: "/assets/properties/resale-plots-nandhambakkam-2400sqft-layout3.webp",
//     size: "2400 Sq. Feet",
//     alt: "2400 Sq Ft gated community resale plot layout in Nandhambakkam",
//     title: "Resale Plots Nandhambakkam 2400 Sq Ft",
//     caption: "2400 sq ft residential land in Nandhambakkam with excellent road connectivity.",
//     width: 1200,
//     height: 800,
//   },
// ];

// // --- THAIYUR OMR PLOTS ---
// export const thaiyurOmrPlots = [
//   {
//     id: 1,
//     img: "/assets/properties/resale-plots-thaiyur-omr-1200sqft.webp",
//     size: "1200 Sq. Feet",
//     alt: "1200 Sq Ft DTCP approved plot layout in Thaiyur OMR near Siruseri IT Park",
//     title: "Resale Plots Thaiyur OMR 1200 Sq Ft",
//     caption: "Approved 1200 sq ft plot in Thaiyur OMR, close to Siruseri IT Park.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 2,
//     img: "/assets/properties/resale-plots-thaiyur-omr-2400sqft.webp",
//     size: "2400 Sq. Feet",
//     alt: "2400 Sq Ft resale plot in Thaiyur OMR Kelambakkam stretch",
//     title: "Resale Plots Thaiyur OMR 2400 Sq Ft",
//     caption: "2400 sq ft plot in Thaiyur OMR, 100% verified clear title.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 3,
//     img: "/assets/properties/resale-plots-thaiyur-omr-1200sqft-layout2.webp",
//     size: "1200 Sq. Feet",
//     alt: "1200 Sq Ft residential land layout in Thaiyur OMR Chennai",
//     title: "Resale Plots Thaiyur OMR 1200 Sq Ft",
//     caption: "1200 sq ft investment-ready plot in Thaiyur OMR with zero broker fees.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 4,
//     img: "/assets/properties/resale-plots-thaiyur-omr-800sqft.webp",
//     size: "800 Sq. Feet",
//     alt: "800 Sq Ft compact plot layout in Thaiyur OMR near IT corridor",
//     title: "Resale Plots Thaiyur OMR 800 Sq Ft",
//     caption: "Affordable 800 sq ft plot layout in Thaiyur OMR near Kelambakkam.",
//     width: 1200,
//     height: 800,
//   },
//   {
//     id: 5,
//     img: "/assets/properties/resale-plots-thaiyur-omr-2400sqft-layout2.webp",
//     size: "2400 Sq. Feet",
//     alt: "2400 Sq Ft DTCP approved corner plot layout in Thaiyur OMR",
//     title: "Resale Plots Thaiyur OMR 2400 Sq Ft",
//     caption: "DTCP approved 2400 sq ft plot in Thaiyur OMR with direct owner pricing.",
//     width: 1200,
//     height: 800,
//   },
// ];


// const allLocations = [
//   {
//     key: "approved-resale-plots-kattrambakkam-chennai",
//     name: "DTCP Approved Plots in Kattrambakkam",
//     title: "DTCP Approved Resale Plots in Kattrambakkam",
//     href: "/properties/approved-resale-plots-kattrambakkam-chennai",
//     desc: "DTCP & CMDA approved plots near the Sriperumbudur industrial belt.",
//   },
//   {
//     key: "cmda-approved-plots-nandhambakkam",
//     name: "CMDA Approved Plots in Nandhambakkam",
//     title: "CMDA Approved Plots in Nandhambakkam",
//     href: "/properties/cmda-approved-plots-nandhambakkam",
//     desc: "Verified CMDA approved plots near Kundrathur and Porur.",
//   },
//   {
//     key: "dtcp-resale-plots-thaiyur-omr",
//     name: "Resale Plots in Thaiyur (OMR)",
//     title: "Residential Resale Plots in Thaiyur, OMR",
//     href: "/properties/dtcp-resale-plots-thaiyur-omr",
//     desc: "Ready-to-build plots located near Siruseri IT Park on OMR.",
//   },
// ];

// const propertyData = {
//   "plots-in-katrambakkam": {
//     locationName: "Katrambakkam",
//     h1: "Resale Plots in Katrambakkam – DTCP & CMDA Approved Land Near Sriperumbudur",
//     introText:
//       "Katrambakkam is our original and most established location — a DTCP and CMDA approved layout close to the Sriperumbudur industrial belt, one of Chennai's most active manufacturing and employment corridors. Every plot here has been verified for clear title and zero encumbrance, and sold directly with zero brokerage.",

//     whyBuyTitle: "Why Buy Resale Plots in Katrambakkam?",
//     canonicalKey: "plots-in-katrambakkam",
//     whyBuyText:
//       "Katrambakkam sits within reach of Sriperumbudur's industrial employment base, giving it steady demand from both end-users looking to build and investors targeting rental or resale appreciation. Unlike a brand-new unapproved layout, this is an established plotted development with existing infrastructure and legal approvals already in place — you're not waiting years for a project to catch up to its promises.",

//     // plots: [
//     //   { id: 1, img: "/assets/properties/k-1.webp", size: "800 Sq. Feet" },
//     //   { id: 2, img: "/assets/properties/k-2.webp", size: "1200 Sq. Feet" },
//     //   { id: 3, img: "/assets/properties/k-3.webp", size: "2400 Sq. Feet" },
//     //   { id: 4, img: "/assets/properties/k-4.webp", size: "1800 Sq. Feet" },
//     //   { id: 5, img: "/assets/properties/k-5.webp", size: "2100 Sq. Feet" },
//     // ],
    
//     plots: katrambakkamPlots,

//     specifications: {
//       sizes:
//         "Plots are available across a range of sizes to suit different budgets and building plans — from compact residential plots (800 sqft, 1200 sqft) to larger parcels (1800 sqft, 2100 sqft, 2400 sqft) for those planning bigger builds.",
//       approvals:
//         "This layout carries formal DTCP approval, confirmed and verified as part of our standard listing process — meaning the plots meet legal planning requirements for registration, bank loans, and construction.",
//       pricing:
//         "Pricing varies by plot size and position within the layout. We provide transparent, upfront pricing starting from competitive rates with no hidden brokerage costs, and can discuss payment structuring during your site visit.",
//     },

//     connectivity: {
//       hubTitle: "Distance to Sriperumbudur & Key Hubs",
//       hubText:
//         "Katrambakkam's proximity to Sriperumbudur places it within reach of a major manufacturing and electronics employment corridor — a key driver of steady housing and land demand in this belt.",
//       amenityTitle: "Nearby Schools, Hospitals & Landmarks",
//       amenityText:
//         "The area is served by schools, healthcare facilities, and everyday essentials within a reasonable distance, supporting practical day-to-day living for residents who choose to build here.",
//       roadTitle: "Road Connectivity",
//       roadText:
//         "The layout is accessed via a well-defined road network connecting to the broader Sriperumbudur–Chennai corridor, supporting both daily commute and future infrastructure growth.",
//     },

//     whyChooseUs:
//       "Katrambakkam is where we started, and it remains one of our most thoroughly documented layouts. Every plot has gone through our full verification process — title check, approval confirmation, and physical site survey — before it's ever listed. We deal with you directly, with zero brokerage, and have been active in this specific location since 2005.",

//     investmentPotentialTitle: "Investment Potential of Plots in Katrambakkam",
//     investmentPotentialText:
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

//     ctaTitle: "Book a Site Visit to Katrambakkam",
//     ctaText:
//       "See the layout, verify the details yourself, and get a transparent quote — no pressure, zero brokerage.",
//   },

//   "plots-in-nandhambakkam": {
//     locationName: "Nandhambakkam",
//     h1: "Resale Plots in Nandhambakkam – DTCP & CMDA Approved Land Near Kundrathur",
//     introText:
//       "Nandhambakkam gives buyers a DTCP and CMDA approved layout positioned near Kundrathur and Porur, on Chennai's western side. As with every location we list, plots here have been verified for clear title and zero encumbrance, and are sold directly with zero brokerage.",

//     whyBuyTitle: "Why Buy Resale Plots in Nandhambakkam?",
//     canonicalKey: "plots-in-nandhambakkam",
//     whyBuyText:
//       "Nandhambakkam benefits from its position near Kundrathur and Porur — an area with growing residential demand and improving connectivity toward Chennai's western industrial corridor. For buyers who want proximity to the city's west side without the price premium of more established Porur-adjacent layouts, this location offers a practical middle ground, backed by the same verification process we apply everywhere.",

//     // plots: [
//     //   { id: 1, img: "/assets/properties/plot-1.webp", size: "2400 Sq. Feet" },
//     //   { id: 2, img: "/assets/properties/plot-2.webp", size: "1200 Sq. Feet" },
//     //   { id: 3, img: "/assets/properties/n-plot-3.webp", size: "2400 Sq. Feet" },
//     //   { id: 4, img: "/assets/properties/n-plot-4.webp", size: "1200 Sq. Feet" },
//     //   { id: 5, img: "/assets/properties/n-plot-5.webp", size: "2400 Sq. Feet" },
//     // ],

//     plots: nandhambakkamPlots,

//     specifications: {
//       sizes:
//         "A range of plot sizes is available in this layout to suit different budgets and construction plans (1200 to 2400 sqft). Contact us for current availability and exact dimensions.",
//       approvals:
//         "This layout carries formal DTCP & CMDA approvals, independently verified as part of our listing process, confirming the plots meet legal planning requirements.",
//       pricing:
//         "Transparent, upfront pricing starting from Rs. 1500/- to Rs. 3000/- per sqft with zero hidden brokerage costs — payment structuring can be discussed during your site visit.",
//     },

//     connectivity: {
//       hubTitle: "Distance to Kundrathur & Porur",
//       hubText:
//         "Nandhambakkam sits within reach of both Kundrathur and Porur, giving residents access to Chennai's western residential and commercial corridor without being positioned directly in its highest-priced zones.",
//       amenityTitle: "Proximity to Industrial & IT Hubs",
//       amenityText:
//         "The location also benefits from relative proximity to the broader Sriperumbudur–Oragadam industrial belt, extending its appeal to buyers connected to that employment corridor as well as Chennai's west side.",
//       roadTitle: "Road Connectivity & Public Transport",
//       roadText:
//         "The layout connects to established road networks serving the Kundrathur–Porur corridor, supporting practical day-to-day commuting.",
//     },

//     whyChooseUs:
//       "Every plot in Nandhambakkam goes through the same verification process we apply across all our locations — title check, DTCP/CMDA approval confirmation, and physical site survey. We deal with buyers directly, charge zero brokerage, and bring the same track record built since 2005 to this layout as we do in Katrambakkam.",

//     investmentPotentialTitle:
//       "Investment Potential of Plots in Nandhambakkam",
//     investmentPotentialText:
//       "The Kundrathur–Chennai West corridor has seen steady residential demand growth as the city expands westward, and Nandhambakkam's approved status positions it well for buyers looking at both near-term construction and longer-term resale value. Its dual proximity — to Chennai's western residential zone and the Sriperumbudur industrial belt — gives it a broader demand base than a location tied to just one driver.",

//     faqs: [
//   {
//     q: "Are the plots in Nandhambakkam DTCP approved?",
//     a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available.",
//   },
//   {
//     q: "How far is Nandhambakkam from Kundrathur and Porur?",
//     a: "Nandhambakkam is positioned within convenient reach of both — exact distances to specific landmarks can be confirmed during your site visit.",
//   },
//   {
//     q: "Do you charge brokerage on plots in this location?",
//     a: "No — all plots in Nandhambakkam are sold directly, with zero brokerage.",
//   },
//   {
//     q: "Is bank loan financing available for plots in this layout?",
//     a: "DTCP-approved plots are generally loan-eligible, though this depends on the specific lender — we can advise during your enquiry.",
//   },
//   {
//     q: "What makes Nandhambakkam different from your Katrambakkam location?",
//     a: "Nandhambakkam is positioned on Chennai's western side near Kundrathur and Porur, while Katrambakkam is closer to the Sriperumbudur industrial belt — the right choice depends on which corridor better matches your commute or investment goals.",
//   },
// ],

//     ctaTitle: "Book a Site Visit to Nandhambakkam",
//     ctaText:
//       "See the layout in person, verify the documents, and get a transparent, no-brokerage quote.",
//   },
//   "plots-in-thaiyur-omr": {
//     locationName: "Thaiyur, OMR",
//     h1: "Resale Plots in Thaiyur, OMR – DTCP & CMDA Approved Land Near Siruseri IT Park",
//     introText:
//       "Thaiyur is our OMR location, positioned close to Siruseri IT Park and Chennai's broader IT employment corridor. Like our other layouts, every plot here is DTCP and CMDA approved, verified for clear title and zero encumbrance, and sold directly with zero brokerage.",

//     whyBuyTitle: "Why Buy Resale Plots in Thaiyur, OMR?",
//     canonicalKey: "plots-in-thaiyur-omr",
//     whyBuyText:
//       "OMR's IT corridor has driven some of the most consistent land and rental demand in Chennai over the past decade, and Thaiyur sits within that demand zone without carrying the premium pricing of more central OMR stretches. For buyers targeting rental yield from IT/ITES employees or long-term appreciation tied to continued corridor growth, this location offers a genuinely different investment case than our Katrambakkam or Nandhambakkam layouts.",

// //     plots: [
// //       { id: 1, img: "/assets/properties/t-1.webp", size: "1200 Sq. Feet" },
// //        { id: 2, img: "/assets/properties/t-2.webp", size: "2400 Sq. Feet" },
// //       { id: 3, img: "/assets/properties/t-3.webp", size: "1200 Sq. Feet" },
// //      { id: 4, img: "/assets/properties/t-4.webp", size: "800 Sq. Feet" },
// //       { id: 5, img: "/assets/properties/5.webp", size: "2400 Sq. Feet" },
// //     ],

//    plots:thaiyurOmrPlots,

//     specifications: {
//       sizes:
//         "Multiple plot sizes are available to suit different budgets and building plans. Contact us for current availability and exact dimensions.",
//       approvals:
//         "This layout carries formal DTCP approval, independently verified as part of our listing process, confirming eligibility for registration and construction.",
//       pricing:
//         "Transparent, upfront pricing by plot size and position, with zero brokerage — payment structuring can be discussed during your site visit.",
//     },

//     connectivity: {
//       hubTitle: "Distance to Siruseri IT Park & the OMR Corridor",
//       hubText:
//         "Thaiyur's proximity to Siruseri IT Park places it directly within one of Chennai's most active IT employment zones, a key driver of consistent rental and resale demand in this stretch of OMR.",
//       amenityTitle: "Proximity to Other Tech Hubs",
//       amenityText:
//         "Beyond Siruseri, the location also has reasonable reach to other OMR IT hubs including Sholinganallur and Navalur, broadening its appeal to the wider IT workforce.",
//       roadTitle: "Road Connectivity (OMR & ECR Access)",
//       roadText:
//         "The layout benefits from OMR connectivity, with practical access toward ECR as well — supporting both daily commutes for IT employees and broader regional connectivity.",
//     },

//     whyChooseUs:
//       "Thaiyur goes through the same rigorous verification process as our other locations — title check, DTCP approval confirmation, and physical site survey — before any plot is listed. We sell directly with zero brokerage, and bring the same track record established since 2005 to this OMR location.",

//     investmentPotentialTitle: "Investment Potential of Plots in Thaiyur, OMR",
//     investmentPotentialText:
//       "The OMR IT corridor has consistently outperformed many other Chennai micro-markets in both rental demand and long-term appreciation, driven by sustained IT/ITES employment growth. Thaiyur's position near Siruseri IT Park gives it direct exposure to that demand, while its relative position slightly outside the most saturated OMR stretches keeps entry pricing more accessible than plots closer to Sholinganallur or Navalur.",

//     faqs: [
//       {
//         q: "Are the plots in Thaiyur, OMR DTCP approved?",
//         a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available.",
//       },
//       {
//         q: "How far is Thaiyur from Siruseri IT Park?",
//         a: "Thaiyur is positioned within convenient reach of Siruseri IT Park — exact distance can be confirmed during your site visit.",
//       },
//       {
//         q: "Is this location good for rental income from IT employees?",
//         a: "Thaiyur's proximity to the OMR IT corridor makes it a location commonly considered for rental potential tied to IT/ITES employment, though rental outcomes depend on your specific plans (build type, timing, and market conditions).",
//       },
//       {
//         q: "Do you charge brokerage on plots in this location?",
//         a: "No — all plots in Thaiyur, OMR are sold directly, with zero brokerage.",
//       },
//       {
//         q: "How does Thaiyur compare to your Katrambakkam and Nandhambakkam locations?",
//         a: "Thaiyur is positioned on OMR near Siruseri IT Park, giving it an IT-corridor demand profile, while Katrambakkam and Nandhambakkam are tied to the Sriperumbudur industrial belt and Kundrathur–Porur corridor respectively — the best fit depends on which employment/growth corridor matches your goals.",
//       },
//     ],

//     ctaTitle: "Book a Site Visit to Thaiyur, OMR",
//     ctaText:
//       "See the layout, verify the details in person, and get a transparent, no-brokerage quote.",
//   },
// };

// // Aliases for alternate URL formats
// propertyData["approved-resale-plots-kattrambakkam-chennai"] = propertyData["plots-in-katrambakkam"];
// propertyData["cmda-approved-plots-nandhambakkam"] = propertyData["plots-in-nandhambakkam"];
// propertyData["dtcp-resale-plots-thaiyur-omr"] = propertyData["plots-in-thaiyur-omr"];
// propertyData["resale-plots-katrambakkam"] = propertyData["plots-in-katrambakkam"];
// propertyData["resale-plots-nandhambakkam"] = propertyData["plots-in-nandhambakkam"];
// propertyData["resale-plots-thaiyur"] = propertyData["plots-in-thaiyur-omr"];
// propertyData["plots-in-thaiyur"] = propertyData["plots-in-thaiyur-omr"];

// export default function PropertyPageClient() {
//   const { slug } = useParams();
//   const data = propertyData[slug] || propertyData["resale-plots-katrambakkam"];
//   const [openFaq, setOpenFaq] = useState(null);

//   const otherLocations = allLocations.filter(
//     (loc) => loc.key !== data.canonicalKey
//   );

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

  

//   return (
//     <div className="bg-white text-gray-800">
      
//       {/* 1. Hero Section */}
//       <section className="relative w-full bg-slate-900 text-white py-16 px-6 lg:px-24">
//         <div className="absolute inset-0 overflow-hidden opacity-30">
//           <Image
//             src={katrambakkamHero}
//             alt={`${data.locationName} Resale Plots`}
//             caption="Approved resale plot layout in Chennai with marked boundaries"
//             fill
//             quality={80}
//             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
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
//           <p className="mt-4 text-sm text-gray-300">
//     Explore this layout alongside{" "}
//     <Link
//       href="/"
//       className="text-green-400 font-semibold underline hover:text-green-300 transition"
//     >
//       our approved resale plots across Chennai
//     </Link>
//     .
//   </p>
//         </div>
//       </section>

//       <div className="max-w-6xl mx-auto px-6 py-12 space-y-16">
//         {/* 2. Why Buy Section */}
//         <section>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//             {data.whyBuyTitle}
//           </h2>
//           <p className="text-gray-600 leading-relaxed text-base md:text-lg bg-gray-50 p-6 rounded-2xl border border-gray-100">
//             {data.whyBuyText}
//           </p>
//         </section>

//         {/* 3. Plot Specifications & Grid */}
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

//           {/* Plot Cards Grid */}
// <div className="pt-6">
//   <h3 className="text-xl font-semibold text-gray-900 mb-6">
//     Featured Available Plots in {data.locationName}
//   </h3>
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//     {/* Optional chaining ?. prevents page crashes if plots is missing */}
//     {data.plots?.map((plot) => (
//       <div
//         key={plot.id}
//         className="bg-white border border-gray-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition flex flex-col justify-between"
//       >
//         <div>
//           {/* Card Image */}
//           <div className="relative h-48 w-full bg-gray-100">
//             <Image
//               src={plot.img}
//               alt={plot.alt || `${data.locationName} Plot ${plot.size}`}
//               fill
//               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
//               className="object-cover p-2 rounded-2xl"
//             />
//           </div>

//           {/* Card Content */}
//           <div className="p-5 pb-2">
//             <div className="flex items-center justify-between mb-2">
//               <span className="text-xs font-semibold text-green-800 bg-green-50 px-2.5 py-1 rounded-full">
//                 Approved
//               </span>
//               <span className="text-lg font-bold text-gray-900">
//                 📐 {plot.size}
//               </span>
//             </div>

//             {/* Display Title */}
//             {plot.title && (
//               <h4 className="font-semibold text-gray-900 text-base mt-2">
//                 {plot.title}
//               </h4>
//             )}

//             {/* Display Caption */}
//             {plot.caption && (
//               <p className="text-xs text-gray-600 mt-1 line-clamp-2 leading-relaxed">
//                 {plot.caption}
//               </p>
//             )}
//           </div>
//         </div>

//         {/* Action Button */}
//         <div className="p-5 pt-3">
//           <Link href="/contact-us">
//             <button className="w-full px-4 py-2 bg-green-800 text-white text-sm font-medium rounded-xl hover:bg-green-700 transition text-center">
//               Know More
//             </button>
//           </Link>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
// </section>

//         {/* 4. Location & Connectivity */}
//         <section>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
//             Location & Connectivity from {data.locationName}
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 {data.connectivity.hubTitle}
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.connectivity.hubText}
//               </p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 {data.connectivity.amenityTitle}
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.connectivity.amenityText}
//               </p>
//             </div>
//             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 {data.connectivity.roadTitle}
//               </h3>
//               <p className="text-sm text-gray-600 leading-relaxed">
//                 {data.connectivity.roadText}
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Location Cross-Linking Section */}
// <section className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
//   <h2 className="text-2xl font-bold text-gray-900 mb-2">
//     Comparing Corridors? Explore Our Other Prime Locations
//   </h2>
//   <p className="text-sm text-gray-600 mb-6">
//     If you are evaluating other key growth zones across Chennai, inspect our verified listings in neighboring hubs:
//   </p>
//   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//     {otherLocations.map((loc) => (
//       <div
//         key={loc.key}
//         className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm flex flex-col justify-between"
//       >
//         <div>
//           <h3 className="text-lg font-bold text-gray-900 mb-2">
//             <Link
//               href={loc.href}
//               title={loc.title}
//               className="text-green-800 underline hover:text-green-900 transition"
//             >
//               {loc.name}
//             </Link>
//           </h3>
//           <p className="text-sm text-gray-600">{loc.desc}</p>
//         </div>
//         <div className="mt-4">
//           <Link
//             href={loc.href}
//             title={loc.title}
//             className="text-xs font-bold text-green-800 uppercase tracking-wider hover:underline"
//           >
//             View Layout →
//           </Link>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

//         {/* 5. Why Choose Sri Balaji Homes */}
//         {/* 5. Why Choose Sri Balaji Homes */}
// <section className="bg-green-900 text-white p-8 md:p-10 rounded-3xl">
//   <h2 className="text-2xl md:text-3xl font-bold mb-4">
//     Why Choose Sri Balaji Homes for This Layout
//   </h2>
//   <p className="text-green-100 leading-relaxed text-base md:text-lg">
//     {data.whyChooseUs} Contact{" "}
//     <Link
//       href="/about-us"
//       className="text-white font-bold underline hover:text-green-200 transition"
//     >
//       Sri Balaji Homes
//     </Link>{" "}
//     to speak directly with{" "}
//     <Link
//       href="/about-us"
//       className="text-white font-bold underline hover:text-green-200 transition"
//     >
//       our team
//     </Link>{" "}
//     and review full document verification records.
//   </p>
// </section>

//         {/* 6. Investment Potential */}
//         <section>
//           <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
//             {data.investmentPotentialTitle}
//           </h2>
//           <p className="text-gray-600 leading-relaxed text-base md:text-lg bg-gray-50 p-6 rounded-2xl border border-gray-100">
//             {data.investmentPotentialText}
//           </p>
//         </section>

//         {/* Testimonials Banner */}
// <div className="text-center bg-green-50 p-4 rounded-2xl border border-green-100">
//   <p className="text-sm md:text-base text-gray-700">
//     Considering a plot here? Read{" "}
//     <Link
//       href="/testimonials"
//       className="text-green-800 font-bold underline hover:text-green-900 transition"
//     >
//       what our customers say
//     </Link>{" "}
//     about their legal verification and plot registration experience.
//   </p>
// </div>

//         {/* 7. FAQs */}
//         <section className="pt-4">
//   <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
//     Frequently Asked Questions
//   </h2>
//   <div className="space-y-4 max-w-4xl mx-auto">
//     {data.faqs.map((faq, index) => (
//       <div
//         key={index}
//         className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
//       >
//         <button
//           onClick={() => toggleFaq(index)}
//           className="w-full text-left p-5 flex justify-between items-center font-semibold text-gray-900 text-sm md:text-base hover:bg-gray-50 transition cursor-pointer"
//         >
//           <span className="pr-4">{faq.q}</span>
//           <div className="flex-shrink-0">
//             {openFaq === index ? (
//               <MinusIcon className="h-5 w-5 text-green-800 font-bold transition-all duration-200" />
//             ) : (
//               <PlusIcon className="h-5 w-5 text-gray-500 font-bold transition-all duration-200" />
//             )}
//           </div>
//         </button>
//         {openFaq === index && (
//           <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
//             {faq.a}
//           </div>
//         )}
//       </div>
//     ))}
//   </div>
// </section>

//         {/* 8. Call to Action Banner */}
//         <section className="bg-gradient-to-r from-gray-900 to-green-950 text-white rounded-3xl p-8 md:p-12 text-center shadow-xl">
//           <h2 className="text-2xl md:text-4xl font-bold mb-4">
//             {data.ctaTitle}
//           </h2>
//           <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-sm md:text-base">
//             {data.ctaText}
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

import Image from "next/image";
import Link from "next/link";

export default function PropertiesPage({ data }) {
  if (!data) return null;

  const singleFeatured =
    data.featuredPlots?.listings?.length === 1;

  return (
    <div className="bg-slate-50 text-slate-800 font-sans pt-16 md:pt-20">
      {/* ===================== 1. HERO ===================== */}
      {data.hero && (
        <section className="bg-[#024b12] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-block px-3.5 py-1 bg-white/10 border border-white/20 text-xs sm:text-sm font-semibold rounded-full uppercase tracking-wide mb-4 backdrop-blur-sm">
                Verified Listings
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold mb-4 leading-tight">
                {data.hero.title}
              </h1>
              {data.hero.subtitle && (
                <p className="text-amber-300 font-medium text-lg sm:text-xl mb-4">
                  {data.hero.subtitle}
                </p>
              )}
              {data.hero.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-slate-100 text-sm sm:text-base mb-3 leading-relaxed"
                >
                  {p}
                </p>
              ))}
              {data.hero.callout && (
                <p className="text-amber-200 text-xs sm:text-sm mb-6 italic bg-white/10 p-3 rounded-lg border border-white/20">
                  📌 {data.hero.callout}
                </p>
              )}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#featured"
                  className="bg-[#01380d] border border-white/30 hover:bg-[#024b12] text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base shadow-md transition"
                >
                  {data.hero.ctaPrimary}
                </a>
                <a
                  href="#enquire"
                  className="bg-white text-[#024b12] hover:bg-slate-100 font-bold px-6 py-3 rounded-full text-sm sm:text-base shadow-md transition"
                >
                  {data.hero.ctaSecondary}
                </a>
              </div>
            </div>
            {data.hero.image && (
              <div className="relative h-80 sm:h-[420px] w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
                <Image
                  src={data.hero.image}
                  alt={data.hero.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 2. QUICK SEARCH ===================== */}
      {data.quickSearch && (
        <section className="max-w-7xl mx-auto -mt-8 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-slate-200">
            <p className="text-xl sm:text-2xl font-serif font-bold mb-1">
              {data.quickSearch.title}
            </p>
            <p className="text-xs sm:text-sm text-slate-500 mb-4">
              {data.quickSearch.subtitle}
            </p>

            {data.quickSearch.intro && (
              <p className="text-xs text-slate-500 mb-2">
                {data.quickSearch.intro}
              </p>
            )}
            {data.quickSearch.criteria.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-5">
                {data.quickSearch.criteria.map((c, i) => (
                  <span
                    key={i}
                    className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200"
                  >
                    ✓ {c}
                  </span>
                ))}
              </div>
            )}

            <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <input
                type="text"
                placeholder="Plot Size (sqft)"
                className="p-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-[#024b12]"
              />
              <input
                type="text"
                placeholder="Budget (₹)"
                className="p-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-[#024b12]"
              />
              <input
                type="text"
                placeholder="Facing"
                className="p-3 border border-slate-300 rounded-xl text-sm outline-none focus:border-[#024b12]"
              />
              <select className="p-3 border border-slate-300 rounded-xl text-sm bg-white text-slate-700">
                <option value="">Approval Status</option>
                <option value="dtcp">DTCP Approved</option>
                <option value="cmda">CMDA Approved</option>
              </select>
              <button
                type="submit"
                className="sm:col-span-2 lg:col-span-1 bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-sm py-3 rounded-xl transition shadow-md"
              >
                {data.quickSearch.cta}
              </button>
            </form>

            {data.quickSearch.specificBlock && (
              <div className="mt-5 border-t pt-4">
                <p className="font-semibold text-slate-800 text-sm mb-1">
                  {data.quickSearch.specificBlock.title}
                </p>
                <p className="text-xs text-slate-500 mb-2">
                  {data.quickSearch.specificBlock.intro}{" "}
                  <span className="font-semibold text-slate-700">
                    {data.quickSearch.specificBlock.fields}
                  </span>
                </p>
                {data.quickSearch.specificBlock.note && (
                  <p className="text-xs text-slate-500 italic">
                    {data.quickSearch.specificBlock.note}
                  </p>
                )}
              </div>
            )}

            {data.quickSearch.nearYouBlock && (
              <div className="mt-5 border-t pt-4">
                <p className="font-semibold text-slate-800 text-sm mb-1">
                  {data.quickSearch.nearYouBlock.title}
                </p>
                <p className="text-xs text-slate-500 mb-2">
                  {data.quickSearch.nearYouBlock.text}
                </p>
                {data.quickSearch.nearYouBlock.formFields && (
                  <p className="text-xs text-slate-700 font-medium">
                    {data.quickSearch.nearYouBlock.formIntro}:{" "}
                    {data.quickSearch.nearYouBlock.formFields}
                  </p>
                )}
                {data.quickSearch.nearYouBlock.note && (
                  <p className="text-xs text-slate-500 italic mt-1">
                    {data.quickSearch.nearYouBlock.note}
                  </p>
                )}
              </div>
            )}

            {data.quickSearch.lowBudgetBlock && (
              <div className="mt-5 bg-amber-50 border border-amber-200 p-3 rounded-lg text-amber-900">
                <p className="text-xs sm:text-sm font-semibold mb-1">
                  {data.quickSearch.lowBudgetBlock.title}
                </p>
                <p className="text-xs">
                  {data.quickSearch.lowBudgetBlock.intro}{" "}
                  <span className="font-semibold">
                    {data.quickSearch.lowBudgetBlock.fields}
                  </span>
                </p>
                {data.quickSearch.lowBudgetBlock.note && (
                  <p className="text-xs mt-1">
                    💡 {data.quickSearch.lowBudgetBlock.note}
                  </p>
                )}
                {data.quickSearch.lowBudgetBlock.note2 && (
                  <p className="text-xs mt-1">
                    {data.quickSearch.lowBudgetBlock.note2}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 3. WHY CONSIDER ===================== */}
      {data.whyConsider && (
        <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
          <p className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            {data.whyConsider.title}
          </p>
          {data.whyConsider.description && (
            <p className="text-sm sm:text-base text-slate-600 mb-3 leading-relaxed">
              {data.whyConsider.description}
            </p>
          )}
          {data.whyConsider.subDescription && (
            <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
              {data.whyConsider.subDescription}
            </p>
          )}
          {data.whyConsider.items.length > 0 && (
            <>
              {data.whyConsider.intro && (
                <p className="font-semibold text-slate-800 text-sm sm:text-base mb-4">
                  {data.whyConsider.intro}
                </p>
              )}
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 mb-6">
                {data.whyConsider.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center space-x-3 text-sm bg-white p-4 rounded-xl border border-slate-200 shadow-sm"
                  >
                    <span className="text-[#024b12] font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
          {data.whyConsider.warnings.map((w, i) => (
            <div
              key={i}
              className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl text-xs sm:text-sm text-amber-900 mb-3"
            >
              {i === 0 && <strong>Caution: </strong>}
              {w}
            </div>
          ))}
          {data.whyConsider.footerNote && (
            <p className="text-xs sm:text-sm text-slate-500 italic">
              {data.whyConsider.footerNote}
            </p>
          )}
        </section>
      )}

      {/* ===================== 4. FEATURED ===================== */}
      {data.featuredPlots && (
        <section
          id="featured"
          className="bg-[#024b12]/5 py-14 px-4 sm:px-6 lg:px-8 border-y border-[#024b12]/10"
        >
          <div className="max-w-7xl mx-auto">
            <p className="text-2xl sm:text-3xl font-serif font-bold mb-2">
              {data.featuredPlots.title}
            </p>
            {data.featuredPlots.subtitle && (
              <p className="text-sm sm:text-base text-slate-600 mb-3">
                {data.featuredPlots.subtitle}
              </p>
            )}
            {data.featuredPlots.note && (
              <p className="text-xs sm:text-sm text-slate-500 mb-4 italic">
                {data.featuredPlots.note}
              </p>
            )}

            {data.featuredPlots.availableTypes.length > 0 && (
              <>
                {data.featuredPlots.typesIntro && (
                  <p className="text-xs text-slate-500 mb-2 font-semibold">
                    {data.featuredPlots.typesIntro}
                  </p>
                )}
                <div className="flex flex-wrap gap-2 mb-6">
                  {data.featuredPlots.availableTypes.map((t, i) => (
                    <span
                      key={i}
                      className="bg-white border border-[#024b12]/30 text-[#024b12] text-xs px-3 py-1 rounded-md font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </>
            )}

            {data.featuredPlots.layoutNotice && (
              <div className="bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm p-4 rounded-xl mb-8">
                ℹ️ {data.featuredPlots.layoutNotice}
              </div>
            )}

            {/* FEATURED CARDS — full width when single, 2-col grid when multiple */}
            <div
              className={
                singleFeatured
                  ? "grid grid-cols-1 gap-8"
                  : "grid grid-cols-1 md:grid-cols-2 gap-8"
              }
            >
              {data.featuredPlots.listings.map((plot, idx) => {
                // When single listing, use vertical layout (image on top)
                const useVertical = singleFeatured;

                return (
                  <div
                    key={plot.id || idx}
                    className={`bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex ${
                      useVertical
                        ? "flex-col"
                        : "flex-col md:flex-row"
                    }`}
                  >
                    {plot.image && (
                      <div
                        className={`relative ${
                          useVertical
                            ? "h-72 sm:h-96 w-full"
                            : "h-64 md:h-auto md:w-1/2 min-h-[240px]"
                        }`}
                      >
                        <Image
                          src={plot.image}
                          alt={`Plot in ${plot.location}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div
                      className={`p-6 flex flex-col justify-between ${
                        useVertical ? "w-full" : "md:w-1/2"
                      }`}
                    >
                      <div>
                        <p className="text-lg font-serif font-bold text-[#024b12] mb-3">
                          Verified Listing Details
                        </p>
                        <div className="space-y-2 text-xs sm:text-sm text-slate-700 mb-6">
                          {[
                            ["Location", plot.location],
                            ["Type", plot.propertyType],
                            ["Plot Size", plot.size],
                            ["Total Price", plot.totalPrice],
                            ["Rate / Sq.Ft.", plot.pricePerSqFt],
                            ["Approval", plot.approval],
                            [
                              "Facing / Road",
                              plot.facing
                                ? `${plot.facing}${
                                    plot.roadWidth
                                      ? ` / ${plot.roadWidth}`
                                      : ""
                                  }`
                                : null,
                            ],
                            ["Community", plot.community],
                            ["Availability", plot.availability],
                            ["Documents", plot.documents],
                          ]
                            .filter(([, v]) => v)
                            .map(([label, val]) => (
                              <div
                                key={label}
                                className="flex justify-between border-b pb-1.5"
                              >
                                <span>{label}:</span>
                                <span className="font-semibold">{val}</span>
                              </div>
                            ))}
                        </div>
                      </div>
                      <a
                        href="#enquire"
                        className="block text-center w-full bg-[#024b12] hover:bg-[#01380d] text-white font-semibold py-3 rounded-xl text-sm transition"
                      >
                        Book Site Visit
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {data.featuredPlots.ctaBlock && (
              <div className="mt-10 bg-white p-6 rounded-2xl border border-slate-200 text-center">
                {data.featuredPlots.ctaBlock.title && (
                  <p className="font-serif font-bold text-lg mb-2">
                    {data.featuredPlots.ctaBlock.title}
                  </p>
                )}
                {data.featuredPlots.ctaBlock.description && (
                  <p className="text-sm text-slate-600 mb-4">
                    {data.featuredPlots.ctaBlock.description}
                  </p>
                )}
                {data.featuredPlots.ctaBlock.compareIntro && (
                  <p className="text-sm text-slate-600 mb-2">
                    {data.featuredPlots.ctaBlock.compareIntro}
                  </p>
                )}
                {data.featuredPlots.ctaBlock.compareFields && (
                  <ul className="flex flex-wrap justify-center gap-2 mb-4">
                    {data.featuredPlots.ctaBlock.compareFields.map((f, i) => (
                      <li
                        key={i}
                        className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                {data.featuredPlots.ctaBlock.cta && (
                  <a
                    href="#enquire"
                    className="inline-block bg-[#024b12] hover:bg-[#01380d] text-white font-semibold px-6 py-3 rounded-full text-sm"
                  >
                    {data.featuredPlots.ctaBlock.cta}
                  </a>
                )}
              </div>
            )}

            {data.featuredPlots.dynamicNote && (
              <p className="text-xs text-slate-500 italic mt-6">
                {data.featuredPlots.dynamicNote}
              </p>
            )}
          </div>
        </section>
      )}

      {/* ===================== 5. LOCATION OVERVIEW ===================== */}
      {data.locationOverview && (
        <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold mb-3">
                {data.locationOverview.title}
              </p>
              <p className="text-sm sm:text-base text-slate-600 mb-3 leading-relaxed">
                {data.locationOverview.description}
              </p>
              {data.locationOverview.subDescription && (
                <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
                  {data.locationOverview.subDescription}
                </p>
              )}
              {data.locationOverview.periyarBlock && (
                <div className="bg-slate-100 p-4 rounded-xl mb-4 border border-slate-200">
                  <p className="font-bold text-sm mb-1">
                    {data.locationOverview.periyarBlock.subhead}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {data.locationOverview.periyarBlock.text}
                  </p>
                  {data.locationOverview.periyarBlock.text2 && (
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                      {data.locationOverview.periyarBlock.text2}
                    </p>
                  )}
                </div>
              )}
              {data.locationOverview.factors.length > 0 && (
                <>
                  <p className="font-semibold text-sm sm:text-base text-slate-800 mb-3">
                    {data.locationOverview.intro ||
                      "Location assessment factors:"}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-slate-600">
                    {data.locationOverview.factors.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <span className="text-[#024b12] font-bold">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {data.locationOverview.footerNote && (
                <p className="text-xs sm:text-sm text-slate-500 italic mt-4">
                  {data.locationOverview.footerNote}
                </p>
              )}
            </div>
            {data.locationOverview.image && (
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-300 shadow-md">
                <Image
                  src={data.locationOverview.image}
                  alt={data.locationOverview.imageAlt || "Location Map"}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 6 & 7. LAND SALE + RESIDENTIAL ===================== */}
      {(data.landSale || data.residentialPlots) && (
        <section className="bg-slate-100 py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {data.landSale && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                <p className="text-xl sm:text-2xl font-serif font-bold mb-3">
                  {data.landSale.title}
                </p>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  {data.landSale.description}
                </p>
                {data.landSale.subDescription && (
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    {data.landSale.subDescription}
                  </p>
                )}
                {data.landSale.criteria.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {data.landSale.criteria.map((c, i) => (
                      <li
                        key={i}
                        className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border"
                      >
                        {c}
                      </li>
                    ))}
                  </ul>
                )}
                {data.landSale.typesIntro && (
                  <p className="text-xs text-slate-500 mb-2 font-semibold">
                    {data.landSale.typesIntro}
                  </p>
                )}
                {data.landSale.types.length > 0 && (
                  <ul className="space-y-2 text-sm mb-4">
                    {data.landSale.types.map((t, i) => (
                      <li key={i} className="flex items-center space-x-2.5">
                        <span className="text-[#024b12] font-bold">✔</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {data.landSale.footerNote && (
                  <p className="text-xs text-slate-500 italic border-t pt-3 mt-3">
                    {data.landSale.footerNote}
                  </p>
                )}
                {data.landSale.ramapuramBlock && (
                  <div className="mt-4 bg-amber-50 p-3 rounded-lg border border-amber-200">
                    <p className="font-bold text-amber-900 text-xs mb-1">
                      {data.landSale.ramapuramBlock.subhead}
                    </p>
                    {data.landSale.ramapuramBlock.note && (
                      <p className="text-xs text-amber-800 leading-relaxed">
                        {data.landSale.ramapuramBlock.note}
                      </p>
                    )}
                    {data.landSale.ramapuramBlock.warning && (
                      <p className="text-xs text-amber-800 leading-relaxed mt-1 italic">
                        {data.landSale.ramapuramBlock.warning}
                      </p>
                    )}
                  </div>
                )}
                {data.landSale.omrBlock && (
                  <div className="mt-4 bg-slate-100 p-3 rounded-lg border border-slate-200">
                    <p className="font-bold text-slate-900 text-xs mb-1">
                      {data.landSale.omrBlock.subhead}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {data.landSale.omrBlock.note}
                    </p>
                  </div>
                )}
                {data.landSale.cta && (
                  <a
                    href="#enquire"
                    className="mt-auto pt-4 inline-block text-xs font-semibold text-[#024b12] hover:underline"
                  >
                    {data.landSale.cta} →
                  </a>
                )}
              </div>
            )}

            {data.residentialPlots && (
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 flex flex-col">
                <p className="text-xl sm:text-2xl font-serif font-bold mb-3">
                  {data.residentialPlots.title}
                </p>
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  {data.residentialPlots.description}
                </p>
                {data.residentialPlots.subDescription && (
                  <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                    {data.residentialPlots.subDescription}
                  </p>
                )}
                {data.residentialPlots.preferences.length > 0 && (
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {data.residentialPlots.preferences.map((p, i) => (
                      <li
                        key={i}
                        className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
                {data.residentialPlots.intro && (
                  <p className="text-xs text-slate-500 font-semibold mb-2">
                    {data.residentialPlots.intro}
                  </p>
                )}
                {data.residentialPlots.checklist.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm mb-4">
                    {data.residentialPlots.checklist.map((c, i) => (
                      <span
                        key={i}
                        className="bg-slate-50 p-2.5 rounded-lg border text-center font-medium"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                )}
                {data.residentialPlots.premiumSubhead && (
                  <p className="font-bold text-sm mt-3 mb-1">
                    {data.residentialPlots.premiumSubhead}
                  </p>
                )}
                {data.residentialPlots.premiumNote && (
                  <p className="text-xs text-amber-900 bg-amber-50 p-3 rounded-lg border border-amber-200 leading-relaxed">
                    ⭐ {data.residentialPlots.premiumNote}
                  </p>
                )}
                {data.residentialPlots.closingSubhead && (
                  <p className="font-bold text-sm mt-4 mb-1">
                    {data.residentialPlots.closingSubhead}
                  </p>
                )}
                {data.residentialPlots.closingNote && (
                  <p className="text-xs sm:text-sm text-slate-600 italic">
                    {data.residentialPlots.closingNote}
                  </p>
                )}
                {data.residentialPlots.footerNote && (
                  <p className="text-xs sm:text-sm text-slate-600 italic mt-3">
                    {data.residentialPlots.footerNote}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 8. APPROVED ===================== */}
      {data.approvedPlots && (
        <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
          <p className="text-2xl sm:text-3xl font-serif font-bold mb-3">
            {data.approvedPlots.title}
          </p>
          <p className="text-sm sm:text-base text-slate-600 mb-3 leading-relaxed">
            {data.approvedPlots.description}
          </p>
          {data.approvedPlots.subDescription && (
            <p className="text-sm sm:text-base text-slate-600 mb-4 leading-relaxed">
              {data.approvedPlots.subDescription}
            </p>
          )}
          {data.approvedPlots.intro && (
            <p className="text-sm font-semibold mb-3">
              {data.approvedPlots.intro}
            </p>
          )}

          {data.approvedPlots.checkpoints.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-6">
              {data.approvedPlots.checkpoints.map((cp, i) => (
                <div
                  key={i}
                  className="bg-[#024b12]/10 border border-[#024b12]/20 p-4 rounded-xl text-center text-xs sm:text-sm font-semibold text-[#024b12]"
                >
                  {cp}
                </div>
              ))}
            </div>
          )}

          {data.approvedPlots.blocks.length > 0 && (
            <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-xl border border-slate-200">
              {data.approvedPlots.blocks.map((b, i) => (
                <div key={i}>
                  {b.heading && (
                    <p
                      className={`font-bold ${
                        b.heading === data.approvedPlots.blocks[0]?.heading
                          ? "text-base"
                          : "text-sm"
                      }`}
                    >
                      {b.heading}
                    </p>
                  )}
                  {b.body && (
                    <p
                      className={`text-xs sm:text-sm ${
                        b.isWarning ? "text-amber-900" : "text-slate-700"
                      }`}
                    >
                      {b.isWarning && "⚠️ "}
                      {b.body}
                    </p>
                  )}
                </div>
              ))}
              {data.approvedPlots.verificationItems.length > 0 && (
                <ul className="list-disc list-inside text-xs sm:text-sm text-slate-700">
                  {data.approvedPlots.verificationItems.map((v, i) => (
                    <li key={i}>{v}</li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {(data.approvedPlots.ctaPrimary ||
            data.approvedPlots.ctaSecondary) && (
            <div className="flex flex-wrap gap-3">
              {data.approvedPlots.ctaPrimary && (
                <a
                  href="#enquire"
                  className="bg-[#024b12] text-white px-5 py-2.5 rounded-full text-sm font-semibold"
                >
                  {data.approvedPlots.ctaPrimary}
                </a>
              )}
              {data.approvedPlots.ctaSecondary && (
                <a
                  href="#enquire"
                  className="border border-[#024b12] text-[#024b12] px-5 py-2.5 rounded-full text-sm font-semibold"
                >
                  {data.approvedPlots.ctaSecondary}
                </a>
              )}
            </div>
          )}
        </section>
      )}

      {/* ===================== 9. GUIDELINE + AVERAGE + PROPERTY TYPES ===================== */}
      {(data.guidelineValue || data.averagePrice || data.propertyTypes) && (() => {
  const cardCount = [
    data.guidelineValue,
    data.averagePrice,
    data.propertyTypes,
  ].filter(Boolean).length;
  const gridCols =
    cardCount === 1
      ? "grid-cols-1"
      : cardCount === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
  return (
    <section className="bg-white py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className={`max-w-7xl mx-auto grid ${gridCols} gap-6 items-stretch`}>
            {data.guidelineValue && (
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col">
                <p className="text-lg font-serif font-bold mb-2">
                  {data.guidelineValue.title}
                </p>
                {data.guidelineValue.description && (
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-relaxed">
                    {data.guidelineValue.description}
                  </p>
                )}
                {data.guidelineValue.subDescription && (
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-relaxed">
                    {data.guidelineValue.subDescription}
                  </p>
                )}
                {data.guidelineValue.intro && (
                  <p className="text-xs font-semibold mb-1">
                    {data.guidelineValue.intro}
                  </p>
                )}
                {data.guidelineValue.points.length > 0 && (
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 mb-2">
                    {data.guidelineValue.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                )}
                {data.guidelineValue.changeNote && (
                  <p className="text-xs text-slate-500 italic">
                    {data.guidelineValue.changeNote}
                  </p>
                )}
                {data.guidelineValue.variabilityNote && (
                  <p className="text-xs text-slate-500 italic">
                    {data.guidelineValue.variabilityNote}
                  </p>
                )}
                {data.guidelineValue.verificationNote && (
                  <p className="text-xs text-slate-500 italic mt-1">
                    {data.guidelineValue.verificationNote}
                  </p>
                )}
              </div>
            )}

            {data.averagePrice && (
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col">
                <p className="text-lg font-serif font-bold mb-2">
                  {data.averagePrice.title}
                </p>
                {data.averagePrice.description && (
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-relaxed">
                    {data.averagePrice.description}
                  </p>
                )}
                {data.averagePrice.subDescription && (
                  <p className="text-xs sm:text-sm text-slate-600 mb-2 leading-relaxed">
                    {data.averagePrice.subDescription}
                  </p>
                )}
                {data.averagePrice.intro && (
                  <p className="text-xs text-slate-500 italic mb-2">
                    {data.averagePrice.intro}
                  </p>
                )}
                {data.averagePrice.factors.length > 0 && (
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5">
                    {data.averagePrice.factors.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {data.averagePrice.tableIntro && (
                  <p className="text-xs text-slate-600 mt-2 mb-1">
                    {data.averagePrice.tableIntro}
                  </p>
                )}
                {data.averagePrice.tableTitle && (
                  <p className="text-xs font-bold mb-1">
                    {data.averagePrice.tableTitle}
                  </p>
                )}
                {data.averagePrice.table && (
                  <div className="overflow-x-auto rounded-lg border border-slate-200 my-2">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-200">
                        <tr>
                          <th className="p-2 font-semibold">Property</th>
                          <th className="p-2 font-semibold">Size</th>
                          <th className="p-2 font-semibold">Total</th>
                          <th className="p-2 font-semibold">₹/sq.ft.</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 bg-white">
                        {data.averagePrice.table.map((r, i) => (
                          <tr key={i}>
                            <td className="p-2">{r.property || r.plot}</td>
                            <td className="p-2">{r.size}</td>
                            <td className="p-2">{r.totalPrice}</td>
                            <td className="p-2 font-bold text-[#024b12]">
                              {r.pricePerSqFt}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {data.averagePrice.tableNote && (
                  <p className="text-xs text-slate-500 italic mt-2">
                    {data.averagePrice.tableNote}
                  </p>
                )}
              </div>
            )}

            {data.propertyTypes && (
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-col">
                <p className="text-lg font-serif font-bold mb-2">
                  {data.propertyTypes.title}
                </p>
                {data.propertyTypes.intro && (
                  <p className="text-xs text-slate-600 mb-3">
                    {data.propertyTypes.intro}
                  </p>
                )}
                <div className="space-y-3">
                  {data.propertyTypes.items.map((pt, i) => (
                    <div
                      key={i}
                      className="bg-white p-3 rounded-lg border border-slate-200"
                    >
                      <p className="font-semibold text-sm">
                        {typeof pt === "object" ? pt.title : pt}
                      </p>
                      {typeof pt === "object" && pt.desc && (
                        <p className="text-xs text-slate-600 mt-1">
                          {pt.desc}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                {data.propertyTypes.cta && (
                  <a
                    href="#enquire"
                    className="mt-auto pt-3 inline-block text-xs font-semibold text-[#024b12] hover:underline"
                  >
                    {data.propertyTypes.cta} →
                  </a>
                )}
              </div>
            )}
          </div>
    </section>
  );
})()}

      {/* ===================== 10. PRICING ===================== */}
      {data.pricing && (
        <section className="bg-slate-100 py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            <p className="text-2xl sm:text-3xl font-serif font-bold mb-2">
              {data.pricing.title}
            </p>
            {data.pricing.buyerIntro && (
              <p className="text-sm text-slate-600 mb-1 italic">
                {data.pricing.buyerIntro}
              </p>
            )}
            {data.pricing.buyerQuestion && (
              <p className="text-lg font-semibold text-[#024b12] mb-2">
                {data.pricing.buyerQuestion}
              </p>
            )}
            {data.pricing.buyerQuestionDetail && (
              <p className="text-lg font-serif font-bold mb-3">
                {data.pricing.buyerQuestionDetail}
              </p>
            )}
            {data.pricing.description && (
              <p className="text-sm sm:text-base text-slate-600 mb-6">
                {data.pricing.description}
              </p>
            )}

            {data.pricing.factors.length > 0 && (
              <ul className="flex flex-wrap gap-2 mb-6">
                {data.pricing.factors.map((f, i) => (
                  <li
                    key={i}
                    className="bg-white text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {data.pricing.kundrathurBlock && (
              <div className="mb-4 bg-white p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-sm mb-1">
                  {data.pricing.kundrathurBlock.subhead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  {data.pricing.kundrathurBlock.text}
                </p>
                {data.pricing.kundrathurBlock.note && (
                  <p className="text-xs italic text-slate-500 mt-1">
                    {data.pricing.kundrathurBlock.note}
                  </p>
                )}
              </div>
            )}

            {data.pricing.perSqftBlock && (
              <div className="mb-4 bg-white p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-sm mb-1">
                  {data.pricing.perSqftBlock.subhead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  {data.pricing.perSqftBlock.text}
                </p>
              </div>
            )}

            {data.pricing.resaleBlock && (
              <div className="mb-4 bg-white p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-sm mb-1">
                  {data.pricing.resaleBlock.subhead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  {data.pricing.resaleBlock.note}
                </p>
                {data.pricing.resaleBlock.compareIntro && (
                  <p className="text-xs text-slate-500 italic mt-1">
                    {data.pricing.resaleBlock.compareIntro}
                  </p>
                )}
                {data.pricing.resaleBlock.compareFormula && (
                  <p className="text-xs font-semibold text-[#024b12] mt-1">
                    {data.pricing.resaleBlock.compareFormula}
                  </p>
                )}
              </div>
            )}

            {data.pricing.subHeadingBlock && (
              <div className="mb-4 bg-white p-4 rounded-xl border border-slate-200">
                <p className="font-bold text-sm mb-1">
                  {data.pricing.subHeadingBlock.subhead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600">
                  {data.pricing.subHeadingBlock.text}
                </p>
                {data.pricing.subHeadingBlock.comparisonIntro && (
                  <p className="text-xs text-slate-500 italic mt-2">
                    {data.pricing.subHeadingBlock.comparisonIntro}
                  </p>
                )}
              </div>
            )}

            {data.pricing.formulaBlock && (
              <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-6 text-sm">
                <p className="font-bold text-[#024b12] text-base mb-1">
                  {data.pricing.formulaBlock.intro || "Calculation Formula:"}
                </p>
                <p className="mb-2 text-slate-700">
                  {data.pricing.formulaBlock.formula}
                </p>
                {data.pricing.formulaBlock.exampleIntro && (
                  <p className="text-xs text-slate-500 italic">
                    {data.pricing.formulaBlock.exampleIntro}
                  </p>
                )}
                {data.pricing.formulaBlock.exampleSetup && (
                  <p className="text-xs text-slate-500 italic">
                    {data.pricing.formulaBlock.exampleSetup}
                  </p>
                )}
                {data.pricing.formulaBlock.example && (
                  <p className="font-semibold mt-1">
                    Example:{" "}
                    <span className="text-[#024b12]">
                      {data.pricing.formulaBlock.example}
                    </span>
                  </p>
                )}
                {data.pricing.formulaBlock.exampleNote && (
                  <p className="text-xs text-slate-500 italic mt-1">
                    {data.pricing.formulaBlock.exampleNote}
                  </p>
                )}
                {data.pricing.formulaBlock.priceNote && (
                  <p className="text-xs text-slate-500 italic mt-1">
                    {data.pricing.formulaBlock.priceNote}
                  </p>
                )}
              </div>
            )}

            {data.pricing.table && (
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                <table className="w-full text-left bg-white text-sm">
                  <thead className="bg-[#024b12] text-white">
                    <tr>
                      {(data.pricing.tableHeaders || [
                        "Plot / Property",
                        "Size",
                        "Total Price",
                        "Price / Sq.Ft.",
                      ]).map((h, i) => (
                        <th key={i} className="p-4 font-semibold">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {data.pricing.table.map((row, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition">
                        <td className="p-4 font-medium">
                          {row.plot || row.property}
                        </td>
                        <td className="p-4">{row.size}</td>
                        <td className="p-4">{row.totalPrice}</td>
                        <td className="p-4 text-[#024b12] font-bold">
                          {row.pricePerSqFt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {data.pricing.tableNote && (
              <p className="text-xs sm:text-sm text-slate-600 italic bg-white p-4 rounded-xl border border-slate-200 mb-2">
                {data.pricing.tableNote}
              </p>
            )}

            {data.pricing.extraNotes.map((n, i) => (
              <p
                key={i}
                className="text-xs sm:text-sm text-slate-600 italic bg-white p-4 rounded-xl border border-slate-200 mt-2"
              >
                {n}
              </p>
            ))}

            {data.pricing.cta && (
              <div className="mt-6 text-center">
                <a
                  href="#enquire"
                  className="inline-block bg-[#024b12] text-white px-6 py-3 rounded-full text-sm font-semibold"
                >
                  {data.pricing.cta}
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ===================== 11. SPECIALTY GRID ===================== */}
      {(() => {
  const specialties = [
    data.lowBudget,
    data.industrialLand,
    data.pallavanNagar,
    data.gatedCommunity,
    data.investmentPlots,
    data.shrihariNivas,
    data.akshayaToday,
    data.landRates,
    data.farmLand,
  ].filter(Boolean);

  if (specialties.length === 0) return null;

  const gridCols =
    specialties.length === 1
      ? "grid-cols-1"
      : specialties.length === 2
        ? "grid-cols-1 md:grid-cols-2"
        : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
      <div className={`grid ${gridCols} gap-6 auto-rows-fr items-stretch`}>
            {/* LOW BUDGET — now uniform white like the rest */}
            {data.lowBudget && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.lowBudget.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-700 mb-3">
                  {data.lowBudget.description}
                </p>
                {data.lowBudget.intro && (
                  <p className="text-xs font-semibold mb-1">
                    {data.lowBudget.intro}
                  </p>
                )}
                {data.lowBudget.definitionList.length > 0 && (
                  <ul className="list-disc list-inside text-xs text-slate-600 mb-3">
                    {data.lowBudget.definitionList.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
                {data.lowBudget.exampleIntro && (
                  <p className="text-xs text-slate-500 italic">
                    {data.lowBudget.exampleIntro}
                  </p>
                )}
                {data.lowBudget.example && (
                  <p className="text-sm font-bold text-[#024b12] mb-3">
                    {data.lowBudget.example}
                  </p>
                )}
                {data.lowBudget.costNote && (
                  <p className="text-xs text-slate-600 italic mb-2">
                    {data.lowBudget.costNote}
                  </p>
                )}
                {data.lowBudget.warningIntro && (
                  <p className="text-xs font-semibold mb-1">
                    {data.lowBudget.warningIntro}
                  </p>
                )}
                {data.lowBudget.alsoConsiderIntro && (
                  <p className="text-xs font-semibold mb-1 mt-2">
                    {data.lowBudget.alsoConsiderIntro}
                  </p>
                )}
                {data.lowBudget.additionalCosts.length > 0 && (
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1">
                    {data.lowBudget.additionalCosts.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
                {data.lowBudget.warning && (
                  <p className="text-xs text-amber-900 mt-3 italic">
                    ⚠️ {data.lowBudget.warning}
                  </p>
                )}
                {data.lowBudget.footerNote && (
                  <p className="text-xs text-slate-500 italic mt-2">
                    {data.lowBudget.footerNote}
                  </p>
                )}
                {data.lowBudget.availabilityBlock && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="text-xs font-semibold mb-1">
                      {data.lowBudget.availabilityBlock.subhead}
                    </p>
                    <p className="text-xs text-slate-600">
                      {data.lowBudget.availabilityBlock.note}
                    </p>
                    <p className="text-xs text-slate-600 mt-1">
                      {data.lowBudget.availabilityBlock.text}
                    </p>
                  </div>
                )}
                {data.lowBudget.cta && (
                  <a
                    href="#enquire"
                    className="mt-auto pt-4 inline-block text-xs font-semibold text-[#024b12] hover:underline"
                  >
                    {data.lowBudget.cta} →
                  </a>
                )}
              </article>
            )}

            {/* INDUSTRIAL LAND */}
            {data.industrialLand && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.industrialLand.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  {data.industrialLand.description}
                </p>
                {data.industrialLand.checklist.length > 0 && (
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-1">
                    {data.industrialLand.checklist.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}
                {data.industrialLand.footerNote && (
                  <p className="text-xs text-slate-500 italic mt-3">
                    {data.industrialLand.footerNote}
                  </p>
                )}
                {data.industrialLand.cta && (
                  <a
                    href="#enquire"
                    className="mt-auto pt-4 inline-block text-xs font-semibold text-[#024b12] hover:underline"
                  >
                    {data.industrialLand.cta} →
                  </a>
                )}
              </article>
            )}

            {/* PALLAVAN NAGAR */}
            {data.pallavanNagar && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.pallavanNagar.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  {data.pallavanNagar.description}
                </p>
                {data.pallavanNagar.listingIntro && (
                  <p className="text-xs font-semibold mb-1">
                    {data.pallavanNagar.listingIntro}
                  </p>
                )}
                {data.pallavanNagar.listingFields.length > 0 && (
                  <ul className="list-disc list-inside text-xs text-slate-600 mb-3">
                    {data.pallavanNagar.listingFields.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {data.pallavanNagar.image && (
                  <div className="relative h-36 w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      src={data.pallavanNagar.image}
                      alt={data.pallavanNagar.imageAlt || "Locality"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                {data.pallavanNagar.cta && (
                  <a
                    href="#enquire"
                    className="mt-auto pt-4 inline-block text-sm font-bold text-[#024b12] hover:underline"
                  >
                    {data.pallavanNagar.cta} →
                  </a>
                )}
              </article>
            )}

            {/* GATED COMMUNITY */}
            {data.gatedCommunity && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.gatedCommunity.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {data.gatedCommunity.description}
                </p>
                {data.gatedCommunity.intro && (
                  <p className="text-xs font-semibold mb-1">
                    {data.gatedCommunity.intro}
                  </p>
                )}
                {data.gatedCommunity.features.length > 0 && (
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-0.5 mb-3">
                    {data.gatedCommunity.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {data.gatedCommunity.resaleBlock && (
                  <div className="mt-2 pt-2 border-t border-slate-200">
                    <p className="font-bold text-xs mb-1">
                      {data.gatedCommunity.resaleBlock.subhead}
                    </p>
                    <p className="text-xs text-slate-600">
                      {data.gatedCommunity.resaleBlock.note}
                    </p>
                    {data.gatedCommunity.resaleBlock.projectNote && (
                      <p className="text-xs text-slate-500 italic mt-1">
                        {data.gatedCommunity.resaleBlock.projectNote}
                      </p>
                    )}
                  </div>
                )}
              </article>
            )}

            {/* INVESTMENT PLOTS */}
            {data.investmentPlots && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.investmentPlots.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {data.investmentPlots.description}
                </p>
                {data.investmentPlots.intro && (
                  <p className="text-xs font-semibold mb-1">
                    {data.investmentPlots.intro}
                  </p>
                )}
                {data.investmentPlots.factors.length > 0 && (
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-0.5">
                    {data.investmentPlots.factors.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {data.investmentPlots.disclaimer && (
                  <p className="text-xs text-amber-900 italic mt-3">
                    ⚠️ {data.investmentPlots.disclaimer}
                  </p>
                )}
                {data.investmentPlots.subheadBlock && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="font-bold text-xs mb-1">
                      {data.investmentPlots.subheadBlock.subhead}
                    </p>
                    <p className="text-xs text-slate-600">
                      {data.investmentPlots.subheadBlock.note}
                    </p>
                  </div>
                )}
              </article>
            )}

            {/* SHRIHARI NIVAS */}
            {data.shrihariNivas && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.shrihariNivas.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {data.shrihariNivas.description}
                </p>
                {data.shrihariNivas.listingFields.length > 0 && (
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-0.5">
                    {data.shrihariNivas.listingFields.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {data.shrihariNivas.warning && (
                  <p className="text-xs text-amber-900 italic mt-3">
                    ⚠️ {data.shrihariNivas.warning}
                  </p>
                )}
              </article>
            )}

            {/* AKSHAYA TODAY */}
            {data.akshayaToday && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.akshayaToday.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {data.akshayaToday.description}
                </p>
                {data.akshayaToday.intro && (
                  <p className="text-xs font-semibold mb-1">
                    {data.akshayaToday.intro}
                  </p>
                )}
                {data.akshayaToday.listingFields.length > 0 && (
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-0.5">
                    {data.akshayaToday.listingFields.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {data.akshayaToday.verificationBlock && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <p className="font-bold text-xs mb-1">
                      {data.akshayaToday.verificationBlock.subhead}
                    </p>
                    <p className="text-xs text-slate-600">
                      {data.akshayaToday.verificationBlock.note}
                    </p>
                  </div>
                )}
              </article>
            )}

            {/* LAND RATES */}
            {data.landRates && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.landRates.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mb-2">
                  {data.landRates.description}
                </p>
                {data.landRates.formulaIntro && (
                  <p className="text-xs text-slate-600 mb-1">
                    {data.landRates.formulaIntro}
                  </p>
                )}
                <p className="text-sm font-bold text-[#024b12] mb-1">
                  {data.landRates.formula}
                </p>
                {data.landRates.exampleSubhead && (
                  <p className="text-xs font-semibold mb-1">
                    {data.landRates.exampleSubhead}
                  </p>
                )}
                {data.landRates.exampleSetup && (
                  <p className="text-xs text-slate-500 italic">
                    {data.landRates.exampleSetup}
                  </p>
                )}
                <p className="text-sm font-semibold text-[#024b12]">
                  {data.landRates.example}
                </p>
                {data.landRates.exampleNote && (
                  <p className="text-xs text-slate-500 italic mb-2">
                    {data.landRates.exampleNote}
                  </p>
                )}
                {data.landRates.tableIntro && (
                  <p className="text-xs text-slate-600 mb-2">
                    {data.landRates.tableIntro}
                  </p>
                )}
                {data.landRates.table && (
                  <div className="overflow-x-auto rounded-lg border border-slate-200 mb-2">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100">
                        <tr>
                          {(data.landRates.tableHeaders || [
                            "Property",
                            "Size",
                            "Total",
                            "₹/sq.ft.",
                          ]).map((h, i) => (
                            <th key={i} className="p-2 font-semibold">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200">
                        {data.landRates.table.map((r, i) => (
                          <tr key={i}>
                            <td className="p-2">{r.property}</td>
                            <td className="p-2">{r.size}</td>
                            <td className="p-2">{r.totalPrice}</td>
                            <td className="p-2 font-bold text-[#024b12]">
                              {r.pricePerSqFt}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {data.landRates.cta && (
                  <a
                    href="#enquire"
                    className="mt-auto pt-3 inline-block text-xs font-semibold text-[#024b12] hover:underline"
                  >
                    {data.landRates.cta} →
                  </a>
                )}
              </article>
            )}

            {/* FARM LAND */}
            {data.farmLand && (
              <article className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
                <p className="text-xl font-serif font-bold mb-2 text-[#024b12]">
                  {data.farmLand.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mb-2">
                  {data.farmLand.description}
                </p>
                {data.farmLand.subDescription && (
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">
                    {data.farmLand.subDescription}
                  </p>
                )}
                {data.farmLand.intro && (
                  <p className="text-xs font-semibold mb-1">
                    {data.farmLand.intro}
                  </p>
                )}
                {data.farmLand.factors.length > 0 && (
                  <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-0.5">
                    {data.farmLand.factors.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                )}
                {data.farmLand.warning && (
                  <p className="text-xs text-amber-900 italic mt-3">
                    ⚠️ {data.farmLand.warning}
                  </p>
                )}
              </article>
            )}
        </div>
      </section>
    );
  })()}

      {/* ===================== 12. CHOOSING CRITERIA ===================== */}
      {data.choosingCriteria && (
        <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-900 text-white p-8 rounded-2xl">
            <p className="text-2xl font-serif font-bold mb-2">
              {data.choosingCriteria.title}
            </p>
            {data.choosingCriteria.intro && (
              <p className="text-sm text-emerald-100 mb-4">
                {data.choosingCriteria.intro}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm">
              {data.choosingCriteria.items.map((c, i) => {
                if (typeof c === "string") {
                  return (
                    <div
                      key={i}
                      className="bg-white/10 p-3 rounded-lg border border-white/20"
                    >
                      ✔ {c}
                    </div>
                  );
                }
                return (
                  <div
                    key={i}
                    className="bg-white/10 p-3 rounded-lg border border-white/20"
                  >
                    <p className="font-bold text-white mb-1">
                      {c.n}. {c.title}
                    </p>
                    <p className="text-emerald-100 text-xs">{c.question}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ===================== 13 & 14. CONNECTIVITY + COMPARISON ===================== */}
      {(data.connectivity || data.comparison) && (
        <section className="bg-slate-100 py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="max-w-7xl mx-auto">
            {data.connectivity && (
              <div className="mb-10">
                <p className="text-2xl sm:text-3xl font-serif font-bold mb-2">
                  {data.connectivity.title}
                </p>
                {data.connectivity.description && (
                  <p className="text-sm text-slate-600 mb-2">
                    {data.connectivity.description}
                  </p>
                )}
                {data.connectivity.intro && (
                  <p className="text-xs text-slate-500 italic mb-3">
                    {data.connectivity.intro}
                  </p>
                )}
                {data.connectivity.hubs.length > 0 && (
                  <div className="flex flex-wrap gap-2.5 mb-4">
                    {data.connectivity.hubs.map((hub, i) => (
                      <span
                        key={i}
                        className="bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-medium px-4 py-2 rounded-full shadow-sm"
                      >
                        📍 {hub}
                      </span>
                    ))}
                  </div>
                )}
                {data.connectivity.amenitiesIntro && (
                  <p className="text-xs text-slate-500 italic mb-2 mt-3">
                    {data.connectivity.amenitiesIntro}
                  </p>
                )}
                {data.connectivity.amenities.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-1">
                    {data.connectivity.amenities.map((a, i) => (
                      <span
                        key={i}
                        className="bg-slate-200 text-slate-700 text-xs px-3 py-1 rounded-md"
                      >
                        🏢 {a}
                      </span>
                    ))}
                  </div>
                )}
                {data.connectivity.footerNote && (
                  <p className="text-xs text-slate-500 italic mt-3">
                    {data.connectivity.footerNote}
                  </p>
                )}
              </div>
            )}

            {data.comparison && (
              <>
                <p className="text-2xl sm:text-3xl font-serif font-bold mb-4">
                  {data.comparison.title}
                </p>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
                  <table className="w-full text-left bg-white text-xs sm:text-sm">
                    <thead className="bg-[#024b12] text-white">
                      <tr>
                        <th className="p-4 font-semibold">
                          Evaluation Factor
                        </th>
                        <th className="p-4 font-semibold">Resale Plot</th>
                        <th className="p-4 font-semibold">New Layout</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {data.comparison.rows.map((row, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition">
                          <td className="p-4 font-semibold text-slate-900">
                            {row.factor}
                          </td>
                          <td className="p-4 text-slate-700">
                            {row.resale}
                          </td>
                          <td className="p-4 text-slate-500">
                            {row.newLayout}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {data.comparison.note && (
                  <p className="text-xs sm:text-sm text-slate-600 italic mt-4">
                    {data.comparison.note}
                  </p>
                )}
              </>
            )}
          </div>
        </section>
      )}

      {/* ===================== 15 & 16. VERIFICATION + DOCUMENTS ===================== */}
      {(data.verification || data.documents) && (
        <section className="max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:px-8">
          {data.verification && (
            <>
              <p className="text-2xl sm:text-3xl font-serif font-bold mb-8">
                {data.verification.title}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 items-stretch">
                {data.verification.steps.map((s) => (
                  <div
                    key={s.step}
                    className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full"
                  >
                    <span className="text-xs font-bold text-[#024b12] uppercase tracking-wider">
                      STEP {s.step}
                    </span>
                    <p className="font-bold text-base mt-2 mb-2 font-serif">
                      {s.title}
                    </p>
                    {s.desc && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {s.desc}
                      </p>
                    )}
                    {s.intro && (
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-1">
                        {s.intro}
                      </p>
                    )}
                    {s.items && (
                      <ul className="list-disc list-inside text-xs sm:text-sm text-slate-600 space-y-0.5">
                        {s.items.map((it, i) => (
                          <li key={i}>{it}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}

          {data.documents && (
            <>
              <p className="text-xl sm:text-2xl font-serif font-bold mb-4">
                {data.documents.title}
              </p>
              {data.documents.intro && (
                <p className="text-sm text-slate-600 mb-4">
                  {data.documents.intro}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                {data.documents.items.map((doc, i) => (
                  <div
                    key={i}
                    className="bg-[#024b12]/10 border border-[#024b12]/20 p-3.5 rounded-xl text-[#024b12] font-semibold flex items-center gap-2"
                  >
                    <span>📄</span> <span>{doc}</span>
                  </div>
                ))}
              </div>
              {data.documents.importantNote && (
                <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
                  <p className="font-bold text-amber-900 text-sm">
                    {data.documents.importantLabel}
                  </p>
                  <p className="text-xs sm:text-sm text-amber-900 mt-1">
                    {data.documents.importantNote}
                  </p>
                  {data.documents.importantWarning && (
                    <p className="text-xs sm:text-sm text-amber-900 mt-1">
                      {data.documents.importantWarning}
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </section>
      )}

      {/* ===================== 17-20. BUYER ADVICE + NEARBY ===================== */}
      {(data.bestArea || data.cheapestLand || data.nearby) && (() => {
  const adviceCards = [data.bestArea, data.cheapestLand].filter(Boolean);
  const adviceGridCols =
    adviceCards.length === 1
      ? "grid-cols-1"
      : "grid-cols-1 md:grid-cols-2";
  return (
    <section className="bg-slate-100 py-14 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-8">
        {adviceCards.length > 0 && (
          <div className={`grid ${adviceGridCols} gap-6 items-stretch`}>
              {data.bestArea && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                  <p className="font-serif font-bold text-lg mb-2">
                    {data.bestArea.title}
                  </p>
                  {data.bestArea.description && (
                    <p className="text-sm text-slate-600 mb-2">
                      {data.bestArea.description}
                    </p>
                  )}
                  {data.bestArea.intro && (
                    <p className="text-sm text-slate-600 mb-2">
                      {data.bestArea.intro}
                    </p>
                  )}
                  {data.bestArea.intro2 && (
                    <p className="text-sm text-slate-600 mb-3">
                      {data.bestArea.intro2}
                    </p>
                  )}
                  {data.bestArea.factors.length > 0 && (
                    <ul className="flex flex-wrap gap-2">
                      {data.bestArea.factors.map((f, i) => (
                        <li
                          key={i}
                          className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}
                  {data.bestArea.footerNote && (
                    <p className="text-xs text-slate-500 italic mt-3">
                      {data.bestArea.footerNote}
                    </p>
                  )}
                </div>
              )}

              {data.cheapestLand && (
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                  <p className="font-serif font-bold text-lg mb-2">
                    {data.cheapestLand.title}
                  </p>
                  <p className="text-sm text-slate-600 mb-2">
                    {data.cheapestLand.description}
                  </p>
                  {data.cheapestLand.intro && (
                    <p className="text-xs text-slate-500 italic mb-2">
                      {data.cheapestLand.intro}
                    </p>
                  )}
                  {data.cheapestLand.factors.length > 0 && (
                    <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5">
                      {data.cheapestLand.factors.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  )}
                  {data.cheapestLand.comparisonNote && (
                    <p className="text-xs text-slate-600 italic mt-2">
                      {data.cheapestLand.comparisonNote}
                    </p>
                  )}
                  {data.cheapestLand.footerNote && (
                    <p className="text-xs text-slate-500 italic mt-2">
                      {data.cheapestLand.footerNote}
                    </p>
                  )}
                </div>
              )}
             </div>
        )}

        {data.nearby && (
              <>
                <p className="text-2xl font-serif font-bold pt-4 mb-4">
                  {data.nearby.title}
                </p>
                {data.nearby.intro && (
                  <p className="text-sm text-slate-600 mb-4">
                    {data.nearby.intro}
                  </p>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-stretch">
                  {data.nearby.items.map((loc, i) => (
                    <div
                      key={i}
                      className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full"
                    >
                      <p className="font-bold text-[#024b12] text-sm mb-1">
                        {loc.name}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {loc.desc}
                      </p>
                    </div>
                  ))}
                </div>
                {data.nearby.cta && (
                  <div className="mt-6 text-center">
                    <a
                      href="#enquire"
                      className="inline-block bg-[#024b12] text-white px-6 py-3 rounded-full text-sm font-semibold"
                    >
                      {data.nearby.cta}
                    </a>
                  </div>
                )}
              </>
            )}
      </div>
    </section>
  );
})()}

      {/* ===================== 21. TESTIMONIALS ===================== */}
      {data.testimonials && data.testimonials.items.length > 0 && (
        <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-3">
              {data.testimonials.title}
            </h2>
            {data.testimonials.intro && (
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {data.testimonials.intro}
              </p>
            )}
            {data.testimonials.warning && (
              <p className="text-xs text-amber-700 italic mt-2">
                {data.testimonials.warning}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {data.testimonials.items.map((t, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-12 h-12 rounded-full bg-[#024b12] text-white flex items-center justify-center font-bold text-lg font-serif mb-6">
                    {t.name?.charAt(0).toUpperCase() || "S"}
                  </div>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-serif mb-6">
                    &quot;{t.experience}&quot;
                  </p>
                </div>
                <p className="text-sm sm:text-base font-serif font-bold">
                  - {t.name}
                </p>
              </div>
            ))}
          </div>
          {data.testimonials.cta && (
            <div className="text-center mt-8">
              <a
                href="#enquire"
                className="inline-block bg-[#024b12] text-white px-6 py-3 rounded-full text-sm font-semibold"
              >
                {data.testimonials.cta}
              </a>
            </div>
          )}
        </section>
      )}

      {/* ===================== 22. FAQS ===================== */}
      {data.faqs.length > 0 && (
        <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-serif font-normal mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-sm group"
                >
                  <summary className="font-semibold text-slate-800 text-sm sm:text-base cursor-pointer list-none flex justify-between items-center gap-4">
                    <span>{faq.q}</span>
                    <span className="text-[#024b12] font-bold group-open:rotate-180 transition-transform text-xs">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===================== 23. FINAL CTA ===================== */}
      <section
        id="enquire"
        className="bg-[#024b12] text-white py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-3">
            {data.finalCta?.title ||
              "Find Approved Resale Plots That Match Your Budget"}
          </h2>
          <p className="text-slate-200 text-sm sm:text-base mb-2">
            {data.finalCta?.description ||
              "Tell us your requirements to explore available verified listings."}
          </p>
          {data.finalCta?.description2 && (
            <p className="text-slate-200 text-sm sm:text-base mb-6">
              {data.finalCta.description2}
            </p>
          )}
          {data.finalCta?.formIntro && (
            <p className="text-amber-300 text-sm font-semibold mb-4">
              {data.finalCta.formIntro}
            </p>
          )}
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3.5 rounded-xl text-slate-900 bg-white placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-white"
              required
            />
            <input
              type="tel"
              placeholder="Mobile Number"
              className="p-3.5 rounded-xl text-slate-900 bg-white placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-white"
              required
            />
            {data.finalCta?.fields?.budget && (
              <input
                type="text"
                placeholder={data.finalCta.fields.budget}
                className="p-3.5 rounded-xl text-slate-900 bg-white placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-white"
              />
            )}
            {data.finalCta?.fields?.plotSize && (
              <input
                type="text"
                placeholder={data.finalCta.fields.plotSize}
                className="p-3.5 rounded-xl text-slate-900 bg-white placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-white"
              />
            )}
            {data.finalCta?.fields?.preferredLocation && (
              <input
                type="text"
                placeholder={data.finalCta.fields.preferredLocation}
                className="p-3.5 rounded-xl text-slate-900 bg-white placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-white"
              />
            )}
            {data.finalCta?.fields?.purpose && (
              <input
                type="text"
                placeholder={data.finalCta.fields.purpose}
                className="p-3.5 rounded-xl text-slate-900 bg-white placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-white"
              />
            )}
            {data.finalCta?.fields?.approvalPreference && (
              <input
                type="text"
                placeholder={data.finalCta.fields.approvalPreference}
                className="p-3.5 rounded-xl text-slate-900 bg-white placeholder-slate-400 text-sm outline-none focus:ring-2 focus:ring-white sm:col-span-2"
              />
            )}
            <button
              type="submit"
              className="sm:col-span-2 bg-[#01380d] hover:bg-black text-white font-bold border border-white/30 py-4 rounded-xl text-sm sm:text-base transition shadow-lg active:scale-[0.99]"
            >
              {data.finalCta?.ctaPrimary || "Get Available Plot Options"}
            </button>
            {data.finalCta?.ctaSecondary && (
              <a
                href="/contact-us"
                className="sm:col-span-2 bg-white text-[#024b12] hover:bg-slate-100 font-bold border border-white/30 py-4 rounded-xl text-sm sm:text-base transition shadow-lg active:scale-[0.99] text-center"
              >
                {data.finalCta.ctaSecondary}
              </a>
            )}
          </form>
        </div>
      </section>

      {/* ===================== 24 & 25. INTERNAL LINKS + SEO FOOTER ===================== */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm leading-relaxed border-t border-slate-800">
        <div className="max-w-7xl mx-auto space-y-6">
          {data.internalLinks && data.internalLinks.items.length > 0 && (
            <div>
              <p className="text-sm font-bold text-white mb-3">
                {data.internalLinks.title}
              </p>
              {data.internalLinks.intro && (
                <p className="text-xs text-slate-400 mb-3">
                  {data.internalLinks.intro}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {data.internalLinks.items.map((link, i) => (
                  <Link
                    key={i}
                    href="#"
                    className="hover:text-amber-300 transition bg-slate-800 px-3 py-1.5 rounded-lg text-xs"
                  >
                    {link}
                  </Link>
                ))}
              </div>
              {data.internalLinks.note && (
                <p className="text-xs text-slate-500 italic mt-3">
                  {data.internalLinks.note}
                </p>
              )}
            </div>
          )}

          {data.seoFooter && (
            <div className="border-t border-slate-800 pt-6">
              <p className="text-slate-200 font-bold text-sm mb-2">
                {data.seoFooter.title}
              </p>
              {data.seoFooter.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-slate-400 leading-relaxed text-xs sm:text-sm mb-2"
                >
                  {p}
                </p>
              ))}
              {data.seoFooter.links && data.seoFooter.links.length > 0 && (
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-3 text-xs">
                  {data.seoFooter.links.map((link, i) => (
                    <span key={i} className="flex items-center gap-x-2">
                      <Link
                        href={link.href}
                        className="text-slate-400 hover:text-amber-300 transition underline-offset-2 hover:underline"
                      >
                        {link.label}
                      </Link>
                      {i < data.seoFooter.links.length - 1 && (
                        <span className="text-slate-600">|</span>
                      )}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
}