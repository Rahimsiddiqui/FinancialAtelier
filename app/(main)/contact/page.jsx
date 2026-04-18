export const metadata = {
  title: "Financial Atelier | Contact Us",
  description:
    "Have questions about wealth curation? Contact the Financial Atelier team today for personalized advisory, technical support, and bespoke financial strategies.",
  alternates: {
    canonical: "https://financialatelier.vercel.app/contact",
  },
};

import ContactClient from "./ContactClient";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Financial Atelier",
    url: "https://financialatelier.vercel.app",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "financialatelier.support@gmail.com",
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
        item: "https://financialatelier.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://financialatelier.vercel.app/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />

      <ContactClient />
    </>
  );
}
