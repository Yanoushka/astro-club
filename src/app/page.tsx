import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl w-full text-center space-y-8">
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="relative">
            {/* Logo */}
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Discover Your Cosmic Path
        </h1>
        <p className="text-xl text-muted-foreground">
          Unlock the secrets written in the stars and understand your true
          destiny
        </p>
      </div>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <Link
          href="/onboarding/form"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Discover your inner self
        </Link>
      </div>
    </div>
  );
}
