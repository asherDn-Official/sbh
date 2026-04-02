  import { Geist, Geist_Mono, Poppins } from "next/font/google";
  import "./globals.css";
  import { Lora } from "next/font/google";
  import Navbar from "./components/Navbar";
  import Footer from "./components/Footer";
  import CountdownGate from "./components/CountdownGate";
  import Script from "next/script";
  const geistSans = Geist_Mono({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  // const geistMono = Geist_Mono({
  //   variable: "--font-geist-mono",
  //   subsets: ["latin"],
  // });
  const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // choose the weights you need
    variable: "--font-poppins",
  });




  // Load Lora font (adjust weights as needed)
  const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"], // choose what you need
  });
  // export const metadata = {
  //   title: "Sri Balaji Homes",
  //   description: "You see Land, We See Plan",
  // };

  export const metadata = {
    title: "Approved Resale Plots in Chennai | Sri Balaji Homes ",
    description: "Buy CMDA & DTCP approved resale plots in Chennai directly from Sri Balaji Homes. Premium land in Kattrambakkam, Nandhambakkam & Thaiyur. Zero brokerage!",
    icons: {
      icon: "/favicon.ico", // Browser tab icon
      apple: "/favicon.ico", // iOS shortcut icon
      shortcut: "/favicon.ico",
    },
    alternates: {
      canonical: "https://www.sribalajihomes.in",
    },
    verification: {
    other: {
      "msvalidate.01": "E028FAAE6388F723E1604A29FB6F8456",
    },
  },
    //manifest: "/site.webmanifest", // PWA manifest file
    themeColor: "#ffffff", // Optional - matches manifest background
    openGraph: {
      title: "Approved Resale Plots in Chennai | Sri Balaji Homes",
      description:
        "Buy CMDA & DTCP approved resale plots in Chennai directly from Sri Balaji Homes. Premium land in Kattrambakkam, Nandhambakkam & Thaiyur. Zero brokerage!",
      url: "https://sribalajihomes.in",
      siteName: "Sri Balaji Homes",
      images: [
        {
          url: "/android-chrome-512x512.png",
          width: 496,
          height: 496,
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
         <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-S78652KV33"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-S78652KV33');
  `}
</Script>
          {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        </head>
        <body className={`${lora.className} ${poppins.variable}`}>
          <CountdownGate>
            <div className="min-h-screen flex-col">
              <Navbar />
              <h1 className="hidden">CMDA & DTCP Approved Resale Plots and Residential Land in Chennai</h1>
              <main className="flex-1 ">{children}</main>
              <Footer />
            </div>
          </CountdownGate>
        </body>
      </html>
    );
  }
