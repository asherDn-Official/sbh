import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Approved Resale Plots in Chennai | Katrambakkam, Nandhambakkam & Thaiyur",
  description:
    "Explore CMDA & DTCP approved resale plots in Chennai across top micro-markets including Katrambakkam, Nandhambakkam, and Thaiyur OMR.",
  alternates: {
    canonical: "https://www.sribalajihomes.in/properties",
  },
};

const locations = [
  {
    title: "Resale Plots in Katrambakkam",
    slug: "plots-in-katrambakkam",
    image: "/assets/home/resale-plots-katrambakkam-layout.webp", // update with your asset path
    desc: "CMDA & DTCP approved plots near Sriperumbudur industrial corridor with high appreciation value.",
  },
  {
    title: "Resale Plots in Nandhambakkam",
    slug: "plots-in-nandhambakkam",
    image: "/assets/home/resale-plots-nandhambakkam-layout2.webp", // update with your asset path
    desc: "Ready-to-build approved plots in a rapidly growing residential hub.",
  },
  {
    title: "Resale Plots in Thaiyur OMR",
    slug: "plots-in-thaiyur-omr",
    image: "/assets/home/resale-plots-thaiyur-layout3.webp", // update with your asset path
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
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
            </div>
            <div className="p-6 pt-0">
              <Link
                href={`/properties/${item.slug}`}
                className="inline-block bg-black text-white px-4 py-2 rounded-md hover:bg-neutral-800 transition-colors"
              >
                View Plots →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}