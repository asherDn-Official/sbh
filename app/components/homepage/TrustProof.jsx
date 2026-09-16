export default function TrustProof() {
  const trustPoints = [
    {
      title: "Verified Property Information",
      description:
        "Access clear and factual data on property locations, dimensions, pricing ranges, and verified planning approvals.",
      icon: "📋",
    },
    {
      title: "Approval-Focused Due Diligence",
      description:
        "Understand whether the property holds authentic CMDA or DTCP approval documentation prior to site visits.",
      icon: "🛡️",
    },
    {
      title: "Clear-Title Focus",
      description:
        "Every listed plot goes through a strict legal title and ownership review to prevent legal encumbrance risks.",
      icon: "⚖️",
    },
    {
      title: "Transparent Property Details",
      description:
        "Compare available plots objectively based on square footage, road width, facing direction, and total layout value.",
      icon: "🔍",
    },
    {
      title: "Site Visit Assistance",
      description:
        "Inspect plot boundaries, surrounding infrastructure, and access roads with dedicated guided site visits.",
      icon: "🚗",
    },
    {
      title: "Registration Assistance",
      description:
        "Receive full legal and transactional support through agreement drafting, documentation, and final registry handover.",
      icon: "🤝",
    },
  ];

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
            Trust & Legal Transparency
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
            Why Choose Sri Balaji Homes for Approved Plots?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Buying land is a significant financial decision. The right plot should be evaluated not only by its price, but also by its location, ownership, title, approval, documentation, accessibility, and development potential. Sri Balaji Homes helps buyers explore residential and resale plots with a transparent, property-focused approach.
          </p>
        </div>

        {/* 6-Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {trustPoints.map((point, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#024b12]/40 hover:shadow-md transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl shadow-xs">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span className="text-[#024b12] font-bold">✓</span> {point.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Trust Sub-banner matching Hero & Dark palette */}
        <div className="bg-slate-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-slate-800">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-[#91eda5] font-serif">
              Your Trusted Partner for Plot Buying in Chennai
            </h3>
            <p className="text-sm text-slate-300 max-w-2xl">
              We specialize in CMDA & DTCP approved resale land in high-growth corridors like Katrambakkam, Nandhambakkam, and Thaiyur OMR with 100% verified legal titles.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/plot-verification"
              className="inline-block px-6 py-3.5 bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-sm rounded-full transition transform active:scale-95 shadow-md border border-[#024b12] cursor-pointer"
            >
              Our Verification Process
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}