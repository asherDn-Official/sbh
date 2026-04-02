import PropertyPageClient from "./propertiesPage";

const seoData = {
  katrambakkam: {
    title: "Resale Plots in Kattrambakkam | Near Sriperumbudur | Sri Balaji Homes",
    description: "Looking for resale plots in Kattrambakkam? Sri Balaji Homes offers CMDA & DTCP approved land near Sriperumbudur SIPCOT. Clear titles and immediate registration. Zero brokerage!",
  },
  nandhambakkam: {
    title: "Resale Plots in Nandhambakkam | Near Kundrathur | Sri Balaji Homes",
    description: "Buy premium CMDA approved resale plots in Nandhambakkam near Kundrathur. Sri Balaji Homes offers legally verified residential land ready for immediate construction.",
  },
  thaiyur: {
    title: "Resale Plots in Thaiyur OMR | Near Siruseri IT Park | Sri Balaji Homes",
    description: "Invest in DTCP approved resale plots in Thaiyur, OMR. Sri Balaji Homes offers premium land near Siruseri IT Park and SSN College. Immediate registration available!"
  }
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
     openGraph: {
      title: data?.title || `${place} Properties | Sri Balaji Homes`,
      description: data?.description || "Buy CMDA & DTCP approved resale plots in Chennai directly from Sri Balaji Homes. Premium land in Kattrambakkam, Nandhambakkam & Thaiyur. Zero brokerage!",
      url: `https://sribalajihomes.in/${slug}`,
      siteName: "Sri Balaji Homes",
      images: [
        {
          url: "/android-chrome-512x512.png",
          width: 486,
          height: 486,
          alt: "Sri Balaji Homes",
        },
      ],
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  const place = slug.replace("resale-plots-", "");

  return <PropertyPageClient place={place} />;
}