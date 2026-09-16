import Image from "next/image";
import Link from "next/link";

export default function LocationsGrid() {
  const locations = [
    {
      name: "Katrambakkam",
      slug: "/properties/approved-resale-plots-kattrambakkam-chennai",
      badge: "Fast-Growing Suburban Hub",
      image: "/assets/home/resale-plots-katrambakkam.webp",
      imageAlt:
        "DTCP approved resale plots in Katrambakkam Chennai — Sri Balaji Homes",
      description:
        "Explore resale plots in Katrambakkam with access to developing residential areas, major industrial hubs, and important connectivity corridors.",
      highlights: [
        "Near major industrial belts",
        "Clear CMDA / DTCP titles",
        "High capital growth potential",
      ],
      linkText: "View Katrambakkam Plots",
    },
    {
      name: "Nandhambakkam",
      slug: "/properties/cmda-approved-plots-nandhambakkam",
      badge: "Prime Residential Corridor",
      image: "/assets/home/resale-plots-nandhapakkam.webp",
      imageAlt:
        "CMDA approved resale plots in Nandhambakkam Chennai — Sri Balaji Homes",
      description:
        "Discover residential and resale plots in and around Nandhambakkam based on current availability with established road access.",
      highlights: [
        "Well-connected layout roads",
        "Proximity to urban amenities",
        "Immediate building feasibility",
      ],
      linkText: "View Nandhambakkam Plots",
    },
    {
      name: "Thaiyur OMR",
      slug: "/properties/dtcp-resale-plots-thaiyur-omr",
      badge: "IT Corridor & Siruseri Hub",
      image: "/assets/home/resale-plots-thaiyur.webp",
      imageAlt:
        "DTCP approved resale plots in Thaiyur OMR Chennai — Sri Balaji Homes",
      description:
        "Explore plots in Thaiyur near OMR and Siruseri, suitable for residential home construction and long-term property investment.",
      highlights: [
        "Minutes from Siruseri SIPCOT",
        "High rental & resale demand",
        "Rapidly expanding infrastructure",
      ],
      linkText: "View Thaiyur Plots",
    },
  ];

  const connectivityFactors = [
    "Major roads",
    "Public transportation",
    "Schools",
    "Hospitals",
    "Employment hubs",
    "IT corridors",
    "Shopping & daily amenities",
    "Existing residential development",
    "Future infrastructure",
    "Connectivity to key destinations",
  ];

  return (
    <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
            Location Authority
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight font-serif">
            Explore Approved Plots in Prime Chennai Locations
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Find residential lands and plots for sale in Chennai across
            selected locations with verified connectivity and legal approvals.
          </p>
        </div>

        {/* Locality Grid — image + content cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden flex flex-col hover:shadow-2xl hover:border-[#024b12]/40 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image header */}
              <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                <Image
                  src={loc.image}
                  alt={loc.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay gradient for badge legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/10 to-transparent" />
                {/* Badge overlay */}
                <span className="absolute top-4 left-4 text-[11px] font-bold text-white bg-[#024b12]/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-white/20 shadow-md">
                  {loc.badge}
                </span>
                {/* Location name overlay */}
                <h3 className="absolute bottom-4 left-4 right-4 text-2xl sm:text-3xl font-extrabold text-white font-serif drop-shadow-md">
                  {loc.name}
                </h3>
              </div>

              {/* Card body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {loc.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 pt-4 border-t border-slate-100">
                    {loc.highlights.map((item, hIdx) => (
                      <li
                        key={hIdx}
                        className="text-sm text-slate-700 flex items-start gap-2.5 font-medium"
                      >
                        <span className="text-[#024b12] font-extrabold text-base mt-0.5 shrink-0">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={loc.slug}
                  className="inline-flex items-center justify-center w-full py-3.5 px-4 rounded-full bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-sm transition duration-200 shadow-sm hover:shadow-md cursor-pointer border border-[#024b12]"
                >
                  {loc.linkText} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Connectivity Section — enlarged */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200 max-w-5xl mx-auto shadow-sm">
          <div className="text-center space-y-4 mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
              Location Intelligence
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 font-serif leading-tight">
              Why Location Matters When Buying a Plot in Chennai
            </h3>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              A good plot is not determined by land price alone. Evaluate
              connectivity, infrastructure, and long-term development potential
              before you commit.
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {connectivityFactors.map((factor, i) => (
              <li
                key={i}
                className="bg-slate-50 hover:bg-[#024b12]/5 text-slate-800 hover:text-[#024b12] px-4 py-3.5 rounded-xl border border-slate-200 hover:border-[#024b12]/30 text-sm sm:text-base text-center font-semibold transition-all duration-200 flex items-center justify-center min-h-[64px]"
              >
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}