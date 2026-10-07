import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({ variable: "--font-heading", subsets: ["latin"], display: "swap" });
const manrope = Manrope({ variable: "--font-body", subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Photo Receipt by Lyven",
  description: "Foto bergaya receipt untuk café, event, dan ruang kreatifmu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
