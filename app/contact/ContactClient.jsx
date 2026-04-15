"use client";

// Third party imports
import { useState, useRef, useEffect } from "react";
import { Loader2, Mail } from "lucide-react";
import { SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { m } from "framer-motion";

// Components
import Boilerplate from "@/components/Boilerplate";

// Animations
import { fadeUp } from "@/lib/animations";

export default function ContactClient() {
  const formRef = useRef(null);
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [isHuman, setIsHuman] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [messageStatus, setMessageStatus] = useState("idle");

  if (typeof window !== "undefined") {
    window.__turnstileReady = false;

    window.onTurnstileLoad = () => {
      window.__turnstileReady = true;
    };
  }

  useEffect(() => {
    if (typeof window === "undefined") return;

    let interval;

    const init = () => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        if (!widgetIdRef.current) {
          widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
            sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITEKEY,
            callback: () => setIsHuman(true),
            "expired-callback": () => setIsHuman(false),
            "error-callback": () => setIsHuman(false),
          });
        }

        clearInterval(interval);
      }
    };

    interval = setInterval(init, 100);

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

    // Get Turnstile token
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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      );

      const result = await res.json();

      if (!res.ok) {
        let errorMessage = result.error || "Failed to send message.";
        if (result.details) {
          const detailMessages = Object.entries(result.details)
            .map(([field, messages]) => `${field}: ${messages.join(", ")}`)
            .join("\n");
          errorMessage = `${errorMessage}\n${detailMessages}`;
        }
        throw new Error(errorMessage);
      }

      alert("Message sent successfully!");
      form.reset();
      setIsFormValid(false);
    } catch (err) {
      alert(err.message || "Failed to send message. Please try again later.");
    } finally {
      // Reset Turnstile and human state for next attempt (or retry)
      window.turnstile?.reset(widgetIdRef.current);
      setIsHuman(false);
      setMessageStatus("idle");
    }
  };

  return (
    <Boilerplate
      title="Let's Discuss Your"
      highlightedWord="Financial Future"
      description="Have questions about wealth curation? Contact the Financial Atelier team today for personalized advisory, technical support, and bespoke financial strategies."
      includesCTA={false}
    >
      {/* Contact Section */}
      <section className="container mx-auto max-w-xl md:max-w-2xl lg:max-w-7xl mt-10 px-4 lg:px-15 pb-16 text-left grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
        <div className="flex flex-col justify-center items-center flex-1 w-full lg:col-span-2 bg-surface px-5 sm:px-12 py-12 sm:pt-16 rounded-2xl">
          <div className="text-center mb-10 sm:mb-13 md:mb-15 lg:mb-13 space-y-5 sm:space-y-6">
            <m.h2
              {...fadeUp(0.5)}
              className="font-manrope font-bold text-xl min-[400px]:text-2xl sm:text-3xl lg:text-4xl leading-tight text-secondary"
            >
              Get in Touch
            </m.h2>

            <m.p
              {...fadeUp(0.6)}
              className="text-sm text-secondary/80 max-w-md lg:max-w-lg"
            >
              Complete the form below and a senior advisor will contact you
              within 4 business days.
            </m.p>
          </div>

          <form
            ref={formRef}
            onInput={handleInput}
            onSubmit={sendMessage}
            className="flex flex-col space-y-4 w-full"
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-9">
              <m.div {...fadeUp(0.3)} className="flex flex-col flex-1 mb-3">
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
              </m.div>

              <m.div {...fadeUp(0.4)} className="flex flex-col flex-1 mb-4">
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
              </m.div>
            </div>
            <m.div {...fadeUp(0.5)}>
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
            </m.div>

            {/* Turnstile div */}
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
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center flex-1 w-full lg:col-span-1 bg-surface-highlight dark:bg-surface-highlight/70 px-5 sm:px-12 py-12 sm:pt-16 lg:pt-16 lg:pb-20 rounded-2xl max-h-fit">
          <div className="text-center lg:text-left mb-8 sm:mb-9">
            <m.h3
              {...fadeUp(0.4)}
              className="font-manrope font-bold text-xl min-[400px]:text-2xl leading-tight text-secondary"
            >
              Direct Contact
            </m.h3>
          </div>

          <ul className="text-sm text-secondary/80 space-y-4 lg::w-full">
            <m.li
              {...fadeUp(0.5)}
              className="flex gap-3 justify-start items-center"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 dark:bg-primary/8 flex items-center justify-center text-primary">
                <Mail className="w-5 h-5" />
              </div>
              <a
                href="mailto:financialatelier.support@gmail.com"
                className="text-secondary/80 text-[0.8rem] md:text-[0.85rem] font-manrope font-bold hover:text-primary transition-colors"
              >
                financialatelier.support@gmail.com
              </a>
            </m.li>

            <m.li
              {...fadeUp(0.6)}
              className="flex gap-3 justify-start items-center"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 dark:bg-primary/8 flex items-center justify-center text-primary">
                <SiX className="w-5 h-5" />
              </div>
              <a
                href="https://x.com/rahimdeveloper"
                rel="noopener noreferrer"
                target="_blank"
                className="text-secondary/80 text-[0.8rem] md:text-[0.85rem] font-manrope font-bold hover:text-primary transition-colors"
              >
                @RahimDeveloper
              </a>
            </m.li>

            <m.li
              {...fadeUp(0.5)}
              className="flex gap-3 justify-start items-center"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 dark:bg-primary/8 flex items-center justify-center text-primary">
                <FaLinkedin className="w-5 h-5" />
              </div>
              <a
                href="https://www.linkedin.com/in/rahimdeveloper"
                rel="noopener noreferrer"
                target="_blank"
                className="text-secondary/80 text-[0.8rem] md:text-[0.85rem] font-manrope font-bold hover:text-primary transition-colors"
              >
                linkedin.com/in/rahimdeveloper
              </a>
            </m.li>
          </ul>
        </div>
      </section>
    </Boilerplate>
  );
}
