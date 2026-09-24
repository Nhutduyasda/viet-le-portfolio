import { Manrope, Newsreader } from "next/font/google";

export const sansFont = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const serifFont = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});
