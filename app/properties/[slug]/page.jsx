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

import PropertyPageClient from "./propertiesPage";


// Metadata Dictionary mapped to exact SEO specs
const seoData = {
  "resale-plots-katrambakkam": {
    title: "Resale Plots in Katrambakkam | Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots in Katrambakkam, near Sriperumbudur. Clear title, zero brokerage. Book a free site visit today.",
    ogTitle: "Resale Plots in Katrambakkam — Sri Balaji Homes",
    ogDescription:
      "DTCP & CMDA approved resale plots in Katrambakkam, near Sriperumbudur, with clear title and zero brokerage.",
    canonicalSlug: "plots-in-katrambakkam",
    locationName: "Katrambakkam",
  },
  "plots-in-katrambakkam": {
    title: "Resale Plots in Katrambakkam | Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots in Katrambakkam, near Sriperumbudur. Clear title, zero brokerage. Book a free site visit today.",
    ogTitle: "Resale Plots in Katrambakkam — Sri Balaji Homes",
    ogDescription:
      "DTCP & CMDA approved resale plots in Katrambakkam, near Sriperumbudur, with clear title and zero brokerage.",
    canonicalSlug: "plots-in-katrambakkam",
    locationName: "Katrambakkam",
  },
  "resale-plots-nandhambakkam": {
    title: "Resale Plots in Nandhambakkam | Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots in Nandhambakkam, near Kundrathur. Clear title, zero brokerage. Book a free site visit today.",
    ogTitle: "Resale Plots in Nandhambakkam — Sri Balaji Homes",
    ogDescription:
      "DTCP & CMDA approved resale plots in Nandhambakkam, near Kundrathur, with clear title and zero brokerage.",
    canonicalSlug: "plots-in-nandhambakkam",
    locationName: "Nandhambakkam",
  },
  "plots-in-nandhambakkam": {
    title: "Resale Plots in Nandhambakkam | Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots in Nandhambakkam, near Kundrathur. Clear title, zero brokerage. Book a free site visit today.",
    ogTitle: "Resale Plots in Nandhambakkam — Sri Balaji Homes",
    ogDescription:
      "DTCP & CMDA approved resale plots in Nandhambakkam, near Kundrathur, with clear title and zero brokerage.",
    canonicalSlug: "plots-in-nandhambakkam",
    locationName: "Nandhambakkam",
  },
  "resale-plots-thaiyur-omr": {
    title: "Resale Plots in Thaiyur OMR | Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots in Thaiyur, OMR, near Siruseri IT Park. Clear title, zero brokerage. Book a free site visit.",
    ogTitle: "Resale Plots in Thaiyur, OMR — Sri Balaji Homes",
    ogDescription:
      "DTCP & CMDA approved resale plots in Thaiyur, OMR, near Siruseri IT Park, with clear title and zero brokerage.",
    canonicalSlug: "plots-in-thaiyur-omr",
    locationName: "Thaiyur",
  },
  "plots-in-thaiyur-omr": {
    title: "Resale Plots in Thaiyur OMR | Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots in Thaiyur, OMR, near Siruseri IT Park. Clear title, zero brokerage. Book a free site visit.",
    ogTitle: "Resale Plots in Thaiyur, OMR — Sri Balaji Homes",
    ogDescription:
      "DTCP & CMDA approved resale plots in Thaiyur, OMR, near Siruseri IT Park, with clear title and zero brokerage.",
    canonicalSlug: "plots-in-thaiyur-omr",
    locationName: "Thaiyur OMR",
  },
};

// Add Katrambakkam FAQs for Schema generation
const locationFaqs = {
  "resale-plots-katrambakkam": [
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
  "resale-plots-nandhambakkam": [
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
  "resale-plots-thaiyur": [
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
};

// Alias mapping so alternate slug retrieves the same FAQs
locationFaqs["plots-in-katrambakkam"] = locationFaqs["resale-plots-katrambakkam"];
locationFaqs["plots-in-nandhambakkam"] = locationFaqs["resale-plots-nandhambakkam"];
locationFaqs["plots-in-thaiyur-omr"] = locationFaqs["resale-plots-thaiyur"];

export async function generateStaticParams() {
  return Object.keys(seoData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = seoData[slug] || {};

  const cleanSlug = data.canonicalSlug || slug;

  return {
    title: data.title || "Approved Resale Plots in Chennai | Sri Balaji Homes",
    description:
      data.description ||
      "Buy CMDA & DTCP approved resale plots in Chennai directly from Sri Balaji Homes.",
    alternates: {
      canonical: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
    },
    openGraph: {
      title: data.ogTitle || data.title,
      description: data.ogDescription || data.description,
      url: `https://www.sribalajihomes.in/properties/${cleanSlug}`,
      siteName: "Sri Balaji Homes",
      images: [
        {
          url: "https://www.sribalajihomes.in/android-chrome-512x512.png",
          width: 512,
          height: 512,
          alt: `${data.locationName || "Katrambakkam"} Resale Plots - Sri Balaji Homes`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: data.ogTitle || data.title,
      description: data.ogDescription || data.description,
      images: ["https://www.sribalajihomes.in/android-chrome-512x512.png"],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = seoData[slug] || {};
  const cleanSlug = data.canonicalSlug || slug;
  const faqs = locationFaqs[slug] || locationFaqs["resale-plots-katrambakkam"];

 const breadcrumbSchema = {
     "@context": "https://schema.org",
     "@type": "BreadcrumbList",
     "itemListElement": [
       {
         "@type": "ListItem",
         "position": 1,
         "name": "Home",
         "item": "https://www.sribalajihomes.in",
       },
       {
         "@type": "ListItem",
         "position": 2,
         "name": "Properties",
         "item": "https://www.sribalajihomes.in/properties",
       },
       {
         "@type": "ListItem",
         "position": 3,
         "name": data?.locationName || "Location",
         "item": `https://www.sribalajihomes.in/properties/${slug}`,
       },
     ],
   };

  const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

// Add inside PropertyPage function in app/properties/[slug]/page.jsx:

const propertyListingSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  "name": `CMDA & DTCP Approved Resale Plots in ${slug.replace("plots-in-", "")}`,
  "description": `Verified resale plots available in ${slug.replace("plots-in-", "")} with clear title and zero brokerage.`,
  "url": `https://www.sribalajihomes.in/properties/${slug}`,
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "availability": "https://schema.org/InStock"
  }
};

  return (
    <>
      {/* Inject Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />


    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyListingSchema) }}
/>
      <PropertyPageClient />
    </>
  );
}