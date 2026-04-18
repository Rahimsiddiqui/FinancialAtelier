"use client";

// Third party imports
import {
  ReceiptText,
  Wallet2,
  ChartBarIncreasing,
  CircleStar,
  ShieldCheck,
} from "lucide-react";
import { m } from "framer-motion";
import Link from "next/link";

// Components
import Boilerplate from "@/components/Boilerplate";

// Animations
import { fadeUp } from "@/lib/animations";

const MotionLink = m.create(Link);

export default function FeaturesClient() {
  return (
    <Boilerplate
      title="Built to"
      highlightedWord="Simplify"
      titleSuffix="Your Finances"
      description="Explore Financial Atelier's features: Real-time expense tracking, spending pattern analysis, and personal wealth management tools designed for clarity and control."
      includesCTA={true}
      CTATitle="Ready to curate your wealth?"
      CTADescription="Join the new era of sophisticated finance. Sign up now and experience the art of financial curation with Financial Atelier."
    >
      {/* Features Section */}
      <section className="container mx-auto max-w-xl md:max-w-2xl lg:max-w-7xl mt-10 px-4 lg:px-15 pb-16 text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-13">
        <m.div
          {...fadeUp(0.5)}
          className="flex flex-col md:col-span-2 h-fit md:h-120 p-8 sm:p-10 bg-surface-highlight dark:bg-surface/70 rounded-3xl overflow-hidden"
        >
          <ReceiptText className="text-primary mb-5 w-7 md:w-8 h-7 md:h-8" />
          <h2 className="font-manrope text-xl md:text-2xl font-bold mb-5 md:mb-6">
            Real-time Transaction Tracking
          </h2>

          <p className="text-sm max-w-lg">
            Engineered for absolute precision. Witness your financial flow
            update the moment it happens, with automated categorization that
            learns your lifestyle.
          </p>
          <div className="mt-8 md:mt-9 relative w-full flex-1 overflow-hidden rounded-3xl min-h-48">
            <img
              src="/transaction_tracking.avif"
              alt="Real-time Transaction Tracking"
              title="Real-time Transaction Tracking"
              className="absolute inset-0 w-full h-full object-cover opacity-90 dark:brightness-80"
              loading="lazy"
              decoding="async"
            />
          </div>
        </m.div>

        <m.div
          {...fadeUp(0.6)}
          className="flex flex-col justify-between h-100 md:h-120 p-8 sm:p-10 bg-surface-highlight dark:bg-surface/70 rounded-3xl overflow-hidden"
        >
          <div>
            <Wallet2 className="text-primary mb-5 w-7 md:w-8 h-7 md:h-8" />
            <h2 className="font-manrope text-xl md:text-2xl font-bold mb-5 md:mb-6">
              Automated Budgeting
            </h2>

            <p className="text-sm max-w-lg">
              Set limits and receive alerts when you approach your spending
              thresholds. Maintain control over your finances with our
              intelligent budgeting tools.
            </p>
          </div>
          <div className="space-y-3">
            <div className="h-2 w-full bg-secondary/8 rounded-full overflow-hidden">
              <div className="h-full w-[65%] bg-primary rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs font-label uppercase tracking-widest text-secondary">
              <span>Lifestyle</span>
              <span>65% Curated</span>
            </div>
          </div>
        </m.div>

        <m.div
          {...fadeUp(0.3)}
          className="h-fit p-8 pb-10 sm:p-10 md:pb-14 min-[1150px]:h-70 bg-surface-highlight dark:bg-surface/70 rounded-3xl overflow-hidden"
        >
          <ChartBarIncreasing className="text-primary mb-5 w-7 md:w-8 h-7 md:h-8" />
          <h2 className="font-manrope text-xl md:text-2xl font-bold mb-5 md:mb-6">
            Advanced Analytics
          </h2>

          <p className="text-sm max-w-lg">
            Visual charts that transform raw numbers into insights. Toggle
            between daily precision and monthly vision with one touch.
          </p>
        </m.div>

        <m.div
          {...fadeUp(0.4)}
          className="grid lg:grid-cols-2 md:col-span-2 h-120 lg:h-70 lg:gap-8 xl:gap-10 p-8 sm:p-10 bg-surface-highlight dark:bg-surface/70 rounded-3xl overflow-hidden"
        >
          <div>
            <CircleStar className="text-tertiary mb-5 w-7 md:w-8 h-7 md:h-8" />
            <h2 className="font-manrope text-xl md:text-2xl font-bold mb-5 md:mb-6">
              Saving Goals
            </h2>

            <p className="text-sm max-w-lg">
              Automated intelligence that works in the background. Define your
              long-term vision, and let our curator handle the arithmetic of
              growth.
            </p>
          </div>
          <div className="mt-8 md:mt-9 lg:mt-0 relative w-full flex-1 overflow-hidden rounded-3xl min-h-48">
            <img
              src="/savings_goals.avif"
              alt="Saving Goals"
              title="Savings Goals"
              className="absolute inset-0 w-full h-full object-cover opacity-90 dark:brightness-90"
              loading="lazy"
              decoding="async"
            />
          </div>
        </m.div>

        <m.div
          {...fadeUp(0.3)}
          className="flex flex-col h-70 p-8 sm:p-10 bg-surface-highlight dark:bg-surface/70 rounded-3xl overflow-hidden"
        >
          <ShieldCheck className="text-secondary mb-5 w-7 md:w-8 h-7 md:h-8" />
          <h2 className="font-manrope text-xl md:text-2xl font-bold mb-5 md:mb-6">
            Secure Sync
          </h2>

          <p className="text-sm max-w-lg">
            Bank-grade encryption meets seamless connectivity. Your data is your
            own, protected by modern security protocols.
          </p>
        </m.div>
      </section>

      {/* Multi-Device Compatible Section */}
      <section className="container mx-auto max-w-xl md:max-w-2xl lg:max-w-7xl mt-10 px-4 lg:px-15">
        <div className="mx-auto max-w-xl md:max-w-2xl lg:max-w-7xl text-left grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-18 bg-[#2D3133] dark:bg-[#23282B] rounded-4xl pt-15.5 pb-10 px-5 sm:px-13.5">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <m.h3
              {...fadeUp()}
              className="text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-white dark:text-white/90 leading-tight font-black font-manrope"
            >
              Multi-Device Harmony
            </m.h3>

            <m.p
              {...fadeUp(0.4)}
              className="text-sm sm:text-base lg:text-lg text-white dark:text-white/90 mt-7 mb-9 sm:mb-10 lg:mt-9 lg:mb-10"
            >
              Start on your desktop, finalize on your mobile. Financial Atelier
              provides a continuous, fluid experience across every screen you
              own.
            </m.p>

            <MotionLink
              {...fadeUp(0.6)}
              href="/auth?mode=signup"
              className="rounded-lg text-sm sm:text-base lg:text-lg px-10 sm:px-12 md:px-14 py-3.5 text-white dark:text-white/90 bg-linear-to-r from-blue-200/40 to-blue-200/30 dark:from-blue-300/40 dark:to-blue-300/30 font-bold font-manrope tracking-wide block max-w-fit mx-auto lg:mx-0"
            >
              Experience Everywhere
            </MotionLink>
          </div>
          <div className="relative h-70 md:h-auto">
            <m.img
              {...fadeUp(0.4)}
              alt="Multi-Device Harmony"
              className="w-full h-full object-cover rounded-2xl opacity-80 grayscale"
              src="/multi_device.avif"
            />
          </div>
        </div>
      </section>

      {/* The Atelier Difference Section */}
      <section className="container mx-auto min-w-full mt-23 px-4 py-18 lg:px-15 bg-surface">
        <div className="mx-auto max-w-xl md:max-w-2xl lg:max-w-5xl text-left grid grid-cols-1 lg:grid-cols-2 gap-15 px-5 sm:px-13.5">
          <div className="text-center lg:text-left flex flex-col justify-center">
            <m.h3
              {...fadeUp()}
              className="text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl text-secondary leading-tight font-black font-manrope"
            >
              The Atelier Difference
            </m.h3>

            <div className="mt-8 sm:mt-7 lg:mt-9 space-y-7">
              <m.p
                {...fadeUp(0.4)}
                className="text-sm sm:text-base text-secondary/80"
              >
                Here we believe finance is an art form that requires the right
                medium. Most apps treat your wealth as a series of chores—we
                treat it as a curated collection of opportunities.
              </m.p>

              <m.p
                {...fadeUp(0.5)}
                className="text-sm sm:text-base text-secondary/80"
              >
                Our philosophy of <strong>Precision Curation</strong> means we
                never overwhelm you with noise. We surface only the data that
                matters, presented with architectural clarity.
              </m.p>

              <m.p
                {...fadeUp(0.4)}
                className="text-sm sm:text-base text-secondary/80"
              >
                Every pixel, every interaction, and every algorithm is designed
                to foster a sense of calm authority over your financial future.
                This isn&apos;t just management; it&apos;s a financial atelier.
              </m.p>
            </div>
          </div>
          <m.div
            {...fadeUp(0.4)}
            className="w-full md:w-[70%] aspect-3/4 bg-surface-highlight border border-border/20 mx-auto rounded-full p-4 shadow-sm relative"
          >
            <div className="absolute inset-0 rounded-full overflow-hidden m-4">
              <img
                alt="The Atelier Difference"
                title="The Atelier Difference"
                className="w-full h-full object-cover grayscale hover:grayscale-0 dark:brightness-90 transition-all duration-700"
                src="/atelier_difference.avif"
              />
            </div>
          </m.div>
        </div>
      </section>
    </Boilerplate>
  );
}
