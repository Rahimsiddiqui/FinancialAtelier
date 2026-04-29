"use client";

// Component
import FadeUp from "@/components/FadeUp";

// Third party imports
import { LazyMotion, domAnimation, m } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const MotionLink = m.create(Link);

const Boilerplate = ({
  landingPage = false,
  badge,
  title,
  highlightedWord,
  titleSuffix,
  description,
  includesCTA = false,
  CTATitle,
  CTADescription,
  children,
}) => {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-background text-secondary">
        {/* Hero Section */}
        <section
          className={`container mx-auto max-w-md md:max-w-xl lg:max-w-6xl px-4 lg:px-15 pt-33 xl:pt-40 text-center items-center ${landingPage ? "lg:text-left lg:grid grid-cols-2 items-center gap-12 xl:gap-15 2xl:gap-18 pb-13 xl:px-0" : "pb-6 lg:pb-13"}`}
        >
          <div>
            {badge && (
              <FadeUp
                as="span"
                className="text-[0.7rem] md:text-xs tracking-widest font-black font-manrope py-2 px-4 bg-primary/10 text-primary rounded-full mb-7 xl:mb-9 inline-block uppercase"
              >
                {badge}
              </FadeUp>
            )}

            <FadeUp
              delay={badge ? 0.2 : 0}
              as="h1"
              className={`text-4xl md:text-5xl lg:text-[3.2rem] leading-tight font-black font-manrope max-w-lg ${!landingPage ? "mx-auto" : ""}`}
            >
              {title} <span className="text-primary">{highlightedWord}</span>{" "}
              {titleSuffix}
            </FadeUp>

            <FadeUp
              delay={0.4}
              as="p"
              className={`mt-8 sm:mt-9 lg:mt-10 ${landingPage ? "mb-9 lg:mb-10" : "mb-12"} text-base md:text-lg text-secondary/80 max-w-xl mx-auto lg:mx-auto`}
            >
              {description}
            </FadeUp>

            {landingPage && (
              <MotionLink
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                href="/auth?mode=signup"
                className="rounded-lg px-10 sm:px-12 md:px-14 py-3.5 text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 font-bold font-manrope tracking-wide inline-block"
              >
                Get Started
              </MotionLink>
            )}
          </div>

          {landingPage && (
            <FadeUp
              delay={0.4}
              className="hidden lg:block relative z-10 shadow-2xl shadow-primary/10 border-none"
            >
              <div className="aspect-video relative overflow-hidden rounded-3xl">
                <Image
                  alt="Professional artisan reviewing detailed financial growth charts in the Financial Atelier dashboard"
                  title="Professional artisan reviewing detailed financial growth charts in the Financial Atelier dashboard"
                  className="object-cover dark:brightness-90"
                  src="/hero_image.avif"
                  fill
                  priority
                />
              </div>
              <div className="flex relative">
                <FadeUp
                  delay={0.5}
                  className="w-fit xl:w-65 h-fit p-6 rounded-2xl shadow-sm border-none ml-2 min-[1125px]:ml-7 hidden lg:block bg-surface-highlight/93 dark:bg-surface absolute -bottom-7 z-20 transition-colors duration-400 ease"
                  style={{ backdropFilter: "blur(15px)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <TrendingUp />
                    </div>
                    <span className="font-manrope font-bold text-secondary text-sm">
                      Savings Growth
                    </span>
                  </div>
                  <div className="h-2 mt-5 mb-3.5 w-full bg-surface/60 dark:bg-surface-highlight rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-3/4 rounded-full"></div>
                  </div>
                  <p className="text-[0.7rem] font-label text-secondary/70">
                    +12.4% vs last month
                  </p>
                </FadeUp>

                <FadeUp
                  delay={0.6}
                  className="w-fit h-fit p-6 rounded-2xl shadow-sm border-none ml-6 hidden lg:block bg-surface-highlight/93 dark:bg-surface absolute -bottom-10 z-20 right-2 min-[1125px]:right-8 transition-colors duration-400 ease"
                  style={{ backdropFilter: "blur(15px)" }}
                >
                  <p className="text-[0.72rem] uppercase tracking-wide text-secondary/80">
                    Recent Transaction
                  </p>
                  <p className="font-manrope font-bold text-secondary text-base mt-1.75 mb-0.75">
                    Apple Store
                  </p>
                  <p className="text-primary text-base font-bold font-manrope">
                    -$1,299.00
                  </p>
                </FadeUp>
              </div>
            </FadeUp>
          )}
        </section>

        {children}

        {includesCTA && (
          // Final CTA Section
          <section className="container mx-auto max-w-xl md:max-w-3xl lg:max-w-7xl text-center px-4 mt-20 md:mt-24 lg:px-15">
            <FadeUp className="max-w-6xl overflow-hidden bg-linear-to-r from-blue-700/90 to-blue-700 rounded-3xl p-12 md:p-16 lg:p-20 mx-auto relative flex flex-col items-center gap-6 text-white dark:text-white/90">
              <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl font-manrope leading-tight">
                {CTATitle}
              </h2>

              <p className="max-w-xl text-base mt-2 mb-3 lg:my-4">
                {CTADescription}
              </p>

              <Link
                href="/auth?mode=signup"
                className="bg-white/90 text-blue-600 font-bold py-3 sm:py-4 md:py-5 px-6 sm:px-9 rounded-md transition-colors duration-300"
              >
                Create Free Account
              </Link>
            </FadeUp>
          </section>
        )}
      </div>
    </LazyMotion>
  );
};

export default Boilerplate;
