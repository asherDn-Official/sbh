import PropertyPageClient from "./propertiesPage";

export async function generateMetadata({ params }) {
  const { place } = params;

  return {
    title: `${place} Properties | Sri Balaji Homes`,
    description: `Explore premium properties in ${place}. Find the best real estate options with Sri Balaji Homes.`,
    keywords: `${place} properties, flats in ${place}, houses in ${place}, Sri Balaji Homes`,
    openGraph: {
      title: `${place} Properties | Sri Balaji Homes`,
      description: `Explore premium properties in ${place}.`,
      url: `https://sribalajihomes.in/properties/${place}`,
      siteName: "Sri Balaji Homes",
      type: "website",
    },
  };
}

export default function ContactPage({ params }) {
  return <PropertyPageClient place={params.place} />;
}
