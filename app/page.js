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


import LandingPageHome from "./components/homepage/LandingPageHome";
import PropertySection from "./components/PropertySection";
import Properties from "./components/homepage/Properties";
import WhyChooseUs from "./components/homepage/WhyChooseUs";
import BuyingSteps from "./components/homepage/BuyingSteps";
import Testimonials from "./components/homepage/Testimonial";
import FAQ from "./components/homepage/FAQ";
import InvestmentBanner from "./components/homepage/InvestmentBanner";
import Reveal from "./components/Reveal";

// EXPLICIT METADATA FOR HOMEPAGE
export const metadata = {
  title: "Approved Resale Plots in Chennai | Sri Balaji Homes",
  description:
    "Buy CMDA & DTCP approved resale plots in Chennai with clear title & zero brokerage. Katrambakkam, Nandhambakkam & Thaiyur OMR. Get a free site visit.",
  alternates: {
    canonical: "https://www.sribalajihomes.in",
  },
  openGraph: {
    title: "Approved Resale Plots in Chennai — Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots with clear title and zero brokerage, across Katrambakkam, Nandhambakkam and Thaiyur OMR.",
    url: "https://www.sribalajihomes.in",
    siteName: "Sri Balaji Homes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sribalajihomes.in/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Sri Balaji Homes - Approved Resale Plots in Chennai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Approved Resale Plots in Chennai — Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots with clear title and zero brokerage in Katrambakkam, Nandhambakkam and Thaiyur OMR.",
    images: ["https://www.sribalajihomes.in/android-chrome-512x512.png"],
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* 1. Hero Banner */}
      <Reveal animation="fade" duration={700}>
        <LandingPageHome />
      </Reveal>

      {/* 2. Why Resale vs New Layouts */}
      <Reveal animation="fade-up" duration={700}>
        <PropertySection />
      </Reveal>

      {/* 3. Location Cards */}
      <Reveal animation="fade-up" duration={700}>
        <Properties />
      </Reveal>

      {/* 4. Legal Verification & Why Us */}
      <Reveal animation="fade-up" duration={700}>
        <WhyChooseUs />
      </Reveal>

      {/* 5. Buying Process Step-by-Step */}
      <Reveal animation="fade-up" duration={700}>
        <BuyingSteps />
      </Reveal>

      {/* 6. Customer Testimonials */}
      <Reveal animation="fade-up" duration={700}>
        <Testimonials />
      </Reveal>

      <Reveal animation="zoom" duration={700}>
        <InvestmentBanner />
      </Reveal>

      {/* 7. FAQ (Right near the bottom) */}
      <Reveal animation="fade-up" duration={700}>
        <FAQ />
      </Reveal>
    </main>
  );
}