// "use client";
// import Image from "next/image";
// import { useState } from "react";

// const testimonials = [
//   {
//     name: "Aravind Kumar",
//     text: "Sri Balaji Homes made my land-buying journey effortless. Their legal team verified every document and ensured full transparency. Highly reliable!",
//     image: "/assets/home/profile1.webp",
//   },
//   {
//     name: "Abdul Rahman",
//     text: "I appreciate their honesty and quick process. The land documents were legally perfect, and the team helped me through every step.",
//     image: "/assets/home/profile1.webp",
//   },
//   {
//     name: "Farhana Begum",
//     text: "The documents were crystal clear and verified by their legal team. I received my originals and Patta immediately after registration.",
//     image: "/assets/home/profile1.webp",
//   },
//   // ... repeat your existing testimonials
// ];

// export default function TestimonialsPage() {
//   // Show 3 rows initially (3 cards per row → 9 cards)
//   const [visibleCount, setVisibleCount] = useState(9);

//   return (
//     <section className="py-16 px-6 lg:px-20 pt-20 lg:pt-40">
//       {/* Heading */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl font-serif mb-3">What Client Say</h2>
//         <p className="text-gray-600 max-w-2xl mx-auto">
//           Hear from our happy customers who turned their dream of land ownership
//           into reality. Their trust and satisfaction drive everything we do at
//           Sri Balaji Homes.
//         </p>
//       </div>

//       {/* Testimonial Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//         {testimonials.slice(0, visibleCount).map((t, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-lg rounded-2xl p-6 flex flex-col gap-4 h-full border border-gray-100 
//                        transition-transform duration-300 ease-out hover:shadow-xl hover:-translate-y-2"
//           >
//             {/* Profile */}
//             <div className="flex items-center gap-4">
//               <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
//                 <span className="text-white text-xl font-bold">
//                   {t.name.charAt(0).toUpperCase()}
//                 </span>
//               </div>
//             </div>

//             {/* Feedback */}
//             <p className="text-gray-700 text-md leading-relaxed mt-2">
//               "{t.text}"
//             </p>

//             {/* Name */}
//             <span className="font-semibold text-gray-800">- {t.name}</span>
//           </div>
//         ))}
//       </div>

//       {/* Load More Button */}
//       {visibleCount < testimonials.length && (
//         <div className="flex justify-center mt-10">
//           <button
//             onClick={() => setVisibleCount((prev) => prev + 9)} // load 3 more rows
//             className="px-6 py-2 border border-green-900 text-green-900 rounded-full 
//                        transition-all duration-300 ease-in-out 
//                        hover:bg-green-900 hover:text-white hover:scale-105"
//           >
//             Load more
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }





// "use client";
// import React, { useState } from "react";

// const testimonials = [
//   {
//     name: "Aravind Kumar",
//     location: "Katrambakkam Buyer",
//     text: "Bought a plot in Katrambakkam through Sri Balaji Homes — the title verification process gave us real confidence before we committed.",
//   },
//   {
//     name: "Abdul Rahman",
//     location: "Nandhambakkam Buyer",
//     text: "I appreciate their honesty and zero brokerage model. The land documents were legally verified, and they helped through registration.",
//   },
//   {
//     name: "Farhana Begum",
//     location: "Thaiyur OMR Buyer",
//     text: "The documents were crystal clear and verified by their team. I received my originals and Patta smooth and stress-free.",
//   },
// ];

// export default function TestimonialsPage() {
//   const [visibleCount, setVisibleCount] = useState(3);

//   return (
//     <section className="py-12 px-6 lg:px-20 bg-gray-50/50">
//       <div className="text-center mb-10">
//         <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
//           What Our Customers Say
//         </h2>
//         <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
//           Hear from real plot buyers across Katrambakkam, Nandhambakkam, and Thaiyur OMR.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {testimonials.slice(0, visibleCount).map((t, index) => (
//           <div
//             key={index}
//             className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition"
//           >
//             <div>
//               <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-lg mb-4">
//                 {t.name.charAt(0)}
//               </div>
//               <p className="text-gray-700 text-sm md:text-base leading-relaxed italic mb-4">
//                 "{t.text}"
//               </p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-900 text-sm">- {t.name}</p>
//               <p className="text-xs text-green-800 font-medium">{t.location}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";
import Link from "next/link";

const testimonials = [
  {
    name: "Aravind Kumar",
    location: "Katrambakkam Buyer",
    text: "Bought a plot in Katrambakkam through Sri Balaji Homes — the title verification process gave us real confidence before we committed.",
  },
  {
    name: "Abdul Rahman",
    location: "Nandhambakkam Buyer",
    text: "I appreciate their honesty and zero brokerage model. The land documents were legally verified, and they helped through registration.",
  },
  {
    name: "Farhana Begum",
    location: "Thaiyur OMR Buyer",
    text: "The documents were crystal clear and verified by their team. I received my originals and Patta smooth and stress-free.",
  },
];

export default function TestimonialsPage() {
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <section className="py-12 px-6 lg:px-20 bg-gray-50/50">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-3 text-gray-900">
          What Our Customers Say
        </h2>
        {/* Added Customer Testimonials Anchor Link */}
        <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
          Read authentic feedback from real plot buyers across Katrambakkam, Nandhambakkam, and Thaiyur OMR on our{" "}
          <Link
            href="/testimonials"
            className="text-green-800 font-semibold underline hover:text-green-900 transition"
          >
            customer testimonials
          </Link>{" "}
          page.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.slice(0, visibleCount).map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col justify-between border border-gray-100 hover:shadow-lg transition"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-lg mb-4">
                {t.name.charAt(0)}
              </div>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed italic mb-4">
                "{t.text}"
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">- {t.name}</p>
              <p className="text-xs text-green-800 font-medium">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}