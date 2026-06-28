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
        default: "KOI",
        template: "%s | KOI",
    },
    description:
        "KOI의 개발 포트폴리오이자 기술 블로그입니다. 웹을 만들며 남기는 기록과 의사결정을 담습니다.",
    openGraph: {
        title: "KOI",
        description:
            "KOI의 개발 포트폴리오이자 기술 블로그입니다. 웹을 만들며 남기는 기록과 의사결정을 담습니다.",
        url: "/",
        siteName: "KOI",
        locale: "ko_KR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
    },
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='ko' className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
            <body className='min-h-full flex flex-col bg-background text-foreground'>
                {children}
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
