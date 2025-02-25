"use client";

import { Geist, Geist_Mono } from "next/font/google";
import ResponsiveAppBar from "./components/shared/header";
import "./globals.css";
import { Typography } from "@mui/joy";

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1a1a2e] text-white overflow-x-hidden`} // Prevent horizontal scroll
      >
        <ResponsiveAppBar />

        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-4 sm:px-8 lg:px-16">
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {children}
          </main>
        </div>

        <footer className="bg-[#23234d] py-4 text-center w-full">
          <Typography variant="body2" color="white">
            &copy; Luni - Made with love
          </Typography>
        </footer>
      </body>
    </html>
  );
}
