import { Geist_Mono, Poppins, Lora } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CountdownGate from "./components/CountdownGate";

import Script from "next/script";

const geistSans = Geist_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// export const metadata = {
//   title: "CMDA & DTCP Approved Resale Plots Chennai | Clear Title | Sri Balaji Homes",
//   description:
//     "Buy CMDA & DTCP approved resale plots in Chennai. Premium plots by Sri Balaji Homes in Kattrambakkam, Nandhambakkam & Thaiyur. Enquire today!",

//   icons: {
//     icon: "/favicon.ico",
//     apple: "/favicon.ico",
//     shortcut: "/favicon.ico",
//   },

//   alternates: {
//     canonical: "https://www.sribalajihomes.in",
//   },

//   verification: {
//     other: {
//       "msvalidate.01": "E028FAAE6388F723E1604A29FB6F8456",
//       "google-site-verification": "M1i2Jo7DjmrLG-bPTP7M6ESyKr7b2rEOIh7LuBt2A1Y",
//     },
//   },

//   themeColor: "#ffffff",

//   openGraph: {
//     title: "Approved Resale Plots in Chennai | Sri Balaji Homes",
//     description:
//       "Buy CMDA & DTCP approved resale plots in Chennai directly from Sri Balaji Homes. Premium land in Kattrambakkam, Nandhambakkam & Thaiyur. Zero brokerage!",

//     url: "https://sribalajihomes.in",

//     siteName: "Sri Balaji Homes",

//     images: [
//       {
//         url: "/android-chrome-512x512.png",
//         width: 486,
//         height: 486,
//         alt: "Sri Balaji Homes",
//       },
//     ],

//     locale: "en_IN",
//     type: "website",
//   },
// };

export const viewport = {
  themeColor: "#ffffff",
};

export const metadata = {
  // Base URL resolves relative asset links safely
  metadataBase: new URL("https://www.sribalajihomes.in"),

  // Explicit Robots Directive for standard indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Exact Title (53 chars) & Description (156 chars) as per spec
  title: {
    default: "Approved Resale Plots in Chennai | Sri Balaji Homes",
    template: "%s | Sri Balaji Homes", // Appends "| Sri Balaji Homes" to child titles
  },
  
  description:
    "Buy CMDA & DTCP approved resale plots in Chennai with clear title & zero brokerage. Katrambakkam, Nandhambakkam & Thaiyur OMR. Get a free site visit.",

  // Primary Focus Keywords
  keywords: [
    "Approved Resale Plots Chennai",
    "CMDA approved plots Chennai",
    "DTCP approved plots Chennai",
    "resale plots Katrambakkam",
    "plots in Nandhambakkam",
    "plots in Thaiyur OMR",
    "Sri Balaji Homes",
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  // Fixed Canonical URL
  alternates: {
    canonical: "https://www.sribalajihomes.in",
  },

  // Verification Tags
  verification: {
    other: {
      "msvalidate.01": "E028FAAE6388F723E1604A29FB6F8456",
      "google-site-verification": "M1i2Jo7DjmrLG-bPTP7M6ESyKr7b2rEOIh7LuBt2A1Y",
    },
  },

  // OpenGraph (Social Sharing) Metadata
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

  // Twitter Card Metadata
  twitter: {
    card: "summary_large_image",
    title: "Approved Resale Plots in Chennai — Sri Balaji Homes",
    description:
      "CMDA & DTCP approved resale plots with clear title and zero brokerage in Katrambakkam, Nandhambakkam and Thaiyur OMR.",
    images: ["https://www.sribalajihomes.in/android-chrome-512x512.png"],
  },
};


const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.sribalajihomes.in/#organization",
      "name": "Sri Balaji Homes",
      "url": "https://www.sribalajihomes.in",
      "logo": "https://www.sribalajihomes.in/android-chrome-512x512.png",
      "foundingDate": "2005",
      "email": "info.sribalajihomes@gmail.com",
      "telephone": ["+917200940777", "+916384000006"]
    },
    {
      "@type": "RealEstateAgent",
      "@id": "https://www.sribalajihomes.in/#realestateagent",
      "name": "Sri Balaji Homes",
      "image": "https://www.sribalajihomes.in/android-chrome-512x512.png",
      "url": "https://www.sribalajihomes.in",
      "telephone": ["+917200940777", "+916384000006"],
      "email": "info.sribalajihomes@gmail.com",
      "priceRange": "₹₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "602103",
        "addressCountry": "IN"
      },
      "geo": {
  "@type": "GeoCoordinates",
  "latitude": 12.9819891,
  "longitude": 80.0295029
},
      "areaServed": [
        { "@type": "Place", "name": "Katrambakkam" },
        { "@type": "Place", "name": "Nandhambakkam" },
        { "@type": "Place", "name": "Thaiyur" },
        { "@type": "City", "name": "Chennai" }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z8WPKS6LLG"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-Z8WPKS6LLG');
          `}
        </Script>

        {/* Meta Pixel Code */}
        <Script id="facebook-pixel" strategy="lazyOnload">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '4454722991474025');
            fbq('track', 'PageView');
          `}
        </Script>


        
      </head>

      <body className={`${lora.className} ${poppins.variable}`}>
        {/* Meta Pixel NoScript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=4454722991474025&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <CountdownGate>
          <div className="min-h-screen flex-col">
          <header>
              <Navbar />
            </header>

            {/* <h1 className="hidden">
              CMDA & DTCP Approved Resale Plots and Residential Land in Chennai
            </h1> */}

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </CountdownGate>
      </body>
    </html>
  );
}
