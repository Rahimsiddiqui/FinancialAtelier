"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MoveRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-neutral flex items-center justify-center p-6 overflow-hidden">
      <main className="relative w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Subtle Ambient Background Texture */}
        <div className="absolute inset-0 -z-10 pointer-events-none flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-150 h-150 bg-primary/10 rounded-full blur-[120px]"
          ></motion.div>
        </div>

        {/* Hero 404 Display */}
        <div className="relative mb-8 select-none">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(8rem,20vw,16rem)] font-manrope tracking-tighter font-bold text-surface-highlight leading-none dark:text-border/20"
          >
            404
          </motion.span>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-primary font-manrope font-bold text-sm md:text-base tracking-[0.4em] uppercase"
            >
              Financial Atelier
            </motion.p>
          </div>
        </div>

        {/* Editorial Content Area */}
        <div className="max-w-2xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-secondary font-manrope font-bold text-4xl md:text-6xl tracking-tight leading-tight"
          >
            Beyond the Ledger
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-secondary/70 font-inter text-lg md:text-xl mt-13 mb-12 leading-relaxed max-w-lg mx-auto"
          >
            The entry you are looking for has been moved or does not exist in
            our current architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-7"
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center px-10 py-5 bg-primary text-surface font-inter font-semibold text-base rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <span>Return Home</span>
              <MoveRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-10 py-5 bg-surface border border-border text-secondary font-inter font-semibold text-base rounded-full hover:bg-neutral transition-all duration-300"
            >
              <Home className="mr-3 w-5 h-5" />
              <span>Dashboard</span>
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
