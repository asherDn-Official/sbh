"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

const faqs = [
  {
    question: "Are the residential plots approved by DTCP or CMDA?",
    answer: (
      <>
        Yes, all our residential layouts are strictly developed with clear titles and legal approvals from state authorities like DTCP or CMDA. This guarantees complete security against legal encumbrances, quick bank loan processing, and straightforward approvals for building construction. To explore our legally verified layout options, you can <Link href="/properties/approved-resale-plots-kattrambakkam-chennai" className="text-green-800 font-semibold underline hover:text-green-900">View our DTCP approved plots in Kattrambakkam</Link> which are ready for immediate villa construction.
      </>
    ),
  },
  {
    question: "Does Sri Balaji Homes provide any complementary benefits during land registration?",
    answer: (
      <>
        Yes, our organization is deeply committed to helping first-time buyers and seasoned investors maximize their savings. To make your purchasing journey seamless, we offer highly competitive pricing structures alongside special incentives including free EB connection setup, complimentary borewell installation, and zero registration fees on select site layouts. Ready to find your investment? Go ahead and <Link href="/properties/cmda-approved-plots-nandhambakkam" className="text-green-800 font-semibold underline hover:text-green-900">Check our Nandhambakkam plots</Link> to claim these exclusive site benefits.
      </>
    ),
  },
  {
    question: "What structural and infrastructure amenities are included within your gated communities?",
    answer: (
      <>
        Our projects are systematically developed to guarantee long-term asset value and comfortable living conditions. Every gated community layout features wide internal blacktop tar roads, concrete compound walls, heavy-duty commercial street lighting, active electricity posts, and a high-capacity overhead water tank to ensure a reliable water supply. If you want a closer look at a fast-developing neighborhood with excellent infrastructure, you can <Link href="/properties/approved-resale-plots-kattrambakkam-chennai" className="text-green-800 font-semibold underline hover:text-green-900">View our DTCP approved plots in Kattrambakkam</Link>.
      </>
    ),
  },
  {
    question: "How do I verify if a resale plot is safe from seasonal flooding in Chennai?",
    answer: (
      <>
        We strictly acquire and develop residential layouts located on elevated topography that are thoroughly vetted as flood-free zones. Furthermore, our sites are positioned near heavily populated manufacturing industries, technology corridors, and expanding transport hubs to generate massive rental demands. To secure a safe, high-yielding generational asset, feel free to <Link href="/properties/cmda-approved-plots-nandhambakkam" className="text-green-800 font-semibold underline hover:text-green-900">Check our Nandhambakkam plots</Link> which sit comfortably in a secure, elevated, flood-resilient zone.
      </>
    ),
  },
  {
    question: "Can I get a bank loan to purchase a residential plot, and what is the financing limit?",
    answer: (
      <>
        Yes, because our projects carry clean title deeds and official regulatory approvals, leading nationalized and private banks readily offer up to 80% to 90% financing options for land purchases. Our internal legal and documentation desk guides you through the entire verification process from site visit to final registration.
      </>
    ),
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

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
            <div key={idx} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-800 focus:outline-none"
              >
                {faq.question}
                {openIndex === idx ? (
                  <Minus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-gray-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === idx && (
                <div className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
