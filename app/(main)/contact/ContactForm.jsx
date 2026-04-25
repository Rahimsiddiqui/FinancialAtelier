"use client";

// Third party imports
import { useState, useRef, useEffect } from "react";
import { Loader2 } from "lucide-react";
import FadeUp from "@/components/FadeUp";

export default function ContactForm() {
  const formRef = useRef(null);
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [isHuman, setIsHuman] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [messageStatus, setMessageStatus] = useState("idle");

  useEffect(() => {
    if (typeof window === "undefined") return;

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
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  const handleInput = () => {
    if (formRef.current) {
      setIsFormValid(formRef.current.checkValidity());
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const form = formRef.current;

    const token = window.turnstile?.getResponse(widgetIdRef.current);
    if (!token) return alert("Please verify you are human");

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      token,
    };

    setMessageStatus("sending");

    try {
      const res = await fetch(`/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      alert("Message sent successfully!");
      form.reset();
      setIsFormValid(false);
    } catch (err) {
      alert(err.message || "Failed to send message.");
    } finally {
      window.turnstile?.reset(widgetIdRef.current);
      setIsHuman(false);
      setMessageStatus("idle");
    }
  };

  return (
    <form
      ref={formRef}
      onInput={handleInput}
      onSubmit={sendMessage}
      className="flex flex-col space-y-4 w-full"
    >
      <div className="flex flex-col md:flex-row gap-4 md:gap-9">
        <FadeUp as="div" delay={0.3} className="flex flex-col flex-1 mb-3">
          <label
            htmlFor="name"
            className="text-sm font-manrope font-bold tracking-wide uppercase ml-1"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            className="bg-surface-highlight rounded-2xl px-4 py-3 placeholder:text-secondary/50 text-secondary outline-primary/70 active:outline-2 mt-2.5 w-full border border-border/40"
            required
          />
        </FadeUp>

        <FadeUp as="div" delay={0.4} className="flex flex-col flex-1 mb-4">
          <label
            htmlFor="email"
            className="text-sm font-manrope font-bold tracking-wide uppercase ml-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            className="bg-surface-highlight rounded-2xl px-4 py-3 placeholder:text-secondary/50 text-secondary outline-primary/70 active:outline-2 mt-2.5 w-full border border-border/40"
            required
          />
        </FadeUp>
      </div>

      <FadeUp as="div" delay={0.5}>
        <label
          htmlFor="message"
          className="text-sm font-manrope font-bold tracking-wide uppercase ml-1"
        >
          Message
        </label>
        <textarea
          rows="6"
          id="message"
          name="message"
          placeholder="How can we assist your financial journey?"
          className="bg-surface-highlight rounded-2xl px-4 py-3 placeholder:text-secondary/50 text-secondary outline-primary/70 active:outline-2 mt-2.5 w-full border border-border/40"
          required
          minLength={5}
        />
      </FadeUp>

      <div ref={turnstileRef}></div>

      <button
        type="submit"
        disabled={!isFormValid || !isHuman || messageStatus === "sending"}
        className={`border-none text-center mt-5 rounded-lg px-12 md:px-14 py-3.5 text-[0.95rem] text-white dark:text-white/90 bg-linear-to-r from-blue-700/90 to-blue-700 font-bold font-manrope tracking-wide transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer ${messageStatus !== "sending" && "hover:scale-[1.01]"}`}
      >
        {messageStatus === "sending" ? (
          <div className="flex gap-2.5 justify-center items-center text-sm">
            <span>Sending Message</span>
            <Loader2 className="animate-spin" />
          </div>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
