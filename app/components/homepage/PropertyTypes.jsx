import Link from "next/link";

export default function PropertyTypes() {
  const propertyTypes = [
    {
      title: "Residential Plots",
      tagline: "Home Building Ready",
      description:
        "Residential plots for sale in Chennai for buyers planning to build a home in established or developing neighborhoods.",
      icon: "🏡",
      query: "residential-plots",
    },
    {
      title: "Resale Plots",
      tagline: "Verified Resale Land",
      description:
        "Explore resale plots for sale in Chennai with property-specific information, clear ownership history, and full legal documentation.",
      icon: "🔄",
      query: "resale-plots",
    },
    {
      title: "CMDA Approved Plots",
      tagline: "Metropolitan Area",
      description:
        "Explore CMDA-approved plots in Chennai where applicable layout planning approval documentation is verified.",
      icon: "🏛️",
      query: "cmda-approved",
    },
    {
      title: "DTCP Approved Plots",
      tagline: "Planning Framework",
      description:
        "Explore DTCP-approved plots in Chennai across suitable developing locations governed by directorate planning standards.",
      icon: "📜",
      query: "dtcp-approved",
    },
    {
      title: "Residential Land",
      tagline: "Custom Parcels",
      description:
        "Find residential land and plots for sale in Chennai tailored to your preferred plot dimensions, budget, and location preferences.",
      icon: "📍",
      query: "residential-land",
    },
    {
      title: "Commercial Plots",
      tagline: "Business & Investment",
      description:
        "Explore suitable commercial land opportunities situated near main road corridors where high visibility is available.",
      icon: "🏢",
      query: "commercial-plots",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
            Property Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
            Residential & Commercial Plots for Sale in Chennai
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Choose a property based on your intended use, approval requirements, and investment scope.
          </p>
        </div>

        {/* 6 Grid Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyTypes.map((type, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-[#024b12]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-3xl p-2.5 rounded-xl bg-white border border-slate-200/60 shadow-xs">
                    {type.icon}
                  </span>
                  <span className="text-[11px] font-semibold text-[#024b12] bg-[#024b12]/10 border border-[#024b12]/20 px-2.5 py-1 rounded-md tracking-wide">
                    {type.tagline}
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 font-serif group-hover:text-[#024b12] transition-colors">
                  {type.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {type.description}
                </p>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center text-xs font-bold text-[#024b12] hover:text-[#01380d] gap-1.5 pt-2 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                Browse {type.title} <span className="text-sm">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}