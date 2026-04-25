"use client";

import { m } from "framer-motion";

export default function FadeUp({
  children,
  className,
  delay = 0,
  as = "div",
  initial = { opacity: 0, y: 40 },
  whileInView = { opacity: 1, y: 0 },
  viewport = { once: true },
  transition = { duration: 0.6, ease: "easeOut" },
}) {
  const Component = m[as];

  return (
    <Component
      className={className}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={{ ...transition, delay }}
    >
      {children}
    </Component>
  );
}
