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


import LandingPageHome from "./components/homepage/LandingPageHome";
import PropertySection from "./components/PropertySection";
import Properties from "./components/homepage/Properties";
import WhyChooseUs from "./components/homepage/WhyChooseUs";
import BuyingSteps from "./components/homepage/BuyingSteps";
import Testimonials from "./components/homepage/Testimonial";
import FAQ from "./components/homepage/FAQ";
import InvestmentBanner from "./components/homepage/InvestmentBanner";
import Reveal from "./components/Reveal";

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

      {/* 8. Final Call to Action Banner (Above Footer) */}
      
    </main>
  );
}