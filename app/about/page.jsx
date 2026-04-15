import Script from "next/script";

export const metadata = {
  title: "Financial Atelier | About Us",
  description:
    "The Financial Atelier is more than a platform; it is a digital boutique dedicated to the art of wealth preservation, where meticulous manual curation replaces automated noise.",
  alternates: {
    canonical: "https://financial-atelier.vercel.app/about",
  },
};

import AboutClient from "./AboutClient";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Financial Atelier",
      description:
        "The Financial Atelier is more than a platform; it is a digital boutique dedicated to the art of wealth preservation, where meticulous manual curation replaces automated noise.",
      url: "https://financial-atelier.vercel.app",
      sameAs: [
        "https://github.com/Rahimsiddiqui/Financial-Atelier",
        "https://x.com/rahimdeveloper",
        "https://linkedin.com/in/rahimdeveloper",
      ],
    },
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AboutClient />
    </>
  );
}
