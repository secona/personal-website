import "./global.scss";
import { Space_Grotesk } from "next/font/google";

const plusJakartaSans = Space_Grotesk({ subsets: ["latin"] });

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
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  );
}
