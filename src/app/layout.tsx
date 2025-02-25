"use client";

import { Geist, Geist_Mono } from "next/font/google";
import ResponsiveAppBar from "./components/shared/header";
import "./globals.css";
import FooterAppBar from "./components/shared/footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1a1a2e] text-white overflow-x-hidden flex flex-col h-screen`}
      >
        <ResponsiveAppBar />

        <div className="flex-grow flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16">
          <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
            {children}
          </main>
        </div>

        <FooterAppBar />
      </body>
    </html>
  );
}
