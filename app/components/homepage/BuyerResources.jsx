import Link from "next/link";

export default function BuyerResources() {
  const guides = [
    { title: "How to Buy a Plot in Chennai", desc: "Key milestones and essential steps when buying residential land.", slug: "/guides/how-to-buy-plot-chennai" },
    { title: "Plot Document Checklist", desc: "Comprehensive checklist of mandatory titles, Patta, and approvals.", slug: "/guides/plot-document-checklist" },
    { title: "CMDA vs DTCP Approval Guide", desc: "Key differences between urban CMDA and suburban DTCP frameworks.", slug: "/guides/cmda-vs-dtcp" },
    { title: "How to Verify Land Title", desc: "Step-by-step due diligence strategy to prevent encumbrance risks.", slug: "/guides/land-title-verification" },
    { title: "Plot Registration Guide", desc: "Overview of stamp duty, sub-registrar requirements, and transfer process.", slug: "/guides/plot-registration-guide" },
    { title: "Plot Investment Strategy", desc: "Evaluating location potential, infrastructure plans, and price growth.", slug: "/guides/plot-investment-guide" },
  ];

  const reviews = [
    {
      name: "Senthil Kumar",
      location: "Katrambakkam Plot Buyer",
      comment: "The team provided all parent documents upfront. We got the title verified through our lawyer without any issues and completed registration smoothly.",
    },
    {
      name: "Anand & Priya",
      location: "Thaiyur OMR Plot Buyers",
      comment: "Found a clear-title DTCP plot near Siruseri within our planned budget. Transparent pricing and genuine assistance during the sub-registrar process.",
    },
    {
      name: "Ramesh Natarajan",
      location: "Nandhambakkam Plot Buyer",
      comment: "Appreciated the site visit coordination and direct property disclosures. No hidden setup costs or inflated price claims.",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section 18: Site Media Preview */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#024b12]/30 border border-[#024b12]/50 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              Visual Due Diligence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-serif leading-tight">
              See the Plot Before You Visit
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We provide actual site photographs, road width documentation, boundary markings, and neighborhood video walkthroughs for shortlisted properties.
            </p>
            <div className="flex flex-wrap gap-4 pt-3">
              <Link
                href="#contact"
                className="px-6 py-3 bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-xs rounded-full transition shadow-md border border-[#024b12] cursor-pointer"
              >
                View Property Gallery
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold rounded-full transition shadow-xs cursor-pointer"
              >
                Watch Site Tour Videos
              </Link>
            </div>
          </div>
        </div>

        {/* Section 20: Buyer Guides */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
              Educational Hub
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              Helpful Guides Before Buying a Plot
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Make informed land decisions with our research-backed guides on approvals, registration, and title checks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => (
              <Link
                key={idx}
                href="#contact"
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#024b12]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group cursor-pointer"
              >
                <div className="space-y-2.5">
                  <h3 className="text-base font-bold text-slate-900 font-serif group-hover:text-[#024b12] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {guide.desc}
                  </p>
                </div>
                <span className="text-xs font-bold text-[#024b12] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Guide <span className="text-sm">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Section 21: Customer Reviews */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
              Verified Feedback
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Real feedback from buyers who evaluated, shortlisted, and purchased approved plots with Sri Balaji Homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#024b12]/30 hover:shadow-md transition duration-300"
              >
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{rev.comment}&rdquo;
                </p>
                <div className="pt-3 border-t border-slate-200/80 space-y-0.5">
                  <div className="text-xs font-bold text-slate-900 font-serif">{rev.name}</div>
                  <div className="text-[11px] text-[#024b12] font-semibold">{rev.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}