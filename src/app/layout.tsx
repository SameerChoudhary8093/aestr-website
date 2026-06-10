import type { Metadata } from "next";
import { Orbitron, Outfit, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { buildGlobalSchemaGraph } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";
import "./globals.css";
import UrgencyPopup from "@/components/UrgencyPopup";
import NetworkBackgroundWrapper from "@/components/NetworkBackgroundWrapper";


const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AESTR | Best B.Tech CSE in Jaipur | 2026 Admissions Open!",
    template: "%s",
  },
  description:
    "Don't just earn a degree - build the future. AESTR at SGVU offers AI-driven learning, real-world projects & industry mentorship for future tech leaders. Apply Now!",
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
        <JsonLd data={buildGlobalSchemaGraph()} />
        {/* <UrgencyPopup /> */}
        <SmoothScroll>
          <NetworkBackgroundWrapper />
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
        <Analytics />

        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X2P12978SV"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
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
// Final production build trigger - June 9, 2026
