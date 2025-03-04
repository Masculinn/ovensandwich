import { Bodoni_Moda, Inter } from "next/font/google";

export const primaryFont = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
});

export const secondaryFont = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-secondary",
});
