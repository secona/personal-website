import { cn } from "@/utils/classnames";
import { clashDisplay, jetbrainsMono } from "./fonts/index";
import "./globals.css";

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
      <body
        className={cn(
          clashDisplay.variable,
          jetbrainsMono.className,
          "w-full bg-black text-white overflow-x-hidden"
        )}
      >
        {children}
      </body>
    </html>
  );
}
