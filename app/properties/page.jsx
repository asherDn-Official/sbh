import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "CMDA & DTCP Approved Plots for Sale in Chennai | Resale",
  description:
    "Explore top resale residential plots in Chennai. Verified CMDA & DTCP-approved land in prime locations with 100% legal clearance and bank loan support.",
  alternates: {
    canonical: "https://www.sribalajihomes.in/properties",
  },
  openGraph: {
    title: "CMDA & DTCP Approved Plots for Sale in Chennai | Resale",
    description:
      "Explore top resale residential plots in Chennai. Verified CMDA & DTCP-approved land in prime locations with 100% legal clearance and bank loan support.",
    url: "https://www.sribalajihomes.in/properties",
  },
  twitter: {
    card: "summary_large_image",
    title: "CMDA & DTCP Approved Plots for Sale in Chennai | Resale",
    description:
      "Explore top resale residential plots in Chennai. Verified CMDA & DTCP-approved land in prime locations with 100% legal clearance and bank loan support.",
  },
};

const locations = [
  {
    title: "DTCP Approved Plots in Kattrambakkam",
    linkTitle: "DTCP Approved Resale Plots in Kattrambakkam",
    slug: "approved-resale-plots-kattrambakkam-chennai",
    image: "/assets/home/dtcp-approved-resale-plot-kattrambakkam-aerial.webp",
    alt: "DTCP approved resale plot in Kattrambakkam Chennai – Sri Balaji Homes",
    anchorText: "DTCP Approved Plots in Kattrambakkam",
    desc: "CMDA & DTCP approved plots near Sriperumbudur industrial corridor with high appreciation value.",
  },
  {
    title: "CMDA Approved Plots in Nandhambakkam",
    linkTitle: "CMDA Approved Plots in Nandhambakkam",
    slug: "cmda-approved-plots-nandhambakkam",
    image: "/assets/home/cmda-plot-nandhambakkam-road-view.webp",
    alt: "CMDA approved resale plot in Nandhambakkam Chennai – Sri Balaji Homes",
    anchorText: "CMDA Approved Plots in Nandhambakkam",
    desc: "Ready-to-build approved plots in a rapidly growing residential hub.",
  },
  {
    title: "Resale Plots in Thaiyur (OMR)",
    linkTitle: "Residential Resale Plots in Thaiyur, OMR",
    slug: "dtcp-resale-plots-thaiyur-omr",
    image: "/assets/home/thaiyur-omr-residential-plot-sale.webp",
    alt: "DTCP approved resale plot in Thaiyur OMR Chennai – Sri Balaji Homes",
    anchorText: "Resale Plots in Thaiyur (OMR)",
    desc: "Prime investment land along the IT corridor on OMR Kelambakkam.",
  },
];

export default function PropertiesHubPage() {
  return (
   <main className="container mx-auto px-6 pt-36 pb-16">
      <h1 className="text-3xl font-bold mb-4 text-center">
        Approved Resale Plots Across Chennai
      </h1>
      <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
        Browse our handpicked CMDA and DTCP approved resale plot locations with clear title deeds and zero brokerage.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {locations.map((item) => (
          <div key={item.slug} className="border rounded-xl overflow-hidden shadow-md bg-white flex flex-col justify-between">
            <div className="relative h-48 w-full">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href={`/properties/${item.slug}`}
                title={item.linkTitle || item.title}
                className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors font-medium text-sm"
              >
                {item.anchorText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}