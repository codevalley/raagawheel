import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RaagaWheel — Carnatic raga explorer",
    template: "%s · RaagaWheel",
  },
  description:
    "Explore the 72 melakarta ragas, swara variants, patterns, and popular janyas — a visual systems chart for curious minds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${ibmPlexMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
