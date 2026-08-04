import ContactPageClient from "./contactPage";

export const metadata = {
  title: "Contact Us | Sri Balaji Homes | Plot Developers in Chennai",
  description: "Contact Sri Balaji Homes today to schedule a free site visit. Buy CMDA & DTCP approved resale plots directly from the developer in Chennai. Get in touch!.",
  alternates: {
    canonical: "https://www.sribalajihomes.in/contact-us"
  },
  openGraph: {
    title: "Contact Sri Balaji Homes | Book a Free Site Visit",
    description: "Get in touch to view layout maps, schedule site visits, or check document verification records.",
    url: "https://www.sribalajihomes.in/contact-us",
    images: [
      {
        url: "/assets/home/katrambakkamvilla1.webp",
        width: 1200,
        height: 630,
        alt: "Contact Sri Balaji Homes",
      },
    ],
  },
};

export default function ContactPage() {

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
        "name": "Contact Us",
        "item": "https://www.sribalajihomes.in/contact-us"
      }
    ]
  };

  return(
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <ContactPageClient />
    </>
     
  ) 
  
 ;
}
