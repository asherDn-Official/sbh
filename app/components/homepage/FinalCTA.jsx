import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FinalCTA() {
  return (
    <section className="w-full bg-white pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Conversion Banner */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-[#024b12] p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#024b12]/30 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#024b12]/50 text-emerald-300 border border-emerald-500/30 text-xs font-semibold uppercase tracking-wider">
              Ready to Step Onto Your Land?
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight font-serif">
              Book a Free Guided Site Visit in Chennai Today
            </h2>
            <p className="text-sm sm:text-lg text-slate-300 leading-relaxed">
              Inspect physical boundaries, access roads, surrounding infrastructure, and verify original planning documents with our team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
  href="#featured-plots"
  className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-[#024b12] font-semibold text-sm rounded-full transition shadow-lg text-center border border-white cursor-pointer"
>
  View Available Plots
</Link>
              <Link
                href="/contact-us"
                className="w-full sm:w-auto px-8 py-4 bg-[#024b12] hover:bg-[#01380d] text-white font-semibold text-sm rounded-full transition shadow-lg text-center border border-emerald-500/30 cursor-pointer"
              >
                Schedule Site Visit
              </Link>
              <a
                href="https://wa.me/917200940777?text=Hi%20Sri%20Balaji%20Homes,%20I%20am%20interested%20in%20verifying%20approved%20resale%20plots."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm rounded-full border border-slate-700 transition text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <FaWhatsapp className="text-emerald-400 text-lg" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Geographic Hubs & SEO Link Silo Network */}
        <div className="border-t border-slate-200 pt-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-xs text-slate-600">
          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm font-serif uppercase tracking-wider">Popular Hubs</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/plots/katrambakkam" className="hover:text-[#024b12] transition">Plots in Katrambakkam</Link></li>
              <li><Link href="/plots/nandhambakkam" className="hover:text-[#024b12] transition">Plots in Nandhambakkam</Link></li>
              <li><Link href="/plots/thaiyur-omr" className="hover:text-[#024b12] transition">Plots in Thaiyur OMR</Link></li>
              <li><Link href="/approved-resale-plots-chennai" className="hover:text-[#024b12] transition">All Resale Plots</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm font-serif uppercase tracking-wider">Approvals</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/approved-resale-plots-chennai?type=cmda-approved" className="hover:text-[#024b12] transition">CMDA Approved Plots</Link></li>
              <li><Link href="/approved-resale-plots-chennai?type=dtcp-approved" className="hover:text-[#024b12] transition">DTCP Approved Plots</Link></li>
              <li><Link href="/guides/cmda-vs-dtcp" className="hover:text-[#024b12] transition">Approval Verification</Link></li>
              <li><Link href="/plot-verification" className="hover:text-[#024b12] transition">Title Check Process</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm font-serif uppercase tracking-wider">Budget Search</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/approved-resale-plots-chennai?budget=under-30-lakhs" className="hover:text-[#024b12] transition">Plots Under 30 Lakhs</Link></li>
              <li><Link href="/approved-resale-plots-chennai?budget=30-50-lakhs" className="hover:text-[#024b12] transition">Plots 30 to 50 Lakhs</Link></li>
              <li><Link href="/approved-resale-plots-chennai?budget=50-75-lakhs" className="hover:text-[#024b12] transition">Plots 50 to 75 Lakhs</Link></li>
              <li><Link href="/approved-resale-plots-chennai?budget=above-75-lakhs" className="hover:text-[#024b12] transition">Plots Above 75 Lakhs</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-extrabold text-slate-900 text-sm font-serif uppercase tracking-wider">Legal Guides</h4>
            <ul className="space-y-2 font-medium">
              <li><Link href="/guides/plot-document-checklist" className="hover:text-[#024b12] transition">Document Checklist</Link></li>
              <li><Link href="/guides/land-title-verification" className="hover:text-[#024b12] transition">Title Verification</Link></li>
              <li><Link href="/guides/plot-registration-guide" className="hover:text-[#024b12] transition">Registration Process</Link></li>
              <li><Link href="/download-document-checklist" className="hover:text-[#024b12] transition">Download Checklists</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
  <h4 className="font-extrabold text-slate-900 text-sm font-serif uppercase tracking-wider">Company</h4>
  <ul className="space-y-2 font-medium">
    <li><Link href="/about" className="hover:text-[#024b12] transition">About Us</Link></li>
    <li><Link href="/why-sri-balaji-homes" className="hover:text-[#024b12] transition">Why Sri Balaji Homes</Link></li>
    <li><Link href="/testimonials" className="hover:text-[#024b12] transition">Testimonials</Link></li>
    <li><Link href="/contact-us" className="hover:text-[#024b12] transition">Contact Us</Link></li>
  </ul>
</div>
        </div>

        

      </div>
    </section>
  );
}