import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { Lora } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CountdownGate from "./components/CountdownGate";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
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
export const metadata = {
  title: "SBH",
  description: "Static Next.js landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lora.className} ${poppins.variable}`}>
        <CountdownGate>
          <div className="min-h-screenflex flex-col">
            <Navbar />
            <main className="flex-1 ">{children}</main>
            <Footer />
          </div>
        </CountdownGate>
      </body>
    </html>
  );
}
