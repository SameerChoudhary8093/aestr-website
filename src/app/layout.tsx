import type { Metadata } from "next";
import { Orbitron, Outfit, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NetworkBackground from "@/components/NetworkBackground";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import UrgencyPopup from "@/components/UrgencyPopup";


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
  metadataBase: new URL("https://aestr.gyanvihar.org"),
  title: "AESTR: Best Computer Science Engineering College in India",
  description: "AESTR by Gyan Vihar is a premier Computer Science Engineering residency in India. Stop studying, start building with our Silicon Valley-style incubator.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "EPNBdUPqa_hL7njRbItRI1ZcVPTYBfg8SjVs6llamks",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${outfit.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-black relative w-full max-w-[100vw] overflow-x-hidden`}>
        {/* <UrgencyPopup /> */}
        <SmoothScroll>
          <NetworkBackground />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <Analytics />

        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X2P12978SV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X2P12978SV');
            window.gtag = gtag;
          `}
        </Script>
      </body>
    </html>
  );
}
