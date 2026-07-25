// "use client";
// import React, { useState } from "react";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// const faqs = [
//   {
//     q: "What does 'CMDA approved' or 'DTCP approved' actually mean for a resale plot?",
//     a: "It means the layout has received formal approval from the Chennai Metropolitan Development Authority (CMDA) or the Directorate of Town and Country Planning (DTCP), confirming the layout meets legal planning standards — this is what makes the plot eligible for registration, construction permits, and bank loans.",
//   },
//   {
//     q: "Is it safe to buy a resale plot instead of a new layout?",
//     a: "Yes, provided the plot is properly verified — resale plots often carry lower risk than new, unapproved layouts because the legal groundwork (approvals, initial registration) is already established. The key is verifying title and encumbrance status before purchase, which we do for every plot we list.",
//   },
//   {
//     q: "Do you charge brokerage on resale plot purchases?",
//     a: "No — we operate on a zero-brokerage, direct-from-owner model for every plot we list.",
//   },
//   {
//     q: "Can I get a bank loan for a resale plot from Sri Balaji Homes?",
//     a: "Approved resale plots are generally eligible for bank financing, though this depends on the specific plot and lender. We can guide you on which of our listed plots are loan-eligible.",
//   },
//   {
//     q: "What documents will I receive after registration?",
//     a: "You'll receive the registered sale deed along with the supporting title and encumbrance verification documents we compile before listing the plot.",
//   },
//   {
//     q: "Which locations do you currently have resale plots in?",
//     a: "We currently list resale plots in Katrambakkam (near Sriperumbudur), Nandhambakkam (near Kundrathur), and Thaiyur, OMR (near Siruseri IT Park).",
//   },
//   {
//     q: "How do I know a plot's boundaries match what's on paper?",
//     a: "We conduct a physical site survey as part of our verification process, confirming boundaries and access match the registered documentation — not just checking paperwork in isolation.",
//   },
//   {
//     q: "How long does the buying process typically take?",
//     a: "Timelines vary by plot and buyer readiness, but our process — site visit, verification review, and registration — is designed to move without unnecessary delays once you've selected a plot.",
//   },
// ];

// export default function FAQ() {
//   const [openFaq, setOpenFaq] = useState(null);

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? null : index);
//   };

//   // Structured Schema for FAQ Rich Snippets
//   const faqSchema = {
//     "@context": "https://schema.org",
//     "@type": "FAQPage",
//     "mainEntity": faqs.map((faq) => ({
//       "@type": "Question",
//       "name": faq.q,
//       "acceptedAnswer": {
//         "@type": "Answer",
//         "text": faq.a,
//       },
//     })),
//   };

//   return (
//     <section className="py-12 px-6 lg:px-24 max-w-4xl mx-auto">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
//       />
//       <div className="text-center mb-10">
//         <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
//           Frequently Asked Questions
//         </h2>
//         <p className="text-gray-600 text-sm md:text-base">
//           Get quick answers to common questions about buying resale plots in Chennai.
//         </p>
//       </div>

//       <div className="space-y-4">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
//           >
//             <button
//               onClick={() => toggleFaq(index)}
//               className="w-full text-left p-5 flex justify-between items-center font-semibold text-gray-900 text-sm md:text-base hover:bg-gray-50 transition cursor-pointer"
//             >
//               <span>{faq.q}</span>
//               <ChevronDownIcon
//                 className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
//                   openFaq === index ? "rotate-180 text-green-800" : ""
//                 }`}
//               />
//             </button>
//             {openFaq === index && (
//               <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
//                 {faq.a}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    q: "What does 'CMDA approved' or 'DTCP approved' actually mean for a resale plot?",
    a: "It means the layout has received formal approval from the Chennai Metropolitan Development Authority (CMDA) or the Directorate of Town and Country Planning (DTCP), confirming the layout meets legal planning standards — this is what makes the plot eligible for registration, construction permits, and bank loans.",
  },
  {
    q: "Is it safe to buy a resale plot instead of a new layout?",
    a: "Yes, provided the plot is properly verified — resale plots often carry lower risk than new, unapproved layouts because the legal groundwork (approvals, initial registration) is already established. The key is verifying title and encumbrance status before purchase, which we do for every plot we list.",
  },
  {
    q: "Do you charge brokerage on resale plot purchases?",
    a: "No — we operate on a zero-brokerage, direct-from-owner model for every plot we list.",
  },
  {
    q: "Can I get a bank loan for a resale plot from Sri Balaji Homes?",
    a: "Approved resale plots are generally eligible for bank financing, though this depends on the specific plot and lender. We can guide you on which of our listed plots are loan-eligible.",
  },
  {
    q: "What documents will I receive after registration?",
    a: "You'll receive the registered sale deed along with the supporting title and encumbrance verification documents we compile before listing the plot.",
  },
  {
    q: "Which locations do you currently have resale plots in?",
    a: "We currently list resale plots in Katrambakkam (near Sriperumbudur), Nandhambakkam (near Kundrathur), and Thaiyur, OMR (near Siruseri IT Park).",
  },
  {
    q: "How do I know a plot's boundaries match what's on paper?",
    a: "We conduct a physical site survey as part of our verification process, confirming boundaries and access match the registered documentation — not just checking paperwork in isolation.",
  },
  {
    q: "How long does the buying process typically take?",
    a: "Timelines vary by plot and buyer readiness, but our process — site visit, verification review, and registration — is designed to move without unnecessary delays once you've selected a plot.",
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Schema for FAQ Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="py-12 px-6 lg:px-24 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Get quick answers to common questions about buying resale plots in Chennai.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full text-left p-5 flex justify-between items-center font-semibold text-gray-900 text-sm md:text-base hover:bg-gray-50 transition cursor-pointer"
            >
              <span className="pr-4">{faq.q}</span>
              <div className="flex-shrink-0">
                {openFaq === index ? (
                  <MinusIcon className="h-5 w-5 text-green-800 font-bold transition-all duration-200" />
                ) : (
                  <PlusIcon className="h-5 w-5 text-gray-500 font-bold transition-all duration-200" />
                )}
              </div>
            </button>

            {openFaq === index && (
              <div className="p-5 pt-0 text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}