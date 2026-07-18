import type { Metadata } from "next";
import { Gowun_Batang } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/data/site";
import "./globals.css";

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun",
  subsets: ["latin"],
  weight: ["400", "700"],
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
      className={`${gowunBatang.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col font-body text-deep-teal">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
