"use client";

// Third party imports
import {
  Check,
  Mail,
  Wallet,
  Lock,
  Eye,
  ArrowRight,
  EyeOff,
} from "lucide-react";
import { BsGithub, BsPerson } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Animations
import FadeUp from "@/components/FadeUp";

const validModes = ["login", "signup"];

export default function AuthClient() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const searchParams = useSearchParams();
  const rawMode = searchParams.get("mode");

  const mode = validModes.includes(rawMode) ? rawMode : "login";

  const togglePassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <div className="min-h-screen py-4 px-4 md:px-8 max-w-fit mx-auto bg-background text-neutral">
      <FadeUp
        delay={0.2}
        className="max-w-260 mx-auto grid grid-cols-1 md:grid-cols-2"
      >
        <div className="bg-blue-600 py-12 pb-23 md:pb-10 px-8 sm:px-10 lg:px-16 flex flex-col justify-between rounded-t-4xl md:rounded-l-4xl md:rounded-t-none gap-20">
          <div>
            <Link
              href="/"
              className="font-bold text-[1.3rem] sm:text-[1.6rem] md:text-[1.4rem] font-manrope flex gap-3 justify-center md:justify-start items-center text-white dark:text-white/90 hover:text-white/95 transition-transform duration-200"
            >
              <Wallet className="w-7 h-7" />
              Financial Atelier
            </Link>

            <h1 className="font-bold text-white dark:text-white/90 font-manrope text-[2.5rem] sm:text-[3.2rem] md:text-[2.8rem] leading-tight mt-11 mb-9 sm:mb-8.5 text-center md:text-left">
              {mode === "login"
                ? "Precision in every transaction."
                : "Start your financial journey."}
            </h1>

            <p className="text-lg text-medium leading-relaxed text-white/90 text-center max-w-xl mx-auto md:text-left">
              {mode === "login"
                ? "Experience a digital concierge for your wealth, balancing legacy authority with fluid intuition."
                : "Elevate your perspective with bespoke wealth management tools designed for the modern curator."}
            </p>

            <ul className="flex flex-col gap-3 mx-auto md:mx-0 max-w-fit mt-10 sm:mt-12 md:mt-10">
              <li className="text-[0.9rem] flex gap-3 items-center font-semibold text-white/95">
                <div className="p-1.5 rounded-full bg-blue-500/80">
                  <Check className="w-4 h-4" />
                </div>
                {mode === "login"
                  ? "Real-time Expense Tracking"
                  : "Automated Wealth Tracking"}
              </li>

              <li className="text-[0.9rem] flex gap-3 items-center font-semibold text-white/95">
                <div className="p-1.5 rounded-full bg-blue-500/80">
                  <Check className="w-4 h-4" />
                </div>
                {mode === "login"
                  ? "Smart Budget Planning"
                  : "Bespoke Budgeting Tools"}
              </li>

              <li className="text-[0.9rem] flex gap-3 items-center font-semibold text-white/95">
                <div className="p-1.5 rounded-full bg-blue-500/80">
                  <Check className="w-4 h-4" />
                </div>
                {mode === "login"
                  ? "Comprehensive Financial Reports"
                  : "Secure Data Encryption"}
              </li>
            </ul>
          </div>
          <div className="p-5 border text-base md:text-sm font-medium gap-4 border-border/30 rounded-xl bg-white/20 flex items-center">
            <Image
              className="rounded-full"
              src="/review_marcus.avif"
              alt="Marcus Chen - Software Architect and Financial Atelier member"
              title="Marcus Chen - Software Architect and Financial Atelier member"
              width={40}
              height={40}
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
        </div>
        <div className="bg-surface text-secondary pt-18 pb-8 px-8 lg:px-16 sm:px-10 flex flex-col rounded-b-4xl md:rounded-r-4xl md:rounded-bl-none">
          <div className="space-y-3.5">
            <h2 className="font-manrope font-bold text-[1.9rem] text-center md:text-left">
              {mode === "login" ? "Welcome Back" : "Join the Atelier"}
            </h2>

            <p className="text-base text-secondary/80 text-center md:text-left">
              {mode === "login"
                ? "Enter your credentials to access your atelier."
                : "Elevate your financial perspective today."}
            </p>
          </div>

          <form
            action="/"
            className="flex flex-col justify-start gap-7 mt-14 md:mt-13"
          >
            {mode === "signup" && (
              <div className="flex flex-col relative gap-3">
                <label
                  htmlFor="name"
                  className="font-manrope font-bold text-xs uppercase text-secondary/90 tracking-wider"
                >
                  Full Name
                </label>

                <input
                  type="name"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  className="bg-surface-highlight/70 rounded-xl p-4 pl-15 border border-border/60 active:outline-2 outline-primary/50"
                />

                <BsPerson className="w-6 h-6 absolute left-5 bottom-[1.05rem] opacity-40" />
              </div>
            )}

            <div className="flex flex-col relative gap-3">
              <label
                htmlFor="email"
                className="font-manrope font-bold text-xs uppercase text-secondary/90 tracking-wider"
              >
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="johndoe@example.com"
                className="bg-surface-highlight/70 rounded-xl p-4 pl-15 border border-border/60 active:outline-2 outline-primary/50"
              />

              <Mail className="w-5.5 h-5.5 absolute left-5 bottom-[1.1rem] opacity-40" />
            </div>

            <div className="flex flex-col relative gap-3">
              <div className="flex flex-row justify-between">
                <label
                  htmlFor="password"
                  className="font-manrope font-bold text-xs uppercase text-secondary/90 tracking-wider"
                >
                  Password
                </label>

                {mode === "login" && (
                  <Link
                    href="forgot-password"
                    className="font-manrope font-bold text-xs text-primary/90 hover:text-primary leading-tight"
                  >
                    Forgot Password?
                  </Link>
                )}
              </div>

              <input
                type={isPasswordShown ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••••••"
                className="bg-surface-highlight/70 rounded-xl p-4 pl-15 border border-border/60 active:outline-2 outline-primary/50"
              />

              <Lock className="w-5.5 h-5.5 absolute left-5 bottom-[1.1rem] opacity-40" />
              {!isPasswordShown === true ? (
                <Eye
                  className="w-5.5 h-5.5 absolute right-5 bottom-[1.1rem] opacity-40 hover:opacity-60 transition-opacity duration-200 cursor-pointer"
                  onClick={togglePassword}
                />
              ) : (
                <EyeOff
                  className="w-5.5 h-5.5 absolute right-5 bottom-[1.1rem] opacity-40 hover:opacity-60 transition-opacity duration-200 cursor-pointer"
                  onClick={togglePassword}
                />
              )}
            </div>

            <button className="border-none flex justify-center gap-2 items-center rounded-lg px-12 md:px-14 py-3.5 text-[0.95rem] text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 hover:scale-[1.01] transition-transform font-bold font-manrope tracking-wide transition-colors duration-200 mt-2 group cursor-pointer">
              {mode === "login" ? "Sign In" : "Create Account"}
              <span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </form>

          <div className="flex flex-row justify-between gap-2 items-center my-12 md:mt-10 md:mb-8">
            <p className="h-px w-full bg-border"></p>

            <p className="text-xs font-semibold opacity-50 uppercase tracking-wide min-w-fit">
              Or Continue With
            </p>

            <p className="h-px w-full bg-border"></p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-5.5 sm:gap-7">
            <a
              href="/api/auth/google"
              className="flex gap-2.5 justify-center items-center border border-border bg-none py-4 px-6 font-bold w-full font-manrope rounded-xl transition-colors duration-200 hover:bg-surface-highlight/80 cursor-pointer"
            >
              <FcGoogle className="w-6 h-6" /> Google
            </a>

            <button className="flex gap-2.5 justify-center items-center border border-border bg-none py-4 px-6 font-bold w-full font-manrope rounded-xl transition-colors duration-200 hover:bg-surface-highlight/80 cursor-pointer">
              <BsGithub className="w-6 h-6" /> Github
            </button>
          </div>

          {mode === "signup" && (
            <p className="text-xs text-secondary/70 text-center mt-8 font-medium leading-relaxed">
              By creating an account, you agree to our{" "}
              <Link
                href="/terms"
                className="underline! font-semibold hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/policy"
                className="underline! font-semibold hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          )}

          {mode === "login" ? (
            <p className="text-xs font-medium text-center text-secondary/70 mt-8">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth?mode=signup"
                className="text-primary/90 hover:text-primary transition-colors duration-200 opacity-100 cursor-pointer font-semibold"
              >
                Sign Up
              </Link>{" "}
              Now!
            </p>
          ) : (
            <p className="text-xs text-center font-medium text-secondary/70 mt-8">
              Have an account?{" "}
              <Link
                href="/auth?mode=login"
                className="text-primary/90 hover:text-primary transition-colors duration-200 opacity-100 cursor-pointer font-semibold"
              >
                Login
              </Link>{" "}
              Now!
            </p>
          )}
        </div>
      </FadeUp>
    </div>
  );
}
