import { cn } from "@/utils/classnames";
import "./globals.css";
import { clashDisplay, jetbrainsMono } from "./fonts/index";

export const metadata = {
  title: "secona",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(clashDisplay.variable, jetbrainsMono.className, "min-h-screen bg-black text-white")}>
        {children}
      </body>
    </html>
  );
}
