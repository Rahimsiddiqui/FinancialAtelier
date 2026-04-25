// Components
import Boilerplate from "@/components/Boilerplate";
import FadeUp from "@/components/FadeUp";

// Third party imports
import Script from "next/script";

export const metadata = {
  title: "Opensource",
  description: "Description",
  alternates: {
    canonical: "https://financialatelier.vercel.app/opensource",
  },
};

export default function Page() {
  const jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Financial Atelier",
      "description": "Description",
      "publisher": {
        "@type": "Organization",
        "name": "Financial Atelier",
      }
    };

  return (
      <>
        <Script
          id="opensource-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Boilerplate
          title="Title"
          highlightedWord="Highlighted Word"
          titleSuffix="Title Suffix"
          description="Description"
          includesCTA={false}
       ></Boilerplate>
      </>
    );
}