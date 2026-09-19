import Link from "next/link";

export default function ApprovalLegal() {
  const legalDocuments = [
    { name: "Sale Deed", desc: "Establishes legal ownership transfer of the property." },
    { name: "Parent Title Documents", desc: "Traces historic chain of ownership and title transfers." },
    { name: "Encumbrance Certificate (EC)", desc: "Verifies zero existing legal dues, mortgages, or liabilities." },
    { name: "Patta & Chitta", desc: "Government revenue record confirming land ownership in state registry." },
    { name: "Layout Approval Copy", desc: "Official CMDA or DTCP approved plot map with sanction number." },
    { name: "Survey & FMB Sketch", desc: "Validates physical boundaries and dimensions with revenue maps." },
    { name: "Property Tax Records", desc: "Confirms up-to-date local municipal or panchayat tax payments." },
    { name: "Planning & Building Permissions", desc: "Ensures site suitability for immediate residential construction." },
  ];

  const comparisonMatrix = [
    { factor: "Existing Layout Plot", resale: "Identifiable plot boundaries with physical road access", raw: "May lack marked boundaries or clear demarcation" },
    { factor: "Layout Information", resale: "Official sanctioned layout map available", raw: "Often unavailable or unapproved sketch" },
    { factor: "Planning Approval", resale: "CMDA or DTCP verified approval status", raw: "Unapproved or un-regularized land" },
    { factor: "Documentation", resale: "Established title track & registry records", raw: "Requires extensive legal research" },
    { factor: "Road Access & Infrastructure", resale: "Inspected layout roads with clear width", raw: "Variable, narrow, or missing legal approach" },
    { factor: "Construction Suitability", resale: "Immediate home building feasibility", raw: "Requires conversion & regularization checks" },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* 1. CMDA & DTCP Approvals Explanation */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
              Planning Authority & Approvals
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
              CMDA & DTCP Approved Plots in Chennai
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              When buying land, understanding the applicable planning approval framework is essential. The right authority depends on the plot location within the Chennai Metropolitan Area or adjacent districts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* CMDA Card */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#024b12]/40 hover:shadow-xl transition-all duration-300 space-y-4 group">
              <div className="inline-block px-3 py-1 rounded-md bg-slate-900 text-white text-xs font-bold uppercase tracking-wide">
                Metropolitan Region
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 font-serif group-hover:text-[#024b12] transition-colors">
                CMDA Approved Plots
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                CMDA (Chennai Metropolitan Development Authority) approved plots are properties associated with planning permissions within the defined Chennai Metropolitan Area boundaries.
              </p>
            </div>

            {/* DTCP Card */}
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#024b12]/40 hover:shadow-xl transition-all duration-300 space-y-4 group">
              <div className="inline-block px-3 py-1 rounded-md bg-[#024b12] text-white text-xs font-bold uppercase tracking-wide">
                State Planning Framework
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 font-serif group-hover:text-[#024b12] transition-colors">
                DTCP Approved Plots
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                DTCP (Directorate of Town and Country Planning) approved plots are properties associated with layout planning approval in suburban and developing regions outside CMDA limits.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
  <table className="w-full text-left text-sm text-slate-700">
    <thead className="bg-slate-100 text-slate-900 text-xs uppercase font-semibold">
      <tr>
        <th className="py-3.5 px-5">Factor</th>
        <th className="py-3.5 px-5">CMDA</th>
        <th className="py-3.5 px-5">DTCP</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-slate-200 bg-white">
      <tr><td className="py-3.5 px-5 font-semibold">Jurisdiction</td><td className="py-3.5 px-5">Chennai Metropolitan Area</td><td className="py-3.5 px-5">Tamil Nadu outside CMDA limits</td></tr>
      <tr><td className="py-3.5 px-5 font-semibold">Regulating Body</td><td className="py-3.5 px-5">Chennai Metropolitan Development Authority</td><td className="py-3.5 px-5">Directorate of Town and Country Planning</td></tr>
      <tr><td className="py-3.5 px-5 font-semibold">Typical Use</td><td className="py-3.5 px-5">Urban residential/commercial plots</td><td className="py-3.5 px-5">Suburban and developing layouts</td></tr>
      <tr><td className="py-3.5 px-5 font-semibold">Verification</td><td className="py-3.5 px-5">CMDA portal & layout permit number</td><td className="py-3.5 px-5">DTCP sanction order & local planning authority</td></tr>
    </tbody>
  </table>
</div>

          {/* Legal Due Diligence Callout */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white space-y-3 shadow-lg border border-slate-800">
            <h4 className="text-base font-bold text-amber-400 flex items-center gap-2 font-serif">
              <span className="text-lg">⚠️</span> Legal Verification Advisory
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Buyers should independently verify actual sanction documents rather than relying solely on plot marketing. Planning approval must always be evaluated separately from ownership title, encumbrance status, Patta, survey boundaries, and registration records.
            </p>
          </div>
        </div>

        {/* 2. Resale Plots vs Raw / Unapproved Land Comparison Matrix */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              Resale Plots vs Raw / Unapproved Land
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Don&apos;t choose land based on price alone. Compare physical infrastructure, approval security, and legal risk before committing.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-900 text-white text-xs uppercase font-semibold">
                <tr>
                  <th className="py-4 px-6">Evaluation Factor</th>
                  <th className="py-4 px-6">Approved Resale Plot</th>
                  <th className="py-4 px-6">Raw / Unapproved Land</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {comparisonMatrix.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                    <td className="py-4 px-6 font-bold text-slate-900 font-serif">{item.factor}</td>
                    <td className="py-4 px-6 text-slate-700 font-medium">
                      <span className="text-[#024b12] font-extrabold mr-1.5">✓</span> {item.resale}
                    </td>
                    <td className="py-4 px-6 text-slate-500">
                      <span className="text-rose-500 font-bold mr-1.5">✕</span> {item.raw}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Essential Document Checklist */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
              Document Check
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
              Documents to Check Before Buying a Plot in Chennai
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Before purchasing residential land or a resale plot, ensure complete verification of essential ownership records.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {legalDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2 hover:border-[#024b12]/30 hover:shadow-md transition duration-200"
              >
                <span className="text-[#024b12] font-black text-sm">0{idx + 1}.</span>
                <h3 className="text-sm font-bold text-slate-900 font-serif">{doc.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{doc.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="#contact"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm rounded-full transition shadow-md border border-slate-900 cursor-pointer"
            >
              Download Plot Document Checklist
            </Link>
            <Link
              href="#contact"
              className="w-full sm:w-auto text-center px-8 py-3.5 bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-sm rounded-full transition shadow-md border border-[#024b12] cursor-pointer"
            >
              Understand CMDA vs DTCP Approvals →
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}