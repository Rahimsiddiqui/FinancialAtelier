"use client";

// Third party imports
import { useState, useEffect, useRef } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { BsPerson } from "react-icons/bs";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AuthFormClient({ mode, onSignupSuccess }) {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHuman, setIsHuman] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);
  const router = useRouter();

  const isFormFilled =
    formData.email.trim() !== "" &&
    formData.password.trim() !== "" &&
    (mode === "login" || formData.name.trim() !== "");

  const isBtnDisabled =
    isLoading || !isFormFilled || (mode === "signup" && !isHuman);

  useEffect(() => {
    if (mode !== "signup" || typeof window === "undefined") return;

    const init = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY,
          callback: () => setIsHuman(true),

          "expired-callback": () => setIsHuman(false),
          "error-callback": () => setIsHuman(false),
        });
      }
    };

    const interval = setInterval(() => {
      if (window.turnstile) {
        init();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [mode]);

  const togglePassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const { name, email, password } = formData;

    try {
      if (mode === "login") {
        const result = await signIn("credentials", {
          email,
          password,
          redirect: false,
        });

        if (result?.error) {
          setError("Invalid credentials");
        } else {
          router.push("/dashboard");
        }
      } else {
        // SIGNUP MODE
        const res = await fetch("/api/auth/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        });

        const data = await res.json();

        if (!res.ok) {
          setError(data.message || "Signup failed");
        } else {
          if (onSignupSuccess) {
            onSignupSuccess({ name, email, password });
          }
        }
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-start gap-7 mt-14 md:mt-13"
    >
      {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
      {mode === "signup" && (
        <div className="flex flex-col relative gap-3">
          <label
            htmlFor="name"
            className="font-manrope font-bold text-xs uppercase text-secondary/90 tracking-wider"
          >
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
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
          value={formData.email}
          onChange={handleChange}
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
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••••••"
          className="bg-surface-highlight/70 rounded-xl p-4 pl-15 border border-border/60 active:outline-2 outline-primary/50"
        />

        <Lock className="w-5.5 h-5.5 absolute left-5 bottom-[1.1rem] opacity-40" />
        {isPasswordShown ? (
          <EyeOff
            className="w-5.5 h-5.5 absolute right-5 bottom-[1.1rem] opacity-40 hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            onClick={togglePassword}
          />
        ) : (
          <Eye
            className="w-5.5 h-5.5 absolute right-5 bottom-[1.1rem] opacity-40 hover:opacity-60 transition-opacity duration-200 cursor-pointer"
            onClick={togglePassword}
          />
        )}
      </div>

      {mode === "signup" && (
        <div ref={turnstileRef} className="mt-2 mx-auto"></div>
      )}

      <button
        disabled={isBtnDisabled}
        className={`border-none flex justify-center items-center rounded-lg px-12 md:px-14 py-3.5 text-[0.95rem] text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 transition-transform font-bold font-manrope tracking-wide transition-colors duration-200 group ${isBtnDisabled ? "opacity-70 cursor-not-allowed" : "cursor-pointer hover:scale-[1.01]"} ${mode === "signup" ? "mt-0" : "mt-2"} ${isLoading ? "gap-2.5" : "gap-2.5"}`}
      >
        {isLoading ? (
          mode === "login" ? (
            <>
              Signing In
              <Loader2 size={20} className="animate-spin" />
            </>
          ) : (
            <>
              Creating Account
              <Loader2 size={20} className="animate-spin" />
            </>
          )
        ) : mode === "login" ? (
          "Sign In"
        ) : (
          "Create Account"
        )}

        {!isLoading && (
          <span>
            <ArrowRight
              className={`w-5 h-5 ${
                isBtnDisabled ? "" : "group-hover:translate-x-1"
              } transition-transform duration-200`}
            />
          </span>
        )}
      </button>
    </form>
  );
}
