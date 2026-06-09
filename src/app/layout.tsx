import type { Metadata } from "next";
import { Orbitron, Outfit, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
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
  metadataBase: new URL("https://aestr.gyanvihar.org"),
  title: "AESTR | Best B.Tech CSE in Jaipur | 2026 Admissions Open!",
  description: "Don't just earn a degree - build the future. AESTR at SGVU offers AI-driven learning, real-world projects & industry mentorship for future tech leaders. Apply Now!",
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

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://aestr.gyanvihar.org/#organization",
      "name": "AESTR by Suresh Gyan Vihar University",
      "url": "https://aestr.gyanvihar.org",
      "logo": "https://aestr.gyanvihar.org/Herosection/by-gyan-vihar-2-neon.png",
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61575961450718",
        "https://www.linkedin.com/company/aestr/",
        "https://www.instagram.com/aestr.gyanvihar/"
      ]
    },
    {
      "@type": "Course",
      "@id": "https://aestr.gyanvihar.org/#course",
      "name": "B.Tech in Computer Science and Engineering (CSE)",
      "description": "An advanced B.Tech Computer Science and Engineering program offered by AESTR Suresh Gyan Vihar University with AI and Machine Learning integration.",
      "provider": {
        "@type": "EducationalOrganization",
        "@id": "https://aestr.gyanvihar.org/#organization"
      },
      "educationalCredentialAwarded": "B.Tech in Computer Science and Engineering"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${orbitron.variable} ${outfit.variable} ${playfair.variable} antialiased selection:bg-accent selection:text-black relative w-full max-w-[100vw] overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
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
