import Script from "next/script";

export const metadata = {
  title: "Financial Atelier | Contact Us",
  description:
    "Have questions about wealth curation? Contact the Financial Atelier team today for personalized advisory, technical support, and bespoke financial strategies.",
  alternates: {
    canonical: "https://financial-atelier.vercel.app/contact",
  },
};

import ContactClient from "./ContactClient";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Financial Atelier",
    url: "https://financial-atelier.vercel.app",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "financial-atelier.support@gmail.com",
      availableLanguage: "en",
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://financial-atelier.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://financial-atelier.vercel.app/contact",
      },
    ],
  };

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <ContactClient />
    </>
  );
}
