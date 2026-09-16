import Image from "next/image";
import Link from "next/link";
import bgImage from "../../../public/assets/home/approved-resale-plots-chennai-hero.webp";
import bgMobileImage from "../../../public/assets/home/mobileHome.webp";
import people from "../../../public/assets/home/people.webp";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      {/* Mobile/Tablet Background Image */}
      <Image
        src={bgMobileImage}
        alt="CMDA & DTCP Approved Resale Plots in Chennai Mobile Banner"
        title="CMDA & DTCP Approved Resale Plots in Chennai - Sri Balaji Homes"
        fill
        priority
        sizes="100vw"
        quality={85}
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 md:hidden"
      />

      {/* Desktop Background Image */}
      <Image
        src={bgImage}
        alt="Approved resale plot layout in Chennai with marked boundaries"
        title="Approved Resale Plots in Chennai - Sri Balaji Homes"
        fill
        priority
        sizes="100vw"
        quality={85}
        className="absolute inset-0 w-full h-full object-cover object-center -z-10 hidden md:block"
      />

      {/* Happy Buyers Graphic
      <Image
        src={people}
        alt="Happy property buyers with Sri Balaji Homes"
        title="Happy property buyers with Sri Balaji Homes"
        width={360}
        height={260}
        className="absolute bottom-4 right-3 md:right-10 w-44 sm:w-60 md:w-80 lg:w-96 z-10 pointer-events-none"
      /> */}

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-slate-950/75 md:bg-slate-950/65 -z-10" />

      {/* Hero Content Area */}
      <div className="relative max-w-5xl mx-auto text-center space-y-6 z-20">
        {/* Trust Pill Badge matching brand dark green (#024b12) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#024b12]/40 border border-[#024b12] text-[#91eda5] text-xs sm:text-sm font-semibold tracking-wide uppercase">
          <span className="w-2.5 h-2.5 rounded-full bg-[#91eda5] animate-pulse" />
          Verified Resale Plots in Chennai
        </div>

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight font-serif">
          Verified CMDA & DTCP <br className="hidden sm:inline" />
          <span className="text-[#91eda5]">
            Approved Resale Plots in Chennai
          </span>
        </h1>

        {/* Direct GEO/AEO Answer Paragraph */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-gray-200 leading-relaxed drop-shadow-sm">
          Looking for approved plots in Chennai for your dream home or property investment? Explore verified resale residential land and plots for sale in Chennai with clear titles, verified layout approvals, and legal due diligence.
        </p>

        {/* Supporting Search Intent Context */}
        <p className="max-w-3xl mx-auto text-sm sm:text-base text-gray-300 leading-relaxed drop-shadow-sm">
          Find suitable CMDA-approved plots in Chennai, DTCP-approved plots in Chennai, and residential plots based on your preferred location, plot size, and budget. Whether you&apos;re searching for plots to buy in Chennai, affordable land, or long-term property investment, Sri Balaji Homes helps you shortlist properties and arrange free site visits.
        </p>

        {/* Clean Brand CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <Link
            href="#featured-plots"
            className="w-full sm:w-auto text-center font-semibold bg-[#024b12] hover:bg-[#01380d] text-white px-8 py-3.5 rounded-full transition transform active:scale-95 shadow-lg border border-[#024b12] cursor-pointer"
          >
            View Available Plots
          </Link>
          <Link
            href="/contact-us"
            className="w-full sm:w-auto text-center font-semibold bg-white hover:bg-gray-100 text-black px-8 py-3.5 rounded-full transition transform active:scale-95 shadow-lg border-2 border-[#024b12] cursor-pointer"
          >
            Book a Free Site Visit
          </Link>
        </div>
      </div>

      {/* Right Badge from LandingPageHome */}
      <div className="absolute bottom-4 right-4 z-20 hidden md:flex justify-end items-end">
        <span className="bg-white/85 text-black px-6 lg:px-10 py-2 rounded-bl-full rounded-tl-full font-poppins font-medium text-xs sm:text-sm lg:text-base shadow-md">
          CMDA & DTCP Approved Plots | Zero Brokerage
        </span>
      </div>
    </section>
  );
}