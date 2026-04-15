import Script from "next/script";

export const metadata = {
  title: "Financial Atelier | Features",
  description:
    "Explore Financial Atelier's features: Real-time expense tracking, spending pattern analysis, and personal wealth management tools designed for clarity and control.",
  alternates: {
    canonical: "https://financial-atelier.vercel.app/features",
  },
};

import FeaturesClient from "./FeaturesClient";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Financial Atelier",
    operatingSystem: "Web",
    applicationCategory: "FinanceApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Real-time expense and transaction tracking",
      "Automated intelligent budgeting tools",
      "Advanced financial analytics and data visualization",
      "Bank-grade secure data synchronization",
    ],
  };

  return (
    <>
      <Script
        id="features-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <FeaturesClient />
    </>
  );
}
