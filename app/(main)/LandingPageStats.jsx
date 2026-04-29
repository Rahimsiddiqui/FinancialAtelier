"use client";

// Third party imports
import { useEffect, useRef, useState } from "react";
import CountUp from "@/components/CountUp";

export default function LandingPageStats() {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const el = statsRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="mx-auto max-w-md md:max-w-2xl lg:max-w-6xl px-4 text-center sm:pt-5 lg:pt-7 lg:px-15 xl:px-0">
      <p className="w-full bg-border h-px"></p>
      <ul
        ref={statsRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 sm:mt-12 lg:mt-16"
      >
        <li className="text-secondary py-2 px-4 flex flex-col items-center justify-center">
          <span className="font-manrope text-4xl lg:text-5xl text-primary font-extrabold leading-widest">
            <CountUp
              end={120000}
              format="compact"
              decimals={0}
              play={statsVisible}
              suffix="+"
            />
          </span>
          <span className="text-sm text-secondary lg:text-base font-bold mt-1.5 lg:mt-4">
            Happy Users
          </span>
        </li>

        <li className="text-secondary py-2 px-4 flex flex-col items-center justify-center">
          <span className="font-manrope text-4xl lg:text-5xl text-primary font-extrabold leading-widest">
            <CountUp
              end={522000000}
              format="compactCurrency"
              decimals={0}
              play={statsVisible}
              suffix="+"
            />
          </span>
          <span className="text-sm lg:text-base font-bold mt-1.5 lg:mt-4">
            Managed Assets
          </span>
        </li>

        <li className="text-secondary py-2 px-4 flex flex-col items-center justify-center sm:col-span-2 sm:mt-2 md:col-span-1 md:mt-0">
          <span className="font-manrope text-4xl lg:text-5xl text-primary font-extrabold leading-widest">
            <CountUp
              end={91.7}
              format="percent"
              decimals={1}
              play={statsVisible}
              suffix="%"
            />
          </span>
          <span className="text-sm lg:text-base font-bold mt-1.5 lg:mt-4">
            User Retention
          </span>
        </li>
      </ul>
    </section>
  );
}
