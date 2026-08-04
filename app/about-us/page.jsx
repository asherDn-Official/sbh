import Image from 'next/image'
import React from 'react'
import AboutUs from '../components/about/AboutUs'
import MissionVision from '../components/about/MissionVision'
import FAQ from '../components/about/Faq'

export const metadata = {
  title: "About Us | Sri Balaji Homes",
  description: "Learn more about Sri Balaji Homes, our mission, vision, and values.",
   alternates: {
    canonical: "https://www.sribalajihomes.in/about-us",
  },
  openGraph: {
    title: "About Sri Balaji Homes | Verified Land in Chennai",
    description: "Serving plot buyers since 2005 with transparent pricing and zero brokerage.",
    url: "https://www.sribalajihomes.in/about-us",
    images: [
      {
        url: "/assets/home/katrambakkamvilla1.webp",
        width: 1200,
        height: 630,
        alt: "About Sri Balaji Homes",
      },
    ],
  },
};

export default function AboutPage() {

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
        "name": "About Us",
        "item": "https://www.sribalajihomes.in/about-us"
      }
    ]
  };
  return (
<>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
   <div className='lg:py-40 '>
    <h1 className="hidden">About Sri Balaji Homes: Trusted Direct Land Developers in Chennai</h1>
    <AboutUs/>
    <MissionVision/>
    <FAQ/>
   </div>
   </>
  )
}
