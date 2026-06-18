import type { Metadata } from "next";
import {
  Inter,
  Libre_Bodoni,
  Montserrat,
} from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const libreBodoni = Libre_Bodoni({
  subsets: ["latin"],
  variable: "--font-libre",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Photo Journey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${inter.variable}
          ${libreBodoni.variable}
          ${montserrat.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}