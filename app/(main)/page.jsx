import { Wallet } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

// Components
import Boilerplate from "@/components/Boilerplate";
import FadeUp from "@/components/FadeUp";

// Client side component
import LandingPageStats from "./LandingPageStats";

export const metadata = {
  title: "Expense Tracker & Budgeting Tool",
  description:
    "Master your wealth with Financial Atelier. Experience an editorial approach to expense tracking, budgeting, and wealth building with precision-engineered tools. Join 120,000+ users designing a smarter financial future for free.",
  alternates: {
    canonical: "https://financialatelier.vercel.app",
  },
};

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
      <Script
        id="home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Boilerplate
        landingPage={true}
        badge="Premium Finance — Now Free for Everyone"
        title="Master Your"
        highlightedWord="Wealth"
        titleSuffix="With Precision"
        description="A digital concierge for your personal economy. Experience an editorial approach to budgeting, tracking, and growth."
        includesCTA={true}
        CTATitle="Ready to design your destiny?"
        CTADescription="Join the elite circle of individuals who manage their finances with the precision of an artisan. Completely free."
      >
        {/* Stats Section (Client Side) */}
        <LandingPageStats />

        {/* About Project Section */}
        <section className="w-full bg-surface transition-colors duration-300 ease px-4 mt-14 md:mt-19 lg:mt-24 py-18 md:py-22 lg:py-24 lg:px-15">
          <div className="container mx-auto max-w-md md:max-w-lg lg:max-w-7xl text-center">
            <div>
              <FadeUp
                as="h2"
                className="text-[1.4rem] sm:text-3xl md:text-4xl font-extrabold font-manrope leading-widest"
              >
                The Atelier Experience
              </FadeUp>

              <FadeUp
                as="p"
                delay={0.2}
                className="text-sm sm:text-base mt-5 sm:mt-6 md:mt-6.5"
              >
                Precision-engineered tools to help you curate your financial
                future with absolute clarity.
              </FadeUp>
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-9 mt-13 lg:mt-16">
              <FadeUp
                as="li"
                delay={0.3}
                className="flex flex-col bg-surface-highlight p-8 rounded-3xl space-y-6 shadow-sm transition-colors duration-300 ease"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 dark:text-blue-400 flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    height="28"
                    viewBox="0 0 24 24"
                    width="28"
                    className="fill-current"
                  >
                    <rect fill="none" height="24" width="24" />
                    <g>
                      <path d="M14.06,9.94L12,9l2.06-0.94L15,6l0.94,2.06L18,9l-2.06,0.94L15,12L14.06,9.94z M4,14l0.94-2.06L7,11l-2.06-0.94L4,8 l-0.94,2.06L1,11l2.06,0.94L4,14z M8.5,9l1.09-2.41L12,5.5L9.59,4.41L8.5,2L7.41,4.41L5,5.5l2.41,1.09L8.5,9z M4.5,20.5l6-6.01l4,4 L23,8.93l-1.41-1.41l-7.09,7.97l-4-4L3,19L4.5,20.5z" />
                    </g>
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-manrope font-bold text-base sm:text-lg leading-widest">
                    Simplify your finances
                  </h3>
                  <p className="text-sm mt-4">
                    Consolidate your accounts into a single, elegant stream of
                    data. No more toggling between banks.
                  </p>
                </div>
              </FadeUp>

              <FadeUp
                as="li"
                delay={0.4}
                className="flex flex-col bg-surface-highlight p-8 rounded-3xl space-y-6 shadow-sm transition-colors duration-300 ease"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-gray-600 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search-alert-icon lucide-search-alert"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M11 7v4" />
                    <path d="M11 15h.01" />
                  </svg>
                </div>
                <div className="text-left">
                  <h3 className="font-manrope font-bold text-base sm:text-lg leading-widest">
                    Track every penny
                  </h3>
                  <p className="text-sm mt-4">
                    Granular categorization that adapts to your unique
                    lifestyle. From artisan coffee to mortgage payments, see it
                    all clearly.
                  </p>
                </div>
              </FadeUp>

              <FadeUp
                as="li"
                delay={0.5}
                className="flex flex-col bg-surface-highlight p-8 rounded-3xl space-y-6 shadow-sm transition-colors duration-300 ease"
              >
                <div className="w-14 h-14 rounded-2xl bg-tertiary/10 flex items-center justify-center text-tertiary dark:text-tertiary/90">
                  <Wallet className="w-7 h-7" />
                </div>
                <div className="text-left">
                  <h3 className="font-manrope font-bold text-base sm:text-lg leading-widest">
                    Build your savings
                  </h3>
                  <p className="text-sm mt-4">
                    Professional wealth building tools that work at your
                    direction, turning loose change into generational assets.
                  </p>
                </div>
              </FadeUp>
            </ul>
          </div>
        </section>

        {/* Mastery Section */}
        <section className="container mx-auto max-w-md md:max-w-lg lg:max-w-7xl px-4 lg:px-15 text-center py-20 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div>
            <div className="lg:text-left lg:max-w-lg">
              <FadeUp
                as="h3"
                className="font-manrope font-extrabold text-[1.4rem] sm:text-3xl md:text-4xl leading-widest"
              >
                Three Steps To Mastery
              </FadeUp>

              <FadeUp as="p" delay={0.2} className="mt-4 text-base md:mt-5">
                We&apos;ve refined the path to financial freedom into a
                seamless, accessible process.
              </FadeUp>
            </div>
            <div className="flex flex-col text-left gap-10 mt-10 md:mt-12">
              <FadeUp as="div" delay={0.3} className="flex gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold font-manrope">
                  1
                </div>
                <div>
                  <h4 className="font-manrope font-bold text-base lg:text-lg">
                    Add your accounts
                  </h4>
                  <p className="text-sm mt-2.5 lg:mt-2.75">
                    Add accounts manually or import transaction files (CSV) to
                    get a comprehensive, consolidated view of your finances.
                  </p>
                </div>
              </FadeUp>

              <FadeUp as="div" delay={0.4} className="flex gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold font-manrope">
                  2
                </div>
                <div>
                  <h4 className="font-manrope font-bold text-base lg:text-lg">
                    Analyze the flow
                  </h4>
                  <p className="text-sm mt-2.5 lg:mt-2.75">
                    Gain deeper insights into your spending patterns and
                    identify opportunities to make smarter financial decisions.
                  </p>
                </div>
              </FadeUp>

              <FadeUp as="div" delay={0.5} className="flex gap-6">
                <div className="shrink-0 w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center font-bold font-manrope">
                  3
                </div>
                <div>
                  <h4 className="font-manrope font-bold text-base lg:text-lg">
                    Grow with confidence
                  </h4>
                  <p className="text-sm mt-2.5 lg:mt-2.75">
                    Follow personalized growth blueprints designed to hit your
                    specific life goals.
                  </p>
                </div>
              </FadeUp>
            </div>
          </div>
          <FadeUp
            as="div"
            delay={0.5}
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-surface-container border border-border aspect-square flex items-center justify-center p-12"
          >
            <div className="w-full h-full bg-surface-highlight rounded-2xl shadow-lg flex flex-col p-6 space-y-4">
              <div className="h-6 w-32 bg-primary/10 rounded-full"></div>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-secondary/9 rounded-xl"></div>
                <div className="flex flex-col gap-4">
                  <div className="h-1/3 bg-secondary/9 rounded-xl"></div>
                  <div className="h-2/3 bg-primary/20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </FadeUp>
        </section>

        {/* Testimonials Section */}
        <section className="w-full bg-surface px-4 mt-14 py-18 md:py-22 lg:py-24 lg:px-15">
          <div className="container mx-auto max-w-md md:max-w-lg lg:max-w-7xl text-center">
            <div>
              <FadeUp
                as="h3"
                className="font-manrope font-extrabold text-[1.4rem] sm:text-3xl md:text-4xl leading-widest"
              >
                Word from our members
              </FadeUp>

              <FadeUp
                as="p"
                delay={0.2}
                className="mt-4 text-base md:mt-5 lg:mt-6"
              >
                Hear what our members have to say about their journey, growth,
                and experiences within our community.
              </FadeUp>
            </div>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-9 mt-13 lg:mt-16">
              <FadeUp
                as="li"
                delay={0.3}
                className="flex flex-col bg-surface-highlight p-8 rounded-3xl space-y-6 shadow-sm transition-colors duration-300 ease"
              >
                <div className="flex gap-1 text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/star.svg"
                      alt="Premium five-star service rating icon"
                      title="Premium five-star service rating icon"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <div className="text-left mt-1">
                  <blockquote className="text-base italic">
                    &quot;Financial Atelier isn&apos;t just a tracker; it&apos;s
                    a design tool for my life. The fact that this level of
                    sophistication is now free is incredible.&quot;
                  </blockquote>
                  <div className="flex items-center gap-3 mt-7">
                    <div className="bg-gray-300 rounded-full w-11 h-11 overflow-hidden relative">
                      <Image
                        src="/review_sarah.avif"
                        alt="Sarah Jenkins - Creative Director and verified Financial Atelier member"
                        title="Sarah Jenkins - Creative Director and verified Financial Atelier member"
                        width={44}
                        height={44}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-px">
                      <h4 className="text-sm font-manrope font-bold">
                        Sarah Jenkins
                      </h4>
                      <p className="text-xs">Creative Director</p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp
                as="li"
                delay={0.4}
                className="flex flex-col bg-surface-highlight p-8 rounded-3xl space-y-6 shadow-sm transition-colors duration-300 ease"
              >
                <div className="flex gap-1 text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/star.svg"
                      alt="Premium five-star service rating icon"
                      title="Premium five-star service rating icon"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <div className="text-left mt-1">
                  <blockquote className="text-base italic">
                    &quot;I&apos;ve tried every app out there. Nothing comes
                    close to the precision of the automated categorization here.
                    It saved me $400 in the first month.&quot;
                  </blockquote>
                  <div className="flex items-center gap-3 mt-7">
                    <div className="bg-gray-300 rounded-full w-11 h-11 overflow-hidden relative">
                      <Image
                        src="/review_marcus.avif"
                        alt="Marcus Chen - Software Architect and verified Financial Atelier member"
                        title="Marcus Chen - Software Architect and verified Financial Atelier member"
                        width={44}
                        height={44}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-px">
                      <h4 className="text-sm font-manrope font-bold">
                        Marcus Chen
                      </h4>
                      <p className="text-xs">Software Architect</p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp
                as="li"
                delay={0.5}
                className="flex flex-col bg-surface-highlight p-8 rounded-3xl space-y-6 shadow-sm transition-colors duration-300 ease"
              >
                <div className="flex gap-1 text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/star.svg"
                      alt="Premium five-star service rating icon"
                      title="Premium five-star service rating icon"
                      width={16}
                      height={16}
                    />
                  ))}
                </div>
                <div className="text-left mt-1">
                  <blockquote className="text-base italic">
                    &quot;The refined wealth building features are a game
                    changer. I&apos;ve grown my emergency fund by 20% in just
                    six months without even feeling it.&quot;
                  </blockquote>
                  <div className="flex items-center gap-3 mt-7">
                    <div className="bg-gray-300 rounded-full w-11 h-11 overflow-hidden relative">
                      <Image
                        src="/review_elena.avif"
                        alt="Elena Rodriguez - Educator and verified Financial Atelier member"
                        title="Elena Rodriguez - Educator and verified Financial Atelier member"
                        width={44}
                        height={44}
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-px">
                      <h4 className="text-sm font-manrope font-bold">
                        Elena Rodriguez
                      </h4>
                      <p className="text-xs">Teacher</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </ul>
          </div>
        </section>
      </Boilerplate>
    </>
  );
}
