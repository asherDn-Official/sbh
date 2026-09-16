import Link from "next/link";

export default function ResalePlotSection() {
  const evaluationPoints = [
    "Property location",
    "Ownership",
    "Title documents",
    "Encumbrance",
    "Layout approval",
    "Patta",
    "Survey details",
    "Road access",
    "Plot dimensions",
    "Surrounding development",
    "Registration requirements",
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
            Resale Plot Guide
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
            Why Consider Resale Plots in Chennai?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A resale residential plot can be an attractive option for buyers who want to purchase land in an existing or developing location.
          </p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200 space-y-5">
          <h3 className="text-lg font-bold text-slate-900 font-serif">
            Before Buying, Evaluate:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {evaluationPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-700 bg-white p-3.5 rounded-xl border border-slate-200">
                <span className="text-[#024b12] font-bold mt-0.5">✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-slate-600 leading-relaxed pt-3 border-t border-slate-200">
            The objective should not simply be finding the cheapest land. It should be finding a property that matches your budget, location, intended use, and due-diligence requirements.
          </p>
        </div>
      </div>
    </section>
  );
}