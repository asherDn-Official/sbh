// import Image from "next/image";
// import Link from "next/link";

// const properties = [
//   {
//     id: 1,
//     title: "Katrambakkam Plots",
//     // size: "1400 Sq. Feet",
//     image: "/assets/home/katrambakkamvilla1.webp", // replace with actual image path
//     link: "/properties/plots-in-katrambakkam",
//   },
//   {
//     id: 2,
//     title: "Nandhambakkam Plots",
//     // size: "1400 Sq. Feet",
//     image: "/assets/home/katrambakkamvilla2.webp",
//     link: "/properties/plots-in-nandhambakkam",
//   },
//   {
//     id: 3,
//     title: "Thaiyur(OMR) Plots",
//     // size: "1400 Sq. Feet",
//     image: "/assets/home/katrambakkamvilla3.webp",
//     link: "/properties/plots-in-thaiyur-omr",
//   },
//   // {s
//   //   id: 4,
//   //   title: "Katrambakkam Villa Plot",
//   //   size: "1400 Sq. Feet",
//   //   image: "/assets/home/katrambakkamvilla4.webp",
//   // },
// ];

// export default function Properties() {
//   return (
//     <section className="px-10 py-10 lg:px-24 lg:py-20  bg-gray-50">
//       <div className="text-center mb-8">
//         <h2 className="text-2xl md:text-3xl  mb-3">Explore Our Properties</h2>
//         <p className=" max-w-4xl mx-auto">
//           Discover DTCP and CMDA-approved residential plots in Peaceful
//           locations. Ideal for building your dream home or making a smart
//           investment with high appreciation potential.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//         {properties.map((property) => (
//           <div
//             key={property.id}
//             className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
//           >
//             <div className="relative h-45 lg:h-60 w-full ">
//               <span className="">
//                 {" "}
//                 <Image
//                   src={property.image}
//                   alt={property.title}
//                   fill
//                   className="object-cover p-3  rounded-3xl"
//                 />
//               </span>
//             </div>
//             <div className="p-4">
//               <h3 className="text-lg font-medium">{property.title}</h3>
//               <p className="text-gray-500 text-sm mt-1">{property.size}</p>
//               <Link href={property.link}>
//                 <button className="mt-3 px-4 py-2 bg-green-800 text-white text-sm rounded-lg hover:bg-green-700 cursor-pointer">
//                   Know More
//                 </button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* View More */}
//       <div className="flex justify-center mt-8">
//         <Link href="/properties/plots-in-katrambakkam">
//           <button className="text-gray-700 border-b border-gray-400 hover:text-black cursor-pointer">
//             View More
//           </button>
//         </Link>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Resale Plots in Katrambakkam (Near Sriperumbudur)",
    desc: "Our original and most established location, close to the Sriperumbudur industrial belt. DTCP and CMDA approved plots with clear title, direct from owner.",
    image: "/assets/home/resale-plots-katrambakkam-layout.webp",
    link: "/properties/plots-in-katrambakkam",
  },
  {
    id: 2,
    title: "Resale Plots in Nandhambakkam (Near Kundrathur)",
    desc: "Positioned near Kundrathur and Porur, with growing connectivity to Chennai's western industrial corridor.",
    image: "/assets/home/resale-plots-nandhambakkam-layout2.webp",
    link: "/properties/plots-in-nandhambakkam",
  },
  {
    id: 3,
    title: "Resale Plots in Thaiyur, OMR (Near Siruseri IT Park)",
    desc: "Our OMR location benefits from proximity to Siruseri IT Park and the broader IT corridor, making it a strong choice for buyers prioritizing long-term rental or resale demand.",
    image: "/assets/home/resale-plots-thaiyur-layout3.webp",
    link: "/properties/plots-in-thaiyur-omr",
  },
];

export default function Properties() {
  return (
    <section className="px-6 py-10 lg:px-24 lg:py-20 bg-gray-50">
      <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
          Our Resale Plot Locations in Chennai
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Explore CMDA & DTCP approved plots across Chennai's highest growth corridors with verified titles and zero brokerage.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 lg:h-56 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover p-3 rounded-3xl"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {property.desc}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link href={property.link}>
                <button className="w-full py-2.5 bg-green-800 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition cursor-pointer">
                  View Available Plots →
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
