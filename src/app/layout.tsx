import type { Metadata, Viewport } from "next";
import { sansFont, serifFont } from "@/lib/fonts";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#081813",
};

export const metadata: Metadata = {
  title: "Viet Le — Renewable Energy Professional",
  description:
    "Professional portfolio focused on renewable energy, Solar PV, BESS and project development.",
  keywords: [
    "Renewable Energy",
    "Solar PV",
    "BESS",
    "Battery Energy Storage Systems",
    "Project Development",
    "Viet Le",
    "Vietnam Energy Transition",
  ],
  authors: [{ name: "Viet Le" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#081813] text-[#FBFCFD] antialiased font-sans flex flex-col selection:bg-[#114A1A] selection:text-[#FBFCFD]">
        {children}
      </body>
    </html>
  );
}
