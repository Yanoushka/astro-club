"use client";

import AstroResume from "@/app/components/astro-boarding/astro-resume";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 flex items-center justify-center p-4">
      <div>
        <AstroResume />
      </div>
    </div>
  );
}
