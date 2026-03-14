import type { Metadata } from "next";
import { Orbitron, Roboto, Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${orbitron.variable} ${roboto.variable} ${outfit.variable} antialiased selection:bg-accent selection:text-black`}
      >
        <SmoothScroll>
          <NetworkBackground />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
