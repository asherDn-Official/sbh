// import PropertyPageClient from "./propertiesPage";

// const seoData = {
//    "plots-in-katrambakkam": {
//     title: "Resale Plots in Kattrambakkam | Near Sriperumbudur | Sri Balaji Homes",
//     description: "Looking for resale plots in Kattrambakkam? Sri Balaji Homes offers CMDA & DTCP approved land near Sriperumbudur SIPCOT. Clear titles and immediate registration. Zero brokerage!",
//   },
// "plots-in-nandhambakkam": {
//     title: "Resale Plots in Nandhambakkam | Near Kundrathur | Sri Balaji Homes",
//     description: "Buy premium CMDA approved resale plots in Nandhambakkam near Kundrathur. Sri Balaji Homes offers legally verified residential land ready for immediate construction.",
//   },
//   "plots-in-thaiyur-omr": {
//     title: "Resale Plots in Thaiyur OMR | Near Siruseri IT Park | Sri Balaji Homes",
//     description: "Invest in DTCP approved resale plots in Thaiyur, OMR. Sri Balaji Homes offers premium land near Siruseri IT Park and SSN College. Immediate registration available!"
//   }
// };

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const data = seoData[slug];  

//   return {
//     title: data?.title || `${place} Properties | Sri Balaji Homes`,
//     description: data?.description || `Explore properties in ${place}`,

//     alternates: {
//        canonical: `https://sribalajihomes.in/properties/${slug}`,
//     },
//      openGraph: {
//       title: data?.title || `${place} Properties | Sri Balaji Homes`,
//       description: data?.description || "Buy CMDA & DTCP approved resale plots in Chennai directly from Sri Balaji Homes. Premium land in Kattrambakkam, Nandhambakkam & Thaiyur. Zero brokerage!",
//       url: `https://sribalajihomes.in/properties/${slug}`,
//       siteName: "Sri Balaji Homes",
//       images: [
//         {
//           url: "/android-chrome-512x512.png",
//           width: 486,
//           height: 486,
//           alt: "Sri Balaji Homes",
//         },
//       ],
//       locale: "en_IN",
//       type: "website",
//     },
//   };
// }

// export default async function Page({ params }) {
//   const { slug } = await params;

//   const place = slug.replace("resale-plots-", "");

//   return <PropertyPageClient />;
// }

// import PropertyPageClient from "./propertiesPage";


// // Metadata Dictionary mapped to exact SEO specs
// const seoData = {
//   "approved-resale-plots-kattrambakkam-chennai": {
//     title: "CMDA Plots in Katrambakkam Chennai | Resale Land for Sale",
//     description:
//       "Verified CMDA-approved resale plots in Katrambakkam, Chennai. Ready for immediate house construction with clear legal titles. Book your free site visit today!",
//     ogTitle: "CMDA Plots in Katrambakkam Chennai | Resale Land for Sale",
//     ogDescription:
//       "Verified CMDA-approved resale plots in Katrambakkam, Chennai. Ready for immediate house construction with clear legal titles. Book your free site visit today!",
//     canonicalSlug: "approved-resale-plots-kattrambakkam-chennai",
//     locationName: "Katrambakkam",
//   },
//   "plots-in-katrambakkam": {
//     title: "CMDA Plots in Katrambakkam Chennai | Resale Land for Sale",
//     description:
//       "Verified CMDA-approved resale plots in Katrambakkam, Chennai. Ready for immediate house construction with clear legal titles. Book your free site visit today!",
//     ogTitle: "CMDA Plots in Katrambakkam Chennai | Resale Land for Sale",
//     ogDescription:
//       "Verified CMDA-approved resale plots in Katrambakkam, Chennai. Ready for immediate house construction with clear legal titles. Book your free site visit today!",
//     canonicalSlug: "approved-resale-plots-kattrambakkam-chennai",
//     locationName: "Katrambakkam",
//   },
//   "resale-plots-katrambakkam": {
//     title: "CMDA Plots in Katrambakkam Chennai | Resale Land for Sale",
//     description:
//       "Verified CMDA-approved resale plots in Katrambakkam, Chennai. Ready for immediate house construction with clear legal titles. Book your free site visit today!",
//     ogTitle: "CMDA Plots in Katrambakkam Chennai | Resale Land for Sale",
//     ogDescription:
//       "Verified CMDA-approved resale plots in Katrambakkam, Chennai. Ready for immediate house construction with clear legal titles. Book your free site visit today!",
//     canonicalSlug: "approved-resale-plots-kattrambakkam-chennai",
//     locationName: "Katrambakkam",
//   },

//   "cmda-approved-plots-nandhambakkam": {
//     title: "Resale Plots in Nandambakkam Chennai | CMDA Approved Land",
//     description:
//       "Find prime CMDA & DTCP-approved resale plots in Nandambakkam, Chennai. 100% clear documentation, ready to build & easy bank loans. Schedule a free visit now!",
//     ogTitle: "Resale Plots in Nandambakkam Chennai | CMDA Approved Land",
//     ogDescription:
//       "Find prime CMDA & DTCP-approved resale plots in Nandambakkam, Chennai. 100% clear documentation, ready to build & easy bank loans. Schedule a free visit now!",
//     canonicalSlug: "cmda-approved-plots-nandhambakkam",
//     locationName: "Nandambakkam",
//   },
//   "plots-in-nandhambakkam": {
//     title: "Resale Plots in Nandambakkam Chennai | CMDA Approved Land",
//     description:
//       "Find prime CMDA & DTCP-approved resale plots in Nandambakkam, Chennai. 100% clear documentation, ready to build & easy bank loans. Schedule a free visit now!",
//     ogTitle: "Resale Plots in Nandambakkam Chennai | CMDA Approved Land",
//     ogDescription:
//       "Find prime CMDA & DTCP-approved resale plots in Nandambakkam, Chennai. 100% clear documentation, ready to build & easy bank loans. Schedule a free visit now!",
//     canonicalSlug: "cmda-approved-plots-nandhambakkam",
//     locationName: "Nandambakkam",
//   },
//   "resale-plots-nandhambakkam": {
//     title: "Resale Plots in Nandambakkam Chennai | CMDA Approved Land",
//     description:
//       "Find prime CMDA & DTCP-approved resale plots in Nandambakkam, Chennai. 100% clear documentation, ready to build & easy bank loans. Schedule a free visit now!",
//     ogTitle: "Resale Plots in Nandambakkam Chennai | CMDA Approved Land",
//     ogDescription:
//       "Find prime CMDA & DTCP-approved resale plots in Nandambakkam, Chennai. 100% clear documentation, ready to build & easy bank loans. Schedule a free visit now!",
//     canonicalSlug: "cmda-approved-plots-nandhambakkam",
//     locationName: "Nandambakkam",
//   },

//   "dtcp-resale-plots-thaiyur-omr": {
//     title: "Plots for Sale in Thaiyur OMR | DTCP-Approved Resale Land",
//     description:
//       "Buy DTCP-approved resale plots in Thaiyur, OMR Chennai. High-growth IT corridor location, 100% clear legal titles & bank loan ready. Book a free site visit!",
//     ogTitle: "Plots for Sale in Thaiyur OMR | DTCP-Approved Resale Land",
//     ogDescription:
//       "Buy DTCP-approved resale plots in Thaiyur, OMR Chennai. High-growth IT corridor location, 100% clear legal titles & bank loan ready. Book a free site visit!",
//     canonicalSlug: "dtcp-resale-plots-thaiyur-omr",
//     locationName: "Thaiyur OMR",
//   },
//   "plots-in-thaiyur-omr": {
//     title: "Plots for Sale in Thaiyur OMR | DTCP-Approved Resale Land",
//     description:
//       "Buy DTCP-approved resale plots in Thaiyur, OMR Chennai. High-growth IT corridor location, 100% clear legal titles & bank loan ready. Book a free site visit!",
//     ogTitle: "Plots for Sale in Thaiyur OMR | DTCP-Approved Resale Land",
//     ogDescription:
//       "Buy DTCP-approved resale plots in Thaiyur, OMR Chennai. High-growth IT corridor location, 100% clear legal titles & bank loan ready. Book a free site visit!",
//     canonicalSlug: "dtcp-resale-plots-thaiyur-omr",
//     locationName: "Thaiyur OMR",
//   },
//   "resale-plots-thaiyur-omr": {
//     title: "Plots for Sale in Thaiyur OMR | DTCP-Approved Resale Land",
//     description:
//       "Buy DTCP-approved resale plots in Thaiyur, OMR Chennai. High-growth IT corridor location, 100% clear legal titles & bank loan ready. Book a free site visit!",
//     ogTitle: "Plots for Sale in Thaiyur OMR | DTCP-Approved Resale Land",
//     ogDescription:
//       "Buy DTCP-approved resale plots in Thaiyur, OMR Chennai. High-growth IT corridor location, 100% clear legal titles & bank loan ready. Book a free site visit!",
//     canonicalSlug: "dtcp-resale-plots-thaiyur-omr",
//     locationName: "Thaiyur OMR",
//   },
// };

// // Add Katrambakkam FAQs for Schema generation
// const locationFaqs = {
//   "approved-resale-plots-kattrambakkam-chennai": [
//     {
//       q: "Are the plots in Katrambakkam DTCP approved?",
//       a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available to buyers.",
//     },
//     {
//       q: "How far is Katrambakkam from Sriperumbudur?",
//       a: "Katrambakkam is positioned within convenient reach of the Sriperumbudur industrial belt — exact distance to specific points of interest can be confirmed during your site visit.",
//     },
//     {
//       q: "Do you charge brokerage on plots in this location?",
//       a: "No — all plots in Katrambakkam are sold directly, with zero brokerage.",
//     },
//     {
//       q: "Can I get a bank loan for a plot in this layout?",
//       a: "DTCP-approved plots are generally eligible for bank financing, though this depends on the specific lender and plot — we can guide you on this during your enquiry.",
//     },
//     {
//       q: "What documents will I receive after registration?",
//       a: "You'll receive the registered sale deed along with the title and encumbrance verification documents compiled before the plot was listed.",
//     },
//   ],
//   "cmda-approved-plots-nandhambakkam": [
//     {
//       q: "Are the plots in Nandhambakkam DTCP approved?",
//       a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available.",
//     },
//     {
//       q: "How far is Nandhambakkam from Kundrathur and Porur?",
//       a: "Nandhambakkam is positioned within convenient reach of both — exact distances to specific landmarks can be confirmed during your site visit.",
//     },
//     {
//       q: "Do you charge brokerage on plots in this location?",
//       a: "No — all plots in Nandhambakkam are sold directly, with zero brokerage.",
//     },
//     {
//       q: "Is bank loan financing available for plots in this layout?",
//       a: "DTCP-approved plots are generally loan-eligible, though this depends on the specific lender — we can advise during your enquiry.",
//     },
//     {
//       q: "What makes Nandhambakkam different from your Katrambakkam location?",
//       a: "Nandhambakkam is positioned on Chennai's western side near Kundrathur and Porur, while Katrambakkam is closer to the Sriperumbudur industrial belt — the right choice depends on which corridor better matches your commute or investment goals.",
//     },
//   ],
//   "dtcp-resale-plots-thaiyur-omr": [
//     {
//       q: "Are the plots in Thaiyur, OMR DTCP approved?",
//       a: "Yes — this layout carries DTCP approval, verified as part of our listing process before any plot is made available.",
//     },
//     {
//       q: "How far is Thaiyur from Siruseri IT Park?",
//       a: "Thaiyur is positioned within convenient reach of Siruseri IT Park — exact distance can be confirmed during your site visit.",
//     },
//     {
//       q: "Is this location good for rental income from IT employees?",
//       a: "Thaiyur's proximity to the OMR IT corridor makes it a location commonly considered for rental potential tied to IT/ITES employment, though rental outcomes depend on your specific plans (build type, timing, and market conditions).",
//     },
//     {
//       q: "Do you charge brokerage on plots in this location?",
//       a: "No — all plots in Thaiyur, OMR are sold directly, with zero brokerage.",
//     },
//     {
//       q: "How does Thaiyur compare to your Katrambakkam and Nandhambakkam locations?",
//       a: "Thaiyur is positioned on OMR near Siruseri IT Park, giving it an IT-corridor demand profile, while Katrambakkam and Nandhambakkam are tied to the Sriperumbudur industrial belt and Kundrathur–Porur corridor respectively — the best fit depends on which employment/growth corridor matches your goals.",
//     },
//   ],
// };

// // Alias mapping so alternate slug retrieves the same FAQs
// locationFaqs["plots-in-katrambakkam"] = locationFaqs["approved-resale-plots-kattrambakkam-chennai"];
// locationFaqs["resale-plots-katrambakkam"] = locationFaqs["approved-resale-plots-kattrambakkam-chennai"];
// locationFaqs["plots-in-nandhambakkam"] = locationFaqs["cmda-approved-plots-nandhambakkam"];
// locationFaqs["resale-plots-nandhambakkam"] = locationFaqs["cmda-approved-plots-nandhambakkam"];
// locationFaqs["plots-in-thaiyur-omr"] = locationFaqs["dtcp-resale-plots-thaiyur-omr"];
// locationFaqs["resale-plots-thaiyur-omr"] = locationFaqs["dtcp-resale-plots-thaiyur-omr"];

// export async function generateStaticParams() {
//   return Object.keys(seoData).map((slug) => ({
//     slug: slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const data = seoData[slug] || {};

//   const cleanSlug = data.canonicalSlug || slug;

//   return {
//     title: data.title || "CMDA & DTCP Approved Resale Plots in Chennai | Sri Balaji Homes",
//     description:
//       data.description ||
//       "Looking for verified land in Chennai? Explore CMDA/DTCP resale plots in Katrambakkam, Nandambakkam & Thaiyur (OMR) with clear titles. Book a free site visit today!",
//     alternates: {
//       canonical: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//     },
//     openGraph: {
//       title: data.ogTitle || data.title,
//       description: data.ogDescription || data.description,
//       url: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//       siteName: "Sri Balaji Homes",
//       images: [
//         {
//           url: "https://www.sribalajihomes.in/og-image.jpg",
//           width: 1200,
//           height: 630,
//           alt: `${data.locationName || "Kattrambakkam"} Resale Plots - Sri Balaji Homes`,
//         },
//       ],
//       locale: "en_IN",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: data.ogTitle || data.title,
//       description: data.ogDescription || data.description,
//       images: ["https://www.sribalajihomes.in/og-image.jpg"],
//     },
//   };
// }

// export default async function Page({ params }) {
//   const { slug } = await params;
//   const data = seoData[slug] || {};
//   const cleanSlug = data.canonicalSlug || slug;
//   const faqs = locationFaqs[slug] || locationFaqs["resale-plots-katrambakkam"];

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": [
//       {
//         "@type": "ListItem",
//         "position": 1,
//         "name": "Home",
//         "item": "https://www.sribalajihomes.in",
//       },
//       {
//         "@type": "ListItem",
//         "position": 2,
//         "name": "Properties",
//         "item": "https://www.sribalajihomes.in/properties",
//       },
//       {
//         "@type": "ListItem",
//         "position": 3,
//         "name": data?.locationName || "Location",
//         "item": `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//       },
//     ],
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((f) => ({
//       "@type": "Question",
//       name: f.q,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: f.a,
//       },
//     })),
//   };

//   const lotOrAcreageSchema = {
//     "@context": "https://schema.org",
//     "@type": "LotOrAcreage",
//     "name": data.title || `Approved Resale Plots in ${data.locationName || "Chennai"}`,
//     "description": data.description || "Buy CMDA & DTCP approved resale plots in Chennai directly from Sri Balaji Homes.",
//     "url": `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//     "address": {
//       "@type": "PostalAddress",
//       "addressLocality": data.locationName || "Chennai",
//       "addressRegion": "Tamil Nadu",
//       "postalCode": "600001",
//       "addressCountry": "IN"
//     },
//     "geo": {
//       "@type": "GeoCoordinates",
//       "latitude": data.locationName === "Nandhambakkam" ? 13.0031 : data.locationName === "Thaiyur OMR" ? 12.7937 : 12.9819891,
//       "longitude": data.locationName === "Nandhambakkam" ? 80.0617 : data.locationName === "Thaiyur OMR" ? 80.2076 : 80.0295029
//     },
//     "offers": {
//       "@type": "Offer",
//       "priceCurrency": "INR",
//       "availability": "https://schema.org/InStock"
//     },
//     "additionalProperty": [
//       {
//         "@type": "PropertyValue",
//         "name": "Approval",
//         "value": data.locationName === "Nandhambakkam" ? "CMDA" : "DTCP"
//       }
//     ]
//   };

//   return (
//     <>
//       {/* Inject Breadcrumb Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />

//       {/* Inject FAQ Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />

//       {/* Inject LotOrAcreage Property Schema */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(lotOrAcreageSchema) }}
//       />

//       <PropertyPageClient />
//     </>
//   );
// }




















// import PropertyPageClient from "./propertiesPage";
// import { katrambakkamData } from "../data/katrambakkam";
// import { nandhambakkamData } from "../data/nandhambakkam";
// import { thaiyurData } from "../data/thaiyurData";

// // Lookup dictionary mapping URL slugs to datasets
// const propertyDataMap = {
//   "approved-resale-plots-kattrambakkam-chennai": katrambakkamData,
//   "plots-in-katrambakkam": katrambakkamData,
//   "resale-plots-katrambakkam": katrambakkamData,

//   "cmda-approved-plots-nandhambakkam": nandhambakkamData,
//   "plots-in-nandhambakkam": nandhambakkamData,
//   "resale-plots-nandhambakkam": nandhambakkamData,

//   "dtcp-resale-plots-thaiyur-omr": thaiyurData,
//   "plots-in-thaiyur-omr": thaiyurData,
//   "resale-plots-thaiyur-omr": thaiyurData,
// };

// // Primary canonical slug mapping
// const canonicalSlugMap = {
//   "approved-resale-plots-kattrambakkam-chennai": "approved-resale-plots-kattrambakkam-chennai",
//   "plots-in-katrambakkam": "approved-resale-plots-kattrambakkam-chennai",
//   "resale-plots-katrambakkam": "approved-resale-plots-kattrambakkam-chennai",

//   "cmda-approved-plots-nandhambakkam": "cmda-approved-plots-nandhambakkam",
//   "plots-in-nandhambakkam": "cmda-approved-plots-nandhambakkam",
//   "resale-plots-nandhambakkam": "cmda-approved-plots-nandhambakkam",

//   "dtcp-resale-plots-thaiyur-omr": "dtcp-resale-plots-thaiyur-omr",
//   "plots-in-thaiyur-omr": "dtcp-resale-plots-thaiyur-omr",
//   "resale-plots-thaiyur-omr": "dtcp-resale-plots-thaiyur-omr",
// };

// export async function generateStaticParams() {
//   return Object.keys(propertyDataMap).map((slug) => ({ slug }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const data = propertyDataMap[slug] || katrambakkamData;
//   const cleanSlug = canonicalSlugMap[slug] || slug;

//   const title = data.metaTitle || data.hero?.title || "Resale Plots in Chennai | Sri Balaji Homes";
//   const description = data.metaDescription || data.hero?.description || "Verified residential plots for sale.";

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//     },
//     openGraph: {
//       title,
//       description,
//       url: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//       siteName: "Sri Balaji Homes",
//       images: [
//         {
//           url: data.hero?.heroImage || "https://www.sribalajihomes.in/og-image.jpg",
//           width: 1200,
//           height: 630,
//           alt: data.hero?.heroImageAlt || title,
//         },
//       ],
//       locale: "en_IN",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [data.hero?.heroImage || "https://www.sribalajihomes.in/og-image.jpg"],
//     },
//   };
// }

// export default async function Page({ params }) {
//   const { slug } = await params;
//   const data = propertyDataMap[slug] || katrambakkamData;
//   const cleanSlug = canonicalSlugMap[slug] || slug;

//   const faqs = data.faqs || [];

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: "https://www.sribalajihomes.in",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Properties",
//         item: "https://www.sribalajihomes.in/properties",
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: data.hero?.title || "Location",
//         item: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//       },
//     ],
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((f) => ({
//       "@type": "Question",
//       name: f.q,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: f.a,
//       },
//     })),
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />
//       {faqs.length > 0 && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//         />
//       )}
//       <PropertyPageClient data={data} slug={cleanSlug} />
//     </>
//   );
// }




// import PropertyPageClient from "./propertiesPage";

// import KatrambakkamData from "../data/katrambakkam";
// import NandhambakkamData from "../data/nandhambakkam";
// import ThaiyurData from "../data/thaiyurData";

// /* ============================================================
//    PROPERTY DATA
// ============================================================ */

// const propertyDataMap = {
//   "approved-resale-plots-kattrambakkam-chennai": KatrambakkamData,
//   "plots-in-katrambakkam": KatrambakkamData,
//   "resale-plots-katrambakkam": KatrambakkamData,

//   "cmda-approved-plots-nandhambakkam": NandhambakkamData,
//   "plots-in-nandhambakkam": NandhambakkamData,
//   "resale-plots-nandhambakkam": NandhambakkamData,

//   "dtcp-resale-plots-thaiyur-omr": ThaiyurData,
//   "plots-in-thaiyur-omr": ThaiyurData,
//   "resale-plots-thaiyur-omr": ThaiyurData,
// };

// /* ============================================================
//    CANONICAL SLUGS
// ============================================================ */

// const canonicalSlugMap = {
//   "approved-resale-plots-kattrambakkam-chennai":
//     "approved-resale-plots-kattrambakkam-chennai",

//   "plots-in-katrambakkam":
//     "approved-resale-plots-kattrambakkam-chennai",

//   "resale-plots-katrambakkam":
//     "approved-resale-plots-kattrambakkam-chennai",

//   "cmda-approved-plots-nandhambakkam":
//     "cmda-approved-plots-nandhambakkam",

//   "plots-in-nandhambakkam":
//     "cmda-approved-plots-nandhambakkam",

//   "resale-plots-nandhambakkam":
//     "cmda-approved-plots-nandhambakkam",

//   "dtcp-resale-plots-thaiyur-omr":
//     "dtcp-resale-plots-thaiyur-omr",

//   "plots-in-thaiyur-omr":
//     "dtcp-resale-plots-thaiyur-omr",

//   "resale-plots-thaiyur-omr":
//     "dtcp-resale-plots-thaiyur-omr",
// };

// /* ============================================================
//    STATIC PARAMS
// ============================================================ */

// export async function generateStaticParams() {
//   return Object.keys(propertyDataMap).map((slug) => ({
//     slug,
//   }));
// }

// /* ============================================================
//    HELPERS
// ============================================================ */

// function getSection(data, heading) {
//   if (!Array.isArray(data?.sections)) {
//     return null;
//   }

//   return data.sections.find(
//     (section) =>
//       String(section.sectionHeading || "")
//         .trim()
//         .toLowerCase() === heading.toLowerCase()
//   );
// }

// function getFirstLine(section) {
//   if (!section || !Array.isArray(section.lines)) {
//     return "";
//   }

//   return section.lines.find(
//     (line) => String(line || "").trim()
//   ) || "";
// }

// function getLocationName(data) {
//   if (data?.key) {
//     const key = String(data.key).toLowerCase();

//     if (key.includes("katrambakkam")) {
//       return "Katrambakkam";
//     }

//     if (key.includes("nandhambakkam")) {
//       return "Nandhambakkam";
//     }

//     if (key.includes("thaiyur")) {
//       return "Thaiyur";
//     }
//   }

//   if (data?.pageTitle) {
//     return data.pageTitle
//       .replace(/^Resale Plots in\s*/i, "")
//       .trim();
//   }

//   return "Properties";
// }

// /* ============================================================
//    METADATA
// ============================================================ */

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const data =
//     propertyDataMap[slug] || KatrambakkamData;

//   const cleanSlug =
//     canonicalSlugMap[slug] || slug;

//   const locationName =
//     getLocationName(data);

//   const heroSection =
//     getSection(data, "Hero Section");

//   const pageTitle =
//     data.pageTitle ||
//     getFirstLine(heroSection) ||
//     `Resale Plots in ${locationName}, Chennai`;

//   const description =
//     heroSection?.lines
//       ?.slice(1, 2)
//       ?.join(" ") ||
//     `Explore resale plots and residential land in ${locationName}, Chennai.`;

//   return {
//     title: pageTitle,

//     description,

//     alternates: {
//       canonical:
//         `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//     },

//     openGraph: {
//       title: pageTitle,

//       description,

//       url:
//         `https://www.sribalajihomes.in/properties/${cleanSlug}`,

//       siteName: "Sri Balaji Homes",

//       images: [
//         {
//           url:
//             "https://www.sribalajihomes.in/og-image.jpg",

//           width: 1200,

//           height: 630,

//           alt: pageTitle,
//         },
//       ],

//       locale: "en_IN",

//       type: "website",
//     },

//     twitter: {
//       card: "summary_large_image",

//       title: pageTitle,

//       description,

//       images: [
//         "https://www.sribalajihomes.in/og-image.jpg",
//       ],
//     },
//   };
// }

// /* ============================================================
//    PAGE
// ============================================================ */

// export default async function Page({ params }) {
//   const { slug } = await params;

//   const data =
//     propertyDataMap[slug] || KatrambakkamData;

//   const cleanSlug =
//     canonicalSlugMap[slug] || slug;

//   const locationName =
//     getLocationName(data);

//   /* ----------------------------------------------------------
//      Hero information
//   ---------------------------------------------------------- */

//   const heroSection =
//     getSection(data, "Hero Section");

//   const heroTitle =
//     data.pageTitle ||
//     getFirstLine(heroSection) ||
//     `Resale Plots in ${locationName}, Chennai`;

//   /* ----------------------------------------------------------
//      FAQ section
//   ---------------------------------------------------------- */

//   const faqSection =
//     getSection(
//       data,
//       "Frequently Asked Questions"
//     );

//   const faqLines =
//     faqSection?.lines || [];

//   const faqItems = parseFAQs(faqLines);

//   /* ----------------------------------------------------------
//      Breadcrumb Schema
//   ---------------------------------------------------------- */

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",

//     "@type": "BreadcrumbList",

//     itemListElement: [
//       {
//         "@type": "ListItem",

//         position: 1,

//         name: "Home",

//         item:
//           "https://www.sribalajihomes.in",
//       },

//       {
//         "@type": "ListItem",

//         position: 2,

//         name: "Properties",

//         item:
//           "https://www.sribalajihomes.in/properties",
//       },

//       {
//         "@type": "ListItem",

//         position: 3,

//         name: heroTitle,

//         item:
//           `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//       },
//     ],
//   };

//   /* ----------------------------------------------------------
//      FAQ Schema
//   ---------------------------------------------------------- */

//   const faqSchema = {
//     "@context": "https://schema.org",

//     "@type": "FAQPage",

//     mainEntity: faqItems.map((faq) => ({
//       "@type": "Question",

//       name: faq.question,

//       acceptedAnswer: {
//         "@type": "Answer",

//         text: faq.answer,
//       },
//     })),
//   };

//   return (
//     <>
//       {/* Breadcrumb Schema */}

//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{
//           __html:
//             JSON.stringify(
//               breadcrumbSchema
//             ),
//         }}
//       />

//       {/* FAQ Schema */}

//       {faqItems.length > 0 && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html:
//               JSON.stringify(
//                 faqSchema
//               ),
//           }}
//         />
//       )}

//       {/* Property Page */}

//       <PropertyPageClient
//         data={data}
//         slug={cleanSlug}
//       />
//     </>
//   );
// }

// /* ============================================================
//    FAQ PARSER
// ============================================================ */

// function parseFAQs(lines) {
//   const results = [];

//   let currentQuestion = null;

//   let currentAnswer = [];

//   lines.forEach((line) => {
//     const text =
//       String(line || "").trim();

//     if (!text) {
//       return;
//     }

//     /* Ignore section-level CTA lines */

//     if (
//       text.toLowerCase().startsWith("cta:")
//     ) {
//       return;
//     }

//     /* Question */

//     if (text.endsWith("?")) {
//       if (currentQuestion) {
//         results.push({
//           question: currentQuestion,

//           answer:
//             currentAnswer.join(" ").trim(),
//         });
//       }

//       currentQuestion = text;

//       currentAnswer = [];

//       return;
//     }

//     /* Answer */

//     if (currentQuestion) {
//       currentAnswer.push(text);
//     }
//   });

//   /* Last FAQ */

//   if (currentQuestion) {
//     results.push({
//       question: currentQuestion,

//       answer:
//         currentAnswer.join(" ").trim(),
//     });
//   }

//   return results;
// }




// import PropertyPageClient from "./propertiesPage";
// import { katrambakkamData } from "../data/katrambakkam";
// import { nandhambakkamData } from "../data/nandhambakkam";
// import { thaiyurData } from "../data/thaiyurData";

// // Lookup dictionary mapping URL slugs to datasets
// // const propertyDataMap = {
// //   "approved-resale-plots-kattrambakkam-chennai": katrambakkamData,
// //   "plots-in-katrambakkam": katrambakkamData,
// //   "resale-plots-katrambakkam": katrambakkamData,

// //   "cmda-approved-plots-nandhambakkam": nandhambakkamData,
// //   "plots-in-nandhambakkam": nandhambakkamData,
// //   "resale-plots-nandhambakkam": nandhambakkamData,

// //   "dtcp-resale-plots-thaiyur-omr": thaiyurData,
// //   "plots-in-thaiyur-omr": thaiyurData,
// //   "resale-plots-thaiyur-omr": thaiyurData,
// // };


// const propertyDataMap = {
//   // Katrambakkam
//   "approved-resale-plots-kattrambakkam-chennai": katrambakkamData,
//   "plots-in-katrambakkam": katrambakkamData,
//   "resale-plots-katrambakkam": katrambakkamData,

//   // Nandhambakkam
//   "approved-resale-plots-nandhambakkam-chennai": nandhambakkamData,
//   "cmda-approved-plots-nandhambakkam": nandhambakkamData,
//   "plots-in-nandhambakkam": nandhambakkamData,
//   "resale-plots-nandhambakkam": nandhambakkamData,

//   // Thaiyur
//   "approved-resale-plots-thaiyur-omr-chennai": thaiyurData,
//   "dtcp-resale-plots-thaiyur-omr": thaiyurData,
//   "plots-in-thaiyur-omr": thaiyurData,
//   "resale-plots-thaiyur-omr": thaiyurData,
// };

// // Primary canonical slug mapping
// const canonicalSlugMap = {
//   "approved-resale-plots-kattrambakkam-chennai": "approved-resale-plots-kattrambakkam-chennai",
//   "plots-in-katrambakkam": "approved-resale-plots-kattrambakkam-chennai",
//   "resale-plots-katrambakkam": "approved-resale-plots-kattrambakkam-chennai",

//   "cmda-approved-plots-nandhambakkam": "cmda-approved-plots-nandhambakkam",
//   "plots-in-nandhambakkam": "cmda-approved-plots-nandhambakkam",
//   "resale-plots-nandhambakkam": "cmda-approved-plots-nandhambakkam",

//   "dtcp-resale-plots-thaiyur-omr": "dtcp-resale-plots-thaiyur-omr",
//   "plots-in-thaiyur-omr": "dtcp-resale-plots-thaiyur-omr",
//   "resale-plots-thaiyur-omr": "dtcp-resale-plots-thaiyur-omr",
// };

// export async function generateStaticParams() {
//   return Object.keys(propertyDataMap).map((slug) => ({ slug }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const data = propertyDataMap[slug] || katrambakkamData;
//   const cleanSlug = canonicalSlugMap[slug] || slug;

//   const title = data.metaTitle || data.hero?.title || "Resale Plots in Chennai | Sri Balaji Homes";
//   const description = data.metaDescription || data.hero?.description || data.hero?.p1 || "Verified residential plots for sale.";

//   return {
//     title,
//     description,
//     alternates: {
//       canonical: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//     },
//     openGraph: {
//       title,
//       description,
//       url: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//       siteName: "Sri Balaji Homes",
//       images: [
//         {
//           url: data.hero?.heroImage || "https://www.sribalajihomes.in/og-image.jpg",
//           width: 1200,
//           height: 630,
//           alt: data.hero?.heroImageAlt || title,
//         },
//       ],
//       locale: "en_IN",
//       type: "website",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [data.hero?.heroImage || "https://www.sribalajihomes.in/og-image.jpg"],
//     },
//   };
// }

// export default async function Page({ params }) {
//   const { slug } = await params;
//   const data = propertyDataMap[slug] || katrambakkamData;
//   const cleanSlug = canonicalSlugMap[slug] || slug;

//   const faqs = data.faqs || [];

//   const breadcrumbSchema = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "Home",
//         item: "https://www.sribalajihomes.in",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "Properties",
//         item: "https://www.sribalajihomes.in/properties",
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: data.hero?.title || "Location",
//         item: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
//       },
//     ],
//   };

//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     mainEntity: faqs.map((f) => ({
//       "@type": "Question",
//       name: f.q,
//       acceptedAnswer: {
//         "@type": "Answer",
//         text: f.a,
//       },
//     })),
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
//       />
//       {faqs.length > 0 && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//         />
//       )}
//       <PropertyPageClient data={data} slug={cleanSlug} />
//     </>
//   );
// }





import PropertyPageClient from "./propertiesPage";
import { katrambakkamData } from "../data/katrambakkam";
import { nandhambakkamData } from "../data/nandhambakkam";
import { thaiyurData } from "../data/thaiyurData";
import { normalizePropertyData } from "../../../lib/normalizePropertyData";

const rawDataMap = {
  "approved-resale-plots-kattrambakkam-chennai": katrambakkamData,
  "plots-in-katrambakkam": katrambakkamData,
  "resale-plots-katrambakkam": katrambakkamData,

  "approved-resale-plots-nandhambakkam-chennai": nandhambakkamData,
  "cmda-approved-plots-nandhambakkam": nandhambakkamData,
  "plots-in-nandhambakkam": nandhambakkamData,
  "resale-plots-nandhambakkam": nandhambakkamData,

  "approved-resale-plots-thaiyur-omr-chennai": thaiyurData,
  "dtcp-resale-plots-thaiyur-omr": thaiyurData,
  "plots-in-thaiyur-omr": thaiyurData,
  "resale-plots-thaiyur-omr": thaiyurData,
};

const canonicalSlugMap = {
  "approved-resale-plots-kattrambakkam-chennai": "approved-resale-plots-kattrambakkam-chennai",
  "plots-in-katrambakkam": "approved-resale-plots-kattrambakkam-chennai",
  "resale-plots-katrambakkam": "approved-resale-plots-kattrambakkam-chennai",

  "approved-resale-plots-nandhambakkam-chennai": "approved-resale-plots-nandhambakkam-chennai",
  "cmda-approved-plots-nandhambakkam": "approved-resale-plots-nandhambakkam-chennai",
  "plots-in-nandhambakkam": "approved-resale-plots-nandhambakkam-chennai",
  "resale-plots-nandhambakkam": "approved-resale-plots-nandhambakkam-chennai",

  "approved-resale-plots-thaiyur-omr-chennai": "approved-resale-plots-thaiyur-omr-chennai",
  "dtcp-resale-plots-thaiyur-omr": "approved-resale-plots-thaiyur-omr-chennai",
  "plots-in-thaiyur-omr": "approved-resale-plots-thaiyur-omr-chennai",
  "resale-plots-thaiyur-omr": "approved-resale-plots-thaiyur-omr-chennai",
};

export async function generateStaticParams() {
  return Object.keys(rawDataMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const raw = rawDataMap[slug] || katrambakkamData;
  const data = normalizePropertyData(raw);
  const cleanSlug = canonicalSlugMap[slug] || slug;

  const title = data.metaTitle || data.hero?.title || "Resale Plots in Chennai";
  const description =
    data.metaDescription ||
    data.hero?.paragraphs?.[0] ||
    "Verified residential plots for sale.";

  return {
    title,
    description,
    alternates: { canonical: `https://www.sribalajihomes.in/properties/${cleanSlug}` },
    openGraph: {
      title,
      description,
      url: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
      siteName: "Sri Balaji Homes",
      images: [{
        url: data.hero?.image || "https://www.sribalajihomes.in/og-image.jpg",
        width: 1200, height: 630,
        alt: data.hero?.imageAlt || title,
      }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [data.hero?.image || "https://www.sribalajihomes.in/og-image.jpg"],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const raw = rawDataMap[slug] || katrambakkamData;
  const data = normalizePropertyData(raw);
  const cleanSlug = canonicalSlugMap[slug] || slug;

  const faqs = data.faqs || [];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sribalajihomes.in" },
      { "@type": "ListItem", position: 2, name: "Properties", item: "https://www.sribalajihomes.in/properties" },
      { "@type": "ListItem", position: 3, name: data.hero?.title || "Location", item: `https://www.sribalajihomes.in/properties/${cleanSlug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <PropertyPageClient data={data} slug={cleanSlug} />
    </>
  );
}