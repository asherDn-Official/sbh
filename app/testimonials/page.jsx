import TestimonialsPageClient from "./testimonialPage";

export const metadata = {
  title: "Client Reviews & Testimonials | Plots in Chennai",
  description:
    "Read real reviews from satisfied property buyers who purchased verified CMDA & DTCP plots across Chennai. Discover their hassle-free buying experiences.",
  alternates: {
    canonical: "https://www.sribalajihomes.in/testimonials",
  },
  openGraph: {
    title: "Client Reviews & Testimonials | Plots in Chennai",
    description:
      "Read real reviews from satisfied property buyers who purchased verified CMDA & DTCP plots across Chennai. Discover their hassle-free buying experiences.",
    url: "https://www.sribalajihomes.in/testimonials",
    images: [
      {
        url: "/assets/home/katrambakkamvilla1.webp",
        width: 1200,
        height: 630,
        alt: "Sri Balaji Homes Customer Testimonials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Reviews & Testimonials | Plots in Chennai",
    description:
      "Read real reviews from satisfied property buyers who purchased verified CMDA & DTCP plots across Chennai. Discover their hassle-free buying experiences.",
    images: ["/assets/home/katrambakkamvilla1.webp"],
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
