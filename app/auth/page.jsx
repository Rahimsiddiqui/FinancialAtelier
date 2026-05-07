"use client";

// Third party imports
import { Check, Wallet } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import { Suspense } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

// Components
import AuthFormClient from "./AuthFormClient";
import FadeUp from "@/components/FadeUp";

const validModes = ["login", "signup"];

function AuthContent() {
  const searchParams = useSearchParams();
  const rawMode = searchParams.get("mode");
  const mode = validModes.includes(rawMode) ? rawMode : "login";

  const isLogin = mode === "login";

  const handleSignIn = (provider) => {
    signIn(provider, { callbackUrl: "/dashboard" });
  };

  return (
    <div className="min-h-screen py-8 px-4 md:px-8 max-w-fit mx-auto bg-background text-neutral">
      <FadeUp
        delay={0.2}
        className="max-w-260 mx-auto grid grid-cols-1 md:grid-cols-2"
      >
        {/* LEFT PANEL */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className={`bg-blue-600 hidden md:flex pt-12 md:pb-10 sm:px-10 lg:px-14 flex-col justify-between gap-20
          rounded-t-4xl md:rounded-t-none
          ${
            isLogin
              ? "md:order-1 md:rounded-l-4xl md:rounded-r-none"
              : "md:order-2 md:rounded-r-4xl md:rounded-l-none"
          }`}
        >
          <div>
            <Link
              href="/"
              className="font-bold text-[1.3rem] sm:text-[1.6rem] md:text-[1.4rem] font-manrope flex gap-3 justify-center md:justify-start items-center text-white"
            >
              <Wallet className="w-7 h-7" />
              Financial Atelier
            </Link>

            <h1 className="font-bold text-white font-manrope text-[2.5rem] sm:text-[3.2rem] md:text-[2.8rem] leading-tight mt-11 mb-9 text-center md:text-left">
              {isLogin
                ? "Precision in every transaction."
                : "Start your financial journey."}
            </h1>

            <p className="text-lg text-white/90 text-center max-w-xl mx-auto md:text-left">
              {isLogin
                ? "Experience a digital concierge for your wealth, balancing legacy authority with fluid intuition."
                : "Elevate your perspective with bespoke wealth management tools designed for the modern curator."}
            </p>

            <ul className="flex flex-col gap-3 mx-auto md:mx-0 max-w-fit mt-10">
              {[
                isLogin
                  ? "Real-time Expense Tracking"
                  : "Automated Wealth Tracking",
                isLogin ? "Smart Budget Planning" : "Bespoke Budgeting Tools",
                isLogin ? "Comprehensive Reports" : "Secure Data Encryption",
              ].map((item, i) => (
                <li
                  key={i}
                  className="text-sm flex gap-3 items-center font-semibold text-white"
                >
                  <div className="p-1.5 rounded-full bg-blue-500/80">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 border text-base md:text-sm font-medium gap-4 border-border/30 rounded-xl bg-white/20 flex items-center">
            <Image
              className="rounded-full"
              src="/review_marcus.avif"
              alt="Marcus Chen - Software Architect and Financial Atelier member"
              title="Marcus Chen - Software Architect and Financial Atelier member"
              width={45}
              height={45}
            />
            <div className="flex flex-col gap-2 pl-1 text-white dark:text-white/90">
              <p className="italic">
                &quot;The clarity I&apos;ve been looking for in private
                banking.&quot;
              </p>
              <span className="opacity-90 text-sm md:text-xs">
                Software Architect
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT PANEL */}
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
          className={`bg-surface text-secondary pt-18 pb-8 px-6 sm:px-10 lg:px-14 flex flex-col
          rounded-4xl md:rounded-b-none w-full min-[420px]:w-[85vw] md:w-auto
          ${
            isLogin
              ? "md:order-2 md:rounded-r-4xl md:rounded-l-none"
              : "md:order-1 md:rounded-l-4xl md:rounded-r-none"
          }`}
        >
          <div className="space-y-3.5">
            <h2 className="font-bold text-[1.9rem] text-center md:text-left">
              {isLogin ? "Welcome Back" : "Join the Atelier"}
            </h2>

            <p className="text-base text-secondary/80 text-center md:text-left">
              {isLogin ? "Enter your credentials." : "Create your account."}
            </p>
          </div>

          <AuthFormClient mode={mode} />

          <div className="flex items-center my-7 gap-2">
            <div className="h-px w-full bg-border"></div>
            <p className="text-xs opacity-50 uppercase">Or</p>
            <div className="h-px w-full bg-border"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <button
              onClick={() => handleSignIn("google")}
              className="flex gap-2 items-center justify-center border border-border py-4 px-6 font-bold w-full rounded-xl transition-colors duration-200 hover:bg-surface-highlight cursor-pointer"
            >
              <FcGoogle className="w-6 h-6" /> Google
            </button>

            <button
              onClick={() => handleSignIn("github")}
              className="flex gap-2 items-center justify-center border border-border py-4 px-6 font-bold w-full rounded-xl transition-colors duration-200 hover:bg-surface-highlight cursor-pointer"
            >
              <BsGithub className="w-6 h-6" /> Github
            </button>
          </div>

          {mode === "signup" && (
            <p className="text-xs text-secondary/70 text-center mt-9 font-medium leading-relaxed">
              By creating an account, you agree to our{" "}
              <Link
                href="/terms"
                className="underline! font-semibold hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and
              <Link
                href="/policy"
                className="underline! font-semibold hover:text-primary"
              >
                {" "}
                Privacy Policy
              </Link>
              .
            </p>
          )}

          <div className="text-xs text-center">
            {isLogin ? (
              <p className="text-xs font-medium text-center text-secondary/70 mt-10">
                Don&apos;t have an account?{" "}
                <Link
                  href="/auth?mode=signup"
                  className="text-primary/90 hover:text-primary transition-colors duration-200 opacity-100 cursor-pointer font-semibold hover:underline!"
                >
                  Sign Up
                </Link>{" "}
              </p>
            ) : (
              <p className="text-xs text-center font-medium text-secondary/70 mt-8">
                Already have an account?{" "}
                <Link
                  href="/auth?mode=login"
                  className="text-primary/90 hover:text-primary transition-colors duration-200 opacity-100 cursor-pointer font-semibold hover:underline!"
                >
                  Login
                </Link>
              </p>
            )}
          </div>
        </motion.div>
      </FadeUp>
    </div>
  );
}

export default function AuthPage() {
  return (
    <LazyMotion features={domAnimation}>
      <Suspense
        fallback={
          <div className="bg-background flex flex-col justify-center items-center min-w-screen min-h-screen">
            {" "}
            <div className="p-2 rounded-full bg-white dark:bg-white/90 expand transition-transform duration-200">
              <Image
                alt="Favicon Icon"
                title="Favicon Icon"
                width={33}
                height={33}
                src="/favicon.png"
              />
            </div>
          </div>
        }
      >
        <AuthContent />
      </Suspense>
    </LazyMotion>
  );
}
