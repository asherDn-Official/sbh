import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Lora } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CountdownGate from "./components/CountdownGate";
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
  title: "Sri Balaji Homes",
  description: "You see Land, We See Plan",
  icons: {
    icon: "/favicon.ico", // Browser tab icon
    apple: "/favicon.ico", // iOS shortcut icon
    shortcut: "/favicon.ico",
  },
  //manifest: "/site.webmanifest", // PWA manifest file
  themeColor: "#ffffff", // Optional - matches manifest background
  openGraph: {
    title: "Sri Balaji Homes",
    description:
      "Discover DTCP and CMDA-approved residential plots in peaceful locations. You see Land, We See Plan.",
    url: "https://sribalajihomes.in",
    siteName: "Sri Balaji Homes",
    images: [
      {
        url: "/android-chrome-512x512.png",
        width: 512,
        height: 512,
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
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
      </head>
      <body className={`${lora.className} ${poppins.variable}`}>
        <CountdownGate>
          <div className="min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 ">{children}</main>
            <Footer />
          </div>
        </CountdownGate>
      </body>
    </html>
  );
}
