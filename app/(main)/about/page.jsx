// Components
import Boilerplate from "@/components/Boilerplate";
import FadeUp from "@/components/FadeUp";

// Third party imports
import { ShieldCheckIcon, PieChartIcon } from "lucide-react";
import {
  MdArchitecture,
  MdInsights,
  MdOutlineHandshake,
  MdOutlineHistoryEdu,
} from "react-icons/md";
import { BiLock } from "react-icons/bi";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "About Us",
  description:
    "The Financial Atelier is more than a platform; it is a digital boutique dedicated to the art of wealth preservation, where meticulous manual curation replaces automated noise.",
  alternates: {
    canonical: "https://financialatelier.vercel.app/about",
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Financial Atelier",
      description:
        "The Financial Atelier is more than a platform; it is a digital boutique dedicated to the art of wealth preservation, where meticulous manual curation replaces automated noise.",
      url: "https://financialatelier.vercel.app",
      sameAs: [
        "https://github.com/Rahimsiddiqui/financialatelier",
        "https://x.com/FinanceAtelier",
        "https://linkedin.com/in/financialatelier",
      ],
    },
  };

  return (
    <>
      <Script
        id="about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Boilerplate
        title="Crafting a Legacy of"
        highlightedWord="Financial Precision"
        description="The Financial Atelier is more than a platform; it is a digital boutique dedicated to the art of wealth preservation, where meticulous manual curation replaces automated noise."
        includesCTA={true}
        CTATitle="Ready to Architect Your Epoch?"
        CTADescription="Doors are open to those who design their finances, not merely control them. Set the pace of your era."
      >
        {/* Philosophy Section */}
        <section className="container mt-10 px-6 sm:px-10 lg:px-15 py-24 lg:pb-28 bg-surface min-w-full">
          <div className="max-w-xl md:max-w-2xl lg:max-w-7xl text-left mx-auto grid lg:grid-cols-3 gap-12 md:gap-14 lg:gap-17">
            <div className="relative max-w-fit max-h-fit col-span-1 lg:sticky lg:top-30">
              <FadeUp
                as="h2"
                className="text-3xl md:text-4xl font-manrope font-bold mb-6 text-secondary"
              >
                Our Philosophy
              </FadeUp>

              <FadeUp
                as="span"
                className="absolute bottom-0 left-0 h-1 bg-primary rounded-md"
                initial={{ width: 0 }}
                whileInView={{ width: 100 }}
              />
            </div>

            <div className="flex flex-col justify-center items-start space-y-5 lg:col-span-2">
              <FadeUp
                as="h3"
                delay={0.2}
                className="text-xl md:text-2xl xl:text-3xl font-manrope font-bold text-secondary"
              >
                Manual Precision
              </FadeUp>

              <FadeUp
                as="p"
                delay={0.4}
                className="text-sm lg:text-base leading-relaxed text-secondary/80 lg:mt-2.5 xl:mt-4"
              >
                In an era of black-box algorithms and high-frequency trading, we
                choose the deliberate path. Our &quot;Manual Precision&quot;
                approach rejects the generalized automation of fintech in favor
                of human-led curation. Every portfolio is a bespoke composition,
                assembled with the same care a master watchmaker applies to a
                tourbillon.
              </FadeUp>

              <ul className="grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-8 md:gap-12 mt-7 md:mt-10 lg:mt-7">
                <FadeUp
                  as="li"
                  delay={0.2}
                  className="space-y-3 md:space-y-4 bg-surface-highlight p-6 xl:p-8 rounded-xl shadow-sm shadow-surface"
                >
                  <ShieldCheckIcon className="text-primary w-7 h-7 md:w-8 md:h-8" />

                  <h4 className="font-manrope text-base font-bold text-secondary mt-5 md:mt-6">
                    Meticulous Wealth Management
                  </h4>

                  <p className="text-sm leading-relaxed text-secondary/80">
                    We monitor the nuances of global shifts that data scrapers
                    miss, providing a layer of human intelligence to every
                    decision.
                  </p>
                </FadeUp>

                <FadeUp
                  as="li"
                  delay={0.3}
                  className="space-y-3 md:space-y-4 bg-surface-highlight p-6 xl:p-8 rounded-xl shadow-sm shadow-surface"
                >
                  <MdArchitecture className="text-primary w-7 h-7 md:w-8 md:h-8" />

                  <h4 className="font-manrope text-base font-bold text-secondary mt-5 md:mt-6">
                    Architectural Integrity
                  </h4>

                  <p className="text-sm leading-relaxed text-secondary/80">
                    Wealth is built over decades. Our structures are designed to
                    withstand market cycles with structural soundess and grace.
                  </p>
                </FadeUp>
              </ul>
            </div>
          </div>
        </section>

        {/* Atelier Difference Section */}
        <section className="container mt-10 px-6 sm:px-10 lg:px-15 pt-13 pb-20 lg:pb-24 max-w-xl md:max-w-2xl lg:max-w-7xl text-center mx-auto">
          <div className="flex flex-col justify-center items-center space-y-6">
            <FadeUp
              as="h2"
              delay={0.2}
              className="text-3xl md:text-4xl font-manrope font-bold text-secondary"
            >
              The Atelier Difference
            </FadeUp>

            <FadeUp
              as="p"
              delay={0.4}
              className="text-base text-secondary/80 max-w-2xl text-center"
            >
              Curating distinctive value and unmatched excellence for a
              sophisticated audience that recognizes and demands the highest
              standards
            </FadeUp>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-center mt-18 lg:mt-24">
            <FadeUp
              as="li"
              delay={0.5}
              className="space-y-5 bg-surface p-8 xl:px-10 rounded-xl shadow-sm shadow-surface text-left relative group overflow-hidden lg:col-span-2 h-fit lg:h-85 flex flex-col justify-center"
            >
              <MdOutlineHandshake className="absolute -bottom-13 lg:-bottom-16 -right-7 lg:-right-10 text-secondary opacity-4 w-45 h-45 lg:w-65 lg:h-65 group-hover:scale-115 transition-transform duration-400" />

              <div className="text-primary p-3 rounded-2xl bg-primary/10 max-w-fit">
                <PieChartIcon className="w-7 h-7" />
              </div>

              <h4 className="font-manrope text-xl lg:text-xl font-bold text-secondary lg:mt-1">
                Smart Expense Tracking
              </h4>

              <p className="text-sm lg:text-base leading-relaxed text-secondary/80 mb-8 max-w-lg">
                Automatically organize and monitor your spending in real time.
                Stay in control with clear insights into where your money
                goes—no manual effort required.
              </p>

              <Link
                href="/auth?mode=signup"
                className="rounded-lg text-sm sm:text-base px-10 sm:px-12 md:px-14 py-3.5 text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 font-bold font-manrope tracking-wide inline-block max-w-fit"
              >
                Get Started
              </Link>
            </FadeUp>

            <FadeUp
              as="li"
              delay={0.6}
              className="space-y-4 lg:space-y-5 bg-surface p-8 xl:px-10 rounded-xl shadow-sm shadow-surface text-left relative h-85 flex flex-col justify-center lg:justify-start"
            >
              <div className="text-primary p-3 rounded-2xl bg-primary/10 max-w-fit mb-5 lg:mb-6">
                <MdInsights className="w-7 h-7" />
              </div>

              <h4 className="font-manrope text-xl lg:text-xl font-bold text-secondary">
                Curated Insights
              </h4>

              <p className="text-sm lg:text-base leading-relaxed text-secondary/80">
                We don’t send generic updates. Instead, you receive “The Atelier
                Brief” — a focused, personalized breakdown of your spending
                patterns and financial activity.
              </p>
            </FadeUp>

            <FadeUp
              as="li"
              delay={0.2}
              className="bg-primary/90 dark:bg-blue-700/90 p-8 xl:px-10 rounded-xl shadow-sm shadow-primary/10 text-left h-85 flex flex-col justify-center"
            >
              <h4 className="font-manrope text-xl lg:text-2xl font-bold text-white">
                The Digital Concierge
              </h4>

              <p className="text-sm lg:text-base leading-relaxed text-white/90 mt-5 mb-8">
                Experience your wealth through an interface designed for
                clarity, not chaos.
              </p>

              <p className="h-0.5 bg-border/40 dark:bg-gray-500 w-full rounded-full mb-8"></p>

              <div className="grid grid-cols-4 justify-center items-center max-w-fit">
                <div className="p-2 rounded-full bg-surface-highlight/20 dark:bg-surface/70 max-w-fit col-span-1">
                  <BiLock className="w-5 h-5 text-white/90" />
                </div>

                <p className="col-span-3 text-white/90 text-sm leading-relaxed font-semibold">
                  Tier 1 Encryption Standard
                </p>
              </div>
            </FadeUp>

            <FadeUp
              as="li"
              delay={0.3}
              className="relative p-8 xl:px-10 rounded-xl shadow-sm shadow-surface text-left lg:col-span-2 h-85 flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-[url('/botique_perspective.avif')] bg-cover bg-center opacity-20 rounded-xl"></div>

              <div className="relative z-10 text-center">
                <h4 className="font-manrope text-2xl lg:text-3xl font-bold text-secondary mb-4 lg:mb-6">
                  The Botique Perspective
                </h4>

                <p className="text-sm lg:text-base leading-relaxed text-secondary/80 max-w-lg mx-auto">
                  We operate as a family, not a workshop. This allows us to
                  maintain the highest standards of architectural integrity in
                  every fund and asset class we recommend.
                </p>
              </div>
            </FadeUp>
          </ul>
        </section>

        {/* Our Story Section */}
        <section className="container mt-10 px-6 bg-surface sm:px-10 lg:px-15 py-22 lg:pb-26 mb-12 min-w-full">
          <div className="max-w-xl md:max-w-2xl lg:max-w-7xl text-center mx-auto">
            <div className="flex flex-col justify-center items-center space-y-5">
              <FadeUp delay={0.1}>
                <MdOutlineHistoryEdu className="text-tertiary dark:text-tertiary/90 w-10 h-10" />
              </FadeUp>

              <FadeUp
                as="h2"
                delay={0.2}
                className="text-3xl md:text-4xl font-manrope font-bold text-secondary"
              >
                Our Story
              </FadeUp>

              <FadeUp
                as="p"
                delay={0.4}
                className="text-base text-secondary/80 max-w-2xl text-center mt-1"
              >
                Finance Atelier was born from the realization that true wealth
                management isn&apos;t found in a spreadsheet, but in the nuance
                of human ambition.
              </FadeUp>
            </div>

            <ul className="space-y-10 justify-center items-center mt-18 lg:mt-24">
              <FadeUp
                as="li"
                delay={0.5}
                className="space-y-4 flex flex-row gap-6 sm:gap-10 justify-center items-start max-w-fit overflow-hidden mx-auto"
              >
                <div className="flex flex-col justify-center items-center space-y-4">
                  <span className="text-primary text-base text-manrope font-semibold leading-relaxed">
                    2026
                  </span>

                  <span className="h-30 lg:h-25 w-0.5 bg-primary/20 rounded-full"></span>
                </div>

                <div className="flex flex-col justify-center items-start space-y-4">
                  <h4 className="text-lg sm:text-xl font-manrope font-bold text-secondary">
                    The Financial Atelier
                  </h4>

                  <p className="text-sm min-[400px]:text-base text-secondary/80 text-left max-w-xl">
                    Today, Finance Atelier stands as the premier digital
                    boutique for the modern steward of wealth. We continue to
                    prioritize quality over volume, serving a select global
                    collective of individuals.
                  </p>
                </div>
              </FadeUp>

              <FadeUp
                as="li"
                delay={0.3}
                className="space-y-4 flex flex-row gap-6 sm:gap-10 justify-center items-start max-w-fit overflow-hidden mx-auto"
              >
                <div className="flex flex-col justify-center items-center space-y-4">
                  <span className="text-primary text-base text-manrope font-semibold leading-relaxed">
                    2025
                  </span>

                  <span className="h-30 lg:h-25 w-0.5 bg-primary/20 rounded-full"></span>
                </div>

                <div className="flex flex-col justify-center items-start space-y-4">
                  <h4 className="text-lg sm:text-xl font-manrope font-bold text-secondary text-left">
                    Refining the Precision Curator
                  </h4>

                  <p className="text-sm min-[400px]:text-base text-secondary/80 text-left max-w-xl">
                    We developed our proprietary human-in-the-loop intelligence
                    system, combining the speed of modern data with the seasoned
                    intuition of our algorithms.
                  </p>
                </div>
              </FadeUp>

              <FadeUp
                as="li"
                delay={0.4}
                className="space-y-4 flex flex-row gap-6 sm:gap-10 justify-center items-start max-w-fit overflow-hidden mx-auto"
              >
                <div className="flex flex-col justify-center items-center space-y-4">
                  <span className="text-primary text-base text-manrope font-semibold leading-relaxed">
                    2022
                  </span>

                  <span className="h-30 lg:h-25 w-0.5 bg-primary/20 rounded-full"></span>
                </div>

                <div className="flex flex-col justify-center items-start space-y-4">
                  <h4 className="text-lg sm:text-xl font-manrope font-bold text-secondary">
                    The Concept
                  </h4>

                  <p className="text-sm min-[400px]:text-base text-secondary/80 text-left max-w-xl">
                    Founded in a small Pakistani Hostel room, our team began as
                    an advisory collective for families who found traditional
                    banking too rigid and automated platforms too impersonal.
                  </p>
                </div>
              </FadeUp>
            </ul>
          </div>
        </section>
      </Boilerplate>
    </>
  );
}
