import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { fallbackContent } from "@/lib/content";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: fallbackContent.seoTitle,
    template: `%s · ${fallbackContent.brand}`,
  },
  description: fallbackContent.seoDescription,
  openGraph: {
    title: fallbackContent.seoTitle,
    description: fallbackContent.seoDescription,
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
