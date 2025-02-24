"use client";

import AstroForm from "../../components/astro-boarding/astro-form";

export default function FormPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5 flex items-center justify-center p-4">
      <div>
        <AstroForm></AstroForm>
      </div>
    </div>
  );
}
