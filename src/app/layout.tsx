import type { Metadata } from "next";
import { Cinzel, Jost } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${cinzel.variable} ${jost.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col font-body text-deep-teal">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
