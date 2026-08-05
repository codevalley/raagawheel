import type { Metadata } from "next";
import { Anek_Latin, Eczar } from "next/font/google";
import { SiteHeader } from "@/components/SiteHeader";
import { SoundBar } from "@/components/audio/SoundBar";
import "./globals.css";

const eczar = Eczar({
  variable: "--font-eczar",
  subsets: ["latin"],
  display: "swap",
});

const anek = Anek_Latin({
  variable: "--font-anek",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "RagaWheel — every raga has an address",
    template: "%s · RagaWheel",
  },
  description:
    "The 72 melakarta ragas of Carnatic music and their janyas — hear the scales, see the swara variants, decode the names, and chase down the songs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${eczar.variable} ${anek.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-12 font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SoundBar />
      </body>
    </html>
  );
}
