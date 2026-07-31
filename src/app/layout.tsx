import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://koi-dev.vercel.app"),
  title: {
    default: "KOI — 전우영 | Product Engineer",
    template: "%s | KOI",
  },
  description:
    "제품 문제를 실제 동작하는 서비스로 연결하는 Product Engineer 전우영의 포트폴리오이자 기술 블로그입니다.",
  openGraph: {
    title: "KOI — 전우영 | Product Engineer",
    description:
      "제품 문제를 실제 동작하는 서비스로 연결하는 Product Engineer 전우영의 포트폴리오이자 기술 블로그입니다.",
    url: "/",
    siteName: "KOI",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "XvQHa0nRZ7V5nqLS8ORbUf7-EtfGAfgCz4SSpvmHm0U",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
