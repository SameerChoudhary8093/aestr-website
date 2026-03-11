import type { Metadata } from "next";
import { Orbitron, Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";
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
        className={`${orbitron.variable} ${roboto.variable} antialiased selection:bg-accent selection:text-black`}
      >
        <SmoothScroll>
          <NetworkBackground />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
