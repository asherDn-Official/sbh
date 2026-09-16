"use client";

import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I verify if a plot in Chennai is CMDA or DTCP approved?",
      answer:
        "You can verify CMDA approval on the official CMDA web portal using the layout planning permit number. For DTCP plots, check the approval sanction order issued by the local planning authority. Always cross-check the approved layout drawing with physical plot dimensions, boundaries, and survey numbers.",
    },
    {
      question: "What is the key difference between CMDA and DTCP approval?",
      answer:
        "CMDA (Chennai Metropolitan Development Authority) governs urban planning within the Chennai Metropolitan Area. DTCP (Directorate of Town and Country Planning) handles planning approvals for suburban, peri-urban, and rural layouts across Tamil Nadu outside CMDA jurisdiction.",
    },
    {
      question: "Can I get a home or plot loan for a resale plot in Chennai?",
      answer:
        "Yes, nationalized and private banks provide land purchase loans for approved resale plots. The property must hold a clear title, registered Patta, up-to-date Encumbrance Certificate (EC), and verified CMDA or DTCP layout sanction.",
    },
    {
      question: "What documents must I check before paying an advance for a plot?",
      answer:
        "Verify the parent deed title chain (minimum 30 years), latest Encumbrance Certificate (EC), Patta/Chitta in seller name, layout approval copy with map, FMB survey sketch, and local body tax receipts prior to signing any sale agreement.",
    },
    {
      question: "Are low-budget resale plots under ₹30 Lakhs safe to buy in Chennai?",
      answer:
        "Yes, provided they carry genuine CMDA or DTCP approvals and a clear legal title. Low-budget plots are typically located in developing suburban corridors. Always complete legal title verification before proceeding with registration.",
    },
    {
  question: "Where can I find plots for resale in Chennai?",
  answer:
    "Sri Balaji Homes offers selected resale residential plots across locations such as Katrambakkam, Nandhambakkam, and Thaiyur OMR, subject to current availability.",
},
{
  question: "Which plots in Chennai are RERA approved?",
  answer:
    "RERA applicability depends on the type of project and transaction. Buyers should verify whether RERA registration applies to the specific property or project rather than assuming every individual resale plot requires RERA registration.",
},
{
  question: "Which area is best to buy a plot in Chennai?",
  answer:
    "There is no single best area for every buyer. The right location depends on your budget, intended use, connectivity, infrastructure, development, and investment objectives.",
},
{
  question: "What is the price of approved resale plots in Chennai?",
  answer:
    "Plot prices vary significantly based on location, size, approval, road access, and surrounding development. Check the current price of each individual property rather than relying on a city-wide average.",
},
{
  question: "What is the cost of land approval in Chennai?",
  answer:
    "Land and layout approval costs depend on the type of approval, property, location, applicable authority, and development requirements. It should not be assumed to be a single fixed cost for every plot.",
},
  ];

  // Schema.org FAQPage JSON-LD for Google AI Overviews & Rich Snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      {/* Inject FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
            Frequently Asked Questions About Plot Buying in Chennai
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Answers to common legal, financial, and planning approval queries regarding resale land in Chennai.
          </p>
        </div>

        {/* Single-Open Accordion List using React State */}
        <div className="space-y-4">
          {faqData.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 shadow-xs hover:border-[#024b12]/40"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex cursor-pointer items-center justify-between gap-4 p-6 text-left font-extrabold text-slate-900 text-base sm:text-lg font-serif hover:text-[#024b12] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`shrink-0 rounded-full p-1.5 transition-transform duration-300 ${
                      isOpen
                        ? "bg-[#024b12] text-white rotate-180"
                        : "bg-slate-100 text-slate-900"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}