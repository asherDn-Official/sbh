import Image from "next/image";
import Link from "next/link";

const sampleProperties = [
  {
    id: "katrambakkam-plot-1",
    title: "Premium CMDA Resale Plot near SIDCO",
    location: "Katrambakkam, Chennai",
    image: "/assets/home/dtcp-approved-resale-plot-kattrambakkam-aerial.webp",
    imageAlt:
      "CMDA approved resale plot in Katrambakkam Chennai — Sri Balaji Homes",
    area: "1,200 sq.ft",
    approval: "CMDA Approved",
    roadWidth: "30 ft",
    facing: "East",
    price: "₹34.8 Lakhs",
    slug: "/properties/approved-resale-plots-kattrambakkam-chennai",
  },
  {
    id: "nandhambakkam-plot-2",
    title: "Clear-Title Residential Plot near Main Road",
    location: "Nandhambakkam, Chennai",
    image: "/assets/home/cmda-plot-nandhambakkam-road-view.webp",
    imageAlt:
      "CMDA approved resale plot in Nandhambakkam Chennai — Sri Balaji Homes",
    area: "1,500 sq.ft",
    approval: "CMDA Approved",
    roadWidth: "40 ft",
    facing: "North",
    price: "₹52.5 Lakhs",
    slug: "/properties/cmda-approved-plots-nandhambakkam",
  },
  {
    id: "thaiyur-omr-plot-3",
    title: "DTCP Resale Land near Siruseri IT Park",
    location: "Thaiyur OMR, Chennai",
    image: "/assets/home/thaiyur-omr-residential-plot-sale.webp",
    imageAlt:
      "DTCP approved resale plot in Thaiyur OMR Chennai — Sri Balaji Homes",
    area: "1,800 sq.ft",
    approval: "DTCP Approved",
    roadWidth: "30 ft",
    facing: "East",
    price: "₹41.4 Lakhs",
    slug: "/properties/dtcp-resale-plots-thaiyur-omr",
  },
];

export default function FeaturedProperties() {
  return (
    <section
      id="featured-plots"
      className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/10 border border-[#024b12]/20 text-[#024b12] text-xs font-semibold uppercase tracking-wider">
            Verified Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight font-serif">
            Featured Approved Resale Plots in Chennai
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Explore our available resale plots for sale in Chennai and compare
            properties based on location, size, price, and applicable approval
            information.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProperties.map((plot) => (
            <div
              key={plot.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group"
            >
              {/* Image Header with Overlays */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={plot.image}
                  alt={plot.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                {/* Approval badge — top left */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-md bg-[#024b12] text-white text-xs font-bold uppercase tracking-wide shadow-sm border border-white/20">
                    {plot.approval}
                  </span>
                </div>

                {/* Price — bottom left */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-2xl font-extrabold text-[#91eda5] drop-shadow-md">
                    {plot.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#024b12] transition line-clamp-1 font-serif">
                    {plot.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mt-1 flex items-center gap-1">
                    <span>📍</span> {plot.location}
                  </p>

                  {/* Property Specs Table Grid */}
                  <div className="mt-4 grid grid-cols-2 gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <div>
                      <span className="text-slate-400 block uppercase font-medium">
                        Plot Area
                      </span>
                      <span className="font-semibold text-slate-800">
                        {plot.area}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block uppercase font-medium">
                        Road Width
                      </span>
                      <span className="font-semibold text-slate-800">
                        {plot.roadWidth}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block uppercase font-medium">
                        Facing
                      </span>
                      <span className="font-semibold text-slate-800">
                        {plot.facing}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block uppercase font-medium">
                        Approval
                      </span>
                      <span className="font-semibold text-slate-800">
                        {plot.approval}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card CTA Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Link
                    href={plot.slug}
                    className="w-full py-2.5 px-3 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold text-xs text-center transition cursor-pointer"
                  >
                    View Property →
                  </Link>
                  <Link
                    href="/contact-us"
                    className="w-full py-2.5 px-3 rounded-full bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-xs text-center transition shadow-sm border border-[#024b12] cursor-pointer"
                  >
                    Book Site Visit →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Bottom CTA */}
        <div className="text-center pt-4">
          <Link
            href="/approved-resale-plots-chennai"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-sm transition transform active:scale-95 shadow-md border border-[#024b12] cursor-pointer"
          >
            Explore All Resale Plots in Chennai
          </Link>
        </div>
      </div>
    </section>
  );
}