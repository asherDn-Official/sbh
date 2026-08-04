import FAQ from "../components/about/Faq";

export const metadata = {
  title: "Frequently Asked Questions | Sri Balaji Homes",
  description:
    "Have questions about CMDA & DTCP approval, title verification, or registration for resale plots in Chennai? Find clear answers from Sri Balaji Homes.",
  alternates: {
    canonical: "https://www.sribalajihomes.in/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions — Sri Balaji Homes",
    description:
      "Everything you need to know about buying legal, approved resale plots in Katrambakkam, Nandhambakkam, and Thaiyur OMR.",
    url: "https://www.sribalajihomes.in/faq",
    siteName: "Sri Balaji Homes",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.sribalajihomes.in/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Sri Balaji Homes FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Buying Resale Plots in Chennai",
    description:
      "Get answers to common questions about legal titles, DTCP approvals, and plot registration in Chennai.",
    images: ["https://www.sribalajihomes.in/android-chrome-512x512.png"],
  },
};

export default function FAQPage() {
  return (
    <div className="pt-24">
      <FAQ />
    </div>
  );
}
