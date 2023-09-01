import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

const eb_garamond = EB_Garamond({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-brandon",
});

export const metadata: Metadata = {
  title: "Illumina Therapy",
  description: "Ladan Radafshar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="stylesheet" href="https://use.typekit.net/chz2cor.css"></link>
      <body className={eb_garamond.variable}>{children}</body>
    </html>
  );
}
