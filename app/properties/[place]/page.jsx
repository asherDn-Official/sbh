"use client";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import katrambakkam from "../../../public/assets/properties/katrambakkam.png";
import plotKatrambakkam from "../../../public/assets/home/katrambakkamvilla1.png";
const propertyData = {
  katrambakkam: {
    title: "Katrambakkam",
    description:
      "In Katrambakkam, Sri Balaji Homes offers DTCP-approved plots in sizes of 2100 sqft, 1800 sqft with prices starting from just Rs.700/- to Rs.1000/- per sqft — making them ideal for building your dream home or a secure long-term investment.",
    plots: [
      { id: 1, img: "/assets/properties/k-1.jpg", size: "2100 Sq. Feet" },
      { id: 2, img: "/assets/properties/k-2.jpg", size: "1800 Sq. Feet" },
      { id: 3, img: "/assets/properties/k-3.jpg", size: "2100 Sq. Feet" },
      { id: 4, img: "/assets/properties/k-4.jpg", size: "1800 Sq. Feet" },
      { id: 5, img: "/assets/properties/k-5.jpg", size: "2100 Sq. Feet" },
    ],
  },
  nandhambakkam: {
    title: "Nandhambakkam",
    description:
      "In Nandhambakkam, Sri Balaji Homes presents DTCP and CMDA-approved plots with prime connectivity and plot sizes ranging from 1200 to 2400 sqft, with prices starting from Rs.1500/- to Rs.3000/- per sqft, giving you flexible options for both residence and investment.",
    plots: [
      { id: 1, img: "/assets/properties/plot-1.jpg", size: "2400 Sq. Feet" },
      { id: 2, img: "/assets/properties/plot-2.png", size: "1200 Sq. Feet" },
      { id: 3, img: "/assets/properties/n-plot-3.png", size: "2400 Sq. Feet" },
      { id: 4, img: "/assets/properties/n-plot-4.jpg", size: "1200 Sq. Feet" },
      { id: 5, img: "/assets/properties/n-plot-5.jpg", size: "2400 Sq. Feet" },
    ],
  },
  thaiyur: {
    title: "Thaiyur (OMR)",
    description:
      "In Thaiyur (OMR), Sri Balaji Homes offers DTCP-approved plots in Sqft sizes -600 Sqft, 1200 Sqft, 1500 Sqft, 2000 Sqft, with prices starting from just Rs.2200/- to Rs.2900/- per sqft — making them ideal for building your dream home or a secure long-term investment.",
    plots: [
      { id: 1, img: "/assets/properties/t-1.jpg", size: "1200 Sq. Feet" },
      { id: 2, img: "/assets/properties/t-2.jpg", size: "1500 Sq. Feet" },
      { id: 3, img: "/assets/properties/t-3.jpg", size: "1200 Sq. Feet" },
      { id: 4, img: "/assets/properties/t-4.jpg", size: "1500 Sq. Feet" },
      { id: 5, img: "/assets/properties/5.jpg", size: "2000 Sq. Feet" },
    ],
  },
};

export default function PropertyPage() {
  const { place } = useParams();
  const data = propertyData[place];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Property not found ❌
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] bg-black/60 flex items-end justify-start  text-white pb-5   lg:pb-15 lg:pl-15">
        <Image
          src={katrambakkam}
          alt={data.title}
          fill
          className="object-cover -z-10"
        />
        <div className="max-w-2xl px-4">
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="mt-4">{data.description}</p>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.plots.map((plot) => (
          <div
            key={plot.id}
            className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <div className="relative h-44 lg:h-60 w-full">
              <Image
                src={plot.img}
                alt={`${data.title} Plot`}
                fill
                className="object-cover p-3 rounded-3xl"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-medium">{data.title} Plots</h3>
              <p className="text-gray-500 text-sm mt-1">📐 {plot.size}</p>
              <Link href="/contact">
                <button className="mt-3 px-4 py-2 bg-green-800 text-white text-sm rounded-lg hover:bg-green-700 transition">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
