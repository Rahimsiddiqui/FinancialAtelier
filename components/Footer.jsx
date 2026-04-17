"use client";

import { Wallet } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const getClass = (path) =>
    pathname === path ? "text-primary" : "text-secondary/80 hover:text-primary";

  return (
    <div className="border-t border-border mt-18 pt-17 pb-10 px-4 lg:px-16">
      {/* Footer Section */}
      <section className="container mx-auto max-w-md md:max-w-lg lg:max-w-7xl text-center lg:text-left items-center">
        <div className="grid lg:grid-cols-2 lg:gap-14 lg:justify-center lg:items-center">
          <div>
            <Link href="/">
              <h3 className="flex justify-center lg:justify-start items-center text-lg sm:text-2xl font-extrabold text-primary leading-tight font-manrope cursor-pointer gap-3 sm:gap-3.5">
                <Wallet className="w-6 h-6 sm:w-7 sm:h-7" />
                Financial Atelier
              </h3>
            </Link>

            <p className="text-sm mt-7 sm:mt-8 mb-5 sm:mb-6 lg:text-base text-secondary/80 max-w-lg">
              Crafting personal finance into an art form. Join over 120,000
              individuals designing a wealthier future, with premium tools
              available to all for free.
            </p>
            <div className="flex gap-5 justify-center lg:justify-start items-center max-w-lg mx-auto lg:mx-0">
              <a
                href="https://github.com/Rahimsiddiqui/financialatelier"
                target="_blank"
                className="border border-border p-3 rounded-full transition-colors duration-200 hover:bg-secondary/5"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-github w-5 h-5 text-secondary/80"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/financialatelier"
                target="_blank"
                className="border border-border p-3 rounded-full transition-colors duration-200 hover:bg-secondary/5"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin w-5 h-5 text-secondary/80"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="https://x.com/FinanceAtelier"
                target="_blank"
                className="border border-border p-3 rounded-full transition-colors duration-200 hover:bg-secondary/5"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter w-5 h-5 text-secondary/80"
                  aria-hidden="true"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 justify-center items-center mt-12 lg:-mt-10 gap-10 lg:max-w-xl">
            <div>
              <span className="text-sm tracking-widest font-manrope font-bold uppercase">
                Product
              </span>
              <ul className="flex flex-col justify-center lg:justify-start items-center gap-3 lg:items-start mt-5">
                <li
                  className={`font-semibold text-sm transition-colors duration-200 ${getClass("/features")} font-manrope max-w-fit`}
                >
                  <Link href="/features">Features</Link>
                </li>

                <li
                  className={`font-semibold text-sm transition-colors duration-200 ${getClass("/opensource")} font-manrope max-w-fit`}
                >
                  <Link href="/opensource">Open Source</Link>
                </li>

                <li
                  className={`font-semibold text-sm transition-colors duration-200 ${getClass("/security")} font-manrope max-w-fit`}
                >
                  <Link href="/security">Security</Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="text-sm tracking-widest font-manrope font-bold uppercase">
                Company
              </span>
              <ul className="flex flex-col justify-center lg:justify-start items-center lg:items-start gap-3 mt-5">
                <li
                  className={`font-semibold text-sm transition-colors duration-200 ${getClass("/about")} font-manrope max-w-fit`}
                >
                  <Link href="/about">About</Link>
                </li>

                <li
                  className={`font-semibold text-sm transition-colors duration-200 ${getClass("/careers")} font-manrope max-w-fit`}
                >
                  <Link href="/careers">Careers</Link>
                </li>

                <li
                  className={`font-semibold text-sm transition-colors duration-200 ${getClass("/contact")} font-manrope max-w-fit`}
                >
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="w-full bg-border h-px mt-10 mb-10 sm:mt-12"></p>
          <div className="grid lg:grid-cols-2 lg:justfiy-between lg:items-center">
            <div>
              <p className="text-center font-medium lg:text-left text-sm text-secondary/80 mb-10 lg:mb-0">
                &copy; {new Date().getFullYear()} Financial Atelier | All rights
                reserved.
              </p>
            </div>
            <ul className="flex gap-5 sm:gap-15 justify-center lg:justify-center items-center max-w-3xl">
              <li
                className={`font-bold transition-colors duration-200 ${getClass("/privacy")} font-manrope max-w-fit uppercase font-bold tracking-widest text-xs`}
              >
                <Link href="/privacy">Privacy Policy</Link>
              </li>

              <li
                className={`font-bold transition-colors duration-200 ${getClass("/terms")} font-manrope max-w-fit uppercase font-bold tracking-widest text-xs`}
              >
                <Link href="/terms">Terms of Service</Link>
              </li>

              <li
                className={`font-bold transition-colors duration-200 ${getClass("/cookies")} font-manrope max-w-fit uppercase font-bold tracking-widest text-xs`}
              >
                <Link href="/cookies">Cookie Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
