import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";

export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export const clashDisplay = localFont({
  src: "./ClashDisplay-Medium.woff2",
  variable: "--clash-display",
})
