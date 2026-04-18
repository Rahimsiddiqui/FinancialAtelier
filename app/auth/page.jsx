export const metadata = {
  title: "Financial Atelier | Authentication",
  description:
    "Authentication portal for Financial Atelier. Securely sign in or create your account to access personalized financial tools, manage your data, and explore tailored insights.",
  alternates: {
    canonical: "https://financialatelier.vercel.app/auth",
  },
};

import AuthClient from "./AuthClient";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Financial Atelier Authentication",
    url: "https://financialatelier.vercel.app/auth",
    description:
      "Authentication portal for Financial Atelier. Securely sign in or create your account to access personalized financial tools, manage your data, and explore tailored insights.",
    isPartOf: {
      "@type": "WebSite",
      name: "Financial Atelier",
      url: "https://financialatelier.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Financial Atelier",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <AuthClient />
    </>
  );
}
