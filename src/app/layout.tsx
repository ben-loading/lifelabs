import type { Metadata } from "next";
import { Noto_Serif_SC, Inter } from "next/font/google";
import { LocaleProvider } from "@/contexts/locale-context";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-cn",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lifelabs - 人生實驗室 | 探索生命的編碼",
  description:
    "結合八字、紫微斗數等傳統智慧與現代科學，幫助你探索自我、提升幸福感。不是迷信，而是你的生命工程學。",
  openGraph: {
    title: "Lifelabs - 人生實驗室 | 探索生命的編碼",
    description:
      "結合八字、紫微斗數等傳統智慧與現代科學，幫助你探索自我、提升幸福感。不是迷信，而是你的生命工程學。",
    locale: "zh_Hant",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" suppressHydrationWarning>
      <body
        className={`${notoSerifSC.variable} ${inter.variable} font-serif antialiased`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
