import Link from "next/link";

export default function BudgetGrid() {
  const budgetTiers = [
    {
      range: "Under ₹30 Lakhs",
      slug: "/approved-resale-plots-chennai?budget=under-30-lakhs",
      description:
        "Explore available low-budget CMDA-approved plots in Chennai below ₹30 lakhs, subject to current inventory in fast-growing outer suburban corridors.",
      highlight: "Entry-Level Investments",
      badgeColor: "bg-[#024b12]/10 border-[#024b12]/20 text-[#024b12]",
    },
    {
      range: "₹30–50 Lakhs",
      slug: "/approved-resale-plots-chennai?budget=30-50-lakhs",
      description:
        "Compare residential and resale plots in developing Chennai locations featuring established road access and immediate building feasibility.",
      highlight: "High-Demand Suburbs",
      badgeColor: "bg-[#024b12]/10 border-[#024b12]/20 text-[#024b12]",
    },
    {
      range: "₹50–75 Lakhs",
      slug: "/approved-resale-plots-chennai?budget=50-75-lakhs",
      description:
        "Explore larger plot dimensions and gated community resale land situated within established residential layouts and employment corridors.",
      highlight: "Mid-to-Large Residential",
      badgeColor: "bg-[#024b12]/10 border-[#024b12]/20 text-[#024b12]",
    },
    {
      range: "₹75 Lakhs+",
      slug: "/approved-resale-plots-chennai?budget=above-75-lakhs",
      description:
        "Consider prime residential or commercial investment-oriented plots featuring wide arterial road frontage and high development potential.",
      highlight: "Prime & Commercial Plots",
      badgeColor: "bg-[#024b12]/10 border-[#024b12]/20 text-[#024b12]",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
            Budget Planning
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
            Approved Plots in Chennai for Different Budgets
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Finding the right plot starts with choosing a realistic budget. Explore available properties according to your investment range.
          </p>
        </div>

        {/* 4 Budget Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {budgetTiers.map((tier, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#024b12]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-3">
                <div className="flex items-center">
                  <span
                    className={`inline-block px-3 py-1 rounded-md text-xs font-semibold border whitespace-nowrap overflow-hidden text-ellipsis ${tier.badgeColor}`}
                  >
                    {tier.highlight}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 font-serif group-hover:text-[#024b12] transition-colors">
                  {tier.range}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <Link
                href="#contact"
                className="w-full py-2.5 px-4 rounded-full bg-white hover:bg-[#024b12] text-slate-800 hover:text-white border border-slate-300 hover:border-[#024b12] font-semibold text-xs text-center transition duration-200 cursor-pointer shadow-xs"
              >
                View Plots in this Budget →
              </Link>
            </div>
          ))}
        </div>

        {/* Buyer Tip & Legal Compliance Box */}
        <div className="bg-[#024b12]/5 border border-[#024b12]/20 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-start gap-3">
            <span className="text-2xl leading-none">💡</span>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-slate-900 font-serif">
                Buyer Advice for Low-Budget Land Purchases in Chennai
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                If you&apos;re searching for cheap approved resale plots in Chennai, focus on total property value rather than price alone. A lower price does not automatically guarantee a sound investment. Always evaluate total cost structure: <strong className="font-semibold text-[#024b12]">Price + Location + Approval + Document Authenticity + Connectivity + Infrastructure</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Section Action CTA */}
        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-sm rounded-full transition transform active:scale-95 shadow-md border border-[#024b12] cursor-pointer"
          >
            Explore Budget-Friendly Plots
          </Link>
        </div>
      </div>
    </section>
  );
}