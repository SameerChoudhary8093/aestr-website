
import { Analytics } from "@vercel/analytics/next"import type { Metadata } from "next";
import { Orbitron, Outfit, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";



const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "AESTR: Best Computer Science Engineering College in India",
  description: "A modern, futuristic web application inspired by Aestr Alpha",
  icons: {
    icon: "/Favicon-image.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${outfit.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-black`}>
        <SmoothScroll>
          <NetworkBackground />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        export default function RootLayout({children}) {
  return (
        <html lang="en">
          <body>
            {children}
          </body>

        </html>
        );
}

