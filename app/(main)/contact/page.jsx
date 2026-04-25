// Components
import Boilerplate from "@/components/Boilerplate";
import FadeUp from "@/components/FadeUp";

// Client Component
import ContactForm from "./ContactForm";

// Third party imports
import { Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import Script from "next/script";

export const metadata = {
  title: "Contact Us",
  description:
    "Have questions about wealth curation? Contact the Financial Atelier team today for personalized advisory, technical support, and bespoke financial strategies.",
  alternates: {
    canonical: "https://financialatelier.vercel.app/contact",
  },
};

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

  return (
    <>
      <Script
        id="contact-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Boilerplate
        title="Let's Discuss Your"
        highlightedWord="Financial Future"
        description="Have questions about wealth curation? Contact the Financial Atelier team today for personalized advisory, technical support, and bespoke financial strategies."
        includesCTA={false}
      >
        {/* Contact Section */}
        <section className="container mx-auto max-w-xl md:max-w-2xl lg:max-w-7xl mt-10 px-4 lg:px-15 pb-16 text-left grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          <div className="flex flex-col justify-center items-center flex-1 w-full lg:col-span-2 bg-surface px-5 sm:px-12 py-12 sm:pt-16 rounded-2xl">
            <div className="text-center mb-10 sm:mb-13 md:mb-15 lg:mb-13 space-y-5 sm:space-y-6">
              <FadeUp
                as="h2"
                delay={0.5}
                className="font-manrope font-bold text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl leading-tight text-secondary"
              >
                Get in Touch
              </FadeUp>

              <FadeUp
                as="p"
                delay={0.6}
                className="text-sm text-secondary/80 max-w-md lg:max-w-lg"
              >
                Complete the form below and a senior advisor will contact you
                within 4 business days.
              </FadeUp>
            </div>

            <ContactForm />
          </div>

          <div className="flex flex-col justify-center lg:justify-start items-center flex-1 w-full lg:col-span-1 bg-surface-highlight dark:bg-surface-highlight/70 px-5 sm:px-12 py-12 sm:pt-16 lg:pt-16 lg:pb-20 rounded-2xl max-h-fit">
            <div className="text-center lg:text-left mb-8 sm:mb-9">
              <FadeUp
                as="h3"
                delay={0.4}
                className="font-manrope font-bold text-xl min-[400px]:text-2xl leading-tight text-secondary"
              >
                Direct Contact
              </FadeUp>
            </div>

            <ul className="text-sm text-secondary/80 space-y-4 lg::w-full">
              <FadeUp
                as="li"
                delay={0.5}
                className="flex gap-3 justify-start items-center"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 dark:bg-primary/8 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href="mailto:financialatelier.support@gmail.com"
                  className="text-secondary/80 text-[0.8rem] md:text-[0.85rem] font-manrope font-bold hover:text-primary transition-colors"
                >
                  financialatelier.support@gmail.com
                </a>
              </FadeUp>

              <FadeUp
                as="li"
                delay={0.6}
                className="flex gap-3 justify-start items-center"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 dark:bg-primary/8 flex items-center justify-center text-primary">
                  <SiX className="w-5 h-5" />
                </div>
                <a
                  href="https://x.com/FinanceAtelier"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-secondary/80 text-[0.8rem] md:text-[0.85rem] font-manrope font-bold hover:text-primary transition-colors"
                >
                  @FinanceAtelier
                </a>
              </FadeUp>

              <FadeUp
                as="li"
                delay={0.5}
                className="flex gap-3 justify-start items-center"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 dark:bg-primary/8 flex items-center justify-center text-primary">
                  <FaLinkedin className="w-5 h-5" />
                </div>
                <a
                  href="https://www.linkedin.com/in/financialatelier"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-secondary/80 text-[0.8rem] md:text-[0.85rem] font-manrope font-bold hover:text-primary transition-colors"
                >
                  linkedin.com/in/financialatelier
                </a>
              </FadeUp>
            </ul>
          </div>
        </section>
      </Boilerplate>
    </>
  );
}
