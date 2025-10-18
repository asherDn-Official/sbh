import Image from "next/image";
import LandingPageHome from "./components/homepage/LandingPageHome";
import PropertySection from "./components/PropertySection";
import WhyChooseUs from "./components/homepage/WhyChooseUs";
import Properties from "./components/homepage/Properties";
import InvestmentBanner from "./components/homepage/InvestmentBanner";
import Testimonials from "./components/homepage/Testimonial";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <div>
      <Reveal animation="fade" duration={700}>
        <LandingPageHome />
      </Reveal>

      <Reveal animation="fade-up" duration={700}>
        <PropertySection />
      </Reveal>

      <Reveal animation="slide-right" duration={700}>
        <WhyChooseUs />
      </Reveal>

      <Reveal animation="fade-up" duration={700}>
        <Properties />
      </Reveal>

      <Reveal animation="zoom" duration={700}>
        <InvestmentBanner />
      </Reveal>

      <Reveal animation="fade-up" duration={700}>
        <Testimonials />
      </Reveal>
    </div>
  );
}
