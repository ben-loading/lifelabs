import type { Metadata } from "next";
import { Noto_Serif_SC, Inter } from "next/font/google";
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
  title: "Lifelabs - 人生实验室 | 探索生命的编码",
  description:
    "结合八字、紫微斗数等传统智慧与现代科学，帮助你探索自我、提升幸福感。不是迷信，而是你的生命工程学。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body
        className={`${notoSerifSC.variable} ${inter.variable} font-serif antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
