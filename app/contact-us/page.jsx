import ContactPageClient from "./contactPage";

export const metadata = {
  title: "Contact Us | Schedule Free Site Visit | Sri Balaji Homes",
  description: "Get in touch to schedule a free site visit for CMDA/DTCP plots in Katrambakkam, Nandambakkam, or Thaiyur OMR. Call or message us for instant property details!",
  alternates: {
    canonical: "https://www.sribalajihomes.in/contact-us"
  },
  openGraph: {
    title: "Contact Sri Balaji Homes | Schedule Free Site Visit",
    description: "Get in touch to schedule a free site visit for CMDA/DTCP plots in Katrambakkam, Nandambakkam, or Thaiyur OMR. Call or message us for instant property details!",
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
