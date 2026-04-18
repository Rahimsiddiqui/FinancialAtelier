export const metadata = {
  title: "Financial Atelier | Expense Tracker & Budgeting Tool",
  description:
    "Master your wealth with Financial Atelier. Experience an editorial approach to expense tracking, budgeting, and wealth building with precision-engineered tools. Join 120,000+ users designing a smarter financial future for free.",
  alternates: {
    canonical: "https://financialatelier.vercel.app",
  },
};

import LandingPageClient from "./LandingPageClient";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Financial Atelier",
    description:
      "Master your wealth with Financial Atelier. Experience an editorial approach to expense tracking, budgeting, and wealth building with precision-engineered tools. Join 120,000+ users designing a smarter financial future for free.",
    url: "https://financialatelier.vercel.app",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <LandingPageClient />
    </>
  );
}
