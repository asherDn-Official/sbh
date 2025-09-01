"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react"; // icon package (like in your screenshot)

const faqs = [
  {
    question: "What are the best areas to buy plots in Chennai?",
    answer:
      "Sri Balaji Homes offers plots in fast-growing areas like Madhavaram, Manali, Porur, Poonamallee, Perungalathur, and more, all with great connectivity and value.",
  },
  {
    question: "What types of plots are available?",
    answer:
      "We offer DTCP and CMDA-approved plots for homes, villas, and investments in prime Chennai suburbs.",
  },
  {
    question: "How can I verify if a plot is legal?",
    answer:
      "Check for DTCP/CMDA approvals, Patta/Chitta, and Encumbrance Certificates. We help verify all documents.",
  },
  {
    question: "Do you sell villa plots?",
    answer:
      "Yes, we offer premium villa plots in gated communities with essential amenities.",
  },
  {
    question: "Are amenities available near your plots?",
    answer:
      "Yes, our plots are near schools, hospitals, colleges, supermarkets, and transport facilities.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // default open first

  return (
    <section className="w-full py-16 px-6 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
            Any Questions? <br /> We got you.
          </h2>
          <p className="text-gray-600 text-lg">
            Looking to invest in land? We guide you through every step—from
            choosing the right plot to legal formalities and post-sale support
            across Chennai.
          </p>
        </div>

        {/* Right Section */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-gray-300 pb-4"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === idx ? null : idx)
                }
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                {openIndex === idx ? (
                  <Minus className="h-5 w-5 text-gray-600" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-600" />
                )}
              </button>
              {openIndex === idx && (
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
