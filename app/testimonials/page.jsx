import TestimonialsPageClient from "./testimonialPage";

export const metadata = {
  title: "Client Reviews & Testimonials | Sri Balaji Homes Chennai",
  description: "Read reviews from our happy customers. See why buyers trust Sri Balaji Homes for CMDA & DTCP approved resale plots in Chennai with transparent registration.",
  alternates: {
    canonical: "https://www.sribalajihomes.in/testimonials   "
  },
  openGraph: {
    title: "Customer Testimonials | Sri Balaji Homes",
    description: "Read genuine reviews and legal verification FAQs from plot buyers across Chennai.",
    url: "https://www.sribalajihomes.in/testimonials",
    images: [
      {
        url: "/assets/home/katrambakkamvilla1.webp", // Unique preview image for social sharing
        width: 1200,
        height: 630,
        alt: "Sri Balaji Homes Customer Testimonials",
      },
    ],
  },
};

export default function TestimonialsPage() {

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.sribalajihomes.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Testimonials & FAQs",
        "item": "https://www.sribalajihomes.in/testimonials"
      }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Sri Balaji Homes",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "48",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "K. Ramanathan" },
        "datePublished": "2026-02-15",
        "reviewBody": "Bought a CMDA approved plot in Katrambakkam. Very smooth registration process and completely zero brokerage charges.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema).replace(/</g, '\\u003c'),
        }}
      />
      <TestimonialsPageClient />
    </>
  );
}
