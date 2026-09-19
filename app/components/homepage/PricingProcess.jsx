import Link from "next/link";

export default function PricingProcess() {
  const steps = [
    {
      num: "01",
      title: "Choose Your Requirements",
      desc: "Share your target location, budget range, preferred plot size, and intended use with our team.",
    },
    {
      num: "02",
      title: "Shortlist Properties",
      desc: "Receive curated listings of verified CMDA & DTCP approved resale plots that match your criteria.",
    },
    {
      num: "03",
      title: "Review Property Details",
      desc: "Examine detailed property disclosures, layout approvals, dimension sketches, and title background.",
    },
    {
      num: "04",
      title: "Inspect the Plot",
      desc: "Schedule a guided site visit to verify physical plot boundaries, approach roads, and surrounding development.",
    },
    {
      num: "05",
      title: "Complete Legal Verification",
      desc: "Review parent title deeds, Patta, EC, and approval documents independently with professional legal counsel.",
    },
    {
      num: "06",
      title: "Proceed to Registration",
      desc: "Finalize terms and complete legal registration at the sub-registrar office with step-by-step guidance.",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section 11: Plot Pricing Disclosures */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
              Market Benchmarks
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
              Approved Resale Plot Prices in Chennai
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              The price of a resale plot in Chennai varies based on location, road connectivity, plot dimensions, planning approval status, and surrounding infrastructure.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1 space-y-2 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-200 pb-6 lg:pb-0 lg:pr-6">
              <span className="text-xs font-bold text-[#024b12] uppercase tracking-wider">
                Indicative Resale Price Range
              </span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 font-serif">
                ₹4,500 – ₹7,500 <span className="text-sm font-normal text-slate-500 font-sans">/ sq.ft</span>
              </div>
              <p className="text-xs text-slate-500">
                Applicable in selected developing corridors.
              </p>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-base font-bold text-slate-900 font-serif">
                Key Factors Influencing Land Valuation:
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 font-semibold text-slate-700 text-center sm:text-left">
                  📍 Arterial Road Distance
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 font-semibold text-slate-700 text-center sm:text-left">
                  🛣️ Access Road Width
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 font-semibold text-slate-700 text-center sm:text-left">
                  📜 CMDA vs DTCP Sanction
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 font-semibold text-slate-700 text-center sm:text-left">
                  🏗️ Neighboring Growth
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                *Note: Pricing reflects indicative market ranges for selected locations. Actual rates are determined on a property-specific basis.
              </p>
            </div>
          </div>
        </div>

        {/* Section 13: Step-by-Step Buying Process */}
        <div className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
              Transparent Buying Journey
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
              Our Plot Verification & Buying Process
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We follow a structured 6-step verification workflow to ensure complete legal transparency from selection through registration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-[#024b12]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#024b12] text-white font-black text-sm flex items-center justify-center font-serif shadow-xs">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900 font-serif group-hover:text-[#024b12] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-sm rounded-full transition transform active:scale-95 shadow-md border border-[#024b12] cursor-pointer"
            >
              Start Your Plot Verification Journey
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}