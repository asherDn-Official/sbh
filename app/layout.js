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

export const metadata = {
  title: "CMDA & DTCP Approved Resale Plots Chennai | Clear Title | Sri Balaji Homes",
  description:
    "Buy CMDA & DTCP approved resale plots in Chennai. Premium plots by Sri Balaji Homes in Kattrambakkam, Nandhambakkam & Thaiyur. Enquire today!",

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },

  alternates: {
    canonical: "https://www.sribalajihomes.in",
  },

  verification: {
    other: {
      "msvalidate.01": "E028FAAE6388F723E1604A29FB6F8456",
      "google-site-verification": "M1i2Jo7DjmrLG-bPTP7M6ESyKr7b2rEOIh7LuBt2A1Y",
    },
  },

  themeColor: "#ffffff",

  openGraph: {
    title: "Approved Resale Plots in Chennai | Sri Balaji Homes",
    description:
      "Buy CMDA & DTCP approved resale plots in Chennai directly from Sri Balaji Homes. Premium land in Kattrambakkam, Nandhambakkam & Thaiyur. Zero brokerage!",

    url: "https://sribalajihomes.in",

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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />

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
        <Script id="facebook-pixel" strategy="afterInteractive">
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


        <Script id="local-business-schema" type="application/ld+json" strategy="afterInteractive">
  {`
    {
      "@context": "https://schema.org",
      "@type": "RealEstateAgent",
      "name": "Sri Balaji Homes",
      "image": "https://www.sribalajihomes.in/android-chrome-512x512.png",
      "telephone": ["+917200940777", "+916384000006"],
      "email": "info.sribalajihomes@gmail.com",
      "url": "https://www.sribalajihomes.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "A.S. Mani Garden, Plot No. 143, Pallavan Nagar, Katrambakkam",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "602103",
        "addressCountry": "IN"
      }
    }
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
            <Navbar />

            <h1 className="hidden">
              CMDA & DTCP Approved Resale Plots and Residential Land in Chennai
            </h1>

            <main className="flex-1">{children}</main>

            <Footer />
          </div>
        </CountdownGate>
      </body>
    </html>
  );
}
