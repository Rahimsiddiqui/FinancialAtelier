"use client";

import { useState, useEffect } from "react";
import { Mail, ArrowRight, Loader2, Key } from "lucide-react";
import { useRouter } from "next/navigation";

export default function VerifyEmail({ email, onVerified }) {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const router = useRouter();

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Verification failed");
      } else {
        onVerified();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 md:mt-14">
      <div className="text-center space-y-8">
        <h2 className="text-3xl font-bold font-manrope">Verify your email</h2>
        <p className="text-secondary/70 text-sm">
          We&apos;ve sent a 6-digit verification code to <br />
          <span className="font-bold text-secondary">{email}</span>
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col mt-8 gap-7">
        {error && (
          <p className="text-red-500 text-sm font-medium text-center">
            {error}
          </p>
        )}

        <div className="flex flex-col relative gap-3">
          <label
            htmlFor="code"
            className="font-manrope font-bold text-xs uppercase text-secondary/90 tracking-wider"
          >
            Verification Code
          </label>

          <input
            type="text"
            id="code"
            name="code"
            value={code}
            onChange={(e) =>
              setCode(e.target.value.replace(/\D/g, "").slice(0, 6))
            }
            placeholder="000000"
            maxLength={6}
            className="bg-surface-highlight/70 rounded-xl p-4 pl-15 border border-border/60 active:outline-2 outline-primary/50 text-center tracking-[1em] text-xl font-bold"
          />

          <Key className="w-5.5 h-5.5 absolute left-5 bottom-[1.1rem] opacity-40" />
        </div>

        <div className="text-center">
          <p className="text-xs text-secondary/60">
            Code expires in:{" "}
            <span className="font-bold text-primary">
              {formatTime(timeLeft)}
            </span>
          </p>
        </div>

        <button
          disabled={isLoading || code.length !== 6 || timeLeft === 0}
          className={`border-none flex justify-center items-center rounded-lg px-12 md:px-14 py-3.5 text-[0.95rem] text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 transition-transform font-bold font-manrope tracking-wide transition-colors duration-200 group ${
            isLoading || code.length !== 6 || timeLeft === 0
              ? "opacity-70 cursor-not-allowed"
              : "cursor-pointer hover:scale-[1.01]"
          }`}
        >
          {isLoading ? (
            <div className="flex gap-3">
              Verifying
              <Loader2 size={20} className="animate-spin" />
            </div>
          ) : (
            <>
              Verify & Complete
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200 ml-2.5" />
            </>
          )}
        </button>
      </form>

      <div className="text-center">
        <button
          onClick={() => window.location.reload()}
          className="text-sm font-bold text-primary/80 dark:text-primary/90 hover:text-primary cursor-pointer transition-colors"
        >
          Try signing up again
        </button>
      </div>
    </div>
  );
}
