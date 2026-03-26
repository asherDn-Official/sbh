import PropertyPageClient from "./propertiesPage";

const seoData = {
  katrambakkam: {
    title: "Katrambakkam Properties | Sri Balaji Homes",
    description: "Explore premium properties in Katrambakkam.",
  },
  nandhambakkam: {
    title: "Nandhambakkam Properties | Sri Balaji Homes",
    description: "Explore premium properties in Nandhambakkam.",
  },
};

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const place = slug.replace("resale-plots-", "");

  const data = seoData[place];

  return {
    title: data?.title || `${place} Properties | Sri Balaji Homes`,
    description: data?.description || `Explore properties in ${place}`,

    alternates: {
      canonical: `https://sribalajihomes.in/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const place = slug.replace("resale-plots-", "");

  return <PropertyPageClient place={place} />;
}