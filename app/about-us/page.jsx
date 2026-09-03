import Image from 'next/image'
import React from 'react'
import AboutUs from '../components/about/AboutUs'
import MissionVision from '../components/about/MissionVision'
import FAQ from '../components/about/Faq'

export const metadata = {
  title: "About Us | Trusted Property & Plot Advisors in Chennai",
  description:
    "Learn more about our mission to provide verified, clear-title CMDA & DTCP plots in Chennai. We ensure secure land investments and seamless registration.",
  alternates: {
    canonical: "https://www.sribalajihomes.in/about-us",
  },
  openGraph: {
    title: "About Us | Trusted Property & Plot Advisors in Chennai",
    description:
      "Learn more about our mission to provide verified, clear-title CMDA & DTCP plots in Chennai. We ensure secure land investments and seamless registration.",
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
  twitter: {
    card: "summary_large_image",
    title: "About Us | Trusted Property & Plot Advisors in Chennai",
    description:
      "Learn more about our mission to provide verified, clear-title CMDA & DTCP plots in Chennai. We ensure secure land investments and seamless registration.",
    images: ["/assets/home/katrambakkamvilla1.webp"],
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
    <AboutUs/>
    <MissionVision/>
    <FAQ/>
   </div>
   </>
  )
}
