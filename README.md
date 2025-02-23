This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Context

Why This Case Study?

This scenario simulates real-world challenges:

Creating a multi-step funnel with persistent data.
Building customized, data-driven user interfaces.
Integrating a third-party payment gateway securely.
Matching the innovative and advanced approaches of our competitors.
Candidates should be able to explain their design decisions, demonstrate how they handle data persistence across pages, and show the stripe integration in a clean, scalable Next.js codebase.

Objective: Build a Next.js application that guides users through a three-step funnel:

Onboarding Step 1: Collect basic data (e.g., birth date and location).
Onboarding Step 2: Collect additional details (e.g., time of birth and preferences).
Customized Insights & Paywall: Display a personalized horoscope preview based on the entered data. Then, offer a paywall integrated with Stripe to unlock full, detailed insights.

Flow Details:

Page 1 – Onboarding: Basic Information
Create a form to capture the user's birth date and location.
Validate inputs (e.g., proper date format, non-empty fields).
On submission, navigate to the next step and persist the data (e.g., using Next.js state management or Context API).

Page 2 – Onboarding: Additional Details

Gather further inputs such as time of birth and perhaps a preference (e.g., “Which area of your life interests you most today?”).
Validate these fields and combine the data with the first step’s inputs.
On submission, transition to the customized insights page.

Page 3 – Customized Insights & Paywall
Use the collected data to render a personalized astrology preview (for example, “Your stars suggest that today you’ll have a moment of clarity…”). You can use a random free horoscope API, the content result itself is not important, the customisation is more.
Display a partial insight with a clear call-to-action like “Unlock Full Insights”.
Integrate Stripe (in Sandbox or Test mode) so that when the user clicks the button, they can securely pay to reveal the complete horoscope details.
Upon successful payment, display the unlocked insights (this can be simulated for the case study).
Technical Requirements:

Use Next.js for server-side rendering and routing between pages.
Manage state across pages (using React state or Context API) to persist user data through the funnel.
Implement secure Stripe integration for the paywall—demonstrate a working payment flow (even if it’s in test mode).
Focus on mobile responsiveness and a smooth, intuitive user experience.