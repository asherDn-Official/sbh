// import Image from "next/image";
// import LandingPageHome from "./components/homepage/LandingPageHome";
// import PropertySection from "./components/PropertySection";
// import WhyChooseUs from "./components/homepage/WhyChooseUs";
// import Properties from "./components/homepage/Properties";
// import InvestmentBanner from "./components/homepage/InvestmentBanner";
// import Testimonials from "./components/homepage/Testimonial";
// import Reveal from "./components/Reveal";
// import BuyingStepsAndFaq from "./components/homepage/FAQ";

// export default function Home() {
//   return (
//     <div>
//       <Reveal animation="fade" duration={700}>
//         <LandingPageHome />
//       </Reveal>

//       <Reveal animation="fade-up" duration={700}>
//         <PropertySection />
//       </Reveal>

//       <Reveal animation="fade-up" duration={700}>
//         <WhyChooseUs />
//       </Reveal>

//       <Reveal animation="fade-up" duration={700}>
//         <Properties />
//       </Reveal>

//       <Reveal animation="zoom" duration={700}>
//         <InvestmentBanner />
//       </Reveal>

//       <Reveal animation="fade-up" duration={700}>
//         <Testimonials />
//       </Reveal>
      
//     </div>
//   );
// }


// import LandingPageHome from "./components/homepage/LandingPageHome";
// import PropertySection from "./components/PropertySection";
// import Properties from "./components/homepage/Properties";
// import WhyChooseUs from "./components/homepage/WhyChooseUs";
// import BuyingSteps from "./components/homepage/BuyingSteps";
// import Testimonials from "./components/homepage/Testimonial";
// import FAQ from "./components/homepage/FAQ";
// import InvestmentBanner from "./components/homepage/InvestmentBanner";
// import Reveal from "./components/Reveal";

// export default function Home() {
//   return (
//     <main className="overflow-hidden">
//       {/* 1. Hero Banner */}
//       <Reveal animation="fade" duration={700}>
//         <LandingPageHome />
//       </Reveal>

//       {/* 2. Why Resale vs New Layouts */}
//       <Reveal animation="fade-up" duration={700}>
//         <PropertySection />
//       </Reveal>

//       {/* 3. Location Cards */}
//       <Reveal animation="fade-up" duration={700}>
//         <Properties />
//       </Reveal>

//       {/* 4. Legal Verification & Why Us */}
//       <Reveal animation="fade-up" duration={700}>
//         <WhyChooseUs />
//       </Reveal>

//       {/* 5. Buying Process Step-by-Step */}
//       <Reveal animation="fade-up" duration={700}>
//         <BuyingSteps />
//       </Reveal>

//       {/* 6. Customer Testimonials */}
//       <Reveal animation="fade-up" duration={700}>
//         <Testimonials />
//       </Reveal>


//      <Reveal animation="zoom" duration={700}>
//         <InvestmentBanner />
//       </Reveal>


//       {/* 7. FAQ (Right near the bottom) */}
//       <Reveal animation="fade-up" duration={700}>
//         <FAQ />
//       </Reveal>

//       {/* 8. Final Call to Action Banner (Above Footer) */}
      
//     </main>
//   );
// }




// import LandingPageHome from "./components/homepage/LandingPageHome";
// import PropertySection from "./components/PropertySection";
// import Properties from "./components/homepage/Properties";
// import WhyChooseUs from "./components/homepage/WhyChooseUs";
// import BuyingSteps from "./components/homepage/BuyingSteps";
// import Testimonials from "./components/homepage/Testimonial";
// import FAQ from "./components/homepage/FAQ";
// import InvestmentBanner from "./components/homepage/InvestmentBanner";
// import Reveal from "./components/Reveal";

// // EXPLICIT METADATA FOR HOMEPAGE
// export const metadata = {
//   title: "Approved Resale Plots in Chennai | CMDA & DTCP Plots | Sri Balaji Homes",
//   description:
//     "Explore verified approved resale plots in Chennai, including CMDA and DTCP approved residential plots. Find plots by location, budget, and size with clear-title and document verification.",
//   alternates: {
//     canonical: "https://www.sribalajihomes.in",
//   },
//   openGraph: {
//     title: "Approved Resale Plots in Chennai | CMDA & DTCP Plots | Sri Balaji Homes",
//     description:
//       "Explore verified approved resale plots in Chennai, including CMDA and DTCP approved residential plots. Find plots by location, budget, and size with clear-title and document verification.",
//     url: "https://www.sribalajihomes.in",
//     siteName: "Sri Balaji Homes",
//     locale: "en_IN",
//     type: "website",
//     images: [
//       {
//         url: "https://www.sribalajihomes.in/android-chrome-512x512.png",
//         width: 512,
//         height: 512,
//         alt: "Sri Balaji Homes - CMDA & DTCP Approved Resale Plots in Chennai",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Approved Resale Plots in Chennai | CMDA & DTCP Plots | Sri Balaji Homes",
//     description:
//       "Explore verified approved resale plots in Chennai, including CMDA and DTCP approved residential plots. Find plots by location, budget, and size with clear-title and document verification.",
//     images: ["https://www.sribalajihomes.in/android-chrome-512x512.png"],
//   },
// };

// export default function Home() {
//   return (
//     <main className="overflow-hidden">
//       {/* 1. Hero Banner */}
//       <Reveal animation="fade" duration={700}>
//         <LandingPageHome />
//       </Reveal>

//       {/* 2. Why Resale vs New Layouts */}
//       <Reveal animation="fade-up" duration={700}>
//         <PropertySection />
//       </Reveal>

//       {/* 3. Location Cards */}
//       <Reveal animation="fade-up" duration={700}>
//         <Properties />
//       </Reveal>

//       {/* 4. Legal Verification & Why Us */}
//       <Reveal animation="fade-up" duration={700}>
//         <WhyChooseUs />
//       </Reveal>

//       {/* 5. Buying Process Step-by-Step */}
//       <Reveal animation="fade-up" duration={700}>
//         <BuyingSteps />
//       </Reveal>

//       {/* 6. Customer Testimonials */}
//       <Reveal animation="fade-up" duration={700}>
//         <Testimonials />
//       </Reveal>

//       <Reveal animation="zoom" duration={700}>
//         <InvestmentBanner />
//       </Reveal>

//       {/* 7. FAQ (Right near the bottom) */}
//       <Reveal animation="fade-up" duration={700}>
//         <FAQ />
//       </Reveal>
//     </main>
//   );
// }







import Reveal from "./components/Reveal";
import HeroSection from "./components/homepage/HeroSection";
import PropertySearch from "./components/homepage/PropertySearch";
import TrustProof from "./components/homepage/TrustProof";
import FeaturedProperties from "./components/homepage/FeaturedProperties";
import BudgetGrid from "./components/homepage/BudgetGrid";
import LocationsGrid from "./components/homepage/LocationsGrid";
import PropertyTypes from "./components/homepage/PropertyTypes";
import ApprovalLegal from "./components/homepage/ApprovalLegal";
import PricingProcess from "./components/homepage/PricingProcess";
import BuyerResources from "./components/homepage/BuyerResources";
import FAQSection from "./components/homepage/FAQSection";
import FinalCTA from "./components/homepage/FinalCTA";
import ResalePlotSection from "./components/homepage/ResalePlotSection";

export const metadata = {
  title: "Approved Resale Plots in Chennai | CMDA & DTCP Plots | Sri Balaji Homes",
  description:
    "Explore verified approved resale plots in Chennai, including CMDA and DTCP approved residential plots. Find plots by location, budget, and size with clear-title and document verification.",
  alternates: {
    canonical: "https://www.sribalajihomes.in",
  },
  openGraph: {
    title: "Approved Resale Plots in Chennai | CMDA & DTCP Plots | Sri Balaji Homes",
    description:
      "Explore verified approved resale plots in Chennai, including CMDA and DTCP approved residential plots. Find plots by location, budget, and size with clear-title and document verification.",
    url: "https://www.sribalajihomes.in",
    siteName: "Sri Balaji Homes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sribalajihomes.in/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Sri Balaji Homes - CMDA & DTCP Approved Resale Plots in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Approved Resale Plots in Chennai | CMDA & DTCP Plots | Sri Balaji Homes",
    description:
      "Explore verified approved resale plots in Chennai, including CMDA and DTCP approved residential plots. Find plots by location, budget, and size with clear-title and document verification.",
    images: ["https://www.sribalajihomes.in/android-chrome-512x512.png"],
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* 1. Hero Section */}
      <Reveal animation="fade" duration={700}>
        <HeroSection />
      </Reveal>

      {/* 2. Interactive Search Bar */}
      <Reveal animation="fade-up" duration={700}>
        <PropertySearch />
      </Reveal>

      {/* 3. Trust & Legal Verification Overview */}
      <Reveal animation="fade-up" duration={700}>
        <TrustProof />
      </Reveal>

      {/* 4. Live Featured Resale Plots Inventory */}
      <Reveal animation="fade-up" duration={700}>
        <FeaturedProperties />
      </Reveal>

      {/* 5. Budget Range Cards & Investment Advice */}
      <Reveal animation="fade-up" duration={700}>
        <BudgetGrid />
      </Reveal>

      {/* 6. Locality Hubs (Katrambakkam, Nandhambakkam, Thaiyur OMR) */}
      <Reveal animation="fade-up" duration={700}>
        <LocationsGrid />
      </Reveal>

      {/* 7. Property Types & Categories */}
      <Reveal animation="fade-up" duration={700}>
        <PropertyTypes />
      </Reveal>

      {/* 8. CMDA vs DTCP Comparison & Document Checklist */}
      <Reveal animation="fade-up" duration={700}>
        <ApprovalLegal />
      </Reveal>

      <Reveal animation="fade-up" duration={700}>
        <ResalePlotSection />
        </Reveal>

      {/* 9. Price Trends & 6-Step Buying Workflow */}
      <Reveal animation="fade-up" duration={700}>
        <PricingProcess />
      </Reveal>

      {/* 10. Site Media, Educational Guides & Customer Reviews */}
      <Reveal animation="fade-up" duration={700}>
        <BuyerResources />
      </Reveal>

      {/* 11. FAQ Section (with JSON-LD Schema) */}
      <Reveal animation="fade-up" duration={700}>
        <FAQSection />
      </Reveal>

      {/* 12. Final CTA & Internal Link Silo Network */}
      <Reveal animation="zoom" duration={700}>
        <FinalCTA />
      </Reveal>
    </main>
  );
}