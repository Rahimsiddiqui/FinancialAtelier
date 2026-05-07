"use client";

import { ShieldCheck, ArrowRight } from "lucide-react";

export default function TwoFactorSetup({ onComplete, onSkip }) {
  return (
    <div className="flex flex-col gap-8 md:mt-14">
      <div className="text-center space-y-6">
        <h2 className="text-3xl font-bold font-manrope">Secure your account</h2>
        <p className="text-secondary/70 text-sm">
          Add an extra layer of security with two-factor authentication.
        </p>
      </div>

      <div className="flex flex-col gap-6 mt-6">
        <div className="p-6 bg-surface-highlight/40 rounded-2xl border border-border/50 flex items-center gap-5">
          <div className="min-w-12 min-h-12 flex justify-center items-center bg-blue-100 dark:bg-blue-900/60 rounded-full text-blue-600">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h3 className="font-bold text-secondary">Two-Factor Auth</h3>
            <p className="text-xs text-secondary/60 mt-1">
              Verify your identity with an additional code when signing in from
              new devices.
            </p>
          </div>
        </div>

        <button
          onClick={() => onComplete(true)}
          className="w-full flex justify-center items-center rounded-lg px-12 py-3.5 text-[0.95rem] text-white bg-blue-700/90 hover:bg-blue-700 cursor-pointer transition-all font-bold font-manrope tracking-wide mt-4"
        >
          Enable 2FA
          <ArrowRight className="w-5 h-5 ml-2.5" />
        </button>

        <button
          onClick={() => onSkip()}
          className="text-sm font-bold text-secondary/60 hover:text-secondary/70 cursor-pointer transition-colors text-center"
        >
          Skip for now
        </button>
      </div>
    </div>
  );
}
