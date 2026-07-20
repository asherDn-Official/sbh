import FAQ from "../components/about/Faq";

export const metadata = {
  title: "FAQ | Sri Balaji Homes",
  description: "Learn more about Sri Balaji Homes, our mission, vision, and values.",
   alternates: {
    canonical: "https://www.sribalajihomes.in/faq",
  },
};

export default function FAQPage() {
  return (
    <div className="pt-24">
      <FAQ />
    </div>
  );
}
