"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl w-full text-center space-y-8 bg-[#1a1a2e] text-white p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-serif">
          Discover Your Cosmic Path
        </h1>
        <p className="text-xl text-gray-300">
          Unlock the secrets written in the stars and understand your true
          destiny
        </p>
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          href="/onboarding/form"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-[#556cd6] text-white gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Discover your inner self
        </Link>
      </div>
    </div>
  );
}
