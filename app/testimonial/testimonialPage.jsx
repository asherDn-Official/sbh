"use client";
import Image from "next/image";
import { useState } from "react";
import people from "../../public/assets/home/profile2.jpg";

const testimonials = [
  {
    name: "Aravind Kumar",
    text: "Sri Balaji Homes made my land-buying journey effortless. Their legal team verified every document and ensured full transparency. Highly reliable!",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Priya Ramesh",
    text: "I got free registration and EB connection with my plot. Everything was handled smoothly from booking to Patta transfer.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Mohammed Imran",
    text: "They arranged my bank loan and took care of all the paperwork. The legal verification gave me full confidence in my purchase.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Jennifer Mary",
    text: "Very professional team! They completed the registration, Patta, and handed over the original documents without any delay.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Karthik Raj",
    text: "Their legal support and documentation clarity are top-notch. I didn't have to worry about anything from start to finish.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Abdul Rahman",
    text: "I appreciate their honesty and quick process. The land documents were legally perfect, and the team helped me through every step.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Meenakshi Sundaram",
    text: "They arranged everything — loan approval, registration, and even fencing. Excellent service and zero hidden charges.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Joseph Antony",
    text: "Patta, EB, and legal clearance — all taken care of by the team. Very professional and customer-friendly experience.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Fathima Noor",
    text: "I got my plot registered within a week. The legal team was very supportive and made sure all papers were verified properly.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Naveen Prasad",
    text: "They helped me with free EB connection and Patta transfer after registration. Truly a customer-first company!",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Rukmini Devi",
    text: "Every step was clearly explained. Their legal verification and registration support gave me full peace of mind.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "John Peter",
    text: "They guided me through the bank loan process and ensured timely disbursement. A very organized and genuine company.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Farhana Begum",
    text: "The documents were crystal clear and verified by their legal team. I received my originals and Patta immediately after registration.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Santhosh Kumar",
    text: "The service quality is unmatched. From legal checks to free registration, everything was completed without a single issue.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Christina Joseph",
    text: "Got full guidance for loan approval and legal formalities. The staff were very patient and transparent throughout.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Hariharan",
    text: "They offered free EB connection and helped me set up my boundary fencing. Completely satisfied with their service.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Abdul Malik",
    text: "The legal team checked all the background details of the property. Very professional and trustworthy dealings.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Kavitha Narayanan",
    text: "The team handled bank loan, registration, and Patta transfer smoothly. Everything was done on time as promised.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Thomas Daniel",
    text: "Highly satisfied! They even helped me after the purchase to collect my original documents and EB card.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Ameen Khan",
    text: "I really appreciate their genuine approach. All legal documents were verified before registration. Hassle-free process!",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Deepa Lakshmi",
    text: "I didn't have to visit the office multiple times — everything was handled efficiently, including the Patta and loan work.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Arif Hussain",
    text: "Properly verified legal papers, genuine team, and free registration offer — best deal I've experienced so far!",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Shanthi Selvaraj",
    text: "The team coordinated directly with the bank for my home loan. Super helpful and customer-oriented.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Joseph Martin",
    text: "I got my Patta, EB, and original documents within a few days. Great post-sale support — truly professional.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Rajeshwari Devi",
    text: "I'm very impressed with their legal team. They verified everything clearly and made the registration process stress-free.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Yusuf Ali",
    text: "The experience was excellent from start to finish. Genuine property, clear title, and helpful staff!",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Rosy Fernandes",
    text: "They even helped me with the EB transfer and provided all the papers neatly organized in a file. Very professional.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Abdul Hameed",
    text: "I got loan assistance and Patta without paying any extra amount. Honest team and excellent service quality.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Divya Nair",
    text: "I completed everything remotely, and they kept me informed at every step. Legal process was handled perfectly.",
    image: "/assets/home/profile1.jpg",
  },
  {
    name: "Venkatesh Prasad",
    text: "Got my Patta, EB, and registration all done in one go. Smooth and transparent service from Sri Balaji Homes.",
    image: "/assets/home/profile1.jpg",
  },
];

export default function TestimonialsPageClient() {
  // Show 3 rows initially (3 cards per row → 9 cards)
  const [visibleCount, setVisibleCount] = useState(9);

  return (
    <section className="py-16 px-6 lg:px-20 pt-20 lg:pt-40">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-serif mb-3">Testimonial</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hear from our happy customers who turned their dream of land ownership
          into reality. Their trust and satisfaction drive everything we do at
          Sri Balaji Homes.
        </p>
      </div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.slice(0, visibleCount).map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col h-[230px] 
                       border border-gray-100 transition-transform duration-300 
                       ease-out hover:shadow-xl hover:-translate-y-2"
          >
            {/* Top Row → Profile */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center">
                <span className="text-white text-xl font-bold">
                  {t.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-700 text-md  mt-4 flex-1 ">"{t.text}"</p>
            <span className="font-semibold text-gray-800 text-lg">
              - &nbsp;{t.name}
            </span>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < testimonials.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setVisibleCount((prev) => prev + 9)}
            className="px-6 py-2 border border-green-900 text-green-900 rounded-full 
                       transition-all duration-300 ease-in-out 
                       hover:bg-green-900 hover:text-white hover:scale-105"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
}
